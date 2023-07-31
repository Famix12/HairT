import React from "react";
import Logo from "../assets/Logo.svg";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarM(props) {

const navstyle  = {
    color : 'white'

}
    return (
    <Navbar expand="lg" className="nav nav-container">
            <Navbar.Brand>
            <img
            src={Logo}
            className="nav-img"
            alt="logo"
            />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link style={navstyle} href="/">Home</Nav.Link>
            <Nav.Link style={navstyle} href="/login">Login</Nav.Link>
            <Nav.Link style={navstyle} href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}





export default NavbarM;