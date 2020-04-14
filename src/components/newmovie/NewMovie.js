import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Button } from "react-bootstrap";
import CastInfo from "../sub-components/castInfo/CastInfo";
import MovieInfo from "../sub-components/movieInfo/MovieInfo";

function mapStateToProps(state) {
  return {};
}
class NewMovie extends Component {
  render() {
    return (
      <div>
        <h1>New Movie</h1>
        <h2></h2>
        <Row className="newMovieInfo">
          <Col lg={6}>
              <MovieInfo></MovieInfo>
          </Col>
          <Col lg={6}>
              <CastInfo></CastInfo>
            </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps)(NewMovie);
