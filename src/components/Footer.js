import React from "react";

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
            © Abu Dhabi Ports 2021 Sitemap | Media Center | Privacy Policy |
            Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
