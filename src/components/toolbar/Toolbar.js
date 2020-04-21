import React, { Component } from "react";
import movie from "../../pictures/movie.jpg";
import profilepicture from "../../pictures/profilepicture.jpg";
import { Modal, Button, Row, Col } from "react-bootstrap";
import "./toolbar.css";

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginModal: false
    };
  }

  openModal() {
    this.setState({
      showLoginModal: true
    });
  }

  closeModal() {
    this.setState({
      showLoginModal: false
    });
  }

  render() {
    return (
      <div className="toolbar">
        <a href="/home">
          <img className="websitePicture" alt="" src={movie} />
        </a>
        <img
          onClick={() => this.openModal()}
          className="profilePicture"
          alt=""
          src={profilepicture}
        />

        <Modal show={this.state.showLoginModal}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <center>
              <Row>
                <Col lg={6}>
                  <div>
                    <p>Username:</p>
                    <p>Password:</p>
                  </div>
                </Col>
                <Col lg={6}>
                  <div>
                    <input className="usernameInput"></input>
                    <input className="passwordInput"></input>
                  </div>
                </Col>
              </Row>
            </center>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.closeModal()}>
              Close
            </Button>
            <Button variant="primary">Login</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Toolbar;
