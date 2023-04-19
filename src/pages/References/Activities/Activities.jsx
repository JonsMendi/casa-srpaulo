import { motion as m } from "framer-motion";
import React from 'react';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router';
import { titleVariant } from "../../../utilities/motion-framer";
import { styles } from "../../../utilities/style";


function Activities() {
    const navigator = useNavigate();

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
                  Activities.
                </h2>
              </m.div>
              <div className="flex">
                <m.div
                  variants={titleVariant()}
                  className="mt-4 mr-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
                >
                  <p className="mb-4">
                  One of the most popular activities to do in Nordeste is hiking. 
                  There are several trails that wind through the lush green hills and forests, 
                  offering stunning views of the coastline and the Atlantic Ocean. 
                  The Serra da Tronqueira, Lomba D'El Rei and Salto da Farinha trail is a particularly scenic option. 
                  Never forget the Pico da Vara trail,
                  the highest mountain in S. Miguel. Also, try to not let pass the opportunity to 
                  watch one of the best sunrises of your life in Miradouro da Ponta da Madrugada. 
                  Used to be a very common activity for locals, starting with a barbecue in the place, 
                  and staying overnight to watch the sun rising. But if you are a hiking lover, keep the following website in your pocket:
                  <div>
                    <a className="text-tertiary" href="https://trails.visitazores.com/en">https://trails.visitazores.com/</a>
                  </div>
                  
                  </p>
                  <p className="mb-4">
                    For those who enjoy water sports, Nordeste also offers some
                    great options. You can go swimming in the natural pools of
                    Ribeira do Guilherme or surfing in some of
                    the nearby beaches, such as Praia do Lombo Gordo. 
                    Be aware that this particular beach becomes without sun after 4pm regarding the high coast. 
                    Choose a sunny day, prepare some sandwiches, go around 10am, and enjoy the Praia do Lombo Gordo 
                    and is natural surroundings. Also, in recent years canyoning became very popular sport to 
                    enjoy the beautiful creeks around.
                  </p>
  
                  <p className="mb-4">
                    Overall, Nordeste is a wonderful destination for nature
                    lovers, adventure seekers, and culture enthusiasts alike.
                    With its stunning natural beauty and rich cultural heritage,
                    there is something for everyone to enjoy in this charming
                    municipality.
                  </p>
                </m.div>
              </div>
                <div onClick={() => navigator(-1)} className="flex border-2 border-tertiary px-6 py-2 cursor-pointer hover:bg-tertiary hover:text-white max-w-[90px] justify-center">
                  <div className="flex items-center hover:text-white"><BsChevronCompactLeft size={20} /> Back</div>
                </div>
            </div>
          </m.section>
        </div>
      </div>
    );
}

export default Activities;