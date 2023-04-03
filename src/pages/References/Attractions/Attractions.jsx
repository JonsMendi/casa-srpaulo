import React from 'react';
import { useNavigate } from 'react-router';
import { motion as m } from "framer-motion";
import { titleVariant } from "../../../utilities/motion-framer";
import { styles } from "../../../utilities/style";


function Attractions() {
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
                One of the top attractions in Nordeste is the Parque Natural da
                Ribeira dos Caldeirões. This beautiful park features a series of
                waterfalls and cascades, as well as lush green vegetation and
                scenic hiking trails. Visitors can take a leisurely stroll
                through the park, enjoy a picnic, or even take a dip in one of
                the natural pools.
              </p>
              <p className="mb-4">
                Another must-see attraction in Nordeste is the Farol da Ponta do
                Arnel lighthouse. This historic lighthouse was built in 1876 and
                is located on the easternmost point of São Miguel Island. It
                offers stunning views of the coastline and the Atlantic Ocean,
                and visitors can climb to the top for an even better view.
              </p>
              <p className="mb-4">
                For those interested in history and culture, Nordeste has
                several fascinating museums and churches to explore. The Museum
                of Sacred Art is located in the historic town of Nordeste and
                features an impressive collection of religious artifacts,
                including paintings, sculptures, and vestments. The Church of
                Nossa Senhora da Conceição is also worth a visit, with its
                beautiful baroque architecture and stunning interior.
              </p>
              <p className="mb-4">
                Finally, for those who love outdoor activities, Nordeste offers
                plenty of options. In addition to hiking and exploring the
                natural park, visitors can also go swimming, surfing, and scuba
                diving in the nearby beaches. Fishing and whale watching tours
                are also available, providing a unique opportunity to see these
                majestic creatures up close.
              </p>
              <p>
                Overall, Nordeste is a wonderful destination for nature lovers,
                history buffs, and adventure seekers alike. With its stunning
                natural beauty, rich cultural heritage, and many outdoor
                activities, there is something for everyone to enjoy in this
                charming municipality.
              </p>
            </m.div>
          </div>
        </div>
      </m.section>
    );
}

export default Attractions;