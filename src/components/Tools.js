import React from "react";
import js from "../assets/js.png";
import reicon from "../assets/reicon.png";
import css3 from "../assets/css3.png";
import tailwindicon from "../assets/tailwindcss-icon.svg";

export default function Tools() {
  return (
    <div className="w-full bg-gray-800 ">
      <div className="text-gray-50 w-10/12 m-auto pt-1 pb-40">
        <div className="mt-10">
          <h1 className="text-4xl text-center font-body text-yellow-200 font-extrabold">
            My Arsenal
          </h1>
          <div className="flex gap-2 sm:gap-10 justify-center  text-center w-full p-5 mt-28 ">
            <div>
              <img className="w-4/12 sm:w-4/12" src={reicon} />
            </div>
            <div>
              <img className="w-4/12 sm:w-4/12" src={js} />
            </div>
            <div>
              <img className="w-4/12 sm:w-4/12" src={css3} />
            </div>
            <div className="flex">
              <img className="w-28 sm:w-4/12" src={tailwindicon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
