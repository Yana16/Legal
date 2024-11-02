import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import Image1 from "./images/1-1-1.png";
import Image2 from "./images/general-1-2.png";
import Background from "./images/background.jpg";

function General() {
  return (
    <Container
      fluid
      id="general"
      className="text-center justify-content-center"
    >
      <div id="bg">
        <img src={Background} class="img-fluid" alt="pic" />
      </div>
      <Row className="justify-content-center pb-5">
        <div class="row justify-content-center new">
          <div id="foto1">
            <img
              src={Image1}
              class="img-fluid"
              alt="pic"
              height="30%"
              width="30%"
            />
          </div>
          <div id="foto2">
            <img
              src={Image2}
              class="img-fluid "
              alt="pic"
              height="30%"
              width="30%"
            />
          </div>
        </div>
        <div class="row justify-content-center align-items-center co-lg-12 col-md-12 ">
          <div class="text">
            <h1 class="text-title">Ілона Ковпан</h1>
            <h2 className="text_h2">Матриця долі та психологія</h2>
            <h2 className="col-lg-8 d-inline-flex justify-content-center subText_h2">
              {" "}
              Допоможу розібратися в собі, прибрати блоки і піти в ріст. <br />{" "}
              А також знайти відповіді на ваші питання
            </h2>
          </div>
        </div>
        <Row className="col-lg-4 col-md-6 col-sm-6 mx-auto mybutton">
          <Button
            className="my-btn btn btn-primary text-uppercase"
            type="button"
          >
            Отримати консультацію
          </Button>
        </Row>
      </Row>
    </Container>
  );
}

export default General;
