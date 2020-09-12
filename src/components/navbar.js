import React, { Component } from 'react';
import './assets/navbar.css';

class Navbar extends Component{
    render() {
        return(
            <div className="bg-img">
                <div className="container text-center ml-auto">
                    <div className="topnav" style = {{ display:"inline-block" }}>
                        <a href = "#">Home</a>
                        <a href = "#projects">Projects</a>
                        <a href = "#resume">Resume</a>
                        <a href = "#about">About</a>
                    </div>
                </div><br/>
                <div className = "container cover-intro text-center">
                    <div style = { { display : "inline-block" } }>
                        <h1 style = { {color : "#ffffff"} }>
                            Hello, I'm
                            <strong className = "d-block">Rupesh Chandra Mohanty</strong>
                        </h1>
                        <strong>AND THIS IS MY RESUME</strong>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;