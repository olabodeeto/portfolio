import React from "react";

export default function SectionComponent({ children }) {
  return (
    <>
      <div className="flex justify-center pb-20">
        {/* <img className="w-11/12 sm:w-9/12 " src={bio} alt="" /> */}
        <div
          className="w-10/12 sm:w-9/12 border-2 border-yellow-100 m-2 p-4 rounded-2xl
          bg-purple-500 bg-opacity-60"
        >
          <div className="flex justify-between ">
            <div className="bg-white w-4 h-4 rounded-full"></div>
            <div className="bg-white w-4 h-4 rounded-full"></div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
