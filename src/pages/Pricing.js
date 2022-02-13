import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";
import zone1 from "../img/zone1.jpg";
import zone2 from "../img/zone2.jpeg";
import zone3 from "../img/zone-3.jpg";
import zone4 from "../img/zone-4.jpg";
import { Link } from "react-router-dom";

const Pricing = () => {
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
    <div className="">
      <section className="">
        <div className="fixed w-full z-40">
          {navbar ? <StickyHeader /> : <Header />}
        </div>
        <div
          className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-left"
          style={{
            backgroundImage: "url(/assets/pricing.jpg)",
          }}
        >
          <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
            PRICING <span className="text-green-600">/</span> <br />
            <p className="text-base text-white pt-5 font-semibold">
              THE GREEN ECONOMIC ZONE AT A GLANCE
            </p>
          </div>
        </div>
      </section>
      <div className="bg-gray-200 font-normal text-gray-700 text-base lg:text-base ">
        <p className="container mx-auto py-6 text-center">
          Designed to provide a “plug and play” facility for Micro, Small and
          Medium Enterprises (MSMEs) to enable them to operate competitively.
        </p>
      </div>
      <section className="flex justify-center items-center">
        <div className="py-5">
          <div className="flex">
            <Link to="#">
              <div className="relative border-r-4 border-b-4 border-gray-200">
                <img src={zone1} alt="" className="blur-sm" height={500} width={500} />
                <div className="absolute inset-0 hover:bg-green-500/50 text-white">
                  <h1 className="text-5xl text-center py-16 font-bold">
                    Zone-1
                  </h1>
                  <div className="flex justify-evenly">
                    <span className="text-xl">PRICE: 35 USD per sqm</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="#">
              <div className="relative border-l-4 border-b-4 border-gray-200">
                <img src={zone4} className="blur-sm" alt="" height={500} width={500} />
                <div className="absolute inset-0 hover:bg-green-500/50 text-white">
                  <h1 className="text-5xl text-center py-16 font-bold">
                    ZONE-2
                  </h1>
                  <div className="flex justify-evenly">
                    <span className="text-xl">Price: 31 USD per sqm</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex">
            <Link to="#">
              <div className="relative border-r-4 border-t-4 border-gray-200">
                <img src={zone3} alt="" className="blur-sm" height={500} width={500} />
                <div className="absolute inset-0 hover:bg-green-500/50 text-white">
                  <h1 className="text-5xl text-center py-16 font-bold">
                    ZONE-3
                  </h1>
                  <div className="flex justify-evenly">
                    <span className="text-xl">Price: 26 USD per sqm</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="#">
              <div className="relative border-l-4 border-t-4 border-gray-200">
                <img src={zone2} alt="" className="blur-sm" height={500} width={500} />
                <div className="absolute inset-0 hover:bg-green-500/50 text-white">
                  <h1 className="text-5xl text-center  py-16 font-bold">
                    ZONE-4
                  </h1>
                  <div className="flex justify-evenly">
                    <span className="text-xl">Price: 21 USD per sqm</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="text-base flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start ">
          <div
            className="w-full lg:w-1/2 h-screen"
            style={{ background: "#EBEBEB", color: "#000" }}
          >
            <div className="container mx-auto px-8 lg:p-20 py-8 my-14 text-justify">
              <p className="text-2xl font-semibold py-8 text-gray-700">
                PAYMENT PLAN
                <span className="text-green-600 font-bold">/</span>
              </p>
              <p className="text-xl font-semibold text-gray-700">
                These are the payment options available at the Green Economic
                Zone, Kaduna.
              </p>
              <br />
              <ul className="font-light text-gray-700  py-2 text-lg list-outside text-justify" style={{ marginLeft: '1rem' }}>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> One-off full payment.
                </li>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> Bi-annual payment of 50% of the total price.
                </li>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> 4-year installmental payments of 25% of the total price.
                </li>
                <li
                  className="p-1"

                >
                  <img alt="" src="/assets/bullet.png" style={{ width: "24px", height: "24px", display: "inline", marginTop: '-4px' }} /> C of O is issued and deposited with the bank and will be
                  handed over to the anchor tenant on completion of payment.
                </li>
              </ul>

              {/* <p className='cursor-pointer text-green-600 text-base font-semibold py-8'>
								LEARN MORE...
							</p> */}
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 h-screen bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url(/assets/bckgrnd-1.jpg)",
            }}
          ></div>
        </div>
      </section>

      <section>
        <div className="text-base flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start ">
          <div
            className="w-full lg:w-1/2 h-screen bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url(/assets/bckgrnd-2.jpg)",
            }}
          ></div>
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
        </div>
      </section>

      <section className="">
        <div
          style={{ background: "#373A36" }}
          className="w-full text-center mt-10 "
        >
          <div className="py-16 flex justify-center items-center flex-col container mx-auto px-4">
            <div className="w-20">
              <img className="w-full" src="../assets/doc3.png" alt="" />
            </div>
            <p className="text-3xl font-semibold py-8 text-white">
              DOWNLOAD OUR BROCHURE
              <span className="text-green-600 font-bold">/</span>
            </p>
            <p className="cursor-pointer text-green-600 text-base font-semibold">
              <a href="https://drive.google.com/file/d/1uFaJ4Pc_99UYwfDChgEp06FnZXWfVIxb/view?usp=sharing" style={{ textDecoration: 'none' }}>Click here...</a>
            </p>
          </div>
        </div>
      </section>
      <section className="">
        <Footer />
      </section>
    </div>
  );
};

export default Pricing;
