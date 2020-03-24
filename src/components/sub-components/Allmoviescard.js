import React, { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import logo from "../../../src/logo.jpg";
import "../css/allmoviescard.css";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  movies: state.movies
});

class Allmoviescard extends Component {
  render() {
    return (
      <div>
        <Row>
          {this.props.movies.map(movie => (
            <Col key={movie.name}>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={logo} />
                <Card.Body>
                  <Card.Title>{movie.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Allmoviescard);
