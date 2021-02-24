import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-section">
        <div className="contact">
          <h1 className="contact-title"> Let's Work Together </h1>
          <p classname="contact-body">
            I'm always looking for new opportunities and exciting projects to
            collaborate with. With my specialty in web devlopment, your vision
            will be morphed into a website. We can connect via LinkedIn or
            email. Please get in touch and I will most definitely contact about
            building together.
          </p>
          <button className="contact-btn">Contact Me</button>
        </div>
        <div className="footer">
          <h1>Utica</h1>
          <div className="info">
            <p>
              123 Demo Street <br />
              Copenhagen, Denmark
            </p>
            <p>
              (555)555-5555 <br />
              email@example.com
            </p>
          </div>
          <p>
            Made by <u>reSolve</u>
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
