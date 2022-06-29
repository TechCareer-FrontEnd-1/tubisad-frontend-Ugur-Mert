import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Col,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

import { Link } from "react-router-dom";

import { GiCrossedAxes } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

const BootstrapNavbar = () => {
  return (
    <Navbar className="opacity-75 fixed-top fs-5" bg="dark" expand="lg">
      <Container>
        <p className="text-light me-3 ">
          <GiCrossedAxes />
        </p>
        <Navbar.Toggle aria-controls="navbarScroll " />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" me-auto my-2 text-center  my-lg-0"
            style={{
              maxHeight: "100px",
            }}
            navbarScroll
          >
            <Col className="me-3  ">
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
            <Col className="me-3 col-lg-5 col-md-12 text-center text-light ">
              <p>
                <Link
                  style={{
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  to="about"
                >
                  About Me
                </Link>
              </p>
            </Col>

            <Col className="me-3 text-center text-light nav-links">
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

          <p className="text-white fs-4">
            {" "}
            <CgProfile />{" "}
          </p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BootstrapNavbar;
