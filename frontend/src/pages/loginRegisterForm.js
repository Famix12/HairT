import React, { useState,  } from "react";
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

  const navigate = useNavigate()
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setErr({})
    setErr(LoginValidator(LoginValues));

    if(err.email !== '' || err.password !== '') {
      console.log("error occurred", err)
    }else{
     
      const _api = 'http://localhost:8081/login';

      axios.post(_api, LoginValues ).then(response => {
        if(response.data === 'Success'){
          navigate('/home')
        }else {

         global.loginerr = response.data[0]

        }
      }).catch(err => console.log(err));

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
                {global.loginerr && <span className="text-danger">{global.loginerr}<br/></span>}
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
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter your Email :</Form.Label>
              <Form.Control
                type="email"
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
          <Button type="submit" variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function RegisterForm() {

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const navigate = useNavigate()
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
    setErr({})
    setErr(RegisterValidator(RegisterValues));

    if( err.username !== '' || err.email !== '' || err.password !== '' || err.DOB !== '') {
      console.log("error occurred", err)
    }else{
     
      const _api = 'http://localhost:8081/register';

      axios.post(_api, RegisterValues ).then(response => {
        navigate('/')
      }).catch(err => console.log(err));

      // console.log("no error occurred")
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
                <Form.Label className="text-danger">{err.username}</Form.Label>
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
                <Form.Label className="text-danger">{err.password}</Form.Label>
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
                <Form.Label className="text-danger">
                  {err.DOB}
                </Form.Label>
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
