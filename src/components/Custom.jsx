import React from "react";
import Sidebar from "../pages/Sidebar";
import Post from "../pages/Post";
import Rightbar from "../pages/Rightbar";


const Custom = () => {
 
  return (
    <div className="p-2 grid grid-cols-1 lg:grid-cols-5 gap-2 ">
      <div className="lg:col-span-1 p-2  shadow-lg rounded text-center hidden lg:block">
        <Sidebar />
      </div>
      <div className="lg:col-span-3  text-center">
        <Post />
      </div>
      <div className="lg:col-span-1  text-center hidden lg:block">
        <Rightbar />
      </div>
    </div>
  );
};

export default Custom;
