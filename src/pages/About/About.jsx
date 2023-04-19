import React from "react";
import { motion as m } from "framer-motion";
import { titleVariant } from "../../utilities/motion-framer";
import { styles } from "../../utilities/style";
import { useTranslation } from "react-i18next";

function About () {
  const { t } = useTranslation();

    return (
      <m.section
  id="about"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-20`}
>
  <div
    className={`inset-0 top-[100px]  max-w-8xl mx-auto ${styles.paddingX} items-start gap-5`}
  >
    <m.div variants={titleVariant()} className="flex flex-col items-start">
      <p className={`${styles.sectionSubText} text-center`}>
        {t("about.subtitle")}
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        {t("about.title")}
      </h2>
    </m.div>
    <div className="flex flex-col lg:flex-row">
      <m.div
        variants={titleVariant()}
        className="mt-4 mr-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
      >
        <span className="font-bold">{t("about.What_are_we.title")} </span>
        {t("about.What_are_we.description")}
      </m.div>
      <m.div
        variants={titleVariant()}
        className="mt-4 mr-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
      >
        <span className="font-bold">{t("about.What_we_offer.title")} </span>
        {t("about.What_we_offer.description")}
      </m.div>
      <m.div
        variants={titleVariant()}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
      >
        <span className="font-bold">{t("about.Why_us.title")} </span>
        {t("about.Why_us.description")}
      </m.div>
    </div>
  </div>
</m.section>


    );
}

export default About;