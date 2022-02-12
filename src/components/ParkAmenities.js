import React, { useState } from "react";
import Footer from "../components/Footer";
import StickyHeader from "../components/StickyHeader";
import Header from "../components/Header";

const ParkAmenities = () => {
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
        <div
          className={
            !navbar ? "bg-black bg-opacity-60 fixed w-full" : "fixed w-full"
          }
        >
          {navbar ? <StickyHeader /> : <Header />}
        </div>
        <div
          className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-left"
          style={{
            backgroundImage: "url(/assets/partners.jpg)",
          }}
        >
          <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
            AMENITIES <span className="text-green-600">/</span> <br />
          </div>
        </div>
      </section>
      <div className="text-base flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start mb-10">
        <div
          className="w-full lg:w-1/2 h-screen"
          style={{ background: "#EBEBEB", color: "#000" }}
        >
          <div className="container mx-auto px-8 lg:p-20 py-8 my-14">
            <p className="text-2xl font-light py-8 text-gray-700">
              The industrial park, is served with top notch infrastructures and
              amenities:
              {/* <span className="text-green-600 font-bold">/</span> */}
            </p>
            <br />

            <p
              className="font-light text-gray-700 text-base"
              style={{ borderRight: "2px solid green" }}
            >
              Fiber Optics
            </p>
            <p
              className="font-light text-gray-700 text-base"
              style={{ borderRight: "2px solid green" }}
            >
              Solar street lights
            </p>
            <p
              className="font-light text-gray-700 text-base"
              style={{ borderRight: "2px solid green" }}
            >
              Paved walkways and breathtaking landscaped green areas
            </p>
            <p
              className="font-light text-gray-700 text-base"
              style={{ borderRight: "2px solid green" }}
            >
              3000metric tons of water supply from Kangimi dam{" "}
            </p>
            <p
              className="font-light text-gray-700 text-base"
              style={{ borderRight: "2px solid green" }}
            >
              Firefighters and Fire station
            </p>
            <p
              className="font-light text-gray-700 text-base"
              style={{ borderRight: "2px solid green" }}
            >
              Ultra-modern specialist hospital
            </p>
            <p
              className="font-light text-gray-700 text-base"
              style={{ borderRight: "2px solid green" }}
            >
              Central research and Laboratory
            </p>
            <p
              className="font-light text-gray-700"
              style={{ borderRight: "2px solid green" }}
            >
              Warehouses
            </p>
            <p
              className="font-light text-gray-700"
              style={{ borderRight: "2px solid green" }}
            >
              24hrs CCTV surveillance
            </p>
            <p
              className="font-light text-gray-700"
              style={{ borderRight: "2px solid green" }}
            >
              1Skills development centers and administration blocks
            </p>
            <p
              className="font-light text-gray-700"
              style={{ borderRight: "2px solid green" }}
            >
              1Environmental Cleaning and Annual Fumigation
            </p>
            <p
              className="font-light text-gray-700"
              style={{ borderRight: "2px solid green" }}
            >
              1Domestic & Industrial Waste Including Evacuation
            </p>
            <p
              className="font-light text-gray-700"
              style={{ borderRight: "2px solid green" }}
            >
              1Water Treatment System Sewage System
            </p>
            {/* <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
              LEARN MORE...
            </p> */}
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 h-screen bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url(/assets/infrastructure.jpg)",
          }}
        ></div>
      </div>
      <Footer />
    </div>
  );
};

export default ParkAmenities;
