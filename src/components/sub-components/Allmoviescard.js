import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import logo from "../../../src/logo.jpg";
import "../css/allmoviescard.css";

const moviedata = [
  { name: "Avengers: Age of Ultron" },
  { name: "The Avengers" },
  { name: "Avengers: Endgame" },
  { name: "Avengers: Infinity War" },
  { name: "Ted" },
  { name: "Ted 2" },
  { name: "Deadpool" }
];

export default Allmoviescard => (
  <div>
    <Row>
      {moviedata.map(d => (
        <Col key={d.name}>
          <Card style={{ width: "18rem" }}>
            <Card.Img src={logo} />
            <Card.Body>
              <Card.Title>{d.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);