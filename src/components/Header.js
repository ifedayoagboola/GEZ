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
        <div className=" container px-4 flex justify-between mx-auto py-2 lg:space-x-4">
          <div className="w-10 h-10 ">
            <img className=" w-full" src={logo} alt="" />
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
                    className="flex px-4 py-2 font-medium text-white hover:border-b border-green-600 outline-none focus:outline-none"
                  >
                    About GEZ
                  </a>
                </button>
              </li>

              <li className="relative">
                <button onMouseOver={dropdownHandler2}>
                  <a
                    href=""
                    className="flex px-4 py-2 font-medium text-white hover:border-b border-green-600 outline-none focus:outline-none"
                  >
                    Business Set-up
                  </a>
                </button>
              </li>

              <li className="relative">
                <button onMouseOver={dropdownHandler3}>
                  <a
                    href=""
                    className="flex px-4 py-2 font-medium text-white hover:border-b border-green-600 outline-none focus:outline-none"
                  >
                    Facilities
                  </a>
                </button>
              </li>
              <li onMouseOver={dropdownHandler5}>
                <a
                  className="flex px-4 py-2 font-medium text-white hover:border-b border-green-600"
                  href=""
                >
                  Pricing
                </a>
              </li>
              <li onMouseOver={dropdownHandler5}>
                <a
                  className="flex px-4 py-2 font-medium text-white hover:border-b border-green-600"
                  href=""
                >
                  Apply Now
                </a>
              </li>
              <li className="relative">
                <button onMouseOver={dropdownHandler4}>
                  <a
                    href=""
                    className="flex px-4 py-2 font-medium text-white hover:border-b border-green-600 outline-none focus:outline-none"
                  >
                    Media Center
                  </a>
                </button>
              </li>
              <li onMouseOver={dropdownHandler5}>
                <a
                  className="flex px-4 py-2 font-medium text-white hover:border-b border-green-600"
                  href=""
                >
                  Contact Us
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
        <ul className="space-y-2 lg:w-full flex justify-end justify gap-5 items-center">
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              GEZ- The Project
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              Why invest in GEZ
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              The Partners and Investors
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              Why Kaduna
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
        <ul className="space-y-2 lg:w-full flex justify-end justify gap-5 items-center">
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              Clusters and layout
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              Incentives
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              How to apply
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              Terms and conditions
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              Government Policy
            </a>
          </li>
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              Talk with an expert
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
        <ul className="space-y-2 lg:w-full flex justify-center gap-5 items-center">
          <li>
            <a
              className="flex p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              Park Amenities & Infrastructure
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
        <ul className="space-y-2 lg:w-full flex justify-center gap-5 items-center">
          <li>
            <a
              className="p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              News
            </a>
          </li>
          <li>
            <a
              className="p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              Events
            </a>
          </li>
          <li>
            <a
              className="p-2 font-medium text-grey-600 rounded-md hover:bg-grey-100 hover:text-black"
              href=""
            >
              Events
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
