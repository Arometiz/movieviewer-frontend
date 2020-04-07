import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Button } from "react-bootstrap";

function mapStateToProps(state) {
  return {};
}

class NewMovie extends Component {
  render() {
    return (
      <div>
        <h1>New Movie</h1>
        <Row className="underLineRow">
          <Col lg={12}>
            <h2> </h2>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewMovie);
