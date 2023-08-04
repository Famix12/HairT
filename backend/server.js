const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection(
  'mysql://p2ahpc95mazbpsowp5vd:pscale_pw_bph2dgIoKyIUtzS7txuw5YVBmcPENVtKn6dwc9lixf5@aws.connect.psdb.cloud/hairt?ssl={"rejectUnauthorized":true}'
);

app.get("/", (req, res) => {
    const sql = "SELECT * FROM users"
  db.query(sql, function (err, data) {
    if (err) return res.json(err);
    return res.json(data);

  });
});


app.post("/register", (req, res) => {
  req.value = [
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.DOB,
  ]
  const sql = `INSERT INTO users (username, email, password, dob) VALUES('${req.body.username}', '${req.body.email}', '${req.body.password}', '${req.body.DOB}');`

  
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
});


app.post("/login", (req, res) => {
  // req.value = [
  //   req.body.email,
  //   req.body.password
  // ]
  const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?;"

  
  db.query(sql, [req.body.email,req.body.password] ,(err, data) => {
    if (err) return res.json(err);
    if(data.length > 0) {
      return res.json("Success")
    } 
    else {
      return res.json(["Your password or email is invalid"])
    };
  })
});


// app.get("/", (req, res) => {


// })


app.listen(8081, ()=>{
    console.log('Lstening on port...');
})
