import React from "react";
import { Row, Container, Col } from "../components/Grid";
import Profile from "../components/Profile";
import Image from "../components/assets/About/about.jpg";
import "./style.css";


function About() {
  return (
      <>
        <Profile backgroundImage={Image}>
        <h1>Tycee Gamez</h1>
        <h2>Cali Creations</h2>
        </Profile>
     

      <Container>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Page!</h1>
          </Col>
        </Row>
        </Container>

        <Container>
        <Row>
          <Col size="md-12">
            <p>“quote"</p>
            <p>
              My name is Tycee
            </p>
            <p>
              On a personal note..
            </p>
            <Row>
            </Row>
          </Col>
        </Row>
      </Container>
   
    </>
  );
}

export default About;
