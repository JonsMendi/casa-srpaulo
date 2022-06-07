import React from 'react';
import Container from 'react-bootstrap/Container';
import './References.css';

function References  ()  {

    return (
        <Container className="references-container">
            <div className='references-content' id='references'>
                <h1>References</h1>
                <div className="explanation-wrapper">
                   <div className="we">
                    <p className="transparent-bg">Activities</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                        architecto beatae vitae dicta sunt explicabo.</p> 
                    </div>
                    <div className="offer">
                    <p className="transparent-bg">Gastronomy</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                        architecto beatae vitae dicta sunt explicabo.</p> 
                    </div>
                    <div className="why">
                    <p className="transparent-bg">Attractions</p> 
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                        architecto beatae vitae dicta sunt explicabo.</p>   
                    </div> 
                </div>
            </div> 
        </Container>
        
    );
};

export default References;