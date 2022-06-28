import React from "react";
import "./Home.css";

import { GiCrossedAxes } from "react-icons/gi";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <section className="bg-dark section-footer ">
        <Container>
          <Row className="text-center text-light align-items-center ">
            <Col className="m-3 ">
              <Col>
                <p>Get in Touch</p>
              </Col>
              <Col className="d-flex justify-content-around">
                <Button
                  href="https://www.linkedin.com/in/uğur-mert-özder/"
                  target="_blank"
                  rel="noreferrer"
                  variant="outline-light"
                  size="lg"
                >
                  <AiOutlineLinkedin />
                </Button>
                <Button
                  href="https://github.com/Ugur-Mert"
                  target="_blank"
                  rel="noreferrer"
                  variant="outline-light"
                  size="lg"
                >
                  <AiOutlineGithub />
                </Button>
              </Col>
            </Col>
            <Col className="text-center">
              <p style={{ fontSize: "4rem" }}>
                <GiCrossedAxes />
              </p>
            </Col>
            <Col>
              <Col className="m-3 ">
                <p>HTML5</p>
                <p>CSS3</p>
                <p>JavaScript</p>
                <p>J Query</p>
                <p>React</p>
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  );
}
