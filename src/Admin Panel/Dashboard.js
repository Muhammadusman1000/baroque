import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div>
      <div className="  text-[#adaaaa] h-full relative py-3 mt-3 pl-1 flex justify-between items-center">
        <div className="w-[10%]">
          <AiOutlineDashboard />
        </div>
        <div className="w-[85%] cursor-pointer text-sm ">Dashboard</div>
      </div>
    </div>
  );
};

export default Dashboard;
