import React, { useState } from "react";
import { Link } from "react-router-dom";
import "alpinejs";
import logo from "../img/logo2.png";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);
  const navbarHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const dropdownHandler1 = () => {
    setDropdownOpen1(true);
    setDropdownOpen2(false);
    setDropdownOpen3(false);
    setDropdownOpen4(false);
  };
  const dropdownHandler2 = () => {
    setDropdownOpen1(false);
    setDropdownOpen2(true);
    setDropdownOpen3(false);
    setDropdownOpen4(false);
  };
  const dropdownHandler3 = () => {
    setDropdownOpen1(false);
    setDropdownOpen2(false);
    setDropdownOpen3(true);
    setDropdownOpen4(false);
  };
  const dropdownHandler4 = () => {
    setDropdownOpen1(false);
    setDropdownOpen2(false);
    setDropdownOpen3(false);
    setDropdownOpen4(true);
  };
  const dropdownHandler5 = () => {
    setDropdownOpen1(false);
    setDropdownOpen2(false);
    setDropdownOpen3(false);
    setDropdownOpen4(false);
  };

  return (
    <nav className="ease-out duration-100">
      <div className="px-16 bg-black py-3 text-white w-full mb-8">
        <ul className=" flex space-x-2 space-y-2 space-y-0 justify-end gap-4 text-xs ">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/pricing">PRICING</Link>
          </li>
          <li>
            <Link to="/apply">APPLY NOW</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div className="bg-transparent">
        <div className=" container px-4 flex justify-between mx-auto py-2 lg:space-x-4 text-white">
          <Link
            to="/"
            className="w-16 h-16 flex gap-1 justify-center items-center ml-8"
          >
            <img className=" w-full" src={logo} alt="" />
            <div className="text-white font-bold text-lg">
              <p className="leading-none">
                GREEN <br />
                ECONOMIC <br /> ZONE
              </p>
            </div>
          </Link>

          <div
            className={`${
              navbarOpen
                ? "mt-2 lg:mt-0 ml-auto bg-black bg-opacity-60"
                : "hidden w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0"
            }`}
          >
            <ul className="w-full flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 justify-end">
              <li className="relative">
                <button
                  className="flex px-4 py-2 font-medium hover:border-b-2 border-white outline-none focus:outline-none"
                  onClick={dropdownHandler1}
                >
                  ABOUT GEZ
                </button>
              </li>
              <li className="relative">
                <button
                  onClick={dropdownHandler2}
                  className="flex px-4 py-2 font-medium hover:border-b-2 border-white outline-none focus:outline-none"
                >
                  BUSINESS SET-UP
                </button>
              </li>
              <li className="relative">
                <button
                  onClick={dropdownHandler3}
                  className="flex px-4 py-2 font-medium hover:border-b-2 border-white outline-none focus:outline-none"
                >
                  FACILITIES
                </button>
              </li>
              <li className="relative">
                <button
                  onClick={dropdownHandler4}
                  className="flex px-4 py-2 font-medium hover:border-b-2 border-white outline-none focus:outline-none"
                >
                  MEDIA CENTER
                </button>
              </li>
            </ul>
          </div>
          <button
            onClick={navbarHandler}
            className="lg:hidden inline-flex items-end justify-center text-white h-10 w-10 outline-none focus:outline-none ml-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={
          dropdownOpen1
            ? "bg-black bg-opacity-50 left-0 w-full p-2 text-white text-sm font-thin"
            : "hidden lg:absolute bg-white right-0 rounded-md p-2"
        }
      >
        <ul className="lg:w-full flex justify-end justify gap-5 items-center px-8">
          <li className="flex p-2">
            <Link to="/about">GEZ- THE PROJECT </Link>
          </li>

          <li className="flex p-2">
            <Link to="/about/investments">WHY INVEST IN GEZ </Link>
          </li>

          <li className="flex p-2 ">
            <Link to="/partners">THE PARTNERS & INVESTORS</Link>
          </li>
          <li className="flex p-2 ">
            <Link to="/kaduna">WHY KADUNA</Link>
          </li>
        </ul>
      </div>
      <div
        className={
          dropdownOpen2
            ? "bg-black bg-opacity-50 left-0 w-full p-2 text-white text-sm font-thin"
            : "hidden lg:absolute bg-white right-0 rounded-md p-2"
        }
      >
        <ul className="lg:w-full flex justify-end justify gap-5 items-center px-8">
          <li className="flex p-2 ">
            <Link to="/clusters">CLUSTERS AND LAYOUT</Link>
          </li>
          <li className="flex p-2 ">
            <Link to="/incentives">INCENTIVES</Link>
          </li>
          <li className="flex p-2 ">
            <Link to="/how-to">HOW TO APPLY</Link>
          </li>
          <li className="flex p-2 ">
            <Link to="/t-and-c">TERMS AND CONDITIONS</Link>
          </li>
          <li className="flex p-2 ">
            <Link to="/government-policy">GOVERNMENT POLICY</Link>
          </li>
          <li className="flex p-2 ">
            <Link to="/talk-with-expert">TALK WITH AN EXPERT</Link>
          </li>
        </ul>
      </div>
      <div
        className={
          dropdownOpen3
            ? "bg-black bg-opacity-50 left-0 w-full p-2 text-white text-sm font-thin"
            : "hidden lg:absolute bg-white right-0 rounded-md p-2"
        }
      >
        <ul className="lg:w-full flex justify-end justify gap-5 items-center px-8">
          <li className="flex p-2 ">
            <Link to="/infrastructure">PARK AMENITIES & INFRASTRUCTURE</Link>
          </li>
        </ul>
      </div>
      <div
        className={
          dropdownOpen4
            ? "bg-black bg-opacity-50 left-0 w-full p-2 text-white text-sm font-thin"
            : "hidden lg:absolute bg-white right-0 rounded-md p-2"
        }
      >
        <ul className="lg:w-full flex justify-end justify gap-5 items-center px-8">
          <li className="flex p-2 ">
            <Link to="/news">NEWS</Link>
          </li>
          <li className="flex p-2 ">
            <Link to="/events">EVENTS</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
