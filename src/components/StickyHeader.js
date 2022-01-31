import React, { useState } from "react";
import "alpinejs";
import logo from "../img/logo2.png";

const StickyHeader = () => {
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
      <div className="bg-white">
        <div className=" container px-4 flex justify-between mx-auto py-2 lg:space-x-4 text-black ">
          <div className="w-12 h-12 flex gap-1 justify-center items-center ml-8">
            <img className=" w-full" src={logo} alt="" />
            <div className="text-black font-bold">
              <p className="leading-none">
                GREEN <br />
                ECONOMIC <br /> ZONE
              </p>
            </div>
          </div>

          <div
            className={`${
              navbarOpen
                ? "mt-2 lg:mt-0 ml-auto bg-black bg-opacity-60"
                : "hidden w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0"
            }`}
          >
            <ul className="w-full flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 justify-end lg:text-black">
              <li className="relative">
                <button onMouseOver={dropdownHandler1}>
                  <a
                    href=""
                    className="flex px-4 py-2 font-medium hover:border-b-2 border-green-600 outline-none focus:outline-none"
                  >
                    ABOUT GEZ
                  </a>
                </button>
              </li>

              <li className="relative">
                <button onMouseOver={dropdownHandler2}>
                  <a
                    href=""
                    className="flex px-4 py-2 font-medium hover:border-b-2 border-green-600 outline-none focus:outline-none"
                  >
                    BUSINESS SET-UP
                  </a>
                </button>
              </li>

              <li className="relative">
                <button onMouseOver={dropdownHandler3}>
                  <a
                    href=""
                    className="flex px-4 py-2 font-medium hover:border-b-2 border-green-600 outline-none focus:outline-none"
                  >
                    FACILITIES
                  </a>
                </button>
              </li>

              <li className="relative">
                <button onMouseOver={dropdownHandler4}>
                  <a
                    href=""
                    className="flex px-4 py-2 font-medium hover:border-b-2 border-green-600 outline-none focus:outline-none"
                  >
                    MEDIA CENTER
                  </a>
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
              color="#000"
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
            ? "bg-black bg-opacity-60 left-0 w-full p-2 text-white text-xs font-thin"
            : "hidden lg:absolute bg-white right-0 rounded-md p-2"
        }
      >
        <ul className="lg:w-full flex justify-end justify gap-5 items-center px-8">
          <li>
            <a className="flex p-2 " href="">
              GEZ- THE PROJECT
            </a>
          </li>
          <li>
            <a className="flex p-2 " href="">
              WHY INVEST IN GEZ
            </a>
          </li>
          <li>
            <a className="flex p-2 " href="">
              THE PARTNERS & INVESTORS
            </a>
          </li>
          <li>
            <a className="flex p-2 " href="">
              WHY KADUNA
            </a>
          </li>
        </ul>
      </div>
      <div
        className={
          dropdownOpen2
            ? "bg-black bg-opacity-60 left-0 w-full p-2 text-white text-xs font-thin"
            : "hidden lg:absolute bg-white right-0 rounded-md p-2"
        }
      >
        <ul className="lg:w-full flex justify-end justify gap-5 items-center px-8">
          <li>
            <a className="flex p-2 " href="">
              CLUSTERS AND LAYOUT
            </a>
          </li>
          <li>
            <a className="flex p-2 " href="">
              INCENTIVES
            </a>
          </li>
          <li>
            <a className="flex p-2 " href="">
              HOW TO APPLY
            </a>
          </li>
          <li>
            <a className="flex p-2 " href="">
              TERMS AND CONDITIONS
            </a>
          </li>
          <li>
            <a className="flex p-2 " href="">
              GOVERNMENT POLICY
            </a>
          </li>
          <li>
            <a className="flex p-2 " href="">
              TALK WITH AN EXPERT
            </a>
          </li>
        </ul>
      </div>
      <div
        className={
          dropdownOpen3
            ? "bg-black bg-opacity-60 left-0 w-full p-2 text-white text-xs font-thin"
            : "hidden lg:absolute bg-white right-0 rounded-md p-2"
        }
      >
        <ul className="lg:w-full flex justify-end justify gap-5 items-center px-8">
          <li>
            <a className="flex p-2 " href="">
              PARK AMENITIES & INFRASTRUCTURE
            </a>
          </li>
        </ul>
      </div>
      <div
        className={
          dropdownOpen4
            ? "bg-black bg-opacity-60 left-0 w-full p-2 text-white text-xs font-thin"
            : "hidden lg:absolute bg-white right-0 rounded-md p-2"
        }
      >
        <ul className="lg:w-full flex justify-end justify gap-5 items-center px-8">
          <li>
            <a className="flex p-2 " href="">
              NEWS
            </a>
          </li>
          <li>
            <a className="flex p-2 " href="">
              EVENTS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default StickyHeader;
