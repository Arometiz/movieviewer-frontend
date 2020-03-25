import React, { Component } from "react";
import { Nav, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Allmovies from "./Allmovies";
import "../../src/components/css/navigationbar.css";
import Movie from "./Movie";

class Navigationbar extends Component {
  render() {
    return (
      <Router>
        <Row className="navRow">
          <Col lg={2}>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Item>
                <Nav.Link className="flex flex-row" href={"/allmovies"}>
                  <div className="align-center justify-start">
                      <i className="fas fa-film fa-2x"></i>
                  </div>
                  <div className="align-center justify-center flex-grow-1">
                      <h6 className="nav-item-text">All Movies</h6>
                  </div>
                  <div className="align-center justify-end">
                      <i className="fas fa-angle-right fa-2x"></i>
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col lg={10} className="movies">
            <Switch>
              <Route path="/home"></Route>
              <Route path="/allmovies">
                <Allmovies></Allmovies>
              </Route>
              <Route exact path="/movie/:id" component={Movie}>
              </Route>
              <Route exact path="/movie/add-new-movie" component={Movie}>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Router>
    );
  }
}

export default Navigationbar;
