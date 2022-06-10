import React, {useState} from 'react';
import { GalleryData } from '../Gallery/Gallery-Data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
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
        <section className="gallery-container">
            <div className='gallery-content' id='gallery'>
                <h1>Gallery</h1>
                <div className='gallery-slider'>
                    <FiChevronLeft className='gallery-arrow_left' size={30} onClick={previousSlide}/>
                    <FiChevronRight className='gallery-arrow_right' size={30} onClick={nextSlide}/>
                   {GalleryData.map((slide, index) => {
                       return (
                           <div className={index === current ? 'slide active' : 'slide'} key={index}>
                               {index === current && (<img src={slide.image} className='gallery-image' alt='carousel with house views'/>)}
                           </div>
                       )
                   })}
                </div>
            </div> 
        </section>
        
    );
}

export default Gallery;