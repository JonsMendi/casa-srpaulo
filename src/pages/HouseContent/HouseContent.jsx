import React from "react";
import { BsWifi, BsTree, BsWater } from "react-icons/bs";
import { TbToolsKitchen } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { IoCar } from "react-icons/io5";
import { GiWashingMachine, GiBarbecue } from "react-icons/gi";
import { MdOutlineMicrowave } from "react-icons/md";
import { IoIosGitNetwork } from "react-icons/io";
import { FaMountain } from "react-icons/fa";
import "./HouseContent.css";

function HouseContent() {
  return (
    <section className="about-container">
      <div className="about-content" id="about">
        <h1 className="house-content-title">House Content</h1>
        <div className="house-content-wrapper">
          <div className="house-content-ind">
            <BsWifi className="house-content-icons" size={50} />
            <p>Wi-fi</p>
          </div>
          <div className="house-content-ind">
            <IoIosGitNetwork className="house-content-icons" size={50} />
            <p>Remote work possibility</p>
          </div>
          <div className="house-content-ind">
            <TbToolsKitchen className="house-content-icons" size={50} />
            <p>Kitchen</p>
          </div>
          <div className="house-content-ind">
            <FiMonitor className="house-content-icons" size={50} />
            <p>TV by cable</p>
          </div>
          <div className="house-content-ind">
            <IoCar className="house-content-icons" size={50} />
            <p>Car Parking</p>
          </div>
          <div className="house-content-ind">
            <GiWashingMachine className="house-content-icons" size={50} />
            <p>Washing Machine</p>
          </div>
          <div className="house-content-ind">
            <MdOutlineMicrowave className="house-content-icons" size={50} />
            <p>Microwave</p>
          </div>
          <div className="house-content-ind">
            <BsTree className="house-content-icons" size={50} />
            <p>Garden</p>
          </div>
          <div className="house-content-ind">
            <GiBarbecue className="house-content-icons" size={50} />
            <p>Barbecue</p>
          </div>
        </div>
        <div className="house-content-wrapper">
          <div className="house-content-ind">
            <FaMountain className="house-content-icons" size={50} />
            <p>Mountain view</p>
          </div>
          <div className="house-content-ind">
            <BsWater className="house-content-icons" size={50} />
            <p>Sea view</p>
          </div>
          <div className="house-content-ind">
            <FiMonitor className="house-content-icons" size={50} />
            <p>TV by cable</p>
          </div>
          <div className="house-content-ind">
            <IoCar className="house-content-icons" size={50} />
            <p>Car Parking</p>
          </div>
          <div className="house-content-ind">
            <GiWashingMachine className="house-content-icons" size={50} />
            <p>Washing Machine</p>
          </div>
          <div className="house-content-ind">
            <MdOutlineMicrowave className="house-content-icons" size={50} />
            <p>Microwave</p>
          </div>
          <div className="house-content-ind">
            <BsTree className="house-content-icons" size={50} />
            <p>Garden</p>
          </div>
          <div className="house-content-ind">
            <GiBarbecue className="house-content-icons" size={50} />
            <p>Barbecue</p>
          </div>
          <div className="house-content-ind">
            <IoIosGitNetwork className="house-content-icons" size={50} />
            <p>Remote work</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HouseContent;
