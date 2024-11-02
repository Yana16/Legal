import React, { Component } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Telegram from "./telegram.svg";
import Instagram from "./instagram.svg";
import Calendar from "./calendar.svg";

class Contacts extends Component {
  render() {
    return (
      <Container fluid className="contacts" id="contact">
        <Row>
          <h2 class="text-center text-uppercase pt-5 pb-5 aboutme">
            {" "}
            Контакти
          </h2>
        </Row>
        <Row className="col-12 pb-5 d-flex justify-content-center">
          <Col lg="2" className="text-center">
            <a href="https://t.me/iamilonakovpan">
              {" "}
              <Image src={Telegram} height="30" width="30" />
            </a>
          </Col>
          <Col lg="2" className="text-center">
            <Image src={Instagram} height="30" width="30" />
          </Col>
          <Col lg="2" className="text-center">
            <Image src={Calendar} height="30" width="30" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contacts;
