import React from "react";
import NavigationSlider from "./NavigationSlider";
import { CiSearch } from "react-icons/ci";
import { BsHeart } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { BsHandbag } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { TfiClose } from "react-icons/tfi";

function Navbar1() {
  const [hideseachBox, sethideseachBox] = useState(false);
  const [navebar, setnavebar] = useState(false);
  const chnageBackground = () => {
    if (window.scrollY > 5) {
      setnavebar(true);
    } else {
      setnavebar(false);
    }
  };

  window.addEventListener("scroll", chnageBackground);

  const searchbox = () => {
    sethideseachBox(!hideseachBox);
  };
  return (
    <div>
      <div className={hideseachBox ? "main-search-bar" : "hidesearch"}>
        <div className="w-[25vw] relative h-[5vh] border-[1px] border-black">
          <div className="w-full absolute h-3 text-[11px] tracking-widest ml-3">
            Search
          </div>
          <div className="w-full h-5/6 flex justify-between items-center">
            <input
              type="search"
              className="w-5/6 mt-2 ml-3 mb-0 h-3/6 outline-0 tracking-widest"
            />
            <CiSearch className="text-xl mt-2 mr-2" />
          </div>
        </div>
        <TfiClose
          className="w-5 h-5 cursor-pointer ml-5"
          onClick={() => sethideseachBox(!hideseachBox)}
        />
      </div>
      <div>
        <div className={navebar ? "header headerBackgrund" : "header"}>
          <div>
            <NavigationSlider />
          </div>
          <div>
            <NavLink to="/">
              <img src="logo.png" alt="logo_image" className="w-36 h-16 " />
            </NavLink>
          </div>
          <div className="w-40 mr-2 h-16 flex items-center justify-around">
            <CiSearch
              className="cursor-pointer text-[28px]"
              onClick={searchbox}
            />
            <NavLink to="Whishlist">
              <BsHeart className="cursor-pointer text-xl" />
            </NavLink>
            <NavLink to="/Login">
              <RxPerson className="cursor-pointer text-2xl hover:text-black" />
            </NavLink>
            <NavLink to="/cart">
              <BsHandbag className="text-[22px] cursor-pointer" />
            </NavLink>
            <span>
              <p>(0)</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar1;
