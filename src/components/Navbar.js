import React from "react";

const Navbar = ({ NavLinks }) => {
  return (
    <div className="bg-black ">
      <div className="flex justify-between items-center py-4 px-8 text-base text-white font-medium">
        <div>LOGO</div>
        <div>
          <ul className="flex gap-5">
            {NavLinks.map((item) => {
              return <li>{item.link}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
