import { motion as m } from "framer-motion";
import { fadeInVariant } from "../utilities/motion-framer";
import { FaBed, FaWifi, FaLaptopHouse, FaMountain } from "react-icons/fa";
import { BsTree, BsWater } from "react-icons/bs";
import { TbToolsKitchen } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { IoCar } from "react-icons/io5";
import { GiWashingMachine, GiBarbecue } from "react-icons/gi";
import { MdOutlineMicrowave } from "react-icons/md";
import { useTranslation } from "react-i18next";

const HouseContentCard = ({ index, name }) => {
  const { t } = useTranslation();
  let IconComponent;

  switch (name) {
    case "Wi-fi":
      IconComponent = FaWifi;
      break;
    case "Remote work":
      IconComponent = FaLaptopHouse;
      break;
      case "Kitchen":
      IconComponent = TbToolsKitchen;
    break;
    case "TV by cable":
      IconComponent = FiMonitor;
      break;
    case "Car Parking":
      IconComponent = IoCar;
      break;
    case "Washing Machine":
      IconComponent = GiWashingMachine;
      break;
    case "Microwave":
      IconComponent = MdOutlineMicrowave;
      break;
    case "Garden":
      IconComponent = BsTree;
      break;
    case "Barbecue":
      IconComponent = GiBarbecue;
      break;
    case "Mountain view":
      IconComponent = FaMountain;
      break;
    case "Sea view":
      IconComponent = BsWater;
      break;
    default:
      IconComponent = FaBed;
  }

  return (
    <div className="xs:w-[150px] w-full border-4 rounded-full border-tertiary">
      <m.div
        variants={fadeInVariant("right", "spring", index * 0.2, 0.2)}
        className="w-full rounded-full bg-tertiary"
      >
        <div className="bg-tertiary rounded-full py-6 px-12 min-h-[150px] flex justify-evenly items-center flex-col">
          <IconComponent className="w-12 h-12 text-black" />
          <h3 className="text-white text-[15px] font-bold text-center">{t(`content.${name}`)}</h3>
        </div>
      </m.div>
    </div>
  );
};

export default HouseContentCard;
