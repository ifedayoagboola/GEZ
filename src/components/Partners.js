import React, { useState } from "react";
import ClientsCarousel from "../components/ClientsCarousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";

// import partners from "../img/partners.jpg";

const Partners = () => {
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
        <div className="fixed w-full">
          {navbar ? <StickyHeader /> : <Header />}
        </div>
        <div
          className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-left"
          style={{
            backgroundImage: "url(/assets/partners.jpg)",
          }}
        >
          <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
            <span className="text-green-600">PARTNERS /</span> <br />
            <p className="text-base text-black pt-5 font-semibold">
              THE GREEN ECONOMIC ZONE AT A GLANCE
            </p>
          </div>
        </div>
      </section>
      <div className="bg-gray-200 font-normal text-gray-700 text-base lg:text-base ">
        <p className="container mx-auto px-12 py-6">
          Kaduna state government in partnership with KK Kingdom an indigenous
          construction company based in Abuja Nigeria have signed an agreement
          to deliver a state of the art Economic Green Zone situated in Igabi,
          LGA, Kaduna State in 2 years.
        </p>
      </div>
      <section className="container mx-auto p-20">
        <ClientsCarousel sliderDirection="slider-left" />
        <ClientsCarousel sliderDirection="slider-right" />
        <ClientsCarousel sliderDirection="slider-left" />
        <ClientsCarousel sliderDirection="slider-right" />
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

export default Partners;
