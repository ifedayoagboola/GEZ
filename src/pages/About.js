import React, { useState } from "react";
import Footer from "../components/Footer";
import StickyHeader from "../components/StickyHeader";
import Header from "../components/Header";

import mission from "../img/mission.svg";
import vision from "../img/vision.svg";
import values from "../img/values.svg";

import WhyInvest from "../components/WhyInvest";

const About = () => {
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
            backgroundImage: "url(/assets/aboutbg4.jpg)",
          }}
        >
          <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
            ABOUT US <span className="text-green-600">/</span> <br />
            <p className="text-base text-white pt-5 font-semibold mb-4">
              THE GREEN ECONOMIC ZONE AT A GLANCE
            </p>
          </div>
        </div>
      </section>
      <div className="bg-gray-200 font-normal text-gray-700 text-base lg:text-base ">
        <p className="container mx-auto px-12 py-6 text-center">
          Designed to provide a “plug and play” facility for Micro, Small and
          Medium Enterprises (MSMEs) to enable them to operate competitively.
        </p>
      </div>
      <section className="">
        <div className="text-base flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start ">
          <div
            className="w-full lg:w-1/2 h-screen"
            style={{ background: "#EBEBEB", color: "#000" }}
          >
            <div className="container mx-auto px-8 lg:p-20 py-8 my-14">
              <p className="text-2xl font-semibold py-8 text-gray-700">
                THE GREEN ECONOMIC ZONE, GEZ
                <span className="text-green-600 font-bold">/</span>
              </p>
              <br />
              <p
                className="font-normal text-gray-700 text-xl mb-4 text-justify"

              >
                The FUTURE is here for today. A phenomenal green economic zone
                powered by the Kaduna State Government in partnership with KK
                Kingdom an indigenous construction company based in FCT, Abuja,
                Nigeria.
              </p>
              <p
                className="font-light text-gray-700 text-justify"

              >
                GEZ is an industrial park designed to provide a “plug and play”
                facility for Micro, Small & Medium Enterprises (MSMEs) to enable
                them to operate competitively. GEZ will help firms to establish
                their manufacturing plants more efficiently and reduce their
                cost of doing business providing jobs and boosting the economy
                of the state.
              </p>
              {/* <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
                LEARN MORE...
              </p> */}
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 h-screen bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url(/assets/bg2.png)",
            }}
          ></div>
        </div>
        <div className="text-xl text-white lg:text-2xl flex flex-col lg:flex-row  w-full items-center lg:items-start ">
          <div className="w-full lg:w-3/6">
            <div style={{ background: "#2D2926" }}>
              <div className="container mx-auto px-8 lg:px-20 py-8 flex items-center gap-4">
                <img src={vision} alt="" />
                <div className="py-10">
                  <p className="text-2xl font-semibold pb-2">LEAD PARTNERS</p>
                  <p className="text-sm">
                    KK KINGDOM NIGERIA LIMITED is a top notch indigenous
                    construction company based in FCT, Abuja, Nigeria, with a
                    track record of over ten years executing iconic projects
                    under their belt.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ background: "#373330" }}>
              <div className="container mx-auto px-8 lg:px-20 py-8 flex items-center gap-4">
                <img src={mission} alt="" />
                <div className="py-10">
                  <p className="text-2xl font-semibold pb-2">
                    STRATEGIC PARTNERS
                  </p>
                  <p className="text-sm">
                    AFREXIM BANK – The African Export-Import Bank was
                    established in 1993 by African governments, African private
                    and institutional investors, and non-African financial
                    institutions and private investors.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/6" style={{ background: "#EBEBEB" }}>
            <div className="container mx-auto px-8 lg:px-20 py-8">
              <div className="w-20 h-20 mb-2">
                <img className="w-full h-full" src={values} alt="" />
              </div>
              <div className="font-normal text-gray-700 text-lg">
                <ul className="bullets py-2 text-sm list-outside text-justify">

                  <span className="text-2xl font-semibold mb-1 p-1">
                    THE <span className="text-green-600">GREEN</span> ECONOMIC
                    ZONE AT A GLANCE
                  </span>
                  <li className="p-1">
                    It is a N15bn Industrial Park that will provide critical
                    infrastructure to enable firms set up manufacturing plants
                    within the industrial park.
                  </li>
                  <li className="p-1">
                    It is a Public Private Partnership between the Kaduna State
                    Government and KK Kingdom Ltd.
                  </li>
                  <li className="p-1">
                    It is one of the two industrial parks designed by the Nasir
                    El-Rufai administration.
                  </li>

                  <li className="p-1">
                    It is a 717 Hectares Land located on the Kaduna –Jos Road.
                  </li>
                  <li className="p-1">
                    Designed to provide a safe, secure and eco-friendly
                    environment for firms in the light manufacturing sector.
                  </li>
                  <li className="p-1">
                    The park is expected to provide jobs and boost the state's
                    internally Generated Revenue.
                  </li>
                  <li className="p-1 pb-4">
                    Expected to be completed and commissioned within two years.
                  </li>

                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-base flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start ">
          <div
            className="w-full lg:w-1/2 h-screen"
            style={{ background: "#EBEBEB", color: "#000" }}
          >
            <div className="container mx-auto px-8 lg:p-20 py-8 my-14">
              <p className="text-2xl font-semibold py-8 text-gray-700">
                WHY INVEST IN GREEN ZONE
                <span className="text-green-600 font-bold">/</span>
              </p>
              <br />

              <ul className="bullets font-light text-gray-700  list-outside text-justify">
                <li
                  className="p-1"

                >
                  COMPLETE TAX HOLIDAY from all Federal State and Local
                  Government taxes, rates and levies.
                </li>
                <li
                  className="p-1"

                >
                  DUTY FREE IMPORTATION on capital goods, machinery and
                  components, spare parts, raw materials and consumable items into
                  the zone.
                </li>
                <li
                  className="p-1"

                >
                  FOREIGN OWNERSHP 100% ownership of investments.
                </li>
                <li
                  className="p-1"

                >
                  REPATRATION OF PROFITS and dividends earned by foreign
                  investors in the zone.
                </li>
                <li

                  className="p-1"
                >
                  REPATRIATION OF CAPITAL 100% Repatriation of capital
                  investments in the zone at any time with capital appreciation of
                  the investment.
                </li>
                <li
                  className="p-1"

                >
                  EASE OF DOING BUSINESS one stop for approval, permits,
                  operating license, incorporation papers.
                </li>
                <li

                  className="p-1"
                >
                  IMMIGRATION WAIVERS. There would be no expatriate quota for
                  managers working in the zone.
                </li>
              </ul>
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 h-screen bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url(/assets/aboutbg3.jpg)",
            }}
          ></div>
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

export default About;
