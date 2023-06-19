import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import MenuBar from "../MenuBar/MenuBar";
import { Outlet } from "react-router-dom";

const MainDashboard = () => {
  return (
    <div className="container mx-auto mt-5 ">
      <div className=" bg-[#F2F2F2] py-2 flex items-end gap-2 px-4 rounded-md">
        <div className=" flex items-center gap-1 ">
          <BiHomeAlt className="text-xl" /> <p>Homepage</p>
          <MdKeyboardDoubleArrowRight className="text-xl mt-1" />
        </div>

        <div className=" flex items-center gap-1 ">
          <p>Account Settings</p>
          <MdKeyboardDoubleArrowRight className="text-xl mt-1" />
        </div>
        <div className=" flex items-center gap-1 ">
          <p className="font-bold">DASHBOARD</p>
        </div>
      </div>

      {/* dashboard Section  */}
      <div className=" flex  mt-8">
        {/* menubar  */}
        <div className=" w-[30%]">
          <MenuBar />
        </div>

        {/* dashboard */}
        <div className="w-[70%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
