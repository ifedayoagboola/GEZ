import React, { useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";

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
      <section>
        <div className="fixed w-full">
          {navbar ? <StickyHeader /> : <Header />}
        </div>
        <div
          className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-left"
          style={{
            backgroundImage: "url(/assets/art3.jpg)",
          }}
        >
          <div className="text-white text-left text-3xl lg:text-4xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
            APPLY NOW
            <span className="text-green-600 font-bold">/</span>
          </div>
        </div>
      </section>
      <div className="text-base flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start ">
        <div
          className="w-full lg:w-1/2 h-screen"
          style={{ background: "#EBEBEB", color: "#000" }}
        >
          <div className="container mx-auto px-8 lg:p-20 py-8 my-14">
            <p className="text-2xl font-semibold py-8 text-gray-700">
              A Modern, Sustainable and Innovative Business Park
            </p>
            <br />
            <p
              className="font-normal text-gray-700 text-xl"
              style={{ borderRight: "2px solid green" }}
            >
              GEZ as a “Special Area” will take advantage of the open green eco
              system to promote the integration of local and international
              businesses, optimized financial services, cutting-edge scientific
              and technological research and development, cross-border trade
              service and other functions.
            </p>

            {/* <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
            LEARN MORE...
          </p> */}
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 h-screen bg-no-repeat bg-cover shadow-xl"
          // style={{
          //   backgroundImage: "url(/assets/aboutbg4.jpg)",
          // }}
        >
          <div className="text-black w-full mt-20 mx-auto px-8 ">
            <p className="text-2xl font-semibold py-8 text-gray-700">
              EXPRESSION OF INTEREST FORM
            </p>
            <p className="text-red-500 text-sm">
              Please Go through the Checklist on our website and make sure you
              meet the criteria before submission.
            </p>
            <div className="">
              <form className="flex flex-col justify-center  w-full gap-4">
                <input
                  style={{
                    outline: "none",
                  }}
                  className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                  type="email"
                  placeholder="Email"
                />
                <input
                  style={{
                    outline: "none",
                  }}
                  className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                  type="text"
                  placeholder="Company"
                />
                <div className="flex gap-2">
                  <input
                    style={{
                      outline: "none",
                    }}
                    className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                    type="text"
                    placeholder="Phone"
                  />
                  <input
                    style={{
                      outline: "none",
                    }}
                    className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                    type="text"
                    placeholder="Type name"
                  />
                </div>

                <input
                  style={{
                    outline: "none",
                  }}
                  className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                  type="text"
                  placeholder="Name of Companys’ Rep"
                />

                <div className="flex gap-2">
                  <input
                    style={{
                      outline: "none",
                    }}
                    className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                    type="text"
                    placeholder="Position"
                  />
                  <input
                    style={{
                      outline: "none",
                    }}
                    className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                    type="text"
                    placeholder="Country"
                  />
                </div>
                <textarea
                  style={{
                    outline: "none",
                  }}
                  className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                  type="text"
                  placeholder="Address"
                />

                <Button text="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-10">
        <Footer />
      </section>
    </div>
  );
};

export default Apply;
