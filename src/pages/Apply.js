import React, { useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StickyHeader from "../components/StickyHeader";

const Apply = () => {
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
            backgroundImage: "url(/assets/art3.jpg)",
          }}
        >
          <div className="text-white text-left text-5xl lg:text-6xl font-bold container mx-auto px-8 lg:px-16 leading-tight mt-auto py-12">
            APPLY NOW
            <span className="text-green-600 font-bold">/</span>
          </div>
        </div>
      </section>
      <div className="text-base flex flex-col lg:flex-row h-full lg:h-screen w-full items-center lg:items-start ">
        <div
          className="w-full lg:w-1/2 h-screen"
          style={{ background: "#EBEBEB", color: "#000" }}
        >
          <div className="container text-xl mx-auto px-8 lg:p-20 py-8 my-14">
            <p className="text-2xl font-semibold py-8 text-gray-700">
              SEE CONTACT DETAILS BELOW
            </p>
            <br />

            <p
              className="font-light text-gray-700 py-2"

            >
              <img src="/assets/location.png" style={{ width: "24px", height: "24px", display: "inline", marginRight: 10 }} />
              <span className=" font-bold">HEAD OFFICE:&nbsp;</span>
              319 Off Ahmadu Bello way, Kado, Abuja, Nigeria

            </p>

            <p
              className="font-light text-gray-700 py-2"

            >
              <img src="/assets/location.png" style={{ width: "24px", height: "24px", display: "inline", marginRight: 10 }} />
              <span className=" font-bold">KADUNA OFFICE:&nbsp;</span>
              JJ5/4 Paul Achimigu, Malali, Kaduna
            </p>
            <p
              className="font-light text-gray-700 py-2"

            >
              <img src="/assets/phone.png" style={{ width: "24px", height: "24px", display: "inline", marginRight: 10 }} />
              <span className=" font-bold">
                Office Main Line:&nbsp;
              </span>
              + 234 (09) 2920102
            </p>
            <p
              className="font-light text-gray-700 py-2"

            >
              {" "}
              <img src="/assets/phone.png" style={{ width: "24px", height: "24px", display: "inline", marginRight: 10 }} />
              <span className=" font-bold">Telephone:&nbsp;</span>
              +234 802 555 5187, +234 809 999 8611, +234 816 666 3032
            </p>
            <p
              className="font-light text-gray-700 py-2"

            >
              <img src="/assets/email.png" style={{ width: "24px", height: "24px", display: "inline", marginRight: 10 }} />
              <span className=" font-bold">Email:&nbsp;</span>
              info@kkkingdom.com | info@gez.com.ng
            </p>
            <p
              className="font-light text-gray-700 py-2"

            >
              <img src="/assets/website.png" style={{ width: "24px", height: "24px", display: "inline", marginRight: 10 }} />
              <span className=" font-bold">Website:&nbsp;</span>
              www.kkkingdom.com | www.gez.com.ng
            </p>

            {/* <p className="cursor-pointer text-green-600 text-base font-semibold py-8">
            LEARN MORE...
          </p> */}
          </div>
        </div>
        <div
          className="w-full lg:w-1/2 h-screen bg-no-repeat bg-cover shadow-xl"
        // style={{
        //   backgroundImage: "url(/assets/aboutbg4.jpg)",
        // }}
        >
          <div className="container mx-auto px-8 lg:p-20 py-8 my-14 ">
            <p className="text-2xl font-semibold py-8 text-gray-700">
              EXPRESSION OF INTEREST FORM
            </p>
            <p className="text-red-500 text-sm mb-4 ml-2 ">
              Please Go through the Checklist on our website and make sure you
              meet the criteria before submission.
            </p>
            <div className="">
              <form className="flex flex-col justify-center  w-full gap-4">
                <input
                  style={{
                    outline: "none",
                  }}
                  className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                  type="email"
                  placeholder="Email"
                />
                <input
                  style={{
                    outline: "none",
                  }}
                  className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                  type="text"
                  placeholder="Company"
                />
                <div className="flex gap-2">
                  <input
                    style={{
                      outline: "none",
                    }}
                    className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                    type="text"
                    placeholder="Phone"
                  />
                  <input
                    style={{
                      outline: "none",
                    }}
                    className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                    type="text"
                    placeholder="Type name"
                  />
                </div>

                <input
                  style={{
                    outline: "none",
                  }}
                  className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                  type="text"
                  placeholder="Name of Companys’ Rep"
                />

                <div className="flex gap-2">
                  <input
                    style={{
                      outline: "none",
                    }}
                    className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                    type="text"
                    placeholder="Position"
                  />
                  <input
                    style={{
                      outline: "none",
                    }}
                    className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                    type="text"
                    placeholder="Country"
                  />
                </div>
                <textarea
                  style={{
                    outline: "none",
                  }}
                  className="p-2 bg-opacity-50 rounded border-b hover:border-b-2 border-green-600 text-black"
                  type="text"
                  placeholder="Address"
                />

                <Button text="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-10">
        <Footer />
      </section>
    </div>
  );
};

export default Apply;
