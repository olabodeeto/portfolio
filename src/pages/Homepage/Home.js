import React from "react";
import Header from "../../components/Header";
import star from "../../assets/star.svg";
// import bio from "../../assets/bioo.svg";
import profilephoto from "../../assets/profile.jpeg";
import { GithubFill, LinkedInV1Fill, TwitterFill } from "akar-icons";
import SectionComponent from "../../components/SectionComponent";
import About from "../../components/About";
import Tools from "../../components/Tools";

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
              <p className=" text-white mt-20 sm:mt-2 text-2xl font-bold">
                Hello, I'm
              </p>
              <p>
                <h1 className="mt-10 font-body text-yellow-300 font-extrabold text-6xl">
                  Ola<span>bode</span>
                </h1>
                <h1 className="mt-1 font-body text-yellow-300 font-extrabold text-6xl">
                  Eto,
                </h1>
              </p>
              <p className="mt-5  text-1xl text-yellow-100">
                FrontEnd Engineer, specialized in
                <span className="text-red-400 font-extrabold text-lg">
                  {" "}
                  React{" "}
                </span>
                , based in Lagos, Nigeria
              </p>
              <div className="absolute top-28 left-60 sm:left-60 sm:top-24">
                <img className=" p-2 star" src={star} alt="" />
              </div>
              <div className="mt-10 sm:float-left">
                <a
                  href="mailto:olabodeeto@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="w-40 bg-blue-200
                m-auto p-3 text-center rounded-lg"
                  >
                    <span>Hire me</span>
                  </div>
                </a>
              </div>

              <div className="mt-20 sm:mt-40 flex gap-8 justify-center sm:justify-start">
                <p>
                  <a
                    href="https://github.com/olabodeeto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubFill size={20} />
                  </a>
                </p>
                <p>
                  <a
                    href="https://linkedin.com/in/olabodeeto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInV1Fill size={20} />
                  </a>
                </p>

                <p>
                  <a
                    href="https://twitter.com/codebreed"
                    target="_blank"
                    rel="noreferrer"
                  >
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
        <div className="mt-20">
          <SectionComponent>
            <About title="about." />
          </SectionComponent>
        </div>
      </div>
      <Tools />
      <div className=" bg-purple-600">
        <div className="pt-20">
          <SectionComponent>
            <h2 className="text-center text-gray-50">
              Portfolio is still underconstruction
            </h2>
          </SectionComponent>
        </div>
      </div>
    </>
  );
}
