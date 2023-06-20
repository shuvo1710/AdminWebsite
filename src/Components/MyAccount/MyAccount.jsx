import React from "react";
import bannar from "../../assets/image/bannar.jpg";
import { Link } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";

const MyAccount = () => {
  return (
    <div className="p-3 py-5">
      <h1>Welcome Mr./Mrs. Md Shahidul Islam!</h1>
      <div className="mt-5  border-b border-[rgba(0,0,0,0.31)] shadow-md pb-2">
        <img className="w-full max-w-full" src={bannar} alt="" />
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
        <div className="  shadow-xl">
          <h1 className="text-[23px] shadow-md p-2 pl-5 font-semibold">
            Account Information
          </h1>
          <div className="p-5">
            <p className="mt-1">Login Id: Shahidul242</p>
            <p className="mt-1">Name: Md Shahidul Islam</p>
            <p className="mt-1">Mobile: 01891974242</p>
          </div>
        </div>

        <div className="  shadow-xl">
          <h1 className="text-[23px] shadow-md p-2 pl-5 font-semibold flex items-center gap-5">
            <span>Business Status</span>
            <Link>
              {" "}
              <MdModeEditOutline className="text-[23px] " />
            </Link>
          </h1>
          <div className="p-5">
            <p className="mt-1"> Designation: Premium Freelance Marketer</p>
          </div>
        </div>

        <div className="  shadow-xl">
          <h1 className="text-[23px] shadow-md p-2 pl-5 font-semibold flex items-center gap-5">
            <span>Account Information</span>
            <Link>
              {" "}
              <MdModeEditOutline className="text-[23px] " />
            </Link>
          </h1>
          <div className="p-5">
            <p className="mt-1"> Shahidul242</p>
            <p>
              {" "}
              <Link className="mt-1 hover:text-primary">Change password</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
