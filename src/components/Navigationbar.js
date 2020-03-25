import React, { Component } from "react";
import { Nav, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Allmovies from "./Allmovies";
import "../../src/components/css/navigationbar.css";

class Navigationbar extends Component {
  render() {
    return (
      <Router>
        <Row className="navRow">
          <Col lg={1}>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Item>
                <Nav.Link href={"/home"}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href={"/allmovies"}>All Movies</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col lg={11} className="movies">
            <Switch>
              <Route path="/home"></Route>
              <Route path="/allmovies">
                <Allmovies></Allmovies>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    );
  }
}

export default Navigationbar;
