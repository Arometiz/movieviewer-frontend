import React, { Component } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./castinfo.css";
import NewActor from "../newactor/NewActor";


class CastInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { fields: [] };
  }

  appendInput() {
    var newInput = `actor-${this.state.fields.length}`;
    this.setState(prevState => ({ fields: prevState.fields.concat([newInput]) }));
  }

  deleteInput() {
    this.setState(prevState => ({ field: prevState.fields.pop() }));
  }

  render() {
    return (
      <div className="castInfo">
        <Card style={{ width: "100%" }}>
          <Card.Title>Cast</Card.Title>
          <h2></h2>
          <Card.Body>
            <div className="buttonGroup">
              <Button onClick={() => this.appendInput()}>Add Actor</Button>
              <Button onClick={() => this.deleteInput()}>Delete Actor</Button>
            </div>

            <center>
              <ul className="actorList">
                {this.state.fields.map(input => <NewActor key={input} />)}
              </ul>
            </center>

          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CastInfo;
