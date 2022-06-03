import React from "react";
import Container from "react-bootstrap/Container";
import './About.css';

function About () {
    return (
        <Container className="about-container">
           <div className="about-content" id="about">
                <h1>About</h1>
                <p>What are we?</p>
                <p>What we offer?</p>
                <p>Why us?</p>
            </div> 
        </Container>
        
    )
}

export default About;