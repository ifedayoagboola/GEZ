import React, { useState } from "react";
import background from "../assets/background.jpg";
import doc from "../assets/doc3.png";
import ClientsCarousel from "../components/ClientsCarousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import NewsCard from "../components/NewsCard";

const NavLinks = [
  { id: "1", link: "ABOUT GEZ", route: "/about" },
  { id: "2", link: "KADUNA", route: "/kaduna" },
  { id: "3", link: "BUSINESS UNIT", route: "/business" },
  { id: "4", link: "PRICING", route: "/pricing" },
  { id: "5", link: "NEWS & EVENTS", route: "/news" },
  { id: "6", link: "CONTACT", route: "/contact" },
  { id: "7", link: "ABOUT GEZ", route: "/about" },
];
const article = [
  {
    id: "1",
    date: "June 6, 2022",
    content:
      " Repellendus deserunt cum error eaque, debitis culpa nam sintlaudantium id? Placeat.",
  },
  {
    id: "2",
    date: "June 22, 2022",
    content:
      " Repellendus deserunt cum error eaque, debitis culpa nam sintlaudantium id?",
  },
  {
    id: "3",
    date: "Just now",
    content:
      " Repellendus deserunt cum error eaque, debitis culpa nam sintlaudantium id? Placeat, voluptatibus magnam ",
  },
  {
    id: "4",
    date: "January 22, 2022",
    content: " Repellendus deserunt cum  nam sintlaudantium id? Placeat,",
  },
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
          <div className="text-white text-left left-0 inset-y-80 absolute text-6xl font-semibold px-20 leading-tight">
            THE GREEN <br />
            ECONOMIC ZONE
            <p className="text-base">
              Enabling trade and industrial investments by leveraging the
              integrated <br /> services of KIZAD with Khalifa Port.
            </p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="text-3xl flex">
          <div style={{ background: "#EBEBEB", color: "#000" }}>
            <div className="px-20 py-8">
              <p className="text-3xl font-semibold py-8">
                KIZAD OFFERINGS<span className="text-red-600">/</span>
              </p>
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
            <div className="px-20 py-8">
              <p className="text-3xl font-semibold py-8">
                KIZAD OFFERINGS<span className="text-red-600">/</span>
              </p>
              <p className="font-light font-semibold">
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
      <section>
        <div className="px-20">
          <p className="text-3xl font-semibold py-8">
            LATEST NEWS<span className="text-red-600">/</span>
          </p>
          <NewsCard article={article} />
        </div>
      </section>
      <section>
        <div style={{ background: "#dddddd" }} className="px-20">
          <p className="text-3xl font-semibold py-6">
            OUR PARTNERS<span className="text-red-600">/</span>
          </p>
          <ClientsCarousel />
        </div>
      </section>
      <section>
        <div
          style={{ background: "#373A36" }}
          className="w-full text-center mt-10 "
        >
          <div className="py-16 flex justify-center items-center flex-col">
            <div className="w-20">
              <img className="w-full" src={doc} alt="" />
            </div>
            <p className="text-3xl font-semibold py-8 text-white">
              DOWNLOAD OUR BROCHURE<span className="text-red-600">/</span>
            </p>
            <p className="cursor-pointer text-red-600 text-base font-semibold">
              Click here...
            </p>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
