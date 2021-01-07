<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

=======
import React, { Component } from 'react';
import './App.css';
import Header from '.Header/header.js';
import AboutMe from '.AboutMe/aboutMe.js';
import Skills from '.Skills/skills.js';
import Projects from '.Projects/projects.js';
import Contact from '.Contact/contact.js';

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
>>>>>>> d5f4470d1b611a0b600e5c0c75cec40524d56d32
export default App;
