import React, { useState } from "react";
import background from "../assets/background.jpg";
import Navbar from "../components/Navbar";

const NavLinks = [
  { id: "1", link: "ABOUT GEZ", route: "/about" },
  { id: "2", link: "KADUNA", route: "/kaduna" },
  { id: "3", link: "BUSINESS UNIT", route: "/business" },
  { id: "4", link: "PRICING", route: "/pricing" },
  { id: "5", link: "NEWS & EVENTS", route: "/news" },
  { id: "6", link: "CONTACT", route: "/contact" },
  { id: "7", link: "ABOUT GEZ", route: "/about" },
];

const Home = () => {
  return (
    <div>
      <section>
        <div className="fixed z-20 w-full">
          <Navbar NavLinks={NavLinks} />
        </div>
        <div className=" h-5/6 ">
          <img className="w-full h-screen relative" src={background} alt="" />
          <div className="text-white text-left left-0 inset-y-80 absolute text-6xl font-semibold px-16 leading-tight">
            THE GREEN <br />
            ECONOMIC ZONE
            <p className="text-base">
              Enabling trade and industrial investments by leveraging the
              integrated <br /> services of KIZAD with Khalifa Port.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="text-3xl flex">
          <div style={{ background: "#EBEBEB", color: "#000" }}>
            <div className="p-10">
              <p className="text-3xl font-semibold py-8">KIZAD OFFERINGS/</p>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus deserunt cum error eaque, debitis culpa nam sint
                laudantium id? Placeat, voluptatibus magnam tenetur
                necessitatibus assumenda facilis ratione.
              </p>
              <p className="cursor-pointer text-red-600 text-base font-semibold py-8">
                LEARN MORE...
              </p>
            </div>
          </div>
          <div style={{ background: "#373A36", color: "#fff" }}>
            <div className="p-10">
              <p className="text-3xl font-semibold py-8">KIZAD OFFERINGS/</p>
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus deserunt cum error eaque, debitis culpa nam sint
                laudantium id? Placeat, voluptatibus magnam tenetur
                necessitatibus assumenda facilis ratione.
              </p>
              <p className="cursor-pointer text-red-600 text-base font-semibold py-8">
                LEARN MORE...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
