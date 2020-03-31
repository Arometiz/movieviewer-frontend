import React, { Component } from "react";
import "./toolbar.css";

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
        <a href="/home">
          <img
            className="websitePicture"
            alt=""
            src={process.env.PUBLIC_URL + "movie.jpg"}
          />
        </a>
        <img
            className="profilePicture"
            alt=""
            src={process.env.PUBLIC_URL + "profilepicture.jpg"}
          />
      </div>
    );
  }
}

export default Toolbar;
