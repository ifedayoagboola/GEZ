import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div>
      <div>
        <div style={{ background: "#DDDDDD", height: "500px", width: "275px" }}>
          <div className="p-3">
            <div>
              <img className="w-full" src={article.img} alt="" />
            </div>
            <p className="mt-24">{article.date}</p>
            <p className=" font-semibold text-xl mt-12">{article.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
