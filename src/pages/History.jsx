import React from 'react';
import Container from 'react-bootstrap/Container';
import './History.css'


function History () {
    return (
        <Container className='history-container'>
            <div className='history-content' id='history'>
                <h1>History</h1>
                <p>Nordeste</p>
                <p>S. Pedro</p>
                <p>Sr. Paulo e sua Familia</p>
            </div>
        </Container>
        
    );
};

export default History;