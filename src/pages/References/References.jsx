import React from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";
import {useNavigate} from 'react-router';
import { motion as m } from "framer-motion";
import { titleVariant } from "../../utilities/motion-framer";
import { styles } from "../../utilities/style";
import { useTranslation } from "react-i18next";

function References  ()  {
    const navigator = useNavigate();
    const { t } = useTranslation();

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
              {t("nordeste.subtitle")}
            </p>
            <h2 className={`${styles.sectionHeadText} text-center`}>
              {t("nordeste.title")}
            </h2>
          </m.div>
          <div className="flex">
            <m.div
              variants={titleVariant()}
              className="mt-4 mr-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
            >
              <div className="flex flex-column items-center">
                <div className="text-edit">
                  <span className="font-bold">{t("nordeste.activities.title")}: </span>
                  {t("nordeste.activities.description")}
                </div>
                <div>
                  <AiOutlinePlusCircle
                    fill="#94AB8A"
                    className="mt-3 cursor-pointer transition-all duration-300 transform hover:scale-110"
                    size={28}
                    onClick={() => navigator("/activities")}
                  />
                </div>
              </div>
            </m.div>

            <m.div
              variants={titleVariant()}
              className="mt-4 mr-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
            >
              <div className="flex flex-column items-center">
                <div className="text-edit">
                  <span className="font-bold">{t("nordeste.gastronomy.title")}: </span>
                  {t("nordeste.gastronomy.description")}
                </div>
                <div>
                  <AiOutlinePlusCircle
                    fill="#94AB8A"
                    className="mt-3 cursor-pointer transition-all duration-300 transform hover:scale-110"
                    size={28}
                    onClick={() => navigator("/gastronomy")}
                  />
                </div>
              </div>
            </m.div>

            <m.div
              variants={titleVariant()}
              className="mt-4 mr-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
            >
              <div className="flex flex-column items-center">
                <div className="text-edit">
                  <span className="font-bold">{t("nordeste.attractions.title")}: </span>
                  {t("nordeste.attractions.description")}
                </div>
                <div>
                  <AiOutlinePlusCircle
                    fill="#94AB8A"
                    className="mt-3 cursor-pointer transition-all duration-300 transform hover:scale-110"
                    size={28}
                    onClick={() => navigator("/attractions")}
                  />
                </div>
              </div>
            </m.div>

          </div>
        </div>
      </m.section>
    );
};

export default References;