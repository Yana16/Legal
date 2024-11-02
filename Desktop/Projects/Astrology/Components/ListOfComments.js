import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Container } from "react-bootstrap";

export default function ListOfComments() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/getUsers")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid className="comments pb-5" id="blog">
      <h2 className="text-general text-center pt-5 ">Відгуки</h2>
      <Row className="justify-content-around">
        {users.map((user) => {
          return (
            <Card className="m-4 col-lg-3 card-bg">
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text className="card-text1">{user.comment}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
}
