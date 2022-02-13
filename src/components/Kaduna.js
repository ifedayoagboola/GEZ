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
            backgroundImage: "url(/assets/kdbg2.jpg)",
          }}
        >
          <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
            WHY INVEST IN KADUNA <br />

          </div>
        </div>
      </section>
      <div className="bg-gray-200 font-normal text-gray-700 text-base lg:text-base">
        <p className="container mx-auto px-12 py-6 text-center">
          The Kaduna State Investment Promotion Agency (KADIPA) is a One-Stop
          Investment Centre for businesses and investments. As part of our
          duties, we facilitate investments in the state by coordinating all the
          activities of MDAs in the business environment. Our approach ensures
          the realization of the maximum benefits of policies and regulations in
          the state.
        </p>
      </div>

      <section>
        <div className="text-base flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start ">
          <div
            className="w-full lg:w-1/2 h-screen"
            style={{ background: "#EBEBEB", color: "#000" }}
          >
            <div className="container mx-auto px-8 lg:p-20 py-8">
              <p className="text-2xl font-semibold text-gray-700">
                WHY KADUNA
                <span className="text-green-600 font-bold">/</span>
              </p>
              <br />

              <p
                className="font-light text-gray-700 mb-4 text-justify"

              >
                <span className="text-green-600 font-bold ">
                  INVESTOR-FRIENDLY ENVIRONMENT:&nbsp;
                </span>
                Number one in ease of doing business (World Bank ranking).
                Nigeria's leading state in transparency and open governance.
                Easiest place to register land compared to other states.
              </p>
              <p
                className="font-light text-gray-700 mb-4 text-justify"

              >
                <span className="text-green-600 font-bold">
                  THE WONDERLAND OF AGRICULTURE:&nbsp;
                </span>
                No. 1 producer of ginger. No. 1 producer of maize. Second
                largest producer of soya beans.
              </p>
              <p
                className="font-light text-gray-700 mb-4 text-justify"

              >
                <span className="text-green-600 font-bold">
                  GATEWAY TO NORTHERN NIGERIA MARKETS:&nbsp;
                </span>
                A natural bridge between 19 northern states, thus creating an
                efficient and cost effective outlets to major markets providing
                access to about 90 million customers in Nigeria.
              </p>
              <p
                className="font-light text-gray-700 mb-4 text-justify"

              >
                <span className="text-green-600 font-bold">
                  THIRD BIGGEST CONSUMER MARKET IN NIGERIA:&nbsp;
                </span>
                Access to 52% of Nigeria's consumer market and third most
                populous state in Nigeria.
              </p>
              <p
                className="font-light text-gray-700 mb-4 text-justify"

              >
                <span className="text-green-600 font-bold">
                  RICH IN MINERAL RESOURCES:&nbsp;
                </span>
                Over 25 non-oil mineral deposits, including gold, iron ore,
                marble. The state has over 25 mineral types across the entire 23
                local governments.
              </p>

              {/* <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
                LEARN MORE...
              </p> */}
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 h-screen bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url(/assets/kaduna.jpg)",
            }}
          ></div>
        </div>

        <div className="text-base flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start ">
          <div
            className="w-full lg:w-1/2 h-screen bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url(/assets/kdbg1.jpg)",
            }}
          ></div>

          <div
            className="w-full lg:w-1/2 h-screen"
            style={{ background: "#EBEBEB", color: "#000" }}
          >
            <div className="container mx-auto px-8 lg:p-20 py-8">
              <p className="font-light text-gray-700 py-6 text-justify">
                We have a reputation for providing streamlined, efficient, and
                transparent services to our clients with a view to reducing the
                cost of doing business in the state. Within the short period of
                our existence, we have perfected mechanisms that shorten and
                simplify administrative procedures for the issuance of business
                approvals, permits and licenses, and company incorporation.
              </p>

              <p
                className="font-light text-gray-700 mb-4 text-justify"

              >
                <span className="text-green-600 font-bold">
                  STEADY ECONOMIC GROWTH:&nbsp;
                </span>
                Kaduna’s innovative governance initiatives have resulted in
                steady economic growth. We have seen a 91% increase in IGR since
                2016, leading to increases in the public service provision, with
                an average of 8.82% YoY GBP growth.
              </p>
              <p
                className="font-light text-gray-700 mb-4 text-justify"

              >
                <span className="text-green-600 font-bold">
                  PRODUCTIVE WORKFORCE:&nbsp;
                </span>
                Kaduna state has a large youthful population with a majority
                within the productive age. We have further complemented this by
                providing easy access to skilled manpower from the many quality
                educational institution that support skills development.
              </p>
              <p
                className="font-light text-gray-700 mb-4 text-justify"

              >
                <span className="text-green-600 font-bold ">
                  ABUNDANT NATUAL RESOURCES:&nbsp;
                </span>
                In addition to its invaluable human resources Kaduna is blessed
                with abundant natural resources to support agricultural and
                industrial production.
              </p>
              <p
                className="font-light text-gray-700 mb-4 text-justify"

              >
                <span className="text-green-600 font-bold">
                  FAVOURBALE BUSINESS REGULATORY ENVIRONMENT:&nbsp;
                </span>
                Kaduna’s visionary leadership and innovative governance
                initiatives have made the state one of the most convenient
                places to do business in Nigeria.
              </p>

              {/* <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
                LEARN MORE...
              </p> */}
            </div>
          </div>
        </div>

        <div className="text-base flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start ">
          <div
            className="w-full lg:w-1/2 h-screen"
            style={{ background: "#EBEBEB", color: "#000" }}
          >
            <div className="container mx-auto px-8 lg:p-20 py-8">
              <p className="text-2xl font-semibold text-gray-700">
                GOVERNMENT POLICY
                <span className="text-green-600 font-bold">/</span>
              </p>
              <br />
              <p className="container mx-auto px-12 py-6 text-justify font-light text-gray-700">
                Kaduna state is the 8th largest, the state servers as a gateway to its
                position making it a very lucrative region for international trade and
                investment. Kaduna State’s visionary leadership under the
                administration of His Excellency Nasir El Rufai is impeccable and
                continues to reinforce its credentials as a business-friendly state,
                which has made the state one of the easiest places to do business in
                Nigeria. The Administrative processes for the issuance of business
                approvals, permits and licenses and company incorporation is seamless,
                thus has made it easy for business investors to set up and thrive.{" "}
                <span className="cursor-pointer text-green-600 text-base font-semibold py-8">
                  <a
                    href="https://kadipa.kdsg.gov.ng/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    LEARN MORE...
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 h-screen bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url(/assets/policy.jpeg)",
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

export default Kaduna;
