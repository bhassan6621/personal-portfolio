import React, { Component } from "react";
import ProjectCard from "./projectCard";
import { CardGroup } from "react-bootstrap";
import computational_graph from './images/computational_graph.jpg';
import react_logo from './images/react_logo.jpg';
import msg_bubble from './images/msg_bubble.jpg';
import space_invaders from './images/space_invaders.png';
import './project.css';

class Projects extends Component {
  render() {
    const style = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    };

    let projects = {
      0: {
        title: "MyAutoDiff",
        text:
          "Python library that helps compute high order derivatives.",
        img: computational_graph,
      },
      1: {
        title: "React JS Website",
        text: "Learn how you can build you own personal react js website!",
        img: react_logo,
      },
      2: {
        title: "Tweetie",
        text:
          "Open source Messenger App that encrypts your messages locally",
        img: msg_bubble,
      },
      3: {
        title: "Space Invaders",
        text: " Javascript implementation of the classic game, Space Invaders.",
        img: space_invaders,
      }
    };

    let projectCards = Object.values(projects).map((project) => (
      <ProjectCard
        title={project.title}
        text={project.text}
        img={project.img}
      />
    ));
    console.log(projectCards);

    return (
      <div className="projects" id="projects">
        <h1> Projects </h1>
          <CardGroup style={style}> {projectCards} </CardGroup>
      </div>
    );
  }
}

export default Projects;
