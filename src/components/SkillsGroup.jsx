import React, { useState } from "react";
import {
  Code2,
  UploadCloud,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiMui,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiDocker,
  SiJenkins,
  SiVercel,
  SiNetlify,
  SiNginx,
  SiGit,
  SiGithub,
  //   SiVisualstudio,
  SiPrettier,
} from "react-icons/si";

// 🎨 Color Map for Brand Icons
const getIconWithColor = (Icon, name) => {
  const colors = {
    ReactJS: "#61DAFB",
    NextJS: "#000000",
    MaterialUI: "#007FFF",
    Bootstrap: "#7952B3",
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    HTML5: "#E34F26",
    CSS3: "#1572B6",
    Figma: "#F24E1E",
    Canva: "#00C4CC",
    Photoshop: "#31A8FF",
    Illustrator: "#FF9A00",
    Docker: "#2496ED",
    Jenkins: "#D24939",
    Vercel: "#000000",
    Netlify: "#00C7B7",
    Nginx: "#009639",
    Git: "#F05032",
    GitHub: "#181717",
    // "VS Code": "#007ACC",
    Prettier: "#F7B93E",
  };

  return (
    <Icon
      className="text-3xl" // 👈 Smaller size now
      style={{
        color: colors[name] || "inherit",
      }}
    />
  );
};

const categories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5 mr-2" />,
    skills: [
      { name: "ReactJS", icon: SiReact },
      { name: "NextJS", icon: SiNextdotjs },
      { name: "MaterialUI", icon: SiMui },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Figma", icon: SiFigma },
      { name: "Canva", icon: SiCanva },
      { name: "Photoshop", icon: SiAdobephotoshop },
      { name: "Illustrator", icon: SiAdobeillustrator },
    ],
  },
  {
    title: "Deployment",
    icon: <UploadCloud className="w-5 h-5 mr-2" />,
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "Nginx", icon: SiNginx },
    ],
  },
  {
    title: "Others",
    icon: <Layers className="w-5 h-5 mr-2" />,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      //   { name: "VS Code", icon: SiVisualstudio },
      { name: "Prettier", icon: SiPrettier },
    ],
  },
];

const SkillsGroup = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (title) => {
    setOpenCategory((prev) => (prev === title ? null : title));
  };

  return (
    <div className="border border-gray-300 dark:border-gray-700 divide-y divide-gray-300 dark:divide-gray-700 rounded-md overflow-hidden">
      {categories.map(({ title, icon, skills }) => {
        const isOpen = openCategory === title;

        return (
          <div
            key={title}
            className="bg-gray-50 dark:bg-[#1f1f1f] transition-all duration-300"
          >
            {/* Accordion Header */}
            <button
              className="w-full flex items-center justify-between px-4 py-3 focus:outline-none"
              onClick={() => toggleCategory(title)}
            >
              <div className="flex items-center text-base font-medium">
                {icon}
                {title}
              </div>
              {isOpen ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            {/* Accordion Content */}
            {isOpen && (
              <div className="px-4 pb-4 pt-2">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {skills.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="p-3 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:scale-105 transition-transform">
                        {getIconWithColor(icon, name)}
                      </div>
                      <span className="text-sm mt-1">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SkillsGroup;
