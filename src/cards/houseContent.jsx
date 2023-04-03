import { motion as m } from "framer-motion";
import { fadeInVariant } from "../utilities/motion-framer";
import { FaBed, FaWifi, FaLaptopHouse, FaMountain } from "react-icons/fa";
import { BsTree, BsWater } from "react-icons/bs";
import { TbToolsKitchen } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { IoCar } from "react-icons/io5";
import { GiWashingMachine, GiBarbecue } from "react-icons/gi";
import { MdOutlineMicrowave } from "react-icons/md";

const HouseContentCard = ({ index, name }) => {
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
    <div className="xs:w-[20px] w-[220px] border-4 border-[#827e3c] rounded-full bg-[#DAD15F]">
      <m.div
        variants={fadeInVariant("right", "spring", index * 0.2, 0.2)}
        className="w-full p-[1px] rounded-full"
      >
        <div className="bg-tertiary bg-opacity-20 py-8 px-12 min-h-[150px] flex justify-evenly items-center flex-col rounded-full">
          <IconComponent className="w-16 h-16 text-black" />
          <h3 className="text-black text-[20px] font-bold text-center">{name}</h3>
        </div>
      </m.div>
    </div>
  );
};

export default HouseContentCard;
