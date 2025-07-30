import React from "react";
import Profile2 from "../assets/Profile2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 py-20 max-w-6xl mx-auto transition-all duration-300"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        About Me<span className="text-primary">.</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            src={Profile2}
            alt="Oluwatunmise"
            className="rounded-2xl w-full max-w-[250px] h-auto object-cover shadow-lg transition duration-500"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-8 md:mt-0">
          <p>
            Hi, I’m{" "}
            <span className="font-semibold text-black dark:text-white">
              Oluwatunmise Adewole
            </span>
            , a creative frontend developer passionate about building clean,
            modern, and responsive user interfaces that leave a lasting
            impression.
          </p>
          <p className="mt-4">
            I thrive on transforming ideas and designs into smooth, interactive
            web experiences using tools like{" "}
            <span className="font-semibold">React, Tailwind CSS,</span> and{" "}
            <span className="font-semibold">JavaScript</span>. I’m constantly
            exploring new trends and techniques to improve performance,
            accessibility, and user experience.
          </p>
          <p className="mt-4">
            Beyond coding, I’m driven by curiosity—whether it’s learning new
            tools, experimenting with side projects, or staying updated with
            tech news. My goal is to create digital products that are both
            functional and visually stunning, while collaborating on meaningful
            projects.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-5 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md font-medium hover:scale-105 transition"
            >
              Contact Me
            </a>

            <a
              href="/Adewole-Oluwatunmise-CV.pdf"
              download="Adewole-Oluwatunmise-CV.pdf"
              className="px-5 py-2 border-2 border-black dark:border-white text-black dark:text-white rounded-md font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
