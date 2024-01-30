import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiShop, CiWallet } from "react-icons/ci";
import { SiTheconversation } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";
import { useGlobalContext } from "../context/useContextApi";

const Sidebar = () => {
  const {bgColor, toggle, textColor} = useGlobalContext()

  return (
    <div className={`flex flex-col justify-between h-[85vh]  ${toggle ?"bg-white text-black font-semibold":"bg-black text-white"}`}>
      <div className="flex flex-col gap-4">
        <div className="flex justify-start gap-2 items-center">
          <FaHome className="text-2xl" />
          <h1 style={{ fontFamily: "Playfair Display" }}>Home</h1>
        </div>
        <div className="flex justify-start gap-2 items-center">
          <IoIosNotifications className="text-2xl" />
          <h1 style={{ fontFamily: "Playfair Display" }}>Notifications</h1>
        </div>
        <div className="flex justify-start gap-2 items-center">
          <CiShop className="text-2xl" />
          <h1 style={{ fontFamily: "Playfair Display" }}>Shop</h1>
        </div>
        <div className="flex justify-start gap-2 items-center">
          <SiTheconversation className="text-2xl" />
          <h1 style={{ fontFamily: "Playfair Display" }}>Conversation</h1>
        </div>
        <div className="flex justify-start gap-2 items-center">
          <CiWallet className="text-2xl" />
          <h1 style={{ fontFamily: "Playfair Display" }}>Wallet</h1>
        </div>
        <div className="flex justify-start gap-2 items-center">
          <MdOutlineSubscriptions className="text-2xl" />
          <h1 style={{ fontFamily: "Playfair Display" }}>Subscription</h1>
        </div>
        <div className="flex justify-start gap-2 items-center">
          <AiFillProfile className="text-2xl" />
          <h1 style={{ fontFamily: "Playfair Display" }}>My Profile</h1>
        </div>
      </div>
      <div>
        <div className="flex justify-start animate-bounce gap-2 items-center">
          <FaHome className="text-2xl" />
          <h1 style={{ fontFamily: "Playfair Display" }} className="text-red-700 lg:text-xl">Logout</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
