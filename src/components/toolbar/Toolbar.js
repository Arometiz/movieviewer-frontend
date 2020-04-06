import React, { Component } from "react";
import movie from "../../pictures/movie.jpg";
import profilepicture from '../../pictures/profilepicture.jpg';
import "./toolbar.css";

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <a href="/home">
          <img
            className="websitePicture"
            alt=""
            src={movie}
          />
        </a>
        <img
            className="profilePicture"
            alt=""
            src={profilepicture}
          />
      </div>
    );
  }
}

export default Toolbar;
