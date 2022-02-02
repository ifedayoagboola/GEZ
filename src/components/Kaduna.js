import React, { useState } from "react";
import ClientsCarousel from "../components/ClientsCarousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";
import WhyInvest from "./WhyInvest";

import vision from "../img/vision.svg";

const Kaduna = () => {
  const [navbar, setNavbar] = useState(false);
  const [hover, setHover] = useState(false);
  const navHandler = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", navHandler);

  const hoverHandler = () => {
    setHover(true);
  };
  return (
    <div className="">
      <section className="">
        <div className="fixed w-full">
          {navbar ? <StickyHeader /> : <Header />}
        </div>
        <div
          className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-left"
          style={{
            backgroundImage: "url(/assets/kaduna.jpg)",
          }}
        >
          <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
            WHY INVEST IN KADUNA<span className="text-green-600">?</span> <br />
            <p className="text-base text-white pt-5 font-semibold">
              ABOUT KADIPA
            </p>
          </div>
        </div>
      </section>
      <div className="bg-gray-200 font-normal text-gray-700 text-base lg:text-base ">
        <p className="container mx-auto px-12 py-6">
          The Kaduna State Investment Promotion Agency (KADIPA) is a One-Stop
          Investment Centre for businesses and investments. As part of our
          duties, we facilitate investments in the state by coordinating all the
          activities of MDAs in the business environment. Our approach ensures
          the realization of the maximum benefits of policies and regulations in
          the state.
        </p>
      </div>
      <section style={{ background: "#373A36" }}>
        <div className="container mx-auto px-20 flex items-center">
          <div>
            <div className="flex justify-center items-center py-20">
              <div className="w-1/2">
                <p className="text-2xl font-semibold text-white">
                  ZONE A<span className="text-green-600">/</span>
                </p>
                <img src={vision} alt="" />

                <p className="text-white">
                  <span className="text-5xl lg:text-6xl font-bold text-green-600">
                    35
                  </span>
                  USD per sqm
                </p>
              </div>
              <div className="w-1/2">
                <p className="text-2xl font-semibold text-white">
                  ZONE A<span className="text-green-600">/</span>
                </p>
                <img src={vision} alt="" />

                <p className="text-white">
                  <span className="text-5xl lg:text-6xl font-bold text-green-600">
                    35
                  </span>
                  USD per sqm
                </p>
              </div>
            </div>

            <div className="flex py-20">
              <div className="w-1/2">
                <p className="text-2xl font-semibold text-white">
                  ZONE A<span className="text-green-600">/</span>
                </p>
                <img src={vision} alt="" />

                <p className="text-white">
                  <span className="text-5xl lg:text-6xl font-bold text-green-600">
                    35
                  </span>
                  USD per sqm
                </p>
              </div>
              <div className="w-1/2">
                <p className="text-2xl font-semibold text-white">
                  ZONE A<span className="text-green-600">/</span>
                </p>
                <img src={vision} alt="" />

                <p className="text-white">
                  <span className="text-5xl lg:text-6xl font-bold text-green-600">
                    35
                  </span>
                  USD per sqm
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex py-20">
              <div className="w-1/2">
                <p className="text-2xl font-semibold text-white">
                  ZONE A<span className="text-green-600">/</span>
                </p>
                <img src={vision} alt="" />

                <p className="text-white">
                  <span className="text-5xl lg:text-6xl font-bold text-green-600">
                    35
                  </span>
                  USD per sqm
                </p>
              </div>
              <div className="w-1/2">
                <p className="text-2xl font-semibold text-white">
                  ZONE A<span className="text-green-600">/</span>
                </p>
                <img src={vision} alt="" />

                <p className="text-white">
                  <span className="text-5xl lg:text-6xl font-bold text-green-600">
                    35
                  </span>
                  USD per sqm
                </p>
              </div>
            </div>
            <div className="flex  py-20">
              <div className="w-1/2">
                <p className="text-2xl font-semibold text-white">
                  ZONE A<span className="text-green-600">/</span>
                </p>
                <img src={vision} alt="" />

                <p className="text-white">
                  <span className="text-5xl lg:text-6xl font-bold text-green-600">
                    35
                  </span>
                  USD per sqm
                </p>
              </div>
              <div className="w-1/2">
                <p className="text-2xl font-semibold text-white">
                  ZONE A<span className="text-green-600">/</span>
                </p>
                <img src={vision} alt="" />

                <p className="text-white">
                  <span className="text-5xl lg:text-6xl font-bold text-green-600">
                    35
                  </span>
                  USD per sqm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <WhyInvest />
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
              Click here...
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

export default Kaduna;
