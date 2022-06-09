import React from "react";
import Container from "react-bootstrap/Container";
import './About.css';

function About () {

    return (
        <Container className="about-container">
           <div className="about-content" id="about">
                <h1>About</h1>
                <div className="explanation-wrapper">
                    <div className="explanation-content">
                        <h5 className="transparent-bg">What are we?</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                        architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                    <div className="explanation-content">
                        <h5 className="transparent-bg">What we offer?</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                        architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                    <div className="explanation-content">
                        <h5 className="transparent-bg">Why us?</h5> 
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                        architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div> 
                </div>
            </div>
        </Container> 
    )
}

export default About;