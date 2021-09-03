import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import star from "../../assets/star.svg";
// import bio from "../../assets/bioo.svg";
import profilephoto from "../../assets/profile.jpeg";
import { GithubFill, LinkedInV1Fill, TwitterFill } from "akar-icons";
import SectionComponent from "../../components/SectionComponent";
import About from "../../components/About";

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-purple-600">
        <div className="relative text-center mt-20 sm:pt-20 sm:text-left">
          <div
            className="flex gap-20 md:gap-60 flex-col md:flex-row 
          relative m-4 sm:pt-20 sm:w-10/12 lg:w-9/12 lg:p-10 
          sm:m-auto sm:border-2 sm:border-purple-700 sm:rounded-2xl "
          >
            <div className="md:p-2 md:w-4/12">
              <p className=" text-white text-2xl font-bold">Hello, I'm</p>
              <p>
                <h1 className="mt-10 text-yellow-200 font-extrabold text-6xl">
                  Ola<span>bode</span>
                </h1>
                <h1 className="mt-1 text-yellow-200 font-extrabold text-6xl">
                  Eto
                </h1>
              </p>
              <p className="mt-5  text-1xl text-yellow-100">
                FrontEnd Engineer, based in Lagos, Nigeria
              </p>
              <div className="absolute top-40 left-48 sm:left-60 sm:top-24">
                <img className=" p-2 star" src={star} alt="" />
              </div>
              <div className="mt-14 flex gap-8 justify-center sm:justify-start">
                <p>
                  <a href="https://github.com/olabodeeto" target="_blank">
                    <GithubFill size={20} />
                  </a>
                </p>
                <p>
                  <a href="https://linkedin.com/in/olabodeeto" target="_blank">
                    <LinkedInV1Fill size={20} />
                  </a>
                </p>

                <p>
                  <a href="https://twitter.com/codebreed" target="_blank">
                    <TwitterFill size={24} />
                  </a>
                </p>
              </div>
            </div>
            <div className="md:w-8/12 lg:w-11/12">
              <div className="flex justify-center w-full md:mr-2">
                <img
                  className="w-8/12 sm:w-8/12 md:w-full md:mr-4 lg:w-8/12 xl:5/12 lg:mt-10 rounded-2xl"
                  src={profilephoto}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <SectionComponent>
          <About title="about." />
        </SectionComponent>
      </div>
    </>
  );
}
