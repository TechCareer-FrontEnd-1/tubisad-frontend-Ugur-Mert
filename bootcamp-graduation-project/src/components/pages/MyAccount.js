import React from "react";
import { Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import Tabs from "react-bootstrap/Tabs";
import UpdateProfile from "../UpdateProfile";
import UserInformation from "../UserInformation";

export default function MyAccount() {
  return (
    <Container>
      <Row className="mt-5 p-5">
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="User Information">
            <UserInformation />
          </Tab>
          <Tab eventKey="profile" title="Update Profile">
            <UpdateProfile />
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
}
