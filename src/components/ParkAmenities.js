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
        <div className="fixed w-full z-40">
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
      <section className="">
        <div className="text-base flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start ">

          <div
            className="w-full lg:w-1/2 h-screen"
            style={{ background: "#EBEBEB", color: "#000" }}
          >
            <div className="container mx-auto px-8 lg:p-20 py-auto my-auto">
              <p className="text-2xl font-semibold pb-4 text-gray-700">
                AMENITIES
                <span className="text-green-600 font-bold">/</span>
              </p>
              <p className="text-xl font-semibold text-gray-700">
                The industrial park is served with top-notch infrastructures and
                amenities:
              </p>
              <br />
              <ul className="font-light text-gray-700  py-2 text-lg list-outside text-justify" style={{ marginLeft: '1rem' }}>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> Fibre Optics.
                </li>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> Solar street lights.
                </li>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> Paved walkways and breathtaking landscaped green areas.
                </li>
                <li
                  className="p-1"

                > <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> 3000metric tons of water supply from Kangimi dam.
                </li>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> Firefighters and Fire station.
                </li>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> Ultra-modern specialist hospital.
                </li>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> Central Research and Laboratory.
                </li>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> Warehouses.
                </li>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> 24hrs CCTV surveillance.
                </li>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> Skills development centers and administration blocks.
                </li>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> Environmental Cleaning and Annual Fumigation.
                </li>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> Domestic & Industrial Waste Including Evacuation.
                </li>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> Water Treatment System Sewage System.
                </li>
              </ul>
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 h-screen bg-no-repeat bg-contain m-16 mt-32"
            style={{
              backgroundImage: "url(/assets/infrastructure.jpg)",
            }}
          ></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ParkAmenities;
