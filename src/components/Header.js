import React, { useState } from "react";
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
        <ul className=" lg:flex lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 justify-end gap-4 text-xs ">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">PRICING</a>
          </li>
          <li>APPLY NOW</li>
          <li>CONTACT US</li>
        </ul>
      </div>
      <div className="bg-transparent">
        <div className=" container px-4 flex justify-between mx-auto py-2 lg:space-x-4 text-white">
          <div className="w-16 h-16 flex gap-1 justify-center items-center ml-8">
            <img className=" w-full" src={logo} alt="" />
            <div className="text-white font-bold text-lg">
              <p className="leading-none">
                GREEN <br />
                ECONOMIC <br /> ZONE
              </p>
            </div>
          </div>
          <button
            onClick={navbarHandler}
            className="lg:hidden inline-flex items-center justify-center text-white h-10 w-10 outline-none focus:outline-none ml-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${
              navbarOpen
                ? "flex w-full mt-2 lg:mt-0"
                : "hidden w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0"
            }`}
          >
            <ul className="w-full flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 justify-end">
              <li className="relative">
                <button onMouseOver={dropdownHandler1}>
                  <a
                    href=""
                    className="flex px-4 py-2 font-medium hover:border-b-2 border-white outline-none focus:outline-none"
                  >
                    ABOUT GEZ
                  </a>
                </button>
              </li>

              <li className="relative">
                <button onMouseOver={dropdownHandler2}>
                  <a
                    href=""
                    className="flex px-4 py-2 font-medium hover:border-b-2 border-white outline-none focus:outline-none"
                  >
                    BUSINESS SET-UP
                  </a>
                </button>
              </li>

              <li className="relative">
                <button onMouseOver={dropdownHandler3}>
                  <a
                    href=""
                    className="flex px-4 py-2 font-medium hover:border-b-2 border-white outline-none focus:outline-none"
                  >
                    FACILITIES
                  </a>
                </button>
              </li>

              <li className="relative">
                <button onMouseOver={dropdownHandler4}>
                  <a
                    href=""
                    className="flex px-4 py-2 font-medium hover:border-b-2 border-white outline-none focus:outline-none"
                  >
                    MEDIA CENTER
                  </a>
                </button>
              </li>
            </ul>
          </div>
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
            ? "bg-black bg-opacity-50 left-0 w-full p-2 text-white text-sm font-thin"
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
            ? "bg-black bg-opacity-50 left-0 w-full p-2 text-white text-sm font-thin"
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
            ? "bg-black bg-opacity-50 left-0 w-full p-2 text-white text-sm font-thin"
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

export default Header;
