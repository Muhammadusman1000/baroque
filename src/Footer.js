import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#F6F6F6]  flex flex-col justify-center items-center mt-10 py-8 px-6 ">
      <div className="w-full flex justify-center items-center lg:flex-row md:flex-row sm:flex-col xs:flex-col sm:mt-3 lg:text-[12px] md:text-[12px] sm:text-[15px] xs:text-[15px]">
        <div className="text-center px-3  sm:mt-3  xs:mt-2`cursor-pointer">
          WHO WE ARE
        </div>
        <p className=" text-center px-3 xs:border-none sm:mt-3 xs:mt-2 cursor-pointer">
          CONTACT US
        </p>
        <p className="  text-center px-3 xs:border-none sm:mt-3 xs:mt-2 cursor-pointer">
          OUR RESPOSIBILITY
        </p>
        <p className=" text-center px-3 xs:border-none sm:mt-3 xs:mt-2 cursor-pointer">
          EXCHANGE AND REFUND
        </p>
        <p className="text-center px-3 xs:border-none sm:mt-3 xs:mt-2 cursor-pointer">
          EXCHANGE FORM
        </p>
        <p className=" text-center px-3 xs:border-none sm:mt-3 xs:mt-2 cursor-pointer">
          SHIPPING
        </p>
        <p className="  text-center px-3 xs:border-none sm:mt-3 xs:mt-2 cursor-pointer">
          LOOK BOOK
        </p>
      </div>

      <div className="w-full flex justify-center items-center lg:flex-row md:flex-row sm:flex-col xs:flex-col sm:mt-3 lg:text-[12px] md:text-[12px] sm:text-[15px] xs:text-[15px] sm:border-none">
        <p className=" text-center px-3 xs:border-none sm:mt-3 xs:mt-2 cursor-pointer ">
          TRACK YOUR ORDER
        </p>
        <p className=" text-center px-3 xs:border-none sm:mt-3 xs:mt-2 cursor-pointer">
          ORDER CANCELLATION FORM
        </p>
        <p className="text-center px-3 xs:border-none sm:mt-3 xs:mt-2 cursor-pointer">
          SUTOMISED STICHING
        </p>
        <p className=" text-center px-3 xs:border-none sm:mt-3 xs:mt-2 cursor-pointer">
          CAREER
        </p>
        <p className="text-center px-3 xs:border-none sm:mt-3 xs:mt-2 cursor-pointer">
          LEGAL
        </p>
        <p className=" text-center mt-2 px-3 xs:mt-2 cursor-pointer ">FAQ'S</p>
      </div>
    </div>
  );
}
export default Footer;
