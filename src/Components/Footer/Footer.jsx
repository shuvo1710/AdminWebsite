import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto">
        <div className="flex justify-between sm:flex-row flex-col  pb-20 pt-5 text-[#dcedc8] ">
          <div className="">
            <p>Copyright © 2019 All Rights Reserved</p>
          </div>
          <div className="">
            <p>
              Designed & Developed by{" "}
              <a href="" className="font-bold text-white">
                DOT BD SOLUTIONS
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
