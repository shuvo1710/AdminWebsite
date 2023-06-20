import React from "react";
import { GrMail } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import logo from "../../assets/image/logo.png";

import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="bg-primary text-[#dcedc8]">
        <div className=" container max-w- mx-auto">
          <div className="flex justify-between grid-cols-3 justify-items-stretch border-b border-[rgba(241,248,233,.2)] font-semibold px-4">
            <div className="">
              <a
                href="mailto:info@smartaffis.com"
                className="  items-center gap-1 hidden lg:flex"
              >
                <GrMail></GrMail> info@smartaffis.com
              </a>
              <div className=" lg:hidden block">
                <AiOutlineMenu className="text-xl" />
              </div>
            </div>
            <div className=" hidden sm:flex w-full justify-center">
              <p className="text-center ">Welcome To SMARTAFFIS</p>
            </div>
            <div className="w-[100px]">
              <p className="flex items-center gap-1 justify-end">
                <BiUser></BiUser>
                SING IN
              </p>
            </div>
          </div>
          <div className="py-6">
            <h1 className="text-[28px] text-white font-bold">SMARTAFFIS</h1>
          </div>
        </div>
      </div>

      <div className=" flex justify-center shadow-[#00000066] shadow pb-2">
        <img className="w-[120px]" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
