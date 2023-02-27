import React from "react";
import LeftAside from "./LeftAside";
import AdminHeader from "./AdminHeader";
import AdminNav from "./AdminNav";
import Adminbody from "./Adminbody";

const AdminPanel = () => {
  return (
    <div>
      <div className="absolute w-full top-0 z-10 bg-white h-full">
        <div className="flex justify-between w-full">
          <LeftAside />
          <div className="w-full">
            <AdminHeader />
            <AdminNav />
            <Adminbody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
