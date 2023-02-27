import React, { useContext } from "react";
import Accordian from "./Accordian";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { BsHeart } from "react-icons/bs";
import ApiMainData from "./ApiMainData";

function Collection(props) {
  // const { handleAddProduct } = props;
  const MainData = useContext(ApiMainData);

  return (
    <div className="w-[90%] mx-auto z-0">
      <div className="w-full h-12 mt-10 mb-28 border-b-[1px] border-gray-400 flex justify-start pt-3 px-3 lg:block md:block sm:hidden xs:hidden">
        <p> Home / Colletion</p>
      </div>
      <div className="w-[100%] lg:flex lg:h-auto lg:flex-row md:flex-row md:h-full md:flex mx-auto text-center xs:flex-col xs:relative">
        <div className="lg:w-[25%] md:h-auto md:w-[25%] sm:h-[10vh] xs:h-auto xs:w-full ">
          <div className=" lg:border-b-[1px] md:border-b-[1px] sm:flex xs:flex xs:items-center sm:items-center sm:p-10 xs:p-10 md:mt-[-10vh] lg:mt-[-10vh]">
            <div className="xs:w-[17vw] sm:w-[20vw] lg:hidden ms:hidden sm:hidden sm:items-center xs:items-center xs:justify-between xs:flex  absolute ">
              <FilterAltOutlinedIcon />

              <div className=" text-2xl hover:underline cursor-pointer">
                Filter
              </div>
            </div>
          </div>
          <div className="lg:block md:block sm:hidden xs:hidden">
            <Accordian />
          </div>
        </div>
        <div className="w-[75%] h-auto  grid lg:grid-cols-3 gap-10 px-3 md:grid-cols-2 xs:w-full">
          {MainData.map((MainData, k) => {
            return (
              <div key={k}>
                <div>
                  <BsHeart className="absolute z-20 text-3xl ml-2 mt-3 cursor-pointer" />
                  <img src={MainData.Imgsrc} alt="" className="w-full h-full" />
                </div>
                <h1 className="h-[5vh] flex justify-center items-center">
                  {MainData.Discription}
                </h1>
                <p className="h-[2vh] flex justify-center items-center font-bold">
                  {MainData.Price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Collection;
