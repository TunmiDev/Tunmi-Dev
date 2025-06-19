import React from "react";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white px-6 py-10 relative transition-all duration-300">
      {/* Title */}
      <h1 className="text-center text-4xl md:text-6xl font-extrabold leading-tight">
        FRONTEND
        <br />
        DEVELOPER.
      </h1>

      {/* Subtitle */}
      <p className="text-center text-sm md:text-base mt-2 uppercase tracking-widest text-gray-500 dark:text-gray-400">
        Crafting interactive user experiences • Building clean UI
      </p>

      {/* Image + Name container */}
      <div className="relative mt-14 w-[280px] h-[360px] flex justify-center items-center">
        {/* Name on the left side of the image */}
        <div className="absolute -left-96 top-36 transform -translate-y-1/2 flex flex-col text-left tracking-widest font-serif">
          <span className="text-1xl md:text-2xl font-medium">ADEWOLE</span>
          <span className="text-3xl md:text-4xl font-medium">OLUWATUNMISE</span>
        </div>
        {/* Bio on the right */}
        <div className="absolute -right-96 top-58 transform -translate-y-1/2 w-64 text-left text-sm md:text-base font-light leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            Passionate frontend developer with a love for crafting pixel-perfect
            interfaces and seamless web experiences. Always learning, always
            building.
          </p>
        </div>

        {/* Stacked Images */}
        <div className="relative w-full h-full">
          <img
            src={profile3}
            alt="Profile 3"
            className="absolute top-4 left-4 w-full h-full object-cover grayscale rotate-2 shadow-xl rounded-md"
          />
          <img
            src={profile2}
            alt="Profile 2"
            className="absolute top-2 left-2 w-full h-full object-cover grayscale -rotate-2 shadow-xl rounded-md"
          />
          <img
            src={profile1}
            alt="Profile 1"
            className="relative w-full h-full object-cover shadow-2xl grayscale rounded-md border-4 border-white dark:border-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
