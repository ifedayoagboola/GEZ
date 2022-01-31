import React, { useState } from "react";
import ClientsCarousel from "../components/ClientsCarousel";
import Footer from "../components/Footer";
import Header from "../components/Header";

import aboutImg from "../img/aboutbg.jpg";
import mission from "../img/mission.svg";
import vision from "../img/vision.svg";
import values from "../img/values.svg";

import NewsCard from "../components/NewsCard";
import StickyHeader from "../components/StickyHeader";

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
            backgroundImage: "url(/assets/aboutbg3.jpg)",
          }}
        >
          <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
            ABOUT US <span className="text-green-600">/</span> <br />
            <p className="text-base text-white pt-5 font-semibold">
              THE GREEN ECONOMIC ZONE AT A GLANCE
            </p>
          </div>
        </div>
      </section>
      <div className="bg-gray-200 font-normal text-gray-700 text-base lg:text-xl ">
        <p className="container mx-auto px-12 py-6">
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
                className="font-normal text-gray-700 text-xl"
                style={{ borderRight: "2px solid green" }}
              >
                The FUTURE is here for today. A phenomenal green economic zone
                powered by the Kaduna State Government in partnership with KK
                Kingdom an indigenous construction company based in FCT, Abuja,
                Nigeria.
              </p>
              <p
                className="font-light text-gray-700"
                style={{ borderRight: "2px solid green" }}
              >
                GEZ is an industrial park designed to provide a “plug and play”
                facility for Micro, Small & Medium Enterprises (MSMEs) to enable
                them to operate competitively. GEZ will help firms to establish
                their manufacturing plants more efficiently and reduce their
                cost of doing business providing jobs and boosting the economy
                of the state.
              </p>
              <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
                LEARN MORE...
              </p>
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 h-screen bg-no-repeat bg-cover"
            style={{
              backgroundImage: "url(/assets/bg2.jpg)",
            }}
          ></div>
        </div>
        <div className="text-xl text-white lg:text-2xl flex flex-col lg:flex-row  w-full items-center lg:items-start ">
          <div className="w-full lg:w-3/6">
            <div style={{ background: "#2D2926" }}>
              <div className="container mx-auto px-8 lg:px-20 py-8 flex items-center gap-4">
                <img src={vision} alt="" />
                <div className="py-10">
                  <p className="text-4xl font-semibold">OUR VISION</p>
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, consectetur?
                  </p>
                </div>
              </div>
            </div>
            <div style={{ background: "#373330" }}>
              <div className="container mx-auto px-8 lg:px-20 py-8 flex items-center gap-4">
                <img src={mission} alt="" />
                <div className="py-10">
                  <p className="text-4xl font-semibold">OUR MISSION</p>
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, consectetur?
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
                <p className="text-2xl font-semibold">
                  THE <span className="text-green-600">GREEN</span> ECONOMIC
                  ZONE AT A GLANCE
                </p>
                <p className="py-4">
                  It is a N15bn Industrial Park that will provide critical
                  infrastructure to enable firms set up manufacturing plants
                  within the industrial park.
                </p>
                <p className="py-4">
                  It is a Public Private Partnership between the Kaduna State
                  Government and KK Kingdom Ltd.
                </p>
                <p className="py-4">
                  It is one of the two industrial parks designed by the Nasir
                  El-Rufai administration.
                </p>
                {/* <p className="py-4">
                  It is a 717 Hectares Land located on the Kaduna –Jos Road.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="">
        <div className="px-4 lg:px-20">
          <p className="text-2xl font-semibold py-8 text-gray-700">
            CLUSTERS AND LAYOUT
            <span className="text-green-600 font-bold">/</span>
          </p>
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {articles.map((article) => {
              return <NewsCard key={article.id} article={article} />;
            })}
          </div>
          <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
            READ MORE NEWS...
          </p>
        </div>
      </section> */}
      {/* <section className="">
        <div style={{ background: "#dddddd" }} className="px-20">
          <p className="text-2xl font-semibold py-8 text-gray-700">
            OUR PARTNERS<span className="text-green-600 font-bold">/</span>
          </p>
          <ClientsCarousel />
        </div>
      </section> */}
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

export default About;
