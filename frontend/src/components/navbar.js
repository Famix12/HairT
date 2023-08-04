import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarM(props) {
  //// Update the userStatus when user logedin  "let useState(true);"
  // you can use local session instead of useState !!

  const [userStatus, setUserStatus] = useState(false);

  const Logout = () => {
    return useState(false);
  };

  const CheckUserStatus = () => {
    if (userStatus === false) {
      // Logged out :
      return (
        <>
          <Nav.Link href="">
            <Link
              to={"/"}
              style={{ color: "var(--sec)", textDecoration: "none" }}
            >
              Login
            </Link>
          </Nav.Link>
          <Nav.Link href="">
            <Link
              to={"/register"}
              style={{ color: "var(--sec)", textDecoration: "none" }}
            >
              Register
            </Link>
          </Nav.Link>
        </>
      );
    } else {
      // Logged in :
      return (
        <>
          <NavDropdown
            className="collasible-nav-dropdown"
            title="settings"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item className="" href="#action/account">
              <AiOutlineUser /> Account
            </NavDropdown.Item>
            <NavDropdown.Item className="" href="/" onChange={Logout()}>
              <AiOutlineLogout /> Logout
            </NavDropdown.Item>
          </NavDropdown>
        </>
      );
    }
  };

  return (
    <Navbar expand="lg" className="nav nav-container">
      <Navbar.Brand>
        <img src={Logo} className="nav-img" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="">
            <Link
              to={"/home"}
              style={{ color: "var(--sec)", textDecoration: "none" }}
            >
              Home
            </Link>
          </Nav.Link>
          {CheckUserStatus()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarM;
