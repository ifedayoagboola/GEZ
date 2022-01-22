import React from "react";
import background from "../assets/background.jpg";

const NewsCard = ({ article }) => {
  return (
    <div className="flex justify-between">
      {article.map((card) => {
        return (
          <div style={{ background: "#DDDDDD" }} className="w-56">
            <div className="px-2">
              <div>
                <img className="w-full" src={background} alt="" />
              </div>
              <p className="pt-10 pb-5">{card.date}</p>
              <p>{card.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCard;
