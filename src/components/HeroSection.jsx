import React, { useEffect, useRef } from "react";
import {
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  heroImage5,
  heroImage6,
} from "../assets";

function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const section = sectionRef.current;
    if (section) {
      const images = section.querySelectorAll(".hero-image");
      images.forEach((image, index) => {
        observer.observe(image);
        image.classList.add(index % 2 === 0 ? "fade-down" : "fade-up");
      });
    }

    return () => {
      if (section) {
        const images = section.querySelectorAll(".hero-image");
        images.forEach((image) => observer.unobserve(image));
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-between w-full h-screen"
    >
      <div className="lg:w-[50%] text-center h-[50vh] flex items-end justify-center">
        <h1 className="md:text-4xl text-4xl lgss:text-7xl font-bold text-primary">
          Let's create something great together.
        </h1>
      </div>
      <div className="flex justify-between mt-10 w-full max-w-[80%]">
        <img className="hero-image w-1/6" src={heroImage1} alt="hero image" />
        <img className="hero-image w-1/6" src={heroImage2} alt="hero image" />
        <img className="hero-image w-1/6" src={heroImage3} alt="hero image" />
        <img className="hero-image w-1/6" src={heroImage4} alt="hero image" />
        <img className="hero-image w-1/6" src={heroImage5} alt="hero image" />
        <img className="hero-image w-1/6" src={heroImage6} alt="hero image" />
      </div>
    </div>
  );
}

export default HeroSection;
