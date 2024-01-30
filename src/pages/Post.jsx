import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { data } from "../utils/Data";
import { useGlobalContext } from "../context/useContextApi";

const Post = () => {
  const {toggle} = useGlobalContext()
  return (
    <div className="lg:overflow-y-scroll myScroll scroll-smooth lg:h-[87vh]">
      {data?.map((ele) => {
        return (
          <div key={ele.id} className="max-w-md mx-auto bg-zinc-600/50 lg:hover:scale-105 my-2 lg:my-8 transition-all duration-500 ease-in-out rounded-xl overflow-hidden md:max-w-2xl">
            {/* Left Section */}
            <div className="flex items-center justify-start gap-2">
              <img
                className="w-[80px] m-2 object-cover rounded-full "
                src={ele.pImg}
                alt="Small rounded picture"
              />
              <p className={`${toggle ? "text-black font-semibold":"text-white"}`}>{ele.userName}</p>
            </div>

            {/* Right Section */}
            <div className="p-8">
              {/* City Name */}
              <div className={`uppercase tracking-wide text-sm font-semibold ${toggle ? "text-black font-bold":"text-white"}`}>
                {ele.title}
              </div>

              {/* Picture */}
              <div className="mt-2">
                <img
                  className="w-full h-64 object-cover object-top rounded-lg"
                  src={ele.mImg}
                  alt="Social post"
                />
              </div>

              {/* Like and Comment Icons */}
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <AiOutlineLike className="text-3xl text-orange-500" />
                  <span className={`${toggle ? "text-black font-semibold":"text-white"}`}>{ele.like}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegComment className="text-3xl text-red-500" />
                  <span className={`${toggle ? "text-black font-semibold":"text-white"}`}>{ele.comment}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
