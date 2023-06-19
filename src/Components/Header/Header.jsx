import React from "react";
import { GrMail } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import logo from "../../assets/image/logo.png";

const Header = () => {
  return (
    <div className="">
      <div className="bg-primary text-[#dcedc8]">
        <div className=" container max-w- mx-auto">
          <div className="grid grid-cols-3 justify-items-stretch border-b border-[rgba(241,248,233,.2)] font-semibold px-2">
            <div className="">
              <a
                href="mailto:info@smartaffis.com"
                className="flex  items-center gap-1"
              >
                <GrMail></GrMail> info@smartaffis.com
              </a>
            </div>
            <div className="">
              <p className="text-center ">Welcome To SMARTAFFIS</p>
            </div>
            <div className="">
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
