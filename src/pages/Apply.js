import React, { useState } from "react";
import Footer from "../components/Footer";
import StickyHeader from "../components/StickyHeader";
import Header from "../components/Header";

const Apply = () => {
  const [navbar, setNavbar] = useState(false);
  const navHandler = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", navHandler);
  return (
    <div>
      <section className="">
        <div className="fixed w-full">
          {navbar ? <StickyHeader /> : <Header />}
        </div>
        <div
          className="w-full h-screen bg-no-repeat bg-cover flex flex-col lg:flex-row justify-center items-center"
          style={{
            backgroundImage: "url(/assets/aboutbg3.jpg)",
          }}
        >
          <div className="w-1/2 text-white text-left text-4xl lg:text-5xl font-bold container mx-auto px-8 lg:px-16 leading-tight py-12 ">
            EXPRESSION OF INTEREST FORM{" "}
            <span className="text-green-600">/</span> <br />
            <p className="text-xl text-white pt-5 font-semibold">
              Investment Application
            </p>
          </div>
          <div className="text-black w-1/2 mt-10 container mx-auto lg:px-16">
            <p className="text-red-500 text-base">
              Please Go through the Checklist on our website and make sure you
              meet the criteria before submission.
            </p>
            <div className="flex flex-col justify-center shadow-xl w-full bg-transparent gap-4">
              <input
                className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white"
                type="email"
                placeholder="Email"
              />
              <input
                className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white"
                type="text"
                placeholder="Company"
              />

              <input
                className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white"
                type="text"
                placeholder="Type name"
              />
              <input
                className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white"
                type="text"
                placeholder="Name of Companys’ Rep"
              />

              <div className="flex gap-2">
                <input
                  className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white"
                  type="text"
                  placeholder="Position"
                />
                <input
                  className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white"
                  type="text"
                  placeholder="Country"
                />
              </div>
              <div className="flex gap-2">
                <input
                  className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white"
                  type="text"
                  placeholder="Address"
                />
                <input
                  className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white"
                  type="text"
                  placeholder="Phone"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
