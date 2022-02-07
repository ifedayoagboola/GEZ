import React, { useState } from "react";
import { Transition } from "@tailwindui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import youtube from "../img/youtube.png";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import gmail from "../img/gmail.png";
import twitter from "../img/twitter.png";
import { newData } from "../newsData";
import StickyHeader from "../components/StickyHeader";
import Pagination from "../components/utils/Pagination";
import articles from "../MediaData";

const Media = () => {
  const [navbar, setNavbar] = useState(false);
  const [images] = useState(newData);
  const [initialPage, setInitialPage] = useState(1);
  const [picturesPerPage] = useState(9);
  const [isOpen, setIsOpen] = useState(false);

  const indexOfLastPost = initialPage * picturesPerPage;
  const indexOfFirstPost = indexOfLastPost - picturesPerPage;
  const currentPost = images.slice(indexOfFirstPost, indexOfLastPost);

  const paginateAction = (pageNum) => {
    setInitialPage(pageNum);
  };

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
        <div className="fixed w-full z-40">
          {navbar ? <StickyHeader /> : <Header />}
        </div>
        <div
          className="w-full h-screen bg-no-repeat bg-cover flex flex-col justify-center items-left"
          style={{
            backgroundImage: "url(/assets/news2.jpg)",
          }}
        >
          <div className="text-black text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
            NEWS<span className="text-green-600">AND</span> EVENTS{" "}
            <span className="text-green-600">/</span> <br />
            <p className="text-base text-black pt-5 font-semibold">
              THE GREEN ECONOMIC ZONE AT A GLANCE
            </p>
          </div>
        </div>
      </section>
      <div className="bg-gray-200 font-normal text-gray-700 text-base lg:text-xl ">
        <div className="flex items-center justify-end gap-4 py-5 pr-6">
          <div className="w-10 h-10">
            <img className="w-full" src={facebook} alt="" />
          </div>
          <div className="w-10 h-10">
            <img className="w-full" src={gmail} alt="" />
          </div>
          <div className="w-10 h-10">
            <img className="w-full" src={youtube} alt="" />
          </div>
          <div className="w-10 h-10">
            <img className="w-full" src={instagram} alt="" />
          </div>
          <div className="w-10 h-10">
            <img className="w-full" src={twitter} alt="" />
          </div>
        </div>
      </div>
      <section>
        {/* Pagination components */}
        <div className="flex items-center justify-center py-10">
          <div className="grid grid-cols-4 gap-4 container mx-auto px-8">
            {articles.map((el) => {
              const { id, date, content, img } = el;

              return (
                <div className=" h-full overflow-hidden">
                  <div style={{ background: "#DDDDDD" }}>
                    <div className="relative">
                      <Transition
                        show={isOpen}
                        enter="transition-opacity duration-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute inset-0">
                          <div className="h-full w-full">
                            <div className="bg-black">
                              <div
                                className="flex justify-end text-white p-4 animate-bounce"
                                onClick={() => setIsOpen(!isOpen)}
                              >
                                X
                              </div>
                              <div className="flex justify-center items-center">
                                <div className="p-4">
                                  <p className="text-sm font-semibold mb-3 text-white">
                                    {content}
                                  </p>
                                  <p className="text-base font-medium text-green-300 mb-1">
                                    {date}
                                  </p>
                                  <p className=" leading-relaxed mb-3 text-white">
                                    {content}
                                  </p>
                                </div>
                                {/* Quick fix */}
                                {/* <div className='w-'></div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Transition>
                    </div>
                    <div className="p-3 hover:bg-green-700 hover:text-white transition duration-300 ease-in">
                      <div>
                        <img
                          className="lg:h-72 md:h-48 w-full object-cover object-center"
                          src={img}
                          alt=""
                        />
                      </div>
                      <div className="py-6 ">
                        <p className="text-base font-medium text-green-300 mb-1">
                          {date}
                        </p>
                        <p className="text-sm font-semibold mb-3">{`${content.slice(
                          0,
                          10
                        )}...`}</p>
                        <p className=" leading-relaxed mb-3">{`${content.slice(
                          0,
                          100
                        )}...`}</p>
                        {/* <div className="flex items-center flex-wrap hover:animate-bounce">
                          <span
                            className="text-green-300 inline-flex items-center md:mb-2 lg:mb-0"
                            onClick={() => setIsOpen(!isOpen)}
                          >
                            Read More
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </span>
                          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            1.2K
                          </span>
                          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg
                              className="w-4 h-4 mr-1"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                            6
                          </span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                // <button key={id} className="shadow-md rounded-lg">
                //   <div className="relative">
                //     <img src={image} alt="" width={400} height={400} />
                //     <div className="absolute inset-x-0 bottom-0">
                //       <div className="pr-40 py-6 bg-slate-300">
                //         <span className="pr-24">
                //           <strong className="text-green-400">{date}</strong>
                //         </span>
                //         <br />
                //         <span>{content}</span>
                //       </div>
                //     </div>
                //   </div>
                // </button>
              );
            })}
          </div>
        </div>
        <Pagination
          picturesPerPage={picturesPerPage}
          totalPictures={images.length}
          paginate={paginateAction}
        />
        {/* Pagination components */}
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

export default Media;
