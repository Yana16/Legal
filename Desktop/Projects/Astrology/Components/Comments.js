import React, { useState } from "react";
import { Form, Row, Button, Container } from "react-bootstrap";

export default function Comments() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:4000/", {
      method: "post",
      body: JSON.stringify({ name, comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json;
    localStorage.setItem("users", JSON.stringify(result));
    console.log(result);
  };

  return (
    <Container fluid className="form pt-5 pb-5">
      <Row className="d-flex justify-content-center">
        <Form onSubmit={onSubmit} className="col-lg-5 ">
          <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>Ім'я</Form.Label>
            <Form.Control
              className="form-control-bg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder=""
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserComment">
            <Form.Label>Коментар</Form.Label>
            <Form.Control
              className="form-control-bg"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              type="text"
              placeholder=""
            />
          </Form.Group>

          <Row className="col-lg-12 col-md-12 col-sm-12 mx-auto mybutton mt-5 mb-5">
            <Button
              className="my-btn btn btn-primary text-uppercase"
              type="submit"
            >
              Відправити відгук
            </Button>
          </Row>
        </Form>
      </Row>
    </Container>
  );
}
