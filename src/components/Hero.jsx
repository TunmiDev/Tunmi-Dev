import React from "react";
import { TypeAnimation } from "react-type-animation";
import Profile1 from "../assets/Profile1.jpg";
import Profile2 from "../assets/Profile2.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white px-6 py-10 transition-all duration-300"
    >
      {/* Title */}
      <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mt-20 sm:mt-0">
        <TypeAnimation
          sequence={["FRONTEND", 1000, "FRONTEND\nDEVELOPER.", 2000, "", 1000]}
          wrapper="span"
          speed={50}
          cursor={false}
          repeat={Infinity}
          className="whitespace-pre-line text-center"
        />
      </h1>

      {/* Subtitle */}
      <p className="text-center text-sm sm:text-base mt-2 uppercase tracking-widest text-gray-500 dark:text-gray-400">
        Clean code • Sleek design • Memorable experiences
      </p>

      {/* Hero Content */}
      <div className="relative mt-12 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full max-w-6xl px-4">
        {/* Name */}
        <div className="text-center lg:text-left w-full sm:w-[80%] lg:w-1/3 tracking-widest font-serif">
          <span className="block text-xl sm:text-2xl font-medium">ADEWOLE</span>
          <span className="block text-3xl sm:text-4xl font-medium">
            OLUWATUNMISE
          </span>
        </div>

        {/* Image Stack */}
        <div className="relative w-[220px] h-[280px] sm:w-[240px] sm:h-[300px] md:w-[260px] md:h-[340px]">
          <img
            src={Profile1}
            alt="Profile 1"
            className="absolute top-4 left-10 w-[75%] h-[80%] object-cover grayscale shadow-lg rounded-md border-2 border-white dark:border-black z-30"
          />
          <img
            src={Profile2}
            alt="Profile 2"
            className="absolute top-16 left-0 w-[75%] h-[80%] object-cover grayscale shadow-md rounded-md border-2 border-white dark:border-black z-20"
          />
        </div>

        {/* Bio */}
        <div className="text-center lg:text-left w-full sm:w-[80%] lg:w-1/3 text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-300">
          <p>
            A passionate frontend developer with a love for crafting
            pixel-perfect interfaces and seamless web experiences. Always
            learning, always building.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
