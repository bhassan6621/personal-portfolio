import React, { Component } from "react";
import ProjectCard from "./projectCard";
import { CardDeck } from "react-bootstrap";
class Projects extends Component {
  render() {
    let projects = {
      0: {
        title: "MyAutoDiff",
        text:
          "Python library that helps compute high order derivatives.",
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
          "Open source Messenger App that encrypts your messages locally",
        img: "https://picsum.photos/180/180"
      },
      3: {
        title: "Space Invaders",
        text: " Javascript implementation of the classic game, Space Invaders.",
        img: "https://picsum.photos/180/180"
      }
    };

    let projectCards = Object.values(projects).map((project) => (
      <ProjectCard
        title={project.title}
        text={project.text}
        img={project.img}
      />
    ));

    console.log(projectCards.length);
    return (
      <div className="projects">
        <h1> projects </h1>
        <CardDeck
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          {projectCards}
        </CardDeck>
      </div>
    );
  }
}

export default Projects;
