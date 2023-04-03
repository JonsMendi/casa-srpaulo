import React from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import {useNavigate} from 'react-router';
import { motion as m } from "framer-motion";
import { titleVariant } from "../../utilities/motion-framer";
import { styles } from "../../utilities/style";

function References  ()  {
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
            <p className={`${styles.sectionSubText} text-center`}>
              What to do in
            </p>
            <h2 className={`${styles.sectionHeadText} text-center`}>
              Nordeste.
            </h2>
          </m.div>
          <div className="flex">
            <m.div
              variants={titleVariant()}
              className="mt-4 mr-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
            >
              <span className="font-bold">Activities: </span>
              Nordeste is a beautiful municipality located on the easternmost
              point of the island of São Miguel in the Azores. It is known for
              its breathtaking natural beauty, charming small towns, and rich
              cultural heritage. Activities as hiking and swimming are very
              appreciated around. Click under to discover more
              <div>
                <AiOutlinePlusCircle
                  fill="#e9d856"
                  className="plus-icon"
                  size={28}
                  onClick={() => navigator("/activities")}
                />
              </div>
            </m.div>
            <m.div
              variants={titleVariant()}
              className="mt-4 mr-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
            >
              <span className="font-bold">Gastronomy: </span>The food was always
              the center of the attention of the families in Nordeste. This
              municipality that once was mostly populated by farmers and
              agricultores have a very reach gastronomy history that unfortunitely
              as been fading slowly over the years. Click under to discover more
              <div>
                <AiOutlinePlusCircle
                  fill="#e9d856"
                  className="plus-icon"
                  size={28}
                  onClick={() => navigator("/gastronomy")}
                />
              </div>
            </m.div>
            <m.div
              variants={titleVariant()}
              className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
            >
              <span className="font-bold">Attractions: </span>
              Nordeste is a small municipality full of history to have a look
              at. From Parque da Ribeira dos Caldeirões to the eldery people
              that love to share their histories (knowing portuguese is always
              plus!). Click under to discover more
              <div>
                <AiOutlinePlusCircle
                  fill="#e9d856"
                  className="plus-icon"
                  size={28}
                  onClick={() => navigator("/attractions")}
                />
              </div>
            </m.div>
          </div>
        </div>
      </m.section>
    );
};

export default References;