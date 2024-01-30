import React, { useState } from "react";
import { IoToggleOutline, IoFilterSharp } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import { useGlobalContext } from "../context/useContextApi";

const Navbar = () => {
 const {togglingColor, bgColor, toggle}= useGlobalContext()
 

  return (
    <nav className="flex flex-col gap-3 lg:flex-row items-center lg:justify-between p-2">
      <div className="flex justify-between gap-4 items-center">
        <img src="/amann2.png" alt="Logo" width={50} />
        <BsToggle2On  className={`text-3xl  ${toggle ?" text-black":" text-white"}`} onClick={togglingColor}/>
      </div>
      <div className="relative flex items-center">
        {/* Left Icon and Text */}
        <div className="absolute left-0 p-2">
          <FaMagnifyingGlass className="text-2xl text-zinc-500" />
        </div>
        <input
          type="text"
          className="py-2 sm:w-[50vw] lg:w-[60vw] pl-10 pr-8 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 w-full"
          placeholder="Search..."
        />
        {/* Right Icon */}
        <div className="absolute right-0 p-2">
          <div className="flex justify-center gap-2 items-center">
            <IoFilterSharp className="text-2xl text-zinc-500" />
            <h1
              className="text-zinc-700 text-[10px] lg:text-[15px] font-semibold"
              style={{ fontFamily: "Playfair Display" }}
            >
              Filter
            </h1>
          </div>
        </div>
      </div>
      <div className="shadow-lg  rounded-md bg-white hover:bg-gray-400 hover:text-white px-3 py-2 text-black">
        <h1 className="font-semibold" style={{ fontFamily: "Single Day" }}>
          Become A Seler
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
