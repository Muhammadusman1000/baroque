import React from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxTextAlignJustify } from "react-icons/rx";
import { VscMailRead } from "react-icons/vsc";

const AdminHeader = () => {
  return (
    <div className=" flex justify-center items-center h-16 border-black">
      <div className="w-[98%] mx-auto flex justify-between border-b-[1px] border-gray-300 p-2">
        <div className="w-[25%] flex justify-between items-center">
          <AiOutlineAlignLeft className="text-[20px]" />

          <div className="text-[17px]">Dashboard</div>
          <div className="text-[17px]">Users</div>
          <div className="text-[17px]">Setting</div>
        </div>

        <div className="flex w-[15%] justify-between items-center">
          <IoMdNotificationsOutline className="text-[20px]" />
          <RxTextAlignJustify className="text-[20px]" />
          <VscMailRead className="text-[20px]" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2pgZfPK9zGKqLL3K_w1FcgTyO_PRzmXtAQ&usqp=CAU"
            alt=""
            className="w-[30px] h-[30px] rounded-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
