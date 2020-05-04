import React, { Component } from "react";
import movie from "../../pictures/movie.jpg";
import profilepicture from "../../pictures/profilepicture.jpg";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { bindActionCreators } from "redux";
import "./toolbar.css";
import login from "../../apicalls/login";
import { connect } from "react-redux";
import { getLoggedIn } from "../../reducers/loginReducer";

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      loginUser: login,
    },
    dispatch
  );

const mapStateToProps = (state) => ({
  loggedIn: getLoggedIn(state),
});

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginModal: false,
      username: null,
      password: null,
    };
  }

  openModal() {
    this.setState({
      showLoginModal: true,
    });
    console.log(this.props);
  }

  closeModal() {
    this.setState({
      showLoginModal: false,
    });
  }

  onUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  loginClick() {
    const { loginUser } = this.props;
    const loginData = {
      username: this.state.username,
      password: this.state.password,
    };
    loginUser(loginData);
    return (window.location.href = "/movies");
  }

  render() {
    if (this.props.loggedIn === false) {
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
                      <input
                        onChange={this.onUsernameChange}
                        className="usernameInput"
                      ></input>
                      <input
                        type="password"
                        onChange={this.onPasswordChange}
                        className="passwordInput"
                      ></input>
                    </div>
                  </Col>
                </Row>
              </center>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.closeModal()}>
                Close
              </Button>
              <Button variant="primary" onClick={() => this.loginClick()}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    } else {
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
                      <input
                        onChange={this.onUsernameChange}
                        className="usernameInput"
                      ></input>
                      <input
                        type="password"
                        onChange={this.onPasswordChange}
                        className="passwordInput"
                      ></input>
                    </div>
                  </Col>
                </Row>
              </center>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.closeModal()}>
                Close
              </Button>
              <Button variant="primary" onClick={() => this.loginClick()}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
