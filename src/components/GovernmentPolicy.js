import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";

// import partners from "../img/partners.jpg";

const GovernmentPolicy = () => {
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
            backgroundImage: "url(/assets/policy.jpg)",
          }}
        >
          <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
            <span className="text-white">GOVERNMENT POLICY </span>
            <span className="text-green-600">/</span> <br />
            <p className="text-base text-green-600 pt-5 font-semibold">
              THE GREEN ECONOMIC ZONE AT A GLANCE
            </p>
          </div>
        </div>
      </section>
      <div className="bg-gray-200 font-normal text-gray-700 text-base lg:text-base ">
        <p className="container mx-auto pl-32 py-6 text-center">
          Kaduna State Government policies
        </p>
      </div>
      <section className="container mx-auto p-20">
        <p className="container mx-auto px-12 py-6">
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

export default GovernmentPolicy;
