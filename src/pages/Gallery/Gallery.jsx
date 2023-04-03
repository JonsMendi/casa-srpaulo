import React, { useState } from 'react';
import { GalleryData } from "../../utilities/data";
import { buttonVariants } from "../../utilities/motion-framer";

import { motion } from 'framer-motion';
  
  const PrevButton = ({ onClick }) => (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      initial="rest"
      onClick={onClick}
      className=" border border-[#DAD15F] text-white rounded-lg py-2 px-4 mr-4"
    >
      Prev
    </motion.button>
  );
  
  const NextButton = ({ onClick }) => (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      initial="rest"
      onClick={onClick}
      className=" border border-[#DAD15F] text-white rounded-lg py-2 px-4"
    >
      Next
    </motion.button>
  );
  
function Gallery () {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
      setIndex((index + 1) % GalleryData.length);
    };
  
    const handlePrev = () => {
      setIndex((index - 1 + GalleryData.length) % GalleryData.length);
    };
  
    return (
      <div className="relative w-full h-full">
        {GalleryData.map((id, i) => (
          <motion.div
            key={id.id}
            className="absolute top-0 left-0 w-full h-full overflow-hidden"
            style={{ x: i === index ? 0 : "100%" }}
            initial={{ x: i === index ? 0 : "100%" }}
            animate={{ x: i === index ? 0 : "100%" }}
            exit={{ x: i === index ? `-${window.innerWidth}px` : "100%" }}
            transition={{ type: "tween", duration: 0.5 }}
            {...id} 
          >
            <img
              src={id.image}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between bg-transparent">
        <PrevButton onClick={handlePrev} />
        <NextButton onClick={handleNext} />
        </div>
      </div>
    );
  };

export default Gallery;