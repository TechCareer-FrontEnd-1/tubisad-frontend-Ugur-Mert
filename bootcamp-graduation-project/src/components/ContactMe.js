import React from "react";
import "./ContactMe.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function ContactMe() {
  return (
    <main className="contact-container p-5">
      <Container>
        <Row className="text-center   ">
          <p className="m-3 fs-1">CONTACT ME</p>
        </Row>
        <Col className="mx-auto col-6 bg-secondary  rounded">
          <Row className="mx-auto">
            <Row
              style={{
                display: "grid",
                alignItems: "center",
                minHeight: "50vh",
              }}
            >
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Row className="mb-3">
                    <Col>
                      <Form.Control type="text" placeholder="Name" />
                    </Col>
                    <Col>
                      <Form.Control type="text" placeholder="Surname" />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col className="col-8">
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Col>
                    <Col className="col-4">
                      <Form.Control type="number" placeholder="Phone Number" />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your Message"
                  />
                </Form.Group>
              </Form>
            </Row>
          </Row>
          <Row className="mx-auto col-6 ">
            <Col className=" text-center">
              <Button variant="outline-dark" className="mb-5">
                Send
              </Button>
            </Col>
          </Row>
        </Col>
      </Container>
    </main>
  );
}
