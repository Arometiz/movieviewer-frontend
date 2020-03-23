import React, { Component } from "react";
import { Container} from "react-bootstrap";
import "./css/allmoviescard.css";
import Allmoviescard from "./sub-components/Allmoviescard";

class Allmovies extends Component {
  render() {
    return (
      <div>
        <Container>
          <Allmoviescard></Allmoviescard>
        </Container>
      </div>
    );
  }
}

export default Allmovies;
