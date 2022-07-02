import React, { useState } from "react";
import "./ContactMe.css";

import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import toast from "react-hot-toast";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contactMessage !== "") {
      await addDoc(collection(db, "messages"), {
        name,
        surname,
        email,
        phoneNumber,
        contactMessage,
      });
      toast.success(
        "I have received your message, I will reply as soon as possible."
      );
    } else {
      toast.error("lütfen mesajınızı giriniz");
    }
  };

  return (
    <main className="contact-container  p-5">
      <Container>
        <Row className="text-center  ">
          <p className="m-3 fs-1">CONTACT ME</p>
        </Row>
        <Col sm={12} md={12} lg={6} className="mx-auto bg-secondary   rounded">
          <Row className="mx-auto">
            <Row
              style={{
                display: "grid",
                alignItems: "center",
                minHeight: "50vh",
              }}
              className="mx-auto"
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Row className="mb-3 mt-5">
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col className="col-8">
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Col>
                    <Col className="col-4">
                      <Form.Control
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
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
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                  />
                  <Row className="mx-auto mt-5 col-6 ">
                    <Col className=" text-center">
                      <Button
                        disabled={!contactMessage || !email}
                        variant="outline-dark"
                        className="mb-5"
                        type="submit"
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
