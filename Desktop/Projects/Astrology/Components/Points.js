import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Points extends Component {
  render() {
    return (
      <Container fluid className="purpose pb-5">
        <h2 class="text-center text-uppercase pb-5 pt-5 aboutme">
          Мои векторы работы
        </h2>

        <Row className="text-center d-flex justify-content-around">
          <Col lg={4}>
            <i className="number">01</i>
            <p className="purpose_p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              accusamus.
            </p>
            <i className="number">02</i>
            <p className="purpose_p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              accusamus.
            </p>
            <i className="number">03</i>
            <p className="purpose_p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              accusamus.
            </p>
          </Col>
          <Col lg={4}>
            <i className="number">04</i>
            <p className="purpose_p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              accusamus.
            </p>
            <i className="number">05</i>
            <p className="purpose_p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              accusamus.
            </p>
            <i className="number">06</i>
            <p className="purpose_p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              accusamus.
            </p>
          </Col>
        </Row>

        {/* <Row className="justify-content-center">
          <Row className="col-lg-6 col-sm-12 text-center block">
            <i className="number">01</i>
            <p className="purpose_p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              accusamus.
            </p>
          </Row>
          <Row className="col-lg-6 col-sm-12 text-center block">
            <i className="number">02</i>
            <p className="purpose_p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              accusamus.
            </p>
          </Row>
          <Row className="col-lg-6 col-sm-12 text-center block">
            <i className="number">03</i>
            <p className="purpose_p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              accusamus.
            </p>
          </Row>
          <Row className="col-lg-6 col-sm-12 text-center block">
            <i className="number">04</i>
            <p className="purpose_p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              accusamus.
            </p>
          </Row>
          <Row className="col-lg-6 col-sm-12 text-center block">
            <i className="number">05</i>
            <p className="purpose_p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              accusamus.
            </p>
          </Row>
          <Row className="col-lg-6 col-sm-12 text-center block">
            <i className="number">06</i>
            <p className="purpose_p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              accusamus.
            </p>
          </Row>
        </Row> */}
      </Container>
    );
  }
}

export default Points;
