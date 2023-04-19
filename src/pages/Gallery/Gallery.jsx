import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RiRadioButtonFill } from 'react-icons/ri';
import { GalleryData } from '../../utilities/data';
import { motion as m } from "framer-motion";
import { titleVariant } from "../../utilities/motion-framer";


function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? GalleryData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === GalleryData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <m.div 
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  variants={titleVariant()}
  className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group flex flex-col justify-center'
>
  <div className='flex-grow'>
    <div
      style={{ backgroundImage: `url(${GalleryData[currentIndex].image})` }}
      className='max-w-[1200px] h-full rounded-2xl bg-center bg-cover duration-500 mx-auto'
    ></div>
  </div>

  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactLeft onClick={prevSlide} size={20} />
  </div>
  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactRight onClick={nextSlide} size={20} />
  </div>

  <div className='flex top-4 justify-center py-2'>
    {GalleryData.map((slide, slideIndex) => (
      <div
        key={slideIndex}
        onClick={() => goToSlide(slideIndex)}
        className='text-2xl cursor-pointer'
      >
        <RiRadioButtonFill />
      </div>
    ))}
  </div>
</m.div>



  );
}


export default Gallery;
