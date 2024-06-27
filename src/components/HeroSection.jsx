import React from "react";
import {
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
} from "../assets";

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-between w-full h-screen">
        <div className="lgss:w-[60%] lg:w-[80%] text-center h-[50vh] flex items-end justify-center">
          <h1 className="md:text-4xl text-4xl lgss:text-7xl font-bold text-primary">
            Let's create something great together.
          </h1>
        </div>
        <div className="flex justify-between mt-10 w-fullmax-w-[80%]">
          <img className="w-1/6" src={heroImage1} alt="hero image" />
          <img className="w-1/6" src={heroImage2} alt="hero image" />
          <img className="w-1/6" src={heroImage3} alt="hero image" />
          <img className="w-1/6" src={heroImage4} alt="hero image" />
          <img className="w-1/6" src={heroImage5} alt="hero image" />
          <img className="w-1/6" src={heroImage6} alt="hero image" />
      </div>
    </div>
  );
}

export default HeroSection;
