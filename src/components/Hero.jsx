import React from "react";
import { TypeAnimation } from "react-type-animation";
import Profile1 from "../assets/Profile1.jpg";
import Profile2 from "../assets/Profile2.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white px-6 py-10 relative transition-all duration-300">
      {/* Title */}
      <h1 className="text-center text-4xl md:text-6xl font-extrabold leading-tight flex flex-col items-center">
        <TypeAnimation
          sequence={[
            "FRONTEND", // type first line
            1000, // wait 1s
            "FRONTEND\nDEVELOPER.", // add second line
            2000, // wait 2s with both lines visible
            "", // clear everything
            1000, // wait before starting again
          ]}
          wrapper="span"
          speed={50}
          cursor={false}
          repeat={Infinity}
          className="whitespace-pre-line text-center"
        />
      </h1>

      {/* Subtitle */}
      <p className="text-center text-sm md:text-base mt-2 uppercase tracking-widest text-gray-500 dark:text-gray-400">
        Clean code • Sleek design • Memorable experiences
      </p>

      {/* Image + Name container */}
      <div className="relative mt-14 w-[280px] h-[360px] flex justify-center items-center">
        {/* Name on the left side of the image */}
        <div className="absolute -left-96 top-36 transform -translate-y-1/2 flex flex-col text-left tracking-widest font-serif">
          <span className="text-1xl md:text-2xl font-medium">ADEWOLE</span>
          <span className="text-3xl md:text-4xl font-medium">OLUWATUNMISE</span>
        </div>
        {/* Bio on the right */}
        <div className="absolute -right-70 top-58 transform -translate-y-1/2 w-64 text-left text-sm md:text-base font-light leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            A Passionate frontend developer with a love for crafting
            pixel-perfect interfaces and seamless web experiences. Always
            learning, always building.
          </p>
        </div>
        {/*Stacked Images */}
        <div className="relative w-[260px] h-[340px] mx-auto">
          {/* First Image - lower and to the left */}
          <img
            src={Profile1}
            alt="Profile 2"
            className="absolute top-4 left-12 w-[75%] h-[80%] object-cover  grayscale shadow-lg rounded-md border-2 border-white dark:border-black z-30"
          />

          {/* Second Image - higher and to the right */}
          <img
            src={Profile2}
            alt="Profile 1"
            className="absolute top-16 left-0 w-[75%] h-[80%] object-cover grayscale shadow-md rounded-md border-2 border-white dark:border-black z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
