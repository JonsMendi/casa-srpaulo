import React from 'react';
import { useNavigate } from 'react-router';
import { motion as m } from "framer-motion";
import { titleVariant } from "../../../utilities/motion-framer";
import { BsChevronCompactLeft } from 'react-icons/bs';
import { styles } from "../../../utilities/style";
import { useTranslation } from "react-i18next";

function Gastronomy() {
    const navigator = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="min-h-screen">
        <div className="flex flex-col justify-center items-center h-screen">
          <m.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0 bg-white border-4 border-[#0B3B2D] rounded-[20px]`}
            id="references"
          >
            <div
              className={` inset-0 top-[100px]  max-w-8xl mx-auto ${styles.paddingX} items-start gap-5`}
            >
              <m.div
                variants={titleVariant()}
                className="flex flex-col items-start"
              >
                <h2 className={`${styles.sectionHeadText} text-center`}>
                {t("nordeste.gastronomy.title")}.
                </h2>
              </m.div>
              <div className="flex">
                <m.div
                  variants={titleVariant()}
                  className="mt-4 mr-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
                >
                  <p className="mb-4">
                  One of Nordeste's top attractions is Parque Natural da Ribeira dos Caldeirões, 
                  a beautiful park with waterfalls, hiking trails, and natural pools for swimming.
                  </p>
                  <p className="mb-4">
                  Another must-see landmark is the Farol da Ponta do Arnel lighthouse, 
                  built in 1876 and offering stunning views of the coastline and Atlantic Ocean.
                  </p>
                  <p className="mb-4">
                  The town of Nordeste has several fascinating museums and churches, 
                  including the Museum of Sacred Art with its collection of religious artifacts, and the Church of Nossa Senhora da Conceição with its beautiful baroque architecture.
                  </p>
                  <p className="mb-4">
                    Finally, for those who love outdoor activities, Nordeste offers
                    plenty of options. In addition to hiking and exploring the
                    natural park, visitors can also go swimming in the nearby beaches or pools. 
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
                <div onClick={() => navigator(-1)} className="flex border-2 mt-4 border-tertiary px-6 py-2 cursor-pointer hover:bg-tertiary hover:text-white max-w-[90px] justify-center">
                  <div className="flex items-center hover:text-white"><BsChevronCompactLeft size={20} /> Back</div>
                </div>
            </div>
          </m.section>
        </div>
      </div>
    );
}

export default Gastronomy;