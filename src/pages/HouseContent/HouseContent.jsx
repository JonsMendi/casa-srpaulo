import { motion as m } from "framer-motion";
import React from "react";
import HouseContentCard from "../../cards/houseContent";
import { houseContent } from "../../utilities/data";
import { titleVariant } from "../../utilities/motion-framer";
import { styles } from "../../utilities/style";
import { useTranslation } from "react-i18next";

function HouseContent() {
  const { t } = useTranslation();

  return (
    <m.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }} className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-12 bg-white border-4 border-[#0B3B2D] rounded-[20px]`}>
        <m.div variants={titleVariant()}>
          <p className={`${styles.sectionSubText} text-center text-[#94AB8A]`}>{t("content.subtitle")}</p>
          <h1 className={`${styles.sectionHeadText} text-center text-black`}>{t("content.title")}</h1>
        </m.div>
          <div className="mt-20 flex justify-center flex-wrap gap-10">
          {houseContent.map((service, index) => (
            <HouseContentCard key={service.name} index={index} {...service} />
          ))}
          </div>
    </m.section>
  );
}

export default HouseContent;
