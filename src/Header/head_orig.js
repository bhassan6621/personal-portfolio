import logo from "./logo.png";
import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="nav-bar">
          <img src={logo} />
          <div className="nav-sections">
            <a href="#aboutMe">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>
        </div>
        <div className="center-text">
          <h1 className="title"> CODER </h1>
          <h1 className="name">&lt;JOHN DOE/&gt;</h1>
        </div>
      </div>
    );
  }
}

export default Header;
