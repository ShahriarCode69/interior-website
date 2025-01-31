import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero__content">
        <h1 className="hero__title">SKETCH LUXURY INTERIOR DESIGN</h1>
        <p className="hero__paragraph">Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget.</p>
        <button className="hero__btn">
          <a href="#">Get Started</a>
        </button>
      </div>
      <img src="./src/assets/hero.png" alt="" />
    </>
  );
};

export default Hero;
