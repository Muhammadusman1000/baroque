import React from "react";
import { SiSupabase } from "react-icons/si";
import { RiSendPlaneLine } from "react-icons/ri";
import { AiOutlinePieChart } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineWidgets } from "react-icons/md";

const Component = () => {
  return (
    <div>
      <h1 className="h-auto py-3 text-[#adaaaa]  text-xs">COMPONENTS</h1>
      <div className="text-[#adaaaa] hover:text-white flex justify-between items-center p-1">
        <div className="w-[10%]">
          <SiSupabase />
        </div>
        <div className="text-[#adaaaa] hover:text-white cursor-pointer text-[18px] w-[85%]">
          Base
        </div>
      </div>
      <div className="text-[#adaaaa] hover:text-white flex justify-between items-center  p-1">
        <div className="w-[10%]">
          <RiSendPlaneLine />
        </div>
        <div className="text-[#adaaaa] hover:text-white cursor-pointer text-[18px] w-[85%]">
          Buttons
        </div>
      </div>

      <div className="text-[#adaaaa] hover:text-white flex justify-between items-center  p-1">
        <div className="w-[10%]">
          <AiOutlinePieChart />
        </div>
        <div className="text-[#adaaaa] hover:text-white cursor-pointer text-[18px] w-[85%]">
          Charts
        </div>
      </div>

      <div className="text-[#adaaaa] hover:text-white flex justify-between items-center  p-1">
        <div className="w-[10%]">
          <FaWpforms />
        </div>
        <div className="text-[#adaaaa] hover:text-white cursor-pointer text-[18px] w-[85%]">
          Forms
        </div>
      </div>

      <div className="text-[#adaaaa] hover:text-white flex justify-between items-center  p-1">
        <div className="w-[10%]">
          <CiStar />
        </div>
        <div className="text-[#adaaaa] hover:text-white cursor-pointer text-[18px] w-[85%]">
          Icons
        </div>
      </div>

      <div className="text-[#adaaaa] hover:text-white flex justify-between items-center  p-1">
        <div className="w-[10%]">
          <IoIosNotificationsOutline />
        </div>
        <div className="text-[#adaaaa] cursor-pointer hover:text-white text-[18px] w-[85%]">
          Notifications
        </div>
      </div>

      <div className="text-[#adaaaa] flex justify-between items-center hover:text-white p-1">
        <div className="w-[10%]">
          <MdOutlineWidgets />
        </div>
        <div className="text-[#adaaaa] cursor-pointer hover:text-white text-[18px] w-[85%]">
          Widgets
        </div>
      </div>
    </div>
  );
};

export default Component;
