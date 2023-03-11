import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/1.png";
import logo1 from "../assets/2.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 pt-2 pb-4 border-b-4 border-pred">
      <div className="container">
        <div className="logo flex items-center justify-center">
          <img className="w-10 h-10 lg:h-16 lg:w-16" src={logo} alt="" />
          <Link to="/">
            <h1 className=" text-2xl lg:text-4xl mt-2 lg:mt-4 text-white font-bold">
              Rachid Lgym Bro
            </h1>
          </Link>
          <img className="w-10 h-10 lg:h-16 lg:w-16" src={logo1} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
