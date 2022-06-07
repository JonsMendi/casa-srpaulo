import React from 'react';
import Container from 'react-bootstrap/Container';
import './History.css'


function History () {
    return (
        <Container className='history-container'>
            <div className='history-content' id='history'>
                <h1>History</h1>
                <div className="explanation-wrapper">
                   <div className="we">
                    <p className="transparent-bg">Nordeste</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                        architecto beatae vitae dicta sunt explicabo.</p> 
                    </div>
                    <div className="offer">
                    <p className="transparent-bg">S. Pedro</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                        architecto beatae vitae dicta sunt explicabo.</p> 
                    </div>
                    <div className="why">
                    <p className="transparent-bg">Sr. Paulo e sua familia</p> 
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                        architecto beatae vitae dicta sunt explicabo.</p>   
                    </div> 
                </div>
            </div>
        </Container>
        
    );
};

export default History;