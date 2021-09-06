import React from "react";

export default function About({ title }) {
  return (
    <>
      <div className="mt-10 md:px-10">
        <h1 className="font-extrabold text-4xl text-yellow-200 font-body">
          {title}
        </h1>
        <p className="mt-10 md:w-10/12 lg:w-8/12 text-gray-100">
          I'm a creative, detailed and design minded Frontend Engineer with Bsc.
          degree in Computer science, I centered my attention on building
          efficient and scalable applications with beautiful interface using
          modern technologies.
        </p>
        <p className="mt-4 md:w-10/12 lg:w-8/12 text-gray-100">
          I love reading about Techprenuership and Web Enginerring, the latest
          tools and best practices when not coding.
        </p>
      </div>
    </>
  );
}
