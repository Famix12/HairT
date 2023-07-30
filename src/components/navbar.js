import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarM(props) {

const navstyle  = {
    color : 'white'

}
    return (
    <Navbar expand="lg" className="nav nav-container">
            <img
            src={Logo}
            className="nav-img "
            alt="logo"
            />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link style={navstyle} href="#">Login</Nav.Link>
            <Nav.Link style={navstyle} href="#">Rigester</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}





export default NavbarM;