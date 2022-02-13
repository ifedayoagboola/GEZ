import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";
import map from "../img/gez-zones.jpeg";
import NewsCard from "./NewsCard";
import articles from "../MediaData";

import $ from 'jquery';

import zone1 from "../img/zone1.png"
import zone2 from "../img/zone2.png"
import zone3 from "../img/zone3.png"
import zone4 from "../img/zone4.png"

import zone11 from "../img/zone11.png"
import zone21 from "../img/zone21.png"
import zone31 from "../img/zone31.png"
import zone41 from "../img/zone41.png"

const Clusters = () => {
  const [navbar, setNavbar] = useState(false);
  const navHandler = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", navHandler);

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

  return (
    <div className="">
      <section>
        <div className="fixed w-full">
          {navbar ? <StickyHeader /> : <Header />}
        </div>
        <div
          className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-left"
          style={{
            backgroundImage: "url(/assets/bgfour.jpeg)",
          }}
        >
          <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
            CLUSTERS <span className="text-green-600">AND</span> <br />
            LAYOUTS
          </div>
        </div>
      </section>
      <div className="bg-gray-200 font-normal text-gray-700 text-base lg:text-base ">
        <p className="container mx-auto pl-6 py-6 text-center">
          Going Green Is Easy Green Growth means fostering economic growth and
          development, while ensuring that natural assets continue to provide
          the resources and environmental services on which our well-being
          relies.
        </p>
      </div>
      <section className="container mx-auto p-20">
        <div className="w-full mx-auto" >
          <img className="mx-auto" src={map} alt="" />
        </div>
      </section>

      <section className="">
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
          {/* <div className="flex flex-col lg:flex-row gap-4 items-center">
            {articles.map((article) => {
              return <NewsCard key={article.id} article={article} />;
            })}
          </div> */}

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

export default Clusters;

// <p className='container mx-auto px-12 py-6'>
// 					Kaduna state is the 8th largest, the state servers as a gateway to its
// 					position making it a very lucrative region for international trade and
// 					investment. Kaduna State’s visionary leadership under the
// 					administration of His Excellency Nasir El Rufai is impeccable and
// 					continues to reinforce its credentials as a business-friendly state,
// 					which has made the state one of the easiest places to do business in
// 					Nigeria. The Administrative processes for the issuance of business
// 					approvals, permits and licenses and company incorporation is seamless,
// 					thus has made it easy for business investors to set up and thrive.{' '}
// 					<span className='cursor-pointer text-green-600 text-base font-semibold py-8'>
// 						<a
// 							href='https://kadipa.kdsg.gov.ng/'
// 							target='_blank'
// 							rel='noopener noreferrer'
// 							style={{ textDecoration: 'none' }}
// 						>
// 							LEARN MORE...
// 						</a>
// 					</span>
// 				</p>
