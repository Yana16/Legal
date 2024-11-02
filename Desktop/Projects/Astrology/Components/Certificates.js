import React, { Component } from "react";
import { Container, Row, Image } from "react-bootstrap";
import Sertificate1 from "./images/Sertificate1.jpg";
import Sertificate2 from "./images/Sertificate2.jpg";

class Certificates extends Component {
  render() {
    return (
      <Container fluid className="certificates pt-5">
        <h2 className="text-general text-center pt-5 mb-5 aboutme">
          Сертифікати
        </h2>
        <Row className="justify-content-center">
          <div className="col-lg-6  justify-content-center">
            <Image
              src={Sertificate1}
              // height={800}
              // width={600}
              className="img-fluid about-img rounded mb-sm-5 shadow-sm p-3 mb-5 rounded shadow-lg p-3 mb-5"
            />
            <Image
              src={Sertificate2}
              // height={800}
              // width={600}
              className="img-fluid about-img rounded mb-sm-5 shadow-sm p-3 mb-5 rounded shadow-lg p-3 mb-5"
            />
          </div>
        </Row>
      </Container>
    );
  }
}

export default Certificates;
