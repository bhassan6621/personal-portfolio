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
                <div className="nav-bar">
                    <a href="#aboutMe">about.</a>
                    <a href="#projects">projects.</a>
                    <a href="#skills">skills.</a>
                </div>
                <div className="slogan">
                    <h2>Pro·gram·mer (n) An organism that turns caffeine into code.</h2>
                </div>
            </div>
        );
    }
}

export default Header;