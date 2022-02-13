import React, { useState } from "react";
import ClientsCarousel from "../components/ClientsCarousel";
import Footer from "../components/Footer";

import Header from "../components/Header";

import NewsCard from "../components/NewsCard";
import StickyHeader from "../components/StickyHeader";

import infograph from "../img/zone11.png";
import zone1 from "../img/zone1.png";
import zone2 from "../img/zone2.png";
import zone3 from "../img/zone3.png";
import zone4 from "../img/zone4.png";

import zone11 from "../img/zone11.png";
import zone21 from "../img/zone21.png";
import zone31 from "../img/zone31.png";
import zone41 from "../img/zone41.png";

// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


import articles from "../MediaData";
import { useEffect } from "react/cjs/react.development";
import $ from 'jquery';

const Home = () => {
  const [navbar, setNavbar] = useState(false);
  const navHandler = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", navHandler);

  const [image, setImage] = useState(zone11);


  const slideImages = [
    {
      url: '/assets/bg2.png',
      caption: 'Slide 1'
    },
    {
      url: 'assets/slide2.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'assets/slide3.jpg',
      caption: 'Slide 3'
    },
    {
      url: 'assets/slide4.jpg',
      caption: 'Slide 3'
    },
  ];

  useEffect(() => {

    $(".zoneButton").on("mouseover", function (e) {
      console.log(e.target)
      let id = e.target.id;
      console.log("ID IS: ", id);
      $('.zoneI').hide();

      $('#zone' + id).show();

    });

  })


  const zones = [
    {
      id: "1",
      title: "ZONE 1",
      img: zone1,
      mainImg: zone11
    },
    {
      id: "2",
      title: "ZONE 2",
      img: zone2,
      mainImg: zone21
    },
    {
      id: "3",
      title: "ZONE 3",
      img: zone3,
      mainImg: zone31
    },
    {
      id: "4",
      title: "ZONE 4",
      img: zone4,
      mainImg: zone41
    },
  ];
  // const Slideshow = () => {
  //   return (
  //     <div className="slide-container">
  //       <Slide autoplay={false}>
  //         {slideImages.map((slideImage, index) => (
  //           <span className="each-slide" key={index}>
  //             <div className="fixed w-full">
  //             {navbar ? <StickyHeader /> : <Header />}
  //             </div>
  //             <div
  //               className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-left"
  //               style={{ 'backgroundImage': `url(${slideImage.url})` }}>
  //               <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto  leading-tight mt-auto py-12">
  //                 THE <span className="text-green-600">GREEN</span> <br />
  //                 ECONOMIC ZONE
  //                 <p className="text-base text-white pt-5 font-semibold">
  //                   The Kaduna State government and KK Kingdom Nigeria Limited entered
  //                   <br /> into a public private partnership to develop the green
  //                   economic zone.
  //                 </p>
  //               </div>
  //             </div>
  //           </span>
  //         ))}
  //       </Slide>
  //     </div>
  //   )
  // }

  return (
    <div>
      <section>
        <div className="fixed w-full">
          {navbar ? <StickyHeader /> : <Header />}
        </div>
        <div
          className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-left"
          style={{
            backgroundImage: "url(/assets/bg2.png)",
          }}
        >
          <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto  leading-tight mt-auto py-12">
            THE <span className="text-green-600">GREEN</span> <br />
            ECONOMIC ZONE
            <p className="text-base text-white pt-5 font-semibold">
              The Kaduna State government and KK Kingdom Nigeria Limited entered
              <br /> into a public private partnership to develop the green
              economic zone.
            </p>
          </div>
        </div>

      </section>
      <section className="">
        <div className="text-xl lg:text-2xl flex flex-col lg:flex-row h-full w-full items-center lg:items-start p-8 ">

          <div className="flex-col container mx-auto px-8 lg:p-20 h-full py-8   " >
            <p className="text-2xl font-semibold py-8 text-gray-700">
              THE GREEN ECONOMIC ZONE
              <span className="text-green-600 font-bold">/</span>
            </p>
            <p className="font-light text-gray-700 ">
              “<span className="text-green-600">Green</span>” The FUTURE is
              here for today. A phenomenal green economic zone powered by the
              Kaduna State Government in partnership with KK Kingdom an
              indigenous construction company based in FCT, Abuja, Nigeria.
              GEZ is designed to provide a “plug and play” facility for Micro,
              Small & Medium Enterprises (MSMEs) making it the backbone and
              catalyst for sustainable regional development.
            </p>
            {/* <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
                LEARN MORE...
              </p> */}

          </div>
          <div className="flex-col container mx-auto px-8 lg:p-20 py-8 border-2 border-white lg:border-l-green-600 ">
            <p className="text-2xl font-semibold py-8 text-gray-700">
              GEZ-THE PROJECT
              <span className="text-green-600 font-bold">/</span>
            </p>
            <p className="font-light ">
              The Green Economic Zone (GEZ) is a N15bn Public/Private
              partnership investment that will provide critical
              infrastructures to enable firms setup manufacturing plants
              within the industrial park. The industrial park is sited on 717
              hectares of land strategically located on the Kaduna-Jos road,
              opposite the fifth Chukker Resort, Igabi, LGA, Kaduna State.
            </p>
            {/* <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
                LEARN MORE...
              </p> */}
          </div>

        </div>
      </section>
      <section style={{ background: "#dddddd" }} className="mb-16">
        <div className="px-4 lg:px-20">
          <p className="text-2xl font-semibold py-8 text-gray-700">
            CLUSTERS AND LAYOUTS
            <span className="text-green-600 font-bold">/</span>
          </p>
          <div className="flex flex-col lg:flex-row gap-4 items-center mt-4">
            {zones.map((article) => {
              return (
                <button id={article.id} className="zoneButton w-1/4 mx-16  p-8 bg-transparent hover:bg-green-700 text-green-700 font-semibold hover:text-white border border-green-700 hover:border-transparent rounded">
                  {article.title}
                </button>
              );
            })}
          </div>
          {/* testtttt */}



        </div>
        <div className="container mx-auto pb-8" style={{ width: '67%' }} >

          <img
            id="zone1"
            // style={{ display: 'none' }}
            className="zoneI"
            src={zone11}
            alt=""
          />
          <img
            id="zone2"
            style={{ display: 'none' }}
            className="zoneI"
            src={zone21}
            alt=""
          />
          <img
            id="zone3"
            style={{ display: 'none' }}
            className="zoneI"
            src={zone31}
            alt=""
          />
          <img
            id="zone4"
            style={{ display: 'none' }}
            className="zoneI"
            src={zone41}
            alt=""
          />
          <p style={{ height: 50 }}>

          </p>
        </div>
      </section>
      <section className="">
        <div style={{ background: "#dddddd" }} className="px-20">
          <p className="text-2xl font-semibold py-8 text-gray-700">
            OUR PARTNERS<span className="text-green-600 font-bold">/</span>
          </p>
          <ClientsCarousel sliderDirection="slider-left" />
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

export default Home;
