import { motion as m } from "framer-motion";
import React from "react";
import HouseContentCard from "../../cards/houseContent";
import { houseContent } from "../../utilities/data";
import { titleVariant } from "../../utilities/motion-framer";
import { styles } from "../../utilities/style";


function HouseContent() {
  return (
    <m.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }} className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-12 bg-[#DAD15F] rounded-[20px]`}>
        <m.div variants={titleVariant()} className="bg-[#DAD15F]">
          <p className={`${styles.sectionSubText} text-center bg-[#DAD15F]`}>The House</p>
          <h1 className={`${styles.sectionHeadText} text-center bg-[#DAD15F] `}>Content</h1>
        </m.div>
          <div className="mt-20 flex justify-center flex-wrap gap-10 bg-[#DAD15F]">
          {houseContent.map((service, index) => (
            <HouseContentCard key={service.name} index={index} {...service} />
          ))}
          </div>
    </m.section>
  );
}

export default HouseContent;
