import React, { useState } from "react";
import background from "../img/lg.png";
// import doc from "../assets/doc3.png";
import ClientsCarousel from "../components/ClientsCarousel";
import Footer from "../components/Footer";
import Header from "../components/Header";

import NewsCard from "../components/NewsCard";
import StickyHeader from "../components/StickyHeader";

const articles = [
  {
    id: "1",
    date: "June 6, 2022",
    title:
      "Malawi’s president fires entire cabinet over graft - Punch Newspapers",
    content:
      ' Malawi President Lazarus Chakwera on Monday sacked his entire cabinet over graft concerns, vowing to "confront all forms of lawless conduct by public officials...',
    img: "../assets/malawi.jpeg",
  },
  {
    id: "2",
    date: "June 22, 2022",
    title:
      "AFCON: Comoros' Youssouf M'Changama nets insane free-kick in heroic performance v Cameroon - GIVEMESPORT",
    content:
      " AFCON: Comoros' Youssouf M'Changama nets insane free-kick in heroic performance v Cameroon...",
    img: "../assets/comoros.jpg",
  },
  {
    id: "3",
    date: "Just now",
    title: "Tesla Model 3 Delivered With Missing Brake Pad: What Happened?",
    content:
      " Technicians at a Tesla Service Center told the owner the sound was “normal for performance brakes.”\n Brand-new Tesla Model 3 owner April G (April Gilmore) picked up her 2022 Model 3 Performance in Tampa, Florida, in December. It was making a weird and annoyin...",
    img: "../assets/tesla.jpg",
  },
  {
    id: "4",
    date: "January 22, 2022",
    title: "U.S. Bitcoin ETF Is Net Zero Bitcoin",
    content:
      " While a U.S. Bitcoin ETF sounds good in theory, peek under the hood and investors will find a futures-based instrument riddled with contradictions that has very little to do with bitcoin anyway.\nThe post U.S. Bitcoin ETF Is Net Zero Bitcoin appeared first on...",
    img: "../assets/bitcoin.jpeg",
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
          <div className="text-white text-left text-6xl font-bold px-20 leading-tight">
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
        <div className="text-3xl flex h-screen">
          <div
            className=" w-3/6 flex flex-col justify-center items-center"
            style={{ background: "#EBEBEB", color: "#000" }}
          >
            <div className="px-20 py-8">
              <p className="text-2xl font-semibold py-8 text-gray-700">
                GREEN GROWTH<span className="text-green-600 font-bold">/</span>
              </p>
              <p className="font-light text-gray-700">
                “<span className="text-green-600">Green</span> Growth means
                fostering economic growth and development, while ensuring that
                natural assets continue to provide the resources and
                environmental services on which our well-being relies”.
              </p>
              <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
                LEARN MORE...
              </p>
            </div>
          </div>
          <div
            className="w-3/6 flex flex-col justify-center items-center"
            style={{ background: "#373A36", color: "#fff" }}
          >
            <div className="px-20 py-8">
              <p className="text-2xl font-semibold py-8 text-white">
                OUR OFFERINGS
                <span className="text-green-600 font-bold">/</span>
              </p>
              <p className="font-light font-semibold">
                GEZ Special Area will take advantage of the open system, promote
                the integration of local and international business,
                cross-border financial services, cutting-edge scientific and
                technological research and development, cross-border service
                trade, and other functions.
              </p>
              <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
                LEARN MORE...
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-20">
          <p className="text-2xl font-semibold py-8 text-gray-700">
            LATEST NEWS<span className="text-green-600 font-bold">/</span>
          </p>
          <div className="flex flex-wrap -m-4">
            {articles.map((article) => {
              return <NewsCard article={article} />;
            })}
          </div>
          <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
            READ MORE NEWS...
          </p>
        </div>
      </section>
      <section>
        <div style={{ background: "#dddddd" }} className="px-20">
          <p className="text-2xl font-semibold py-8 text-gray-700">
            OUR PARTNERS<span className="text-green-600 font-bold">/</span>
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

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
