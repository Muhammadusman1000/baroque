import React from "react";
import { NavLink } from "react-router-dom";

function Slider1() {
  return (
    <div className=" w-full lg:h-[82vh] md:h-[82vh] sm:h-[82vh] xs:h-[82vh] mt-[-10vh]">
      <NavLink to="/collection">
        <img
          src="https://cdn.shopify.com/s/files/1/2277/5269/files/main_slider_desktop2_9dca4b5c-de2f-4f62-9d5d-245eb15fe4fa_1500x.jpg?v=1669359276"
          alt=""
          className="w-full h-full"
        />
      </NavLink>
      <div className="flex justify-center items-center mt-10vh absolute w-full mt-[-10vh]">
        <button className="lg:w-40  h-[5vh] bg-black text-white">
          Shop Now
        </button>
      </div>
    </div>
  );
}
export default Slider1;
