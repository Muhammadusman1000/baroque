import React from "react";
import { NavLink } from "react-router-dom";

const Cart = (props) => {
  const { cartItems, handleAddProduct } = props;
  return (
    <div className="w-full h-[57vh] flex justify-center items-center flex-col">
      <p className="text-5xl  mt-[-30vh] mb-5">
        {cartItems.length === 0 && <div>Empity Cart Items</div>}
      </p>
      <div>
        {cartItems.map((item) => {
          <div key={item.id}>
            <img src={item.Imgsrc} alt="" />
            <div>{item.Discription}</div>
            <div>{item.Price}</div>
          </div>;
        })}
      </div>
      <p className="text-2xl ">Have an account?</p>
      <p className="">
        <NavLink to="/login">
          <span className="hover:underline hover:text-black text-xl text-gray-400">
            Login
          </span>
        </NavLink>
        to check out faster
      </p>
    </div>
  );
};

export default Cart;
