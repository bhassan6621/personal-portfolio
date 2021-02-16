import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaGithub } from "react-icons/fa";

class ProjectCard extends Component {
  render() {
    let cardDivStyle = {
      padding: 20,
      flex: 1
    };
    let imgStyle = {
      height: "200px",
      boxShadow: "2px 2px 2px grey"
    }


    return (
      <div style={cardDivStyle} >
        <Card >
          <Card.Img variant="top" style={imgStyle} src={this.props.img} />
        </Card>

        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.text}</Card.Text>
          <Button variant=""> 
            <FaGithub />  
          </Button>
        </Card.Body>  

      </div>
    );
  }
}

export default ProjectCard;
