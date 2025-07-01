import React from "react";
import Profile2 from "../assets/profile2.jpg";

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="py-20 px-6 max-w-6xl mx-auto transition-all duration-300"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
          <span>.</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={Profile2}
              alt="Tunmise"
              className="rounded-2xl w-[250px] h-[300px] object-cover shadow-lg  hover:grayscale-0 transition duration-500"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Hey there! I’m{" "}
              <span className="font-semibold">Adewole Oluwatunmise</span>, a
              frontend developer who’s obsessed with building smooth,
              responsive, and beautiful interfaces.
            </p>
            <p className="mt-4">
              I work with tools like{" "}
              <span className="font-semibold">React, Tailwind CSS,</span> and{" "}
              <span className="font-semibold">JavaScript</span> to bring designs
              to life and ensure users have a seamless experience across every
              screen.
            </p>
            <p className="mt-4">
              When I’m not coding, I’m learning something new, working on fun
              side projects, or catching up on creative trends. I love turning
              ideas into clean, functional UI.
            </p>
            <div className="mt-6 flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="px-5 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md font-medium hover:scale-105 transition"
              >
                Contact Me
              </a>

              <a
                href="/Adewole_Tunmise_CV.pdf" // update this path to your actual CV
                download
                className="px-5 py-2 border-2 border-black dark:border-white text-black dark:text-white rounded-md font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
