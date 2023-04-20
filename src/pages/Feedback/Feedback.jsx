import { styles } from "../../utilities/style";
import { testimonials } from "../../utilities/data";
import FeedbackCard from "../../cards/feedbackCard";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Feedbacks = () => {
  const [firstCardIndex, setFirstCardIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const prev = () => {
    setFirstCardIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setFirstCardIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const getDisplayedCards = () => {
    if (windowWidth < 768) {
      return [testimonials[firstCardIndex]];
    } else if (windowWidth < 1024) {
      return [
        testimonials[firstCardIndex],
        testimonials[(firstCardIndex + 1) % testimonials.length],
      ];
    } else {
      return [
        testimonials[firstCardIndex],
        testimonials[(firstCardIndex + 1) % testimonials.length],
        testimonials[(firstCardIndex + 2) % testimonials.length],
      ];
    }
  };

  const displayedCards = getDisplayedCards();

  return (
    <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <div className={`mt-12 rounded-[20px]`}>
        <div className={`rounded-2xl ${styles.padding} min-h-[300px]`}>
          <div>
            <p className={`${styles.sectionSubText} text-tertiary`}>{t("feedback.subtitle")}</p>
            <h2 className={styles.sectionHeadText}>{t("feedback.title")}</h2>
          </div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex justify-center flex-nowrap gap-7 overflow-x-hidden min-h-[500px]`}>
          {displayedCards.map((feedback, index) => (
            <FeedbackCard key={feedback.name} index={index} {...feedback} />
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          <BsChevronCompactLeft className="group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={prev} size={40} />
          <BsChevronCompactRight className="group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={next} size={40} />
        </div>
      </div>
    </section>
  );
};

export default Feedbacks
