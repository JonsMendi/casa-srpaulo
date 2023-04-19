import React from "react";
import { motion as m } from "framer-motion";
import { titleVariant } from "../../utilities/motion-framer";
import { styles } from "../../utilities/style";

function About () {

    return (
      <m.section
      id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-20`}
      >
        <div
          className={` inset-0 top-[100px]  max-w-8xl mx-auto ${styles.paddingX} items-start gap-5`}
        >
          <m.div
            variants={titleVariant()}
            className="flex flex-col items-start"
          >
            <p className={`${styles.sectionSubText} text-center`}>
              Introduction
            </p>
            <h2 className={`${styles.sectionHeadText} text-center`}>About.</h2>
          </m.div>
          <div className="flex">
            <m.div
                variants={titleVariant()}
                className="mt-4 mr-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
            >
                <span className="font-bold">What are we? </span>
                We are a family-run guest house in Nordeste, São Miguel, 
                originally built in the 1960s by Paulo Borges and Filomena Teixeira - a humble couple who made 
                a living through agriculture and sewing always trying developing the house regarding the modern days. Today, their legacy lives on through our guest house, 
                which offers a unique and peaceful retreat surrounded by nature.
            </m.div>
            <m.div
                variants={titleVariant()}
                className="mt-4 mr-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
            >
                <span className="font-bold">What we offer? </span>
                A range of amenities and services to ensure that our guests
                have a comfortable and enjoyable stay. From 3 cozy rooms with 2 persons bed each, fully
                equipped kitchen, 2 bathrooms and a cute living room with dining area. We have outdoor spaces, breathtaking views, and
                everything you need to make your visit to the Azores unforgettable.
            </m.div>
            <m.div
                variants={titleVariant()}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
            >
                <span className="font-bold">Why us? </span>
                At Casa do Sr.Paulo, we pride ourselves on providing a warm and
                welcoming atmosphere that feels like home. With a focus on
                authenticity and simplicity, we offer a unique experience that
                allows our guests to truly connect with nature and disconnect from
                the stresses of everyday life. Plus, our location in Nordeste is one
                of the most beautiful and unspoiled areas of S.Miguel island,
                making it the perfect place to explore and discover the magic of the
                Azores.
            </m.div>
          </div>
          
        </div>
      </m.section>
    );
}

export default About;