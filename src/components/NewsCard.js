import React from "react";
import background from "../assets/background.jpg";

const NewsCard = () => {
  return (
    <div>
      <div className="w-56">
        <p className="text-3xl font-semibold py-8">LATEST NEWS/</p>
        <div>
          <div>
            <img className="w-full" src={background} alt="" />
          </div>
          <p className="pt-10 pb-5">June 6, 2022</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis enim
            repellat unde dolorem ipsum deleniti pariatur consequatur
            perferendis voluptates dolorum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
