import React from "react";
import Dashboard from "./Dashboard";
import Theme from "./Theme";
import Components from "./Components";
import Extras from "./Extras";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const LeftAside = () => {
  return (
    <div className="w-[20%]">
      <div className="w-full h-[100vh]  bg-[#142e57] text-[#adaaaa]">
        <NavLink to="/">
          <p className="text-center p-3 top-0 flex justify-center items-center h-18 text-2xl hover:text-white">
            BAROQUE
          </p>
        </NavLink>
        <div>
          <div className="bg-[#3b5175] mx-auto">
            <div className="ml-4">
              <Dashboard />
              <Theme />
              <Components />
              <Extras />
              <div className="flex w-full justify-end hover:text-white bottum-0 bg-[#3b5175] mt-4">
                <IoIosArrowBack className="h-6 text-xl " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftAside;
