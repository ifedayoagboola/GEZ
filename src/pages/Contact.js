import React, { useState } from "react";
import Footer from "../components/Footer";
import StickyHeader from "../components/StickyHeader";
import Header from "../components/Header";
import Button from "../components/Button";

const Contact = () => {
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
      <section className="">
        <div className="fixed w-full">
          {navbar ? <StickyHeader /> : <Header />}
        </div>
        <div
          className="w-full lg:h-screen bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url(/assets/bckgrnd-2.jpg)",
          }}
        >
          <div className="flex flex-col lg:flex-row justify-center items-center container mx-auto px-8 lg:px-16 sm:h-full py-20">
            <div className="w-full lg:w-1/2 mt-28 text-white text-left text-3xl lg:text-4xl leading-tight ">
              KK KINGDOM NIGERIA LTD
              <span className="text-green-600">/</span> <br />
              <p className="text-xl text-white py-2 font-normal">
                HEAD OFFICE:319 Off Ahmadu Bello way, Kado, Abuja, Nigeria
              </p>
              <p className="text-xl text-white py-2 font-normal">
                KADUNA OFFICE: JJ5/4 Paul Achimigu, Malali, Kaduna
              </p>
              <p className="text-sm text-white py-2 font-normal">
                Office Main Line: + 234 (09) 2920102
              </p>
              <p className="text-sm text-white py-2 font-normal">
                Telephone: +234 802 555 5187 <br />
                +234 809 999 8611
                <br /> +234 816 666 3032
              </p>
              <p className="text-sm text-white py-2 font-normal">
                Email: info@kkkingdom.com | info@gez.com.ng <br />
                Website: www.kkkingdom.com | www.gez.com.ng
              </p>
            </div>
            <div className="text-black w-full lg:w-1/2 mt-20 container mx-auto">
              <div className="text-white text-left text-xl lg:text-2xl leading-tight pt-10">
                EXPRESSION OF INTEREST FORM
              </div>
              <p className="text-red-500 text-sm">
                Please Go through the Checklist on our website and make sure you
                meet the criteria before submission.
              </p>
              <div className="">
                <form className="flex flex-col justify-center shadow-xl w-full bg-transparent gap-4">
                  <input
                    className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white"
                    type="text"
                    placeholder="Company"
                  />
                  <div className="flex gap-2">
                    <input
                      className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white w-full"
                      type="text"
                      placeholder="Phone"
                    />
                    <input
                      className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white w-full"
                      type="text"
                      placeholder="Type name"
                    />
                  </div>

                  <input
                    className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white"
                    type="text"
                    placeholder="Name of Companys’ Rep"
                  />

                  <div className="flex gap-2">
                    <input
                      className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white w-full"
                      type="text"
                      placeholder="Position"
                    />
                    <input
                      className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white w-full"
                      type="text"
                      placeholder="Country"
                    />
                  </div>
                  <textarea
                    className="p-2 bg-gray-400 bg-opacity-50 rounded focus:border-green-600 text-white"
                    type="text"
                    placeholder="Address"
                  />

                  <Button text="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Contact;
