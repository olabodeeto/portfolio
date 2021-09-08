import React from "react";
import js from "../assets/js.png";
import reicon from "../assets/reicon.png";
import css3 from "../assets/css3.png";
import tailwindicon from "../assets/tailwindcss-icon.png";
import "./Tools.css";

export default function Tools() {
  return (
    <div className="tools">
      <div className="w-full">
        <div className="text-gray-50 w-10/12 m-auto pt-1 pb-40">
          <div className="mt-10">
            <h1 className="text-4xl text-center font-body text-yellow-200 font-extrabold">
              My Arsenal
            </h1>
            <div className="grid grid-cols-3 gap-x-4 gap-y-14 mt-28  sm:ml-28 sm:gap-y-20">
              <div className="h-16 w-20 sm:h-20 sm:w-24 flex flex-col items-center">
                <img src={reicon} alt="" />
                <span className="mt-4">React</span>
              </div>
              <div className="h-16 w-16 sm:h-20 sm:w-20 flex flex-col items-center">
                <img src={js} alt="" />
                <span className="mt-5">Javascript</span>
              </div>
              <div className="h-16 w-16 sm:h-20 sm:w-20 flex flex-col items-center">
                <img src={css3} alt="" />
                <span className="mt-3 sm:mt-5">Css3</span>
              </div>
              <div className="h-16 w-16 sm:h-20 sm:w-20 flex flex-col items-center">
                <img className="w-full mt-10" src={tailwindicon} alt="" />
                <span className="mt-5">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
