import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import easybank from "../assets/easybank.png";
import aurora from "../assets/aurora.png";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPwa,
  SiVite,
} from "react-icons/si";

// Icon lookup
const techIcons = {
  typescript: <SiTypescript title="TypeScript" />,
  reactjs: <SiReact title="React" />,
  nextjs: <SiNextdotjs title="Next.js" />,
  tailwindcss: <SiTailwindcss title="Tailwind CSS" />,
  pwa: <SiPwa title="PWA" />,
  vite: <SiVite title="Vite" />,
};

// Sample projects (add your own screenshots + links)
const projects = [
  {
    title: "Noisekun",
    description:
      "Relaxing sound mixer to improve productivity and reduce stress.",
    screenshot: "/project1-screenshot.png",
    sourceUrl: "https://github.com/noisekun",
    liveUrl: "https://noisekun.vercel.app",
    logos: ["typescript", "reactjs", "nextjs"],
    stack: ["typescript", "reactjs", "nextjs", "tailwindcss", "pwa"],
  },
  {
    title: "QR Generator",
    description:
      "QR code generator supporting text, URLs, wifi, and contact cards.",
    screenshot: "/project2-screenshot.png",
    sourceUrl: "https://github.com/qrcode",
    liveUrl: "https://qrgen.com",
    logos: ["vue", "typescript", "vite"],
    stack: ["vue", "typescript", "vite", "tailwindcss", "qrcode"],
  },
  {
    title: "Aurora",
    description: "Personal portfolio showcasing frontend projects.",
    screenshot: aurora,
    sourceUrl: "https://github.com/devportfolio",
    liveUrl: "https://portfolio.com",
    logos: ["reactjs", "tailwindcss"],
    stack: ["reactjs", "tailwindcss"],
  },
  {
    title: "EasyBank",
    description: "Real-time weather dashboard using OpenWeather API.",
    screenshot: easybank,
    sourceUrl: "https://github.com/weathernow",
    liveUrl: "https://weathernow.com",
    logos: ["reactjs", "vite"],
    stack: ["reactjs", "vite", "tailwindcss"],
  },
  {
    title: "Recipe Finder",
    description: "Search and view healthy recipes using Edamam API.",
    screenshot: "/project5-screenshot.png",
    sourceUrl: "https://github.com/recipefinder",
    liveUrl: "https://recipefinder.com",
    logos: ["reactjs"],
    stack: ["reactjs", "tailwindcss"],
  },
  {
    title: "Taskify",
    description: "Productivity task manager with drag-and-drop support.",
    screenshot: "/project6-screenshot.png",
    sourceUrl: "https://github.com/taskify",
    liveUrl: "https://taskify.com",
    logos: ["typescript", "reactjs"],
    stack: ["typescript", "reactjs", "tailwindcss"],
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
        Projects
      </h2>

      {/* 2-column responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Screenshot */}
            <div className=" p-4">
              <img
                src={project.screenshot}
                alt={`${project.title} Screenshot`}
                className="rounded w-full"
              />
            </div>

            {/* Details */}
            <div className="p-6 text-white flex flex-col gap-4">
              {/* Title + logos */}
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex gap-2 text-xl">
                  {project.logos.map((tech, i) => (
                    <span key={i}>{techIcons[tech]}</span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300">{project.description}</p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-800 px-2 py-1 rounded-full text-xs capitalize"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-800 px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-zinc-700"
                >
                  <FaGithub /> Source
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-blue-500"
                >
                  <FiGlobe /> Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
