import React, { useState } from "react";
import "./ContactMe.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";

export default function ContactMe() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main className="contact-container  p-5">
      <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Email sent successfully!</Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <Col className="text-center ">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Col>
          </Modal.Footer>
        </Modal>
        <Row className="text-center  ">
          <p className="m-3 fs-1">CONTACT ME</p>
        </Row>
        <Col className="mx-auto col-6 bg-secondary   rounded">
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
                  <Row className="mb-3 mt-5">
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
                  <Row className="mx-auto mt-5 col-6 ">
                    <Col className=" text-center">
                      <Button
                        onClick={handleShow}
                        variant="outline-dark"
                        className="mb-5"
                      >
                        Send
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Row>
          </Row>
        </Col>
      </Container>
    </main>
  );
}
