import React, { useState } from "react";
import { MdCall } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import "./NavigationSlider.css";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const NavigationSlider = () => {
  const [active, setactive] = useState(false);
  const showslider = () => {
    setactive(!active);
  };

  return (
    <div>
      <div className="flex ml-6 ">
        <div className="cursor-pointer  " onClick={showslider}>
          <div className="w-8 h-1 border-b-2 my-1 border-black"></div>
          <div className="w-8 h-1 border-b-2 my-1 border-black"></div>
          <div className="w-8 h-1 border-b-2 my-1 border-black"></div>
        </div>
        <p className="pt-1 ml-2 text-[15px]">MENU</p>
      </div>
      <div className={active ? "display" : "hideslider"}>
        <div className="display">
          <div className="flex justify-between items-center w-[85%] mx-auto  h-20">
            <div className="text-xl font-medium pt-1">MENU</div>
            <div className="text-large font-medium pt-1 pr-4 text-gray-500">
              <AiOutlineClose
                className="cursor-pointer"
                onClick={() => setactive(!true)}
              />
            </div>
          </div>
          <div className="w-[85%] mx-auto ">
            <div>
              <ul>
                <li className="hover:bg-[#dbdbdb] my-2">COLLECTION</li>
                <li className="hover:bg-[#dbdbdb] my-2">SHAWLS</li>
                <li className="hover:bg-[#dbdbdb] my-2">UNSTICHED</li>
                <li className="hover:bg-[#dbdbdb] my-2">SPECIAL PRICES</li>
                <li className="hover:bg-[#dbdbdb] my-2">READY TO WEAR</li>
                <li className="hover:bg-[#dbdbdb] my-2">DUPATAS</li>
                <li className="hover:bg-[#dbdbdb] my-2">BOTTUMS</li>
              </ul>
            </div>
            <select>
              <option>PKR</option>
              <option>USD</option>
              <option>GBP</option>
            </select>
            <div className="mt-[45vh] w-[8vw] h-auto flex justify-between items-center border-2 font-medium">
              <p>HELPLINE :</p>
              <MdCall className="text-xl text-gray-500" />
              <IoLogoWhatsapp className=" text-xl text-green-500" />
            </div>
            <div className="w-[6vw] flex justify-between mt-10">
              <AiFillFacebook className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <FaTiktok className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationSlider;
