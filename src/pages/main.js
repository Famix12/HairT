import React from "react";
import Logo from "../assets/Logo.svg";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";

function MainPage() {
  return (
      <Container>
        <div className="main-page">
          <div className="main-p1">
            <img src={Logo} className="p1-img fadeInRightBig" alt="logo" />
            <h1 className="p1-heading fadeInLeftBig">Hair Treatment</h1>
          </div>

          <div className="main-p2 fadeInUp" >
            <h6 className="text-p2">
            Our app offers personalized hair treatment recommendations based on your unique
            hair type and needs, as well as expert tips and tutorials to help you achieve 
            your hair goals.
            </h6>

            <Button variant="custom" className="btn-p2">
              Start
            </Button>
          </div>
        </div>
      </Container>
  );
}

export default MainPage;