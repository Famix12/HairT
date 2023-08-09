import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Nav, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Prev } from "react-bootstrap/esm/PageItem";
import { LoginValidator, RegisterValidator } from "../components/validators.js";
import axios from "axios";
// import CreateNewUser from "../config/db"
import "../index.css";

function LoginForm() {
  // modal useState
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const [err, setErr] = useState({});

  const [LoginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const HandleInput = (event) => {
    setLoginValues((Prev) => ({
      ...Prev,
      [event.target.name]: [event.target.value],
    }));
  };

  // var loginerrLength


  const handleResetPass = (event) => {
    // event.preventDefault();
    console.log(event.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    // setErr({})
    setErr(LoginValidator(LoginValues));

    if (err.email !== "" || err.password !== "") {
      console.log("error occurred", err);
    } else {
      const _api = "http://localhost:8081/login";

      axios.post(_api, LoginValues).then((response) => {
          
          if (response.data.Success === "Success") {
            
            // global.UserEmail = LoginValues.email
            // console.log("/home")
            // window.location.reload(true);
            // global.userToken = response.data.token
            sessionStorage.setItem("userToken", `${response.data.token}`)
            navigate("/home");

          } else {
            console.log(response.data.err)
            // console.log((response.data.err).length)
            
            global.loginerr = response.data.err;
            global.loginerrLength  = response.data.err;
            global.loginerrLength = global.loginerrLength.length
            // console.log(global.loginerr, loginerrLength > 1)
            // console.log(loginerrLength) --> 14
            // if(typeof(response.data.err) != "undefined"){
            // }

           }
          
        }).catch((err) => console.log("err login :",err));

      // console.log("no error occurred")
    }
  };

  return (
    <>
      <Container className="loginContainer">
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h1 className="LRHeader fadeInDown">Login</h1>
            <Form className="LRform fadeInUp" onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                { global.loginerrLength > 1  && (<p className="text-danger">{global.loginerr}</p>)}
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  // value={email}
                  onChange={HandleInput}
                />
                {err.email && (
                  <Form.Label className="text-danger">{err.email}</Form.Label>
                )}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  // value={password}
                  onChange={HandleInput}
                />
                {err.password && (
                  <Form.Label className="text-danger">
                    {err.password}
                  </Form.Label>
                )}
              </Form.Group>

              <Nav.Link onClick={handleShow} href="">
                Forget your password ?
              </Nav.Link>

              <Nav.Link href="">
                <Link to={"/register"} className="nav-link">
                  Don't have an account? Register here.
                </Link>
              </Nav.Link>

              <Button className="LRbtn" variant="custom" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reset your password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleResetPass}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter your Email :</Form.Label>
              <Form.Control
                type="email"
                name="R-Email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleResetPass}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function RegisterForm() {
  

  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const [err, setErr] = useState({});

  const [RegisterValues, setRegisterValues] = useState({
    username: "",
    email: "",
    password: "",
    DOB: "",
  });

  const HandleInput = (event) => {
    setRegisterValues((Prev) => ({
      ...Prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setErr({})
    setErr(RegisterValidator(RegisterValues));

    if (
      err.username === "" &&
      err.email === "" &&
      err.password === "" &&
      err.DOB === ""
    ) {
      const _api = "http://localhost:8081/register";

      axios
        .post(_api, RegisterValues)
        .then((response) => {
          navigate("/");
        })
        .catch((err) => console.log("err1",err));
    } else {
      console.log("error occurred", err);
    }
  };

  return (
    <Container className="registerContainer">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1 className="LRHeader fadeInDown">Register</h1>
          <Form className="LRform fadeInUp" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                name="username"
                // value={LoginValues.username}
                onChange={HandleInput}
              />
              {err.username && (
                <Form.Label className="text-danger fadeInUp">{err.username}</Form.Label>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                // value={email}
                onChange={HandleInput}
              />
              {err.email && (
                <Form.Label className="text-danger fadeInUp">{err.email}</Form.Label>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                // value={password}
                onChange={HandleInput}
              />
              {err.password && (
                <Form.Label className="text-danger fadeInUp">{err.password}</Form.Label>
              )}
            </Form.Group>

            <Form.Group controlId="DOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="DOB"
                placeholder="Date of Birth"
                onChange={HandleInput}
              />
              {err.DOB && (
                <Form.Label className="text-danger fadeInUp">{err.DOB}</Form.Label>
              )}
            </Form.Group>

            <Nav.Link href="">
              <Link to={"/"} className="nav-link">
                Already have an account? Login here.
              </Link>
            </Nav.Link>
            <Button className="LRbtn" variant="custom" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export { LoginForm, RegisterForm };
