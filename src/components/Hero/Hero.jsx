import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="container section hero__content">
        <h1 className="hero__title">SKETCH LUXURY INTERIOR DESIGN</h1>
        <p className="hero__paragraph">
          Bring your dream to life with one-on-one design help & hand picked
          products tailored to your style, space and budget.
        </p>
        <a className="btn" href="#">Get Started</a>
      </div>
      <img src="./src/assets/hero.png" alt="" />
    </>
  );
};

export default Hero;
