import React, { Component } from "react";
import  ProjectCard from "./projectCard";
import { CardDeck } from "react-bootstrap";
class Projects extends Component {
  render() {
    let projects = {
      0: {
        title: "AutoDiff",
        text:
          "Build a compact library that helps you computer high order derivaties in python.",
        img: "https://picsum.photos/180/180"
      },
      1: {
        title: "React JS Website",
        text: "Learn how you can build you own personal react js website!",
        img: "https://picsum.photos/180/180"
      },
      2: {
        title: "Tweetie",
        text:
          "Open source Messenger App that encrypts all your messages locally",
        img: "https://picsum.photos/180/180"
      },
      3: {
        title: "Space Invaders",
        text: " Javascript implementation of the classic game, Space Invaders.",
        img: "https://picsum.photos/180/180"
      }
    };

    let projectCards;

    if (this.props.projectCards) {
      projectCards = Object.values(projects).map((project) => (
        <ProjectCard
          title={project.title}
          text={project.text}
          img={project.img}
        />
      ));
    }

    return (
      <div className="projects">
        <h1> projects </h1>
        <CardDeck>{projectCards}</CardDeck>
      </div>
    );
  }
}

export default Projects;
