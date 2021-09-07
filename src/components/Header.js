import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import pdf from "../assets/Resume.pdf";

export default function Header() {
  return (
    <>
      <div className="block sm:hidden">
        <header className="header fixed w-full bg-purple-700 top-0 z-50">
          <div className="logo">
            <img className="p-1 w-12" src={logo} alt="" />
          </div>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="menu-icon">
            <span className="nav-icon"></span>
          </label>
          <ul className="menu text-yellow-200">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>
              <a href={pdf} target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </header>
      </div>
      <div className="hidden sm:block z-50 fixed w-full bg-purple-600 top-0">
        <div className="flex justify-between bg-purple-700 top-0">
          <div className="logo">
            <img className="p-1 w-12" src={logo} alt="" />
          </div>

          <div className="">
            <ul className="px-10 inline-flex gap-10 relative top-6 text-yellow-100">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>
                <a href={pdf} target="_blank" rel="noreferrer">
                  Resume
                </a>
              </li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
