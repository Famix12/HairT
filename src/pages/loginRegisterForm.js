import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Nav, Modal } from "react-bootstrap";

import "../index.css";

const errMsg = (msg) => {
  return (
    <div
      className="errMsg"
      style={{ color: "#800000", height: 0.5, border: "1px solid #800000" }}
    >
      {msg}
      {/* <hr style={{ color: "#800000", height: 0.5, borderColor: "#800000" }} /> */}
    </div>
  );
};

function LoginForm() {
  // modal useState
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    /*
      - Handle registration logic here using email, password, and confirmPassword []
      - Handle login fields validation []
      - Forget password []
    */ 
    const Logindata = {
      email: email,
      password: password,
    };

    console.log(Logindata);
  };

  return (
    <>
      <Container className="loginContainer">
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h1 className="LRHeader fadeInDown">Login</h1>
            <Form className="LRform fadeInUp" onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Nav.Link onClick={handleShow} href="">
                Forget your password ?
              </Nav.Link>

              <Nav.Link href="/register">
                Don't have an account? Register here.
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
                required
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
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [DOB, setDOB] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    /*
      - Handle registration logic here using email, password, and confirmPassword []
      - Handle fields validation []

    */

    if (password !== confirmPassword) {
      errMsg("Password does not match");
    } else {
      const Registerdata = {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        DOB: new Date(DOB),
      };

      // window.location.

      console.log(Registerdata);
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
                required
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="DOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="DOB"
                placeholder="Date of Birth"
                onChange={(e) => setDOB(e.target.value)}
              />
            </Form.Group>

            <Nav.Link href="/login">
              Already have an account? Login here.
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
