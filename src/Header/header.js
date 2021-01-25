import logo from './logo.png';
import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="nav-sections">
                    <a href="#aboutMe">About Me</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                </div>
            </div>
        );
    }
}

export default Header;