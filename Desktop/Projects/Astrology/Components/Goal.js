import React, { Component } from "react";
import { Container, Card, Image, Row } from "react-bootstrap";
import Icon from "./thumb.svg";

class Goal extends Component {
  render() {
    return (
      <Container fluid className="info">
        <h2 className="text-general text-center pt-5 ">Моя ціль</h2>
        <Card
          className="text-center"
          style={{ background: "transparent", border: "unset" }}
        >
          <Row className="align-items-center flex-column">
            <Card.Body className="col-lg-6 mt-5 align-items-center flex-column">
              <Card.Text className="info-text">
                Своєю місією бачу - нести ясність людям в будь-яких питаннях,
                щоб після спілкування зі мною у них з’являлася енергія на нові
                дії. Моя задача : перетворювати складне і заплутане в легке і
                зрозуміле.
              </Card.Text>
            </Card.Body>
          </Row>
        </Card>
        <Card
          className="text-center"
          style={{ background: "transparent", border: "unset" }}
        >
          <Row className="align-items-center flex-column">
            <Card.Body className="col-lg-6 mt-5 align-items-center flex-column">
              <Card.Text className="info-text">
                Пролити світло, в якій сфері лежать ваші гроші та допомогти вам
                побачити нові способи збільшення доходів.
              </Card.Text>
            </Card.Body>
          </Row>
        </Card>
        <Card
          className="text-center"
          style={{ background: "transparent", border: "unset", color: "wheat" }}
        >
          <Image src={Icon} height="30" width="30" className="col-12 mt-5" />
          <Row className="align-items-center flex-column">
            <Card.Body className="col-lg-6 mt-5 align-items-center flex-column">
              <Card.Text className="goal-h3">
                Які внутрішні блоки та ствердження не дають заробляти достатньо
                грошей для забезпечення того рівня життя, який ви хочете.
              </Card.Text>
            </Card.Body>
          </Row>
        </Card>
        <Card
          className="text-center"
          style={{ background: "transparent", border: "unset", color: "wheat" }}
        >
          <Image src={Icon} height="30" width="30" className="col-12 mt-5" />
          <Row className="align-items-center flex-column">
            <Card.Body className="col-lg-6 mt-5 align-items-center flex-column">
              <Card.Text className="goal-h3">
                Дати вам покрокову стратегію, як правильно розприділяти бюджет,
                щоб купувати те, що ви хочете і не економити на собі -
                розроблена Робертом Кійосакі.
              </Card.Text>
            </Card.Body>
          </Row>
        </Card>
        <Card
          className="text-center"
          style={{ background: "transparent", border: "unset", color: "wheat" }}
        >
          <Image src={Icon} height="30" width="30" className="col-12 mt-5" />
          <Row className="align-items-center flex-column">
            <Card.Body className="col-lg-6 mt-5 align-items-center flex-column">
              <Card.Text className="goal-h3">
                Дати вам ключ до розуміння, чому ви не можете досягти своїх
                фінансових цілей, і яка вигода прихована за цим.
              </Card.Text>
            </Card.Body>
          </Row>
        </Card>
        <Card
          className="text-center"
          style={{ background: "transparent", border: "unset", color: "wheat" }}
        >
          <Image src={Icon} height="30" width="30" className="col-12 mt-5" />
          <Row className="align-items-center flex-column">
            <Card.Body className="col-lg-6 mt-5 align-items-center flex-column">
              <Card.Text className="goal-h3">
                Поділитися технікою примноження фінансів, звільнення від боргів,
                яка допомагає вийти за межі фінансової стелі.
              </Card.Text>
            </Card.Body>
          </Row>
        </Card>
      </Container>
    );
  }
}

export default Goal;
