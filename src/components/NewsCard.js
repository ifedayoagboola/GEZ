import React from "react";
import background from "../assets/background.jpg";

const NewsCard = ({ article }) => {
  return (
    <div>
      <div className="flex justify-between">
        {article.map((card) => {
          return (
            <div
              style={{ background: "#DDDDDD", height: "500px", width: "275px" }}
            >
              <div className="p-3">
                <div>
                  <img className="w-full" src={background} alt="" />
                </div>
                <p className="mt-24">{card.date}</p>
                <p className=" font-semibold text-xl mt-12">{card.content}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="cursor-pointer text-red-600 text-base font-semibold py-8">
        READ MORE NEWSsssssss...
      </p>
    </div>
  );
};

export default NewsCard;
