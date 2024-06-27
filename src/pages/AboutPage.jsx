import React from "react";
import NavMenu from "../components/NavMenu";
import HeroSection from "../components/HeroSection";

const AboutPage = () => {
  return (
    <div className="">
      <div className="overlay bg-yellowBg font-manrope mb-10">
        <NavMenu />
        <HeroSection />
      </div>
    </div>
  );
};

export default AboutPage;
