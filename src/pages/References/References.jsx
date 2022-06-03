import React from 'react';
import Container from 'react-bootstrap/Container';
import './References.css';

function References  ()  {
    return (
        <Container className="references-container">
            <div className='references-content' id='references'>
                <h1>References</h1>
                <p>Person 1</p>
                <p>Person 2</p>
                <p>Person 3</p>
            </div> 
        </Container>
        
    );
};

export default References;