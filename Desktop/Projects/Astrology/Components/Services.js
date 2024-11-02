import React, { Component } from "react";
import { Container, Accordion, Row } from "react-bootstrap";

class Services extends Component {
  render() {
    return (
      <Container fluid className="service" id="price">
        <Row>
          <h2 class="text-center text-uppercase pt-5 pb-5 aboutme">
            Мої Послуги
          </h2>
        </Row>
        <Accordion
          defaultActiveKey="0"
          className="acc_text d-flex flex-column align-items-center justify-content-center"
        >
          <Accordion.Item eventKey="0" className="col-6 shadow-lg mb-5">
            <Accordion.Header>Розшифрування енергій</Accordion.Header>
            <Accordion.Body>
              Це твій енергетичний потрет .Допомагає розібратися з різними
              питаннями. (Детальніше)кнопка—>розгортається текст вниз: 1) Яку
              енергію ти несеш у світ 2) Як тебе бачить інші 3)Твій ресурс ,твоя
              сила 4) Основний набір якостей притаманних тобі від народження
              Важливо!: З цією енергією дуже важливо працювати ,оскільки мінус
              за нею веде : до відсутності контакту із собою ,ти втрачатимеш
              ресурсний стан ,тобі ніби чогось не вистачає не можеш зрозуміти
              чого ,а в плюсі ти відчуватимеш задоволення від життя
              перебуватимеш в балансі. Ціна: 399грн/8євро
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="col-6 shadow-lg mb-5">
            <Accordion.Header>Розшифровка призначення</Accordion.Header>
            <Accordion.Body>
              Задачі твоєї душі і кармічні борги . Описує задачі твого
              призначення. (Детальніше)кнопка—>розгортається текст вниз: 1.
              Перша ознака енергетичної пробоїни - відсутність грошей, фінанси
              витікають ,надовго не затримуються 2.Якщо є проблеми з професією
              або працевлаштуванням,ця енергія підкаже ,через яку професію
              потрібно себе реалізувати 3.Невирішенні програми минулих життів
              Важливо!: Опрацьовуючи енергії ти прибиратимеш перешкоди і
              впускатимеш грошовий потік ,він почне текти легко і вільно,
              фінанси приходитимуть у достатній кількості : ця енергія буде дана
              в плюсі як подарунок, якщо ти виконаєш своє 1-є призначення до 40
              років. Ціна: 1000грн/21 євро
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="col-6 shadow-lg mb-5">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="col-6 shadow-lg mb-5">
            <Accordion.Header>Accordion Item #4</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="col-6 shadow-lg mb-5">
            <Accordion.Header>Accordion Item #5</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="col-6 shadow-lg mb-5">
            <Accordion.Header>Accordion Item #6</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className="col-6 shadow-lg mb-5">
            <Accordion.Header>Accordion Item #7</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    );
  }
}

export default Services;
