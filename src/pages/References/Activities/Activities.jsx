import React from 'react';
import {useNavigate} from 'react-router';
import { motion as m } from "framer-motion";
import { titleVariant } from "../../../utilities/motion-framer";
import { styles } from "../../../utilities/style";


function Activities() {
    const navigator = useNavigate();

    return (
      <m.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-20`}
        id="references"
      >
        <div
          className={` inset-0 top-[100px]  max-w-8xl mx-auto ${styles.paddingX} items-start gap-5`}
        >
          <m.div
            variants={titleVariant()}
            className="flex flex-col items-start"
          >
            {/* <p className={`${styles.sectionSubText} text-center`}>
            What to do in
          </p> */}
            <h2 className={`${styles.sectionHeadText} text-center`}>
              Activities.
            </h2>
            <button onClick={() => navigator(-1)}>Back</button>
          </m.div>
          <div className="flex">
            <m.div
              variants={titleVariant()}
              className="mt-4 mr-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
            >
              <p className="mb-4">
                One of the most popular activities to do in Nordeste is hiking.
                There are several trails that wind through the lush green hills
                and forests, offering stunning views of the coastline and the
                Atlantic Ocean. The Serra da Tronqueira trail is a particularly
                scenic option, with its stunning vistas of the Nordeste
                coastline.
              </p>
              <p className="mb-4">
                For those who enjoy water sports, Nordeste also offers some
                great options. You can go swimming in the natural pools of
                Ribeira do Guilherme or explore the underwater world with a
                scuba diving excursion. Surfing is also popular in some of the
                nearby beaches, such as Praia do Lombo Gordo.
              </p>
              <p className="mb-4">
                Another popular activity in Nordeste is exploring the local
                culture and traditions. The municipality has a rich history that
                is reflected in its museums, churches, and traditional
                festivals. You can visit the Museum of Sacred Art, which houses
                an impressive collection of religious artifacts, or attend one
                of the many festivals throughout the year, such as the Holy
                Ghost Festivals, which feature colorful processions, traditional
                music, and delicious food.
              </p>
              <p className="mb-4">
                Overall, Nordeste is a wonderful destination for nature lovers,
                adventure seekers, and culture enthusiasts alike. With its
                stunning natural beauty and rich cultural heritage, there is
                something for everyone to enjoy in this charming municipality.
              </p>
            </m.div>
          </div>
        </div>
      </m.section>
    );
}

export default Activities;