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
          className="w-full h-screen bg-no-repeat bg-cover bg-bottom flex flex-col justify-center items-left"
          style={{
            backgroundImage: "url(/assets/partners1.jpg)",
          }}
        >
          <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
            PARTNERS<span className="text-green-600"> /</span>
          </div>
        </div>
      </section>
      <div className="bg-gray-200 font-normal text-gray-700 text-base lg:text-base ">
        <p className="container mx-auto px-12 py-6">
          <p className="text-base text-green-600 pt-5 font-semibold">
            THE GREEN ECONOMIC ZONE AT A GLANCE
          </p>
          The Green Economic Zone is one of the innovative business projects
          conceived by the visionary leadership His Excellency Nasir El Rufai’s
          administration. On the October, 2021 the Kaduna state government
          signed a partnership agreement with KK Kingdom an indigenous
          construction company based in Abuja Nigeria to deliver a state of the
          art Economic Green Zone situated in Igabi, LGA, Kaduna State in 2
          years.
        </p>
        <div className="bg-gray-200 font-normal text-gray-700 text-base lg:text-base">
          <p className="container mx-auto px-12 py-6">
            <div className="text-green-600 font-bold">LEAD PARTNERS</div>
            KK KINGDOM NIGERIA LIMITED is a top notch indigenous construction
            company based in FCT, Abuja, Nigeria, with a track record of over
            ten years executing iconic projects under their belt. Our portfolio
            of dynamic, elegant, sophisticated modern structures speaks for
            themselves trusting in our uncompromising dedication to quality and
            safety protocols which has gained us the reputation as the partner
            of choice in the construction industry. We are proud of our latest
            project which is the development of the Green Economic Zone (GEZ) in
            partnership with the Kaduna State Government, Nigeria. Imagine the
            perfect fusion of prestige, sustainable living and technology in one
            place. This is not imaginary – It is a revolution. The FUTURE is
            here.
          </p>

          <p className="container mx-auto px-12 py-6">
            <div className="text-green-600 font-bold">STRATEGIC PARTNERS</div>
            AFREXIM BANK – The African Export-Import Bank was established in
            1993 by African governments, African private and institutional
            investors, and non-African financial institutions and private
            investors. Its purpose is the financing, promoting and expanding of
            intra-African and extra-African trade. It’s headquarters in Cairo
            and has branch offices in Harare, Zimbabwe and Abuja, Nigeria, with
            an authorized share capital of $750 million.
          </p>
        </div>
      </div>
      <section className="container mx-auto p-20">
        <ClientsCarousel sliderDirection="slider-static" />
        {/* 
        <ClientsCarousel sliderDirection="slider-static" />

        <ClientsCarousel sliderDirection="slider-static" />
        <ClientsCarousel sliderDirection="slider-static" /> */}
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
