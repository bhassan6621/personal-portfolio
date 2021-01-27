import React, { Component } from "react";
import ProjectCard from "./projectCard";
import { CardGroup } from "react-bootstrap";

class Projects extends Component {
  render() {
    let projects = {
      0: {
        title: "MyAutoDiff",
        text:
          "Python library that helps compute high order derivatives.",
        img: require("./images/computational_graph.jpg")
      },
      1: {
        title: "React JS Website",
        text: "Learn how you can build you own personal react js website!",
        img: require("./images/react_logo.jpg")
      },
      2: {
        title: "Tweetie",
        text:
          "Open source Messenger App that encrypts your messages locally",
        img: require("./images/msg_bubble.jpg")
      },
      3: {
        title: "Space Invaders",
        text: " Javascript implementation of the classic game, Space Invaders.",
        img: require("./images/space_invaders.png")
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
        <CardGroup
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          {projectCards}
        </CardGroup>
      </div>
    );
  }
}

export default Projects;
