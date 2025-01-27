import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero__container m-12 flex flex-col items-center justify-center">
        <h1 className="font-bold mt-10 text-4xl text-center">
          SKETCH LUXURY INTERIOR DESIGN
        </h1>
        <p className="mt-3 text-center leading-5 text-base">
          Bring your dream to life with one-on-one design help & hand picked
          products tailored to your style, space and budget.
        </p>
        <button className="m-5 text-base transform hover:translate-y-[-0.4rem] transition duration-300 ease-in-out bg-black text-white p-3 cursor-pointer">
          <a href="#">Get Started</a>
        </button>
      </div>
    </>
  );
};

export default Hero;
