import React, { Component } from "react";

import "./skills.css";
class Skills extends Component {
  render() {
    return (
      <div className="skills" id="skills">
        <div className="skills-title">
          <h1>Skill Proficiency</h1>
        </div>
        <div className="skills-section">
          <div className="bar">
            <div className="info">
              <span>HTML/CSS</span>
            </div>
            <div className="progress-bar web">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>Java</span>
            </div>
            <div className="progress-bar java">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>Python</span>
            </div>
            <div className="progress-bar python">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>C++</span>
            </div>
            <div className="progress-bar cplusplus">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
