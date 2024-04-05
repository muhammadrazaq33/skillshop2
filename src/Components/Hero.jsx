import React from "react";
import { FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="">
      <div>
        {/* image */}
        <img src="./assets/Hero_img.png" className="w-full" alt="" />

        <div className="sm:mt-[2.5rem] mt-[1.5rem] max-w-[680px] w-[92vw] m-auto ">
          {/* header title */}
          <div className=" flex flex-col gap-2.5 py-6 border-b border-gray-400">
            <h1 className="text2 leading-[2.9rem]">
              Intermediate use of Google Workspace for Education Fundamentals
            </h1>
            <div className="sm:flex items-center gap-7">
              <div className="flex items-center gap-6">
                <p className="text-[12px]">Published: Mar 21, 2023</p>
                <p className="text-[12px]">2.2h</p>
                <p className="text-[12px]">Beginner</p>
                <img
                  src="./assets/award.svg"
                  className="w-[15px] h-[15px]"
                  alt=""
                />
              </div>
              {/* review icon */}
              <div className="flex items-center gap-2 sm:mt-0 mt-1">
                <div className="flex items-center text-[12px] gap-1">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <p className="text-[12px]">(11)</p>
              </div>
            </div>
          </div>
          {/* end of header title  */}
          {/* favorites */}
          <div className="mt-3 flex flex-col gap-10">
            <div className="flex items-center gap-2">
              <CiHeart />
              <NavLink>
                <p>Favorites</p>
              </NavLink>
            </div>
            <p className="hero_text">
              In this course, you will build on the skills you already have with
              each tool Google Workspace for Education has to offer; you will
              enhance the effectiveness of your work through automation,
              personalization and streamlined processes for your classroom and
              institution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
