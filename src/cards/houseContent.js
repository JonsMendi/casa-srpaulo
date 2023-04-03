import { motion as m } from "framer-motion";
import { fadeInVariant } from "../utilities/motion-framer";

const HouseContentCard = ({ index, name, icon } ) => (
  <div className="xs:w-[20px] border-2 border-tertiary bg-[#DAD15F]">
    <m.div
      variants={fadeInVariant("right", "spring", index * 0.1, 0.2)}
      className="w-full p-[1px] rounded-[20px]"
    >
      <div className="bg-tertiary bg-opacity-20 py-8 px-12 min-h-[150px] flex justify-evenly items-center flex-col" >
        <img
          src={icon}
          alt="house contentsS"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-black text-[20px] font-bold text-center">{name}</h3>
      </div>
    </m.div>
  </div>
);

export default HouseContentCard;