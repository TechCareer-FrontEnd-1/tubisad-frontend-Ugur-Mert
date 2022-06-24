import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

import { GiCrossedAxes } from "react-icons/gi";

const BootstrapNavbar = () => {
  return (
    <Navbar className="opacity-75 fixed-top" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-light " href="#">
          <GiCrossedAxes />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-light " href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="text-light " href="#abilities">
              Abilities
            </Nav.Link>
            <Nav.Link className="text-light " href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="text-light " href="#action2">
              Contact Me
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BootstrapNavbar;
