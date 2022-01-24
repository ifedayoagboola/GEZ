import React, { useState } from "react";
import "alpinejs";
import logo from "../img/logo.jpeg";

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
    <nav>
      <div className="bg-black">
        <div className=" container px-4 flex justify-between mx-auto py-2 lg:space-x-4 text-white">
          <div className="w-10 h-10 flex gap-1 justify-center items-center ml-8">
            <img className=" w-full" src={logo} alt="" />
            <div className="text-white font-bold">
              <p className="leading-none">
                GREEN <br />
                ECONOMIC <br /> ZONE
              </p>
            </div>
          </div>
          <button
            onClick={navbarHandler}
            className="lg:hidden inline-flex items-center justify-center text-white border h-10 w-10 rounded-md outline-none focus:outline-none ml-auto"
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
                    className="flex px-4 py-2 font-medium hover:border-b border-green-600 outline-none focus:outline-none"
                  >
                    ABOUT GEZ
                  </a>
                </button>
              </li>

              <li className="relative">
                <button onMouseOver={dropdownHandler2}>
                  <a
                    href=""
                    className="flex px-4 py-2 font-medium hover:border-b border-green-600 outline-none focus:outline-none"
                  >
                    BUSINESS SET-UP
                  </a>
                </button>
              </li>

              <li className="relative">
                <button onMouseOver={dropdownHandler3}>
                  <a
                    href=""
                    className="flex px-4 py-2 font-medium hover:border-b border-green-600 outline-none focus:outline-none"
                  >
                    FACILITIES
                  </a>
                </button>
              </li>
              <li onMouseOver={dropdownHandler5}>
                <a
                  className="flex px-4 py-2 font-medium hover:border-b border-green-600"
                  href=""
                >
                  PRICING
                </a>
              </li>
              <li onMouseOver={dropdownHandler5}>
                <a
                  className="flex px-4 py-2 font-medium hover:border-b border-green-600"
                  href=""
                >
                  APPLY NOW
                </a>
              </li>
              <li className="relative">
                <button onMouseOver={dropdownHandler4}>
                  <a
                    href=""
                    className="flex px-4 py-2 font-medium hover:border-b border-green-600 outline-none focus:outline-none"
                  >
                    MEDIA CENTER
                  </a>
                </button>
              </li>
              <li onMouseOver={dropdownHandler5}>
                <a
                  className="flex px-4 py-2 font-medium hover:border-b border-green-600"
                  href=""
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={
          dropdownOpen1
            ? "bg-green-600 left-0 w-full p-2"
            : "hidden lg:absolute bg-white right-0 rounded-md p-2"
        }
      >
        <ul className="lg:w-full flex justify-end justify gap-5 items-center">
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              GEZ- THE PROJECT
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              WHY INVEST IN GEZ
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              THE PARTNERS & INVESTORS
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              WHY KADUNA
            </a>
          </li>
        </ul>
      </div>
      <div
        className={
          dropdownOpen2
            ? " bg-green-600 left-0 w-full p-2"
            : "hidden lg:absolute bg-white right-0 rounded-md p-2"
        }
      >
        <ul className="lg:w-full flex justify-end justify gap-5 items-center">
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              CLUSTERS AND LAYOUT
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              INCENTIVES
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              HOW TO APPLY
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              TERMS AND CONDITIONS
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              GOVERNMENT POLICY
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              TALK WITH AN EXPERT
            </a>
          </li>
        </ul>
      </div>
      <div
        className={
          dropdownOpen3
            ? "bg-green-600 left-0 w-full p-2"
            : "hidden lg:absolute bg-white right-0 rounded-md p-2"
        }
      >
        <ul className="lg:w-full flex justify-center gap-5 items-center">
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              PARK AMENITIES & INFRASTRUCTURE
            </a>
          </li>
        </ul>
      </div>
      <div
        className={
          dropdownOpen4
            ? "bg-green-600 left-0 w-full p-2"
            : "hidden lg:absolute bg-white right-0 rounded-md p-2"
        }
      >
        <ul className="lg:w-full flex justify-center gap-5 items-center">
          <li>
            <a
              className="p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              NEWS
            </a>
          </li>
          <li>
            <a
              className="p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              EVENTS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
