import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";

const WhyInvest = () => {
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
          <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
            WHY GEZ <br />
          </div>
        </div>
      </section>
      <div className="text-base flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start ">
        <div
          className="w-full lg:w-1/2 h-screen"
          style={{
            background: "#EBEBEB",
            color: "#000",
          }}
        >
          <div className="container mx-auto px-8 lg:p-20 py-8 my-14">
            <p className="text-2xl font-semibold py-8 text-gray-700">
              WHY INVEST IN GREEN ZONE
              <span className="text-green-600 font-bold">/</span>
            </p>
            <br />
            {/* <p
            className="font-normal text-gray-700 text-xl"
            
          >
            The FUTURE is here for today. A phenomenal green economic zone
            powered by the Kaduna State Government in partnership with KK
            Kingdom an indigenous construction company based in FCT, Abuja,
            Nigeria.
          </p> */}
            <ul className="font-light text-gray-700 bullets list-outside text-justify">
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
            backgroundImage: "url(/assets/art4.jpg)",
            borderTop: "5px solid green",
            borderBottom: "5px solid green",
          }}
        ></div>
      </div>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default WhyInvest;
