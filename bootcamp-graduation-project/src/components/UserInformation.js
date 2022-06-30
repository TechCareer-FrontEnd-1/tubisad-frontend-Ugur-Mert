import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useSelector } from "react-redux";

export default function UserInformation() {
  const { user } = useSelector((state) => state.auth);

  if (user) {
    return (
      <section>
        <Container>
          <Row
            style={{
              display: "grid",
              alignItems: "center",
              minHeight: "60vh",
            }}
            className="mb-5 mt-5 p-5"
          >
            <Col className="col-6 mx-auto bg-light text-black rounded mb-4 p-5">
              <Row className="align-items-center  text-center">
                <Col className="align-items-center ">
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      className="rounded-circle img-fluid"
                      alt="avatar"
                      style={{ width: "4rem" }}
                    />
                  )}
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="col-6">
                  <Col>
                    <p>Email:</p>
                  </Col>
                  <Col>
                    <p>Name - Surname :</p>
                  </Col>
                </Col>
                <Col className="col-6">
                  <Col>{user.email && <p>{user.email}</p>}</Col>
                  <Col>{user.displayName && <p>{user.displayName}</p>}</Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
