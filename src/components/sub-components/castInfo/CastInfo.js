import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./castinfo.css";

class CastInfo extends Component {
  render() {
    return (
      <div className="castInfo">
        <Card style={{ width: "100%" }}>
          <Card.Title>Cast</Card.Title>
          <h2></h2>
          <Card.Body></Card.Body>
        </Card>
      </div>
    );
  }
}

export default CastInfo;
