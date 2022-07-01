import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Col, Row, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

import { Link } from "react-router-dom";

import { GiCrossedAxes } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../firebase";
import { logout as logoutHandle } from "../store/auth";
import { useNavigate } from "react-router-dom";

const BootstrapNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/", {
      replace: true,
    });
  };

  const [show, setShow] = useState(false);

  console.log(Date().toLocaleString());

  var currentDate = new Date();
  var currentHour = currentDate.getHours();
  var currentMinute = currentDate.getMinutes();

  return (
    <Navbar className="opacity-75 fixed-top fs-5" bg="dark" expand="lg">
      <Container>
        <p className="text-light me-3 ">
          <GiCrossedAxes />
        </p>
        <Navbar.Toggle aria-controls="navbarScroll " />
        <Navbar.Collapse id="navbarScroll" className=" text-center mx-auto ">
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
            <Col className="me-3 col-lg-5 text-center text-light ">
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

            <Col className="me-3 text-center text-light">
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
            <Col className="me-3 text-center text-light">
              <p>
                <FaRegClock onClick={() => setShow(!show)} />
              </p>
            </Col>
            <Col lg={5} className="me-3 text-center text-light ">
              {show ? (
                <p>
                  {currentHour} : {currentMinute}
                </p>
              ) : (
                ""
              )}
            </Col>
          </Nav>

          <Dropdown className="d-inline mx-2" autoClose="outside">
            <Dropdown.Toggle
              variant="outline-light"
              id="dropdown-autoclose-outside"
            >
              <CgProfile className=" fs-4" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {!user ? (
                <Row className="mx-auto text-center">
                  <Link
                    style={{
                      color: "black",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                    to="login"
                  >
                    Log In
                  </Link>
                </Row>
              ) : (
                <Row className="mx-auto text-center">
                  <Col>
                    <Link
                      style={{
                        color: "black",
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                      to="myaccount"
                    >
                      My account
                    </Link>
                  </Col>
                </Row>
              )}
              {!user ? (
                <Row className="mx-auto text-center">
                  <Link
                    style={{
                      color: "black",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                    to="register"
                  >
                    Register
                  </Link>
                </Row>
              ) : (
                <Row className="mx-auto text-center mt-2">
                  <Col>
                    <Button onClick={handleLogout} variant="outline-danger">
                      Log out
                    </Button>
                  </Col>
                </Row>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BootstrapNavbar;
