import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import "./loginRegisterForm";
import "../index.css";

function Profile() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    dob: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .post("http://localhost:8081/profile", [
        sessionStorage.getItem("userToken"),
      ])
      .then((response) => {
        console.log();

        setIsLoading(false);
        setUserData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });

    // axios.post('https://www.ailabapi.com/api/portrait/effects/hairstyle-editor', ['../assets/download.png'])
    // .then(response => {
    //     console.log(response);

    // }).catch((error) => {
    //   console.log("err", error);

    // })
  }, []);

  if (isLoading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="sr-only"></span>
        </Spinner>
      </Container>
    );
  }

  if (!userData) {
    return <div>No user data found.</div>;
  }
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  return (
    <Container className="mt-5 fadeInUp">
      <Row>
        <Col style={{ color: "white" }}>
          <h2>User Profile</h2>
          <p>Username : {userData.username}</p>
          <p>Email : {userData.email}</p>
          <p>Date of birth : {formatDate(userData.dob)}</p>
          <Link to={"/home"}>
            {/* variant="custom" */}
            <Button className="btn-primery" type="">
              Back
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
