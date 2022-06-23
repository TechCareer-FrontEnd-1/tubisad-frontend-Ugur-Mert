import React from "react";
import "./Home.css";
import CoinApp from "./Images/CoinApp.png";
import MovieApp from "./Images/MovieApp.png";
import SimonGame from "./Images/SimonGame.png";
import Tenzi from "./Images/Tenzi.png";
import MemeGenerator from "./Images/MemeGenerator.png";
import ToDoApp from "./Images/ToDoApp.png";
import TravelJournal from "./Images/TravelJournal.png";
import ShoppingCart from "./Images/ShoppingCart.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiJqueryLogo, DiReact } from "react-icons/di";

const Home = () => {
  return (
    <div>
      <section className="section-welcome">
        <Container>
          <Col>
            <Row className="text-center text-white ">
              <h1 className="header-text">Welcome to my personal website!</h1>
            </Row>

            <Col className="text-center text-white mx-auto col-4">
              <Row>
                <Col>
                  <DiJqueryLogo />
                </Col>
                <Col>
                  <DiReact />
                </Col>
              </Row>
            </Col>
            <Col className="text-center text-white mx-auto col-6">
              <Row>
                <Col>
                  <AiOutlineHtml5 />
                </Col>
                <Col>
                  <DiCss3 />
                </Col>
                <Col>
                  <DiJavascript1 />
                </Col>
              </Row>
            </Col>
          </Col>
        </Container>
      </section>
      <section className="section-projects">
        <Container>
          <Col>
            <Row className="text-center m-3">
              <h1>PROJECTS</h1>
            </Row>
            <Row className="mx-auto text-center ">
              <Row className="mb-4">
                <Col sm={12} md={6} lg={3} className="mb-3">
                  <a
                    href="https://cozy-salmiakki-f49f4b.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card className="h-100">
                      <Card.Img variant="top" src={TravelJournal} />
                      <Card.Body>
                        <Card.Title>Travel Journal</Card.Title>
                        <Card.Text>Basic landing page.</Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-3">
                  <a
                    href="https://deluxe-sfogliatella-61bfd1.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card className="h-100">
                      <Card.Img variant="top" src={ToDoApp} />
                      <Card.Body>
                        <Card.Title>ToDo App</Card.Title>
                        <Card.Text>You can add to-dos</Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-3">
                  <a
                    href="https://brilliant-moxie-ad3aa7.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card className="h-100">
                      <Card.Img variant="top" src={MemeGenerator} />
                      <Card.Body>
                        <Card.Title>Meme Generator</Card.Title>
                        <Card.Text>You can create your own meme.</Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-3">
                  <a
                    href="https://ugur-mert.github.io/Simon-Game--Clone-/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card className="h-100">
                      <Card.Img variant="top" src={SimonGame} />
                      <Card.Body>
                        <Card.Title>Simon Game</Card.Title>
                        <Card.Text>Some fun</Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6} lg={3} className="mb-3">
                  <a
                    href="https://marvelous-duckanoo-65205f.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card className="h-100">
                      <Card.Img variant="top" src={Tenzi} />
                      <Card.Body>
                        <Card.Title>Tenzi!</Card.Title>
                        <Card.Text>Roll until all dice are the same.</Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-3">
                  <a
                    href="https://sunny-beignet-b7b218.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card className="h-100">
                      <Card.Img variant="top" src={MovieApp} />
                      <Card.Body>
                        <Card.Title>Movie App</Card.Title>
                        <Card.Text>
                          If you want to know about movies...
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-3">
                  <a
                    href="https://sage-bublanina-bc861c.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card className="h-100">
                      <Card.Img variant="top" src={CoinApp} />
                      <Card.Body>
                        <Card.Title>Coin App</Card.Title>
                        <Card.Text>To track coins.</Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
                <Col sm={12} md={6} lg={3} className="mb-3 ">
                  <a
                    href="https://singular-fox-3b5266.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card className="h-100 ">
                      <Card.Img variant="top" src={ShoppingCart} />
                      <Card.Body>
                        <Card.Title>Shopping Cart</Card.Title>
                        <Card.Text>Redux Shopping Cart</Card.Text>
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              </Row>
            </Row>
          </Col>
        </Container>
      </section>
    </div>
  );
};

export default Home;
