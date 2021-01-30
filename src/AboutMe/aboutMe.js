import React, { Component } from "react";
import manSit from "./manOnTable.svg";
import "./aboutMe.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHtml5, FaCss3Alt, FaPython, FaJava } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

class AboutMe extends Component {
  render() {
    return (
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
              <h1 className="greeting-text">Hi all 👋 I'm John Doe</h1>
              <p className="greeting-text-p subTitle">
                I am currently a Senior at Queens College in NYC. I was born and
                rasied in Queens. I'm A passionate Software Developer 🚀 having
                experience with building Web and Mobile applications with
                JavaScript / React / Python / Django and some other cool
                libraries and frameworks
              </p>
              <div className="button-greeting-div">
                <Button
                  className="button-greeting-div"
                  // insert your own resume pdf link in href
                  href="https://www.freecodecamp.org/news/content/images/2020/03/1_software_resume_tk-1.jpg"
                  variant="primary"
                >
                  See My Resume
                </Button>
              </div>
          </div>
          <div className="greeting-image-div">
            <img alt="man sitting" src={manSit} />
          </div>
        </div>
        <div>
        <h1 className="skills-heading">What I Do</h1>
        <p className="subTitle skills-text-subtitle">Check Out My Tech Stack</p>
          <div className="software-skills-main-div">
            <ul className="dev-icons">
              <li className="software-skill-inline">
                <i><FaHtml5 /></i>
                <i><FaCss3Alt /></i>
                <i><FaPython /></i>
                <i><FaJava /></i>
                <i><SiCplusplus /></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;