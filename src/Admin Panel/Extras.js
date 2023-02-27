import React from "react";
import { CiStar } from "react-icons/ci";
import { MdOutlineRestorePage } from "react-icons/md";
import { SiHackthebox } from "react-icons/si";

const Theme = () => {
  return (
    <div className="text-[#adaaaa]">
      <h1 className="h-auto py-3 text-[#adaaaa] text-xs">EXTRAS</h1>
      <div className="text-[#adaaaa] hover:text-white flex justify-between items-center p-1">
        <div className="w-[10%]">
          <CiStar />
        </div>
        <div className="text-[#adaaaa] hover:text-white cursor-pointer text-[18px] w-[85%]">
          Page
        </div>
      </div>

      <div className="text-[#adaaaa] hover:text-white flex justify-between items-center  p-1">
        <div className="w-[10%]">
          <MdOutlineRestorePage />
        </div>
        <div className="text-[#adaaaa] hover:text-white cursor-pointer text-[18px] w-[85%]">
          Docs
        </div>
      </div>

      <div className="text-[#adaaaa] hover:text-white flex justify-between items-center  p-1">
        <div className="w-[10%]">
          <SiHackthebox />
        </div>
        <div className="text-[#adaaaa] hover:text-white cursor-pointer text-[18px] w-[85%]">
          UI Solution
        </div>
      </div>
    </div>
  );
};

export default Theme;
