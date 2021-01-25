import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaGithub } from "react-icons/fa";
class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h1> projects </h1>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/180/180" />
          <Card.Body>
            <Card.Title>React JS Website</Card.Title>
            <Card.Text>
              Learn how you can build you own personal react js website!
            </Card.Text>
            <Button variant="">
              <FaGithub />{" "}
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/180/180" />
          <Card.Body>
            <Card.Title>MyAutoDiff</Card.Title>
            <Card.Text>
              Build a compact library that helps you computer high order
              derivaties in python.
            </Card.Text>
            <Button variant="">
              <FaGithub />{" "}
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/180/180" />
          <Card.Body>
            <Card.Title>Tweetie</Card.Title>
            <Card.Text>
              Open source Messenger App that encrypts all your messages locally
              in your device.
            </Card.Text>
            <Button variant="">
              <FaGithub />{" "}
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/180/180" />
          <Card.Body>
            <Card.Title>Space Invaders</Card.Title>
            <Card.Text>
              Javascript implementation of the classic game, Space Invaders.
            </Card.Text>
            <Button variant="">
              <FaGithub />{" "}
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Projects;
