import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import easybank from "../assets/easybank.png";
import aurora from "../assets/aurora.png";
import WorldClock from "../assets/WorldClock.png";
import advice from "../assets/advice.png";
import portfolio from "../assets/portfolio.png";
import ule from "../assets/ule.png";
import MotionButton from "./MotionButton";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiCss3,
} from "react-icons/si";

// Icon lookup
const techIcons = {
  javascript: <SiJavascript title="JavaScript" color="#F7DF1E" />,
  typescript: <SiTypescript title="TypeScript" color="#3178C6" />,
  reactjs: <SiReact title="React" color="#61DAFB" />,
  tailwindcss: <SiTailwindcss title="TailwindCSS" color="#38BDF8" />,
  vite: <SiVite title="Vite" color="#646CFF" />,
  css: <SiCss3 title="CSS" color="#264de4" />,
};

// Projects
const projects = [
  {
    title: "EasyBank",
    description:
      "Responsive banking landing page built with React, JavaScript, and Tailwind CSS, a pixel-perfect implementation of a Figma design.",
    screenshot: easybank,
    sourceUrl: "https://github.com/TunmiDev/Easy-bank",
    liveUrl: "https://easy-bank-mu-three.vercel.app/",
    logos: ["vite", "reactjs", "tailwindcss", "javascript"],
    stack: ["vite", "reactjs", "tailwindcss", "JavaScript"],
  },
  {
    title: "World Clock",
    description:
      "A responsive World Clock app that lets users track multiple time zones in real time, featuring a clean and modern interface.",
    screenshot: WorldClock,
    sourceUrl: "https://github.com/TunmiDev/world-clock",
    liveUrl: "https://world-clock-lilac.vercel.app/",
    logos: ["vite", "reactjs", "tailwindcss", "javascript"],
    stack: ["vite", "reactjs", "tailwindcss", "JavaScript"],
  },
  {
    title: "Loft Booking Page",
    description:
      "A responsive booking page for loft-style apartments, built with React and Tailwind CSS. Designed with a modern layout suitable for real estate and short-term rental platforms.",
    screenshot: ule,
    sourceUrl: "https://github.com/TunmiDev/loft-by-ule",
    logos: ["reactjs", "tailwindcss", "javascript", "vite"],
    stack: ["reactjs", "tailwindcss", "javascript", "vite"],
  },
  {
    title: "Advice Generator",
    description:
      "Minimal advice generator app built with React. Fetches real-time advice from the Advice Slip API on user interaction, using reusable components and clean UI design.",
    screenshot: advice,
    sourceUrl: "https://github.com/TunmiDev/advice-generator",
    liveUrl: "https://advice-generator-rosy-eight.vercel.app/",
    logos: ["reactjs", "javascript", "css", "vite"],
    stack: ["reactjs", "javascript", "css", "vite"],
  },
  {
    title: "Aurora",
    description:
      "A responsive pet profile website built with React and Tailwind CSS, featuring images, a short bio, and personality highlights for a fictional bird named Aurora.",
    screenshot: aurora,
    sourceUrl: "https://github.com/TunmiDev/Aurora",
    liveUrl: "https://aurora-wheat-iota.vercel.app/",
    logos: ["reactjs", "tailwindcss", "javascript"],
    stack: ["reactjs", "tailwindcss", "javascript"],
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio website built with Vue, TypeScript, and Tailwind CSS. Showcases selected frontend projects, technical skills, and links to GitHub and socials in a clean, responsive layout.",
    screenshot: portfolio,
    sourceUrl: "https://github.com/TunmiDev/Tunmi-Dev",
    liveUrl: "https://tunmi-dev-zdo5.vercel.app/",
    logos: ["vite", "tailwindcss", "javascript", "reactjs"],
    stack: ["vite", "tailwindcss", "javascript", "reactjs"],
  },
];

const Project = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: isMobile ? -60 : 0, y: isMobile ? 0 : 40 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md border border-white/20 dark:bg-white/5 dark:border-white/10 transition-all duration-300"
        >
          {/* Screenshot */}
          <div className="p-4">
            <img
              src={project.screenshot}
              alt={`${project.title} Screenshot`}
              className="rounded w-full"
            />
          </div>

          {/* Details */}
          <div className="p-6 text-black dark:text-white flex flex-col gap-4">
            {/* Title + Logos */}
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div className="flex gap-2 text-xl">
                {project.logos.map((tech, i) => (
                  <span key={i}>{techIcons[tech]}</span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-black dark:text-gray-300">
              {project.description}
            </p>

            {/* Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 text-black dark:bg-zinc-800 dark:text-white px-2 py-1 rounded-full text-xs capitalize"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}

            <div className="flex justify-center gap-4 mt-6 text-center">
              <MotionButton
                href={project.sourceUrl}
                className="group bg-zinc-200 px-4 py-4 rounded-2xl flex items-center gap-2 text-sm hover:bg-black hover:text-white transition"
              >
                <FaGithub className="text-lg text-gray-500 group-hover:text-white group-hover:animate-bounce transition" />
                Source
              </MotionButton>

              {project.liveUrl && (
                <MotionButton
                  href={project.liveUrl}
                  className="group bg-blue-100 px-4 py-4 rounded-2xl flex items-center gap-2 text-sm hover:bg-blue-600 text-blue-900 hover:text-white transition"
                >
                  <FiGlobe className="text-lg text-blue-300 group-hover:text-white group-hover:animate-bounce transition" />
                  Website
                </MotionButton>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Project;
