import React, { Component } from "react";
import "./css/toolbar.css";

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbar">
            <h1><a href="/home" className="title">Movie Viewer</a></h1>
      </div>
    );
  }
}

export default Toolbar;
