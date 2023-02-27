import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const Whishlist = () => {
  return (
    <div className="w-full h-[48vh] mt-[10vh]">
      <div className="w-[95%] mx-auto h-12  relative">
        <button
          className="bg-black text-white font-bold h-full px-4 rounded  absolute right-0"
          disabled
        >
          Bulk Add To Cart
        </button>
      </div>
      <div className="w-[95%] h-[6vh] border-[1px] mt-[4vh] border-gray-400 mx-auto grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1 ">
        <div className="border-[1px] border-gray-300 flex justify-center items-center">
          <div className="w-[10px] h-[10px] border-[1px] border-black"></div>
        </div>
        <div className="border-[1px] border-gray-300 text-gray-400 flex justify-center items-center font-bold">
          Image
        </div>
        <div className="border-[1px] border-gray-300 text-gray-400 flex justify-center items-center font-bold">
          Title
        </div>
        <div className="border-[1px] border-gray-300 text-gray-400 flex justify-center items-center font-bold">
          Sku
        </div>
        <div className="border-[1px] border-gray-300"></div>
      </div>
      <div className="w-[18vw] my-5 mx-auto flex justify-between items-center text-lg">
        <p>Share complete wishlist on: </p>
        <span>
          <IoLogoWhatsapp className="text-green-700 text-2xl cursor-pointer" />
        </span>
      </div>
    </div>
  );
};

export default Whishlist;
