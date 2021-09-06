import React from "react";

export default function About({ title }) {
  return (
    <>
      <div className="mt-10 md:px-10">
        <h1 className="font-extrabold text-4xl text-yellow-200 font-body">
          {title}
        </h1>
        <p className="mt-10 md:w-10/12 lg:w-8/12 text-gray-100">
          Olabode is a detailed and design minded Frontend Engineer with a
          centered attention on building efficient and scalable applications
          with beautiful interface using modern technologies.
        </p>
      </div>
    </>
  );
}
