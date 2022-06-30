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
            className="mb-5 mt-5 p-5  col-12"
          >
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={6}
              className="col-6 mx-auto bg-light mx-auto text-black rounded mb-4 p-5"
            >
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
                <Col xs={12} sm={12} md={12} lg={6}>
                  Email <br /> {user.email}
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                  Name - Surname <br />
                  {user.displayName}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
