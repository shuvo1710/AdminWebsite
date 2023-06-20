import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto">
        <div className="flex justify-between  pb-10 pt-5 text-[#dcedc8] ">
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
