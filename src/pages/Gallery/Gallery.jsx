import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import { GalleryData } from '../Gallery/Gallery-Data';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import './Gallery.css';

function Gallery ({ slides }) {
    const [current, setCurrent] = useState(0);
    const slidesLength = slides.length;

    const nextSlide = () => {
        setCurrent(current === slidesLength - 1 ? 0 : current + 1);
    };

    const previousSlide = () => {
        setCurrent(current === 0 ? slidesLength - 1 : current - 1);
    };

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


    return (
        <Container className="gallery-container">
            <div className='gallery-content' id='gallery'>
                <h1>Gallery</h1>
                <div className='gallery-slider'>
                    <FaArrowAltCircleLeft className='gallery-arrow_left' onClick={previousSlide}/>
                    <FaArrowAltCircleRight className='gallery-arrow_right' onClick={nextSlide}/>
                   {GalleryData.map((slide, index) => {
                       return (
                           <div className={index === current ? 'slide active' : 'slide'} key={index}>
                               {index === current && (<img src={slide.image} className='gallery-image' alt='carousel with house views'/>)}
                           </div>
                       )
                   })}
                </div>
            </div> 
        </Container>
        
    );
}

export default Gallery;