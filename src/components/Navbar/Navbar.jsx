import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="container header ">
        <div className="header__logo">
          <img src="./src/assets/logo.png" alt="" className="header__logo-img" />
          <h1 className="header__logo-text">Interior</h1>
        </div>
        <ul className="header__links">
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
          <a className="btn" href="#">Book Now</a>
      </div>
    </>
  );
};

export default Navbar;
