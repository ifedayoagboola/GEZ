import React, { useState } from "react";
import { Transition } from "@tailwindui/react";
import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" sm:w-full md:w-1/2 lg:w-1/4"
      onMouseEnter={() => {
        dropdownHandler1()
      }}>
      <div className="h-full overflow-hidden">
        {/* <Link to={`/news/${article.id}`}> */}
        <div style={{ background: "#DDDDDD" }}>

          <div className="p-3 hover:bg-green-700 hover:text-white transition duration-300 ease-in">
            <div>
              <img
                className="lg:h-72 md:h-48 w-full object-cover object-center"
                src={article.img}
                alt=""
              />
            </div>
            <div className="py-6 ">

              <p className="text-lg font-semibold mb-3 text-center">{article.title}</p>

            </div>
          </div>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default NewsCard;
