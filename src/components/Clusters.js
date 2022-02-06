import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";
import BusinessCluster from "../img/newsImages/Business-Cluster.png";
import IndustrialCluster from "../img/newsImages/Industrial-Cluster.png";
import map from "../img/gez-zones.jpeg";
import NewsCard from "./NewsCard";

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
  return (
    <div className="">
      <section className="">
        <div className="fixed w-full">
          {navbar ? <StickyHeader /> : <Header />}
        </div>
        <div
          className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-left"
          style={{
            backgroundImage: "url(/assets/clusterLayout.jpg)",
          }}
        >
          <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
            <span className="text-white">CLUSTERS & LAYOUT</span>
            <span className="text-green-600">/</span> <br />
            <p className="text-base text-green-600 pt-5 font-semibold">
              THE GREEN ECONOMIC ZONE AT A GLANCE
            </p>
          </div>
        </div>
      </section>
      <div className="bg-gray-200 font-normal text-gray-700 text-base lg:text-base">
        <p className="container mx-auto pl-6 py-6 text-center">
          Going Green Is Easy Green Growth means fostering economic growth and
          development, while ensuring that natural assets continue to provide
          the resources and environmental services on which our well-being
          relies.
        </p>
      </div>
      <section className="container mx-auto p-20">
        <div className="flex justify-evenly">
          <div>
            <div className="my-8">
              <img src={BusinessCluster} alt="" width={550} height={550} />
            </div>
            <div className="my-8">
              <img src={IndustrialCluster} alt="" width={550} height={550} />
            </div>
          </div>
          <div>
            <img src={map} alt="" width={600} height={600} />
          </div>
        </div>
        <a href="../../public/assets/aboutbg2.jpg" download>
          <span className="cursor-pointer text-green-600 text-base font-semibold py-8">
            LEARN MORE...
          </span>
        </a>
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
