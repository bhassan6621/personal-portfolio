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
      <div className="aboutMe-section" id="aboutMe">
        <div className="short-bio">
          <div className="short-bio-text">
            <h1>Hi I'm John.</h1>
            <p>
              I am currently a Senior at Queens College in NYC. I was born and
              rasied in Queens. I'm a passionate Software Developer 🚀 having
              experience with building Web and Mobile applications with
              JavaScript / React / Python / Django and some other cool libraries
              and frameworks
            </p>
            <Button
              // insert your own resume pdf link in href
              href="https://www.freecodecamp.org/news/content/images/2020/03/1_software_resume_tk-1.jpg"
            >
              See My Resume
            </Button>
            <div className="dev-icons">
              <p className="dev-icons-subTitle">Check Out My Dope Tech Stack</p>
              <FaHtml5 />
              <FaCss3Alt />
              <FaPython />
              <FaJava />
              <SiCplusplus />
            </div>
          </div>
          <div>
            <img className="short-bio-img" alt="man sitting" src={manSit} />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
