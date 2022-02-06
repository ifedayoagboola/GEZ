import React, { useState } from "react";
import ClientsCarousel from "../components/ClientsCarousel";
import Footer from "../components/Footer";
import Header from "../components/Header";

import NewsCard from "../components/NewsCard";
import StickyHeader from "../components/StickyHeader";

const articles = [
  {
    id: "1",
    date: "June 6, 2022",
    title: "FOOD PROCESSING PARK",
    content:
      " Equipped with plug and play modern infrastructures enabling entrepreneurs to setup food processing units close to crop production areas with an integrated and complete preservation infrastructure and facilities.",
    img: "../assets/art1.jpg",
  },
  {
    id: "2",
    date: "June 22, 2022",
    title: "LIGHT INDUSTRY PARK",
    content:
      "A safe, secure and eco-friendly environment for firms in the light industry to tap into the huge potentials of providing food processing, paper making, plastic, leather, textiles, paper,  jute and cement manufacturing companies operating in the Industrial Park with services ranging from spare parts production to maintenance operations.",
    img: "../assets/art2.jpg",
  },
  {
    id: "3",
    date: "Just now",
    title: "MULTIMODAL LOGISTICS PARK",
    content:
      " Provides a cluster of logistics companies offering tailored, flexible and streamlined logistics processes, covering air, ocean, road and rail freight – with optimal cost-efficiency and flexibility in routing and transit times.",
    img: "../assets/art3.jpg",
  },
  {
    id: "4",
    date: "January 22, 2022",
    title: "AGRO ALLIED PARK",
    content:
      " Ready to play host to Agro Allied Industries, the GEZ will facilitate the enabling environment for local and international firms to thrive and increase the contribution of the agriculture sector to GDP, foster wealth and employment creation for the youth.",
    img: "../assets/art4.jpg",
  },
];
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
  return (
    <div>
      <section>
        <div className="fixed w-full">
          {navbar ? <StickyHeader /> : <Header />}
        </div>
        <div
          className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-left"
          style={{
            backgroundImage: "url(/assets/background.jpg)",
          }}
        >
          <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
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
        <div className="text-xl lg:text-2xl flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start ">
          <div
            className="w-full lg:w-3/6 h-screen"
            style={{ background: "#EBEBEB", color: "#000" }}
          >
            <div className="container mx-auto px-8 lg:p-20 py-8 my-14">
              <p className="text-2xl font-semibold py-8 text-gray-700">
                GREEN GROWTH<span className="text-green-600 font-bold">/</span>
              </p>
              <p className="font-light text-gray-700">
                “<span className="text-green-600">Green</span> The FUTURE is
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
          </div>
          <div
            className="w-full lg:w-3/6 h-screen"
            style={{ background: "#373A36", color: "#fff" }}
          >
            <div className="container mx-auto px-8 lg:p-20 py-8 my-14">
              <p className="text-2xl font-semibold py-8 text-white">
                OUR OFFERINGS
                <span className="text-green-600 font-bold">/</span>
              </p>
              <p className="font-light">
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
        </div>
      </section>
      <section className="">
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
            {/* READ MORE NEWS... */}
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

export default Home;
