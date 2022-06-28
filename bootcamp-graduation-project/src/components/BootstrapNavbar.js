import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Col,
  Row,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import { GiCrossedAxes } from "react-icons/gi";

const BootstrapNavbar = () => {
  return (
    <Navbar className="opacity-75 fixed-top fs-5" bg="dark" expand="lg">
      <Container>
        <p className="text-light me-3 ">
          <GiCrossedAxes />
        </p>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" me-auto my-2 text-center  my-lg-0"
            style={{
              maxHeight: "100px",
            }}
            navbarScroll
          >
            <Col className="me-3 nav-links">
              <p>
                <Link
                  style={{
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  to="/"
                >
                  Home
                </Link>
              </p>
            </Col>
            <Col className="me-3 text-light nav-links">
              <p>
                <a
                  href="#abilities"
                  style={{
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Abilities
                </a>
              </p>
            </Col>
            <Col className="me-3 text-light nav-links">
              <p>
                <a
                  href="#projects"
                  style={{
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  Projects
                </a>
              </p>
            </Col>
            <Col className="me-3 text-light nav-links">
              <p>
                <Link
                  style={{
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  to="contact"
                >
                  Contact
                </Link>
              </p>
            </Col>
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
