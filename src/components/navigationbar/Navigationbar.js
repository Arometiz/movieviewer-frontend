import React, { Component } from "react";
import { Nav, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "../movies/Movies";
import "./navigationbar.css";
import Movie from "../movie/Movie";

class Navigationbar extends Component {
  render() {
    return (
      <Router>
        <Row className="navRow">
          <Col lg={1}>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Item>
                <Nav.Link className="flex flex-row" href={"/movies"}>
                  <div className="align-center justify-start">
                      <i className="fas fa-film fa-2x"></i>
                  </div>
                  <div className="align-center justify-center flex-grow-1">
                      <h6 className="nav-item-text">Movies</h6>
                  </div>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col lg={11} className="movies">
            <Switch>
              <Route path="/home"></Route>
              <Route path="/movies">
                <Movies></Movies>
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
