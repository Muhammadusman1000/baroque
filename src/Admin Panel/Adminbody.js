import React from "react";
import BigChart from "./BigChart";
import Chartred from "./Chartred";

const Adminbody = () => {
  return (
    <div className="w-full h-full bg-gray-200 border-2 border-black">
      <div className="w-[95%] mx-auto my-3 grid lg:grid-cols-4 gap-4">
        <div className="border-2 h-36 border-black">
          <Chartred />
        </div>
        <div className="border-2 h-36 border-black"></div>
        <div className="border-2 h-36 border-black"></div>
        <div className="border-2 h-36 border-black"></div>
      </div>
      <div className="w-[95%] mx-auto border-2 border-red-400">
        <BigChart />
      </div>
    </div>
  );
};

export default Adminbody;
