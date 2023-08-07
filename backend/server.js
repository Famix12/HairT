require('dotenv').config()
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const slat = 10;

const app = express();
app.use(cors({
  origin : ["http://localhost:3000"],
  methods : ["GET", "POST"],
  credentials : true
}));
app.use(express.json());
app.use(cookieParser())


const db = mysql.createConnection(
  'mysql://p2ahpc95mazbpsowp5vd:pscale_pw_bph2dgIoKyIUtzS7txuw5YVBmcPENVtKn6dwc9lixf5@aws.connect.psdb.cloud/hairt?ssl={"rejectUnauthorized":true}'
);


const verifyUser = (req, res, next) => {
  // console.log(req.cookies)
  const check_token = req.cookies.token;
  if(!check_token){
    return res.json("not authorized")
  }else {
    jwt.verify(check_token, process.env.PRIVATE_KEY, (err, decoded) =>{
      if(err) {
        return res.json(err)
    } else {
        res.username = decoded.username;
        next();
    }
    })
  }
}


app.get("/",  verifyUser ,(req, res) => {
    return res.json({status : "Success", username :req.username})
});


app.post("/register", (req, res) => {
  
  bcrypt.hash(req.body.password.toString(), slat, (err, hash) => {
    if (err) return res.json(err);
    values = [
      req.body.username,
      req.body.email,
      hash,
      req.body.DOB,
    ]
    // '${req.body.username}', '${req.body.email}', '${req.body.password}', '${req.body.DOB}'
    const sql = `INSERT INTO users (username, email, password, dob) VALUES(?);`

    db.query(sql, [values] ,(err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    })
  })
});


app.post("/login", (req, res) => {
  // req.value = [
  //   req.body.email,
  //   req.body.password
  // ]
  const sql = "SELECT * FROM users WHERE `email` = ? ;"

  db.query(sql, [req.body.email] ,(err, data) => {
    if (err) return res.json(err);
    if(data.length > 0) {
      bcrypt.compare(req.body.password.toString(), data[0].password, (err, response)=>{
        if (err) return res.json(err);
        if (response){

          /*
          Data schema :
            {
              id: 12,
              username: '',
              email: '',
              password: '',
              dob: 
            }
          
            // console.log(data)
            */

          const email = data[0].email
          const token = jwt.sign({email}, process.env.PRIVATE_KEY, {expiresIn : '1d'});
          res.cookie('token', token);
          // module.exports = token;
          return res.json({Success :"Success", token : token});
        }else {
          return res.json({err :'Wrong password'})
        }
      })
    } 
    else {
      return res.json({err :"No email existed !"})
    };
  })
});

app.post('/profile', (req, res) => {
  try{
    // console.log(req.body[0])
  const decoded = jwt.verify(req.body[0], process.env.PRIVATE_KEY);
  // console.log(decoded);

  const sql = `SELECT username, email, dob FROM users WHERE email = '${decoded.email}';`

  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
  // return res.json(decoded.email);
  }
  catch(e){
    console.log(e)
    return res.json(e.message);
  }
})


app.get('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({success : "Success"})
})


app.listen(8081, ()=>{
    console.log('Lstening on port...');
})
