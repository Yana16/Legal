import React, { Component } from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import logo from "./logo.png";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="md"
          id="header"
          className="fixed-top header justify-content-between shadow"
        >
          <Container>
            <NavbarBrand href="/">
              <img
                src={logo}
                height="50"
                width="50"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </NavbarBrand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="justify-content-center"
            >
              <Nav className="mr-auto">
                <Nav.Link href="/">Головна</Nav.Link>
                <Nav.Link href="#about">Про мене</Nav.Link>
                <Nav.Link href="#price">Послуги</Nav.Link>
                <Nav.Link href="#blog">Відгуки</Nav.Link>
                <Nav.Link href="#contact">Контакти</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
