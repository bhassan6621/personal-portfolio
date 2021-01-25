import React, { Component } from "react";
import "./App.css";
import Header from "./Header/header.js";
import AboutMe from "./AboutMe/aboutMe.js";
import Skills from "./Skills/skills.js";
import Projects from "./Projects/projects.js";
import Contact from "./Contact/contact.js";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
