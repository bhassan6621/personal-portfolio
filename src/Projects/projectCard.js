import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaGithub } from "react-icons/fa";

class ProjectCard extends Component {
  render() {
    return (
      <div>
        <Card className="z-depth-5" style={{ width: "18rem", flex: 1}}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.text}</Card.Text>
            <Button variant="">
              <FaGithub />{" "}
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
