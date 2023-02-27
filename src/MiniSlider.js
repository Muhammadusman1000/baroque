import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function MiniSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="h-10 text-sm bg-black text-white text-center flex justify-center items-center sticky z-50"
      activeIndex={index}
      onSelect={handleSelect}
      controls={false}
      indicators={false}
    >
      <Carousel.Item>
        <p className="text-white font-bold">
          FREE SHIPPING IN PAKISTAN
          <NavLink to="ishipping">
            <span className="text-[#a1a09f]  font-bold cursor-pointer">
              (CLICK HERE)
            </span>
          </NavLink>
        </p>
      </Carousel.Item>
      <Carousel.Item>
        <p className="text-white font-bold">
          FREE INTERNATIONAL SHIPPING
          <span className="text-gray-500 cursor-pointer"> (CLICK HERE)</span>
        </p>
      </Carousel.Item>
      <Carousel.Item>
        <p className="text-white font-bold bg-black">
          FOR CANCEL YOUR ORDER
          <NavLink to="/cancellationform">
            <span className="text-gray-500 font-bold cursor-pointer">
              (CLICK HERE)
            </span>
          </NavLink>
        </p>
      </Carousel.Item>
      <Carousel.Item>
        <p className="text-white font-bold bg-black">
          FOR ANY QUERRY CONTACT US
          <span className="text-gray-500 font-bold cursor-pointer underline">
            03074500077
          </span>
        </p>
      </Carousel.Item>
      <Carousel.Item>
        <p className="text-white font-bold bg-black">
          EXCHANGE FORM
          <span className="text-gray-500  font-bold cursor-pointer">
            {" "}
            (CLICK HERE)
          </span>
        </p>
      </Carousel.Item>
    </Carousel>
  );
}

export default MiniSlider;
