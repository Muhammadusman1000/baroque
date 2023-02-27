import React from "react";
import { CiDroplet } from "react-icons/ci";
import { RxPencil1 } from "react-icons/rx";

const Theme = () => {
  return (
    <div>
      <h1 className="h-auto py-3 text-[#adaaaa] text-xs">THEME</h1>
      <div className="text-[#adaaaa] hover:text-white flex justify-between items-center p-1">
        <div className="w-[10%]">
          <CiDroplet />
        </div>
        <div className="text-[#adaaaa] hover:text-white cursor-pointer text-md w-[85%]">
          Color
        </div>
      </div>
      <div className="text-[#adaaaa] hover:text-white flex justify-between items-center  p-1">
        <div className="w-[10%]">
          <RxPencil1 />
        </div>
        <div className="text-[#adaaaa] hover:text-white cursor-pointer w-[85%] text-md">
          Typography
        </div>
      </div>
    </div>
  );
};

export default Theme;
