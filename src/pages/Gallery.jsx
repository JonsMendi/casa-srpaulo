import React from 'react';
import Container from 'react-bootstrap/Container';
import './Gallery.css';

function Gallery () {
    return (
        <Container className="gallery-container">
            <div className='gallery-content' id='gallery'>
                <h1>Gallery</h1>
                <p>Photo 1</p>
                <p>Photo 2</p>
                <p>Photo 3</p>
            </div> 
        </Container>
        
    );
}

export default Gallery;