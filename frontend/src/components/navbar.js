import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";

function NavbarM() {
  axios.defaults.withCredentials = true;
  const [auth, setAutuh] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:8081")
      .then((response) => {
        if (response.data.status === "Success") {
          setAutuh(true);
          console.log(response.data);
          setUsername(response.data.username);
          // window.location.reload();
          // location.reload(true)

          navigate("/home");
        } else {
          setAutuh(false);
          // global.loginerr = response.data[0];
        }
      })
      .catch((err) => console.log('useEffect', err));
  }, []);


  const HnadleLogout = () => {
    axios.get("http://localhost:8081/logout")
    .then(response=> {
      window.location.reload();
    }).catch((err) => console.log('HnadleLogout', err)); 
  }

  return (
    <>
      {auth ? (
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
              <NavDropdown
                className="collasible-nav-dropdown"
                title="settings"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item className="" href="/account">
                  <AiOutlineUser /> Account
                </NavDropdown.Item>
                <NavDropdown.Item  onClick={HnadleLogout}> 
                  <AiOutlineLogout /> Logout
                </NavDropdown.Item>
              </NavDropdown>

              {/* <Nav.Label>{username}</Nav.Label> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      ) : (
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </>
  );
}

export default NavbarM;
