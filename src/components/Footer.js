import React from "react";
import youtube from "../img/youtube.png";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import gmail from "../img/gmail.png";
import twitter from "../img/twitter.png";

const Footer = () => {
  return (
    <div>
      <div style={{ background: "#ddd" }} className="py-16">
        <div className=" flex justify-center gap-10 items-center">
          <p className="text-xl font-semibold py-8 text-gray-600">
            SUBSCRIBE TO OUR GROUP NEWSLETTER
          </p>
          <div className=" flex justify-center items-center">
            <input
              className=" w-96 border border-solid border-gray-400 rounded p-2 outline-none"
              type="text"
              placeholder="Enter Your Email Here"
            />
            <button className="border border-solid rounded bg-green-600 text-white p-2 outline-none">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center">
          <div
            style={{
              background: "#000",
              height: "1px",
              width: "100%",
            }}
          ></div>
          <p className="pt-10">
            © GEZ 2022 Sitemap | Media Center | Privacy Policy | Terms &
            Conditions
          </p>
          <div className="flex items-center justify-center gap-4 py-4">
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
      </div>
    </div>
  );
};

export default Footer;
