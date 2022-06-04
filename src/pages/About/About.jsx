import React from "react";
import Container from "react-bootstrap/Container";
import './About.css';

function About () {

    return (
        <Container className="about-container">
           <div className="about-content" id="about">
                <h1 className="transparent-bg">About</h1>
                <p className="transparent-bg">What are we?</p>
                <p className="transparent-bg">What we offer?</p>
                <p className="transparent-bg">Why us?</p>
            </div>
        </Container> 
    )
}

export default About;