import React from "react";
import { motion as m } from "framer-motion";
import { entranceVariant } from "../../utilities/motion-framer";
import { styles } from "../../utilities/style";
import { Link } from "react-scroll";
import "./Home.css";

function Home() {
  return (
    <section className="home-container" id="home">
      <div className="home-content">
        <div className="all-content-wrapper"></div>
        <m.section
          initial="hidden"
          animate="show"
          variants={entranceVariant}
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-12 border-2 border-[#0B3B2D] backdrop-filter backdrop-blur-[2px] transition-all duration-1000 ease-out transform`}
        >
          <m.div>
            <h1
              className={`${styles.sectionHeadText}font-heading text-center text-white`}
            >
              Casa do Sr.Paulo
            </h1>
            <p
              className={`${styles.sectionSubText} text-center text-[#94AB8A]`}
            >
              Embrace Nature in the Heart of Nordeste, Azores
            </p>
          </m.div>
          <div className="button-wrapper mt-6 flex justify-center">
            <Link to="contact" spy={true} smooth={true} offset={100} duration={900}>
              <button 
                className="bg-[#FFFF8F] text-black px-6 py-3 font-semibold rounded-lg hover:bg-opacity-80 transition duration-300 ease-in-out"
              >
                  Book
              </button>
            </Link>
          </div>
        </m.section>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link to="about" spy={true} smooth={true} offset={10} duration={100}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2 hover:cursor-pointer">
            <m.div
              animate={{
                y: [0, 25, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Home;
