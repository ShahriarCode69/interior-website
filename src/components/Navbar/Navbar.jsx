import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="header p-6 flex justify-between items-center">
        <div className="header__logo flex items-center gap-2">
          <img src="./src/assets/logo.png" alt="" className="w-10" />
          <h1 className="font-medium text-2xl">Interior</h1>
        </div>
        <ul className="header__links hidden">
          <li className="header__link">
            <a href="#">About</a>
          </li>
          <li className="header__link">
            <a href="#">Service</a>
          </li>
          <li className="header__link">
            <a href="#">Contact</a>
          </li>
        </ul>
        <button>
          <a href="#" className="p-3 bg-black">Book Now</a>
        </button>
      </div>
    </>
  );
};

export default Navbar;
