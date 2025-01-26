import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="header m-5 flex justify-between md:justify-around items-center ">
        <div className="header__logo flex items-center gap-2">
          <img src="./src/assets/logo.png" alt="" className="w-10" />
          <h1 className="font-medium text-2xl">Interior</h1>
        </div>
        <ul className="header__links hidden md:flex gap-10 text-base font-medium">
          <li className="header__link">
            <a href="#">About</a>
          </li>
          <li className="header__link">
            <a href="#">Works</a>
          </li>
          <li className="header__link">
            <a href="#">Service</a>
          </li>
          <li className="header__link">
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="text-base transform hover:translate-y-[-0.4rem] transition duration-300 ease-in-out bg-black text-white p-2 cursor-pointer">
          <a href="#">Book Now</a>
        </button>
      </div>
    </>
  );
};

export default Navbar;
