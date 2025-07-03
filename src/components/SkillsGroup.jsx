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
  SiPrettier,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5 mr-2" />,
    skills: [
      { name: "ReactJS", icon: <SiReact /> },
      { name: "NextJS", icon: <SiNextdotjs /> },
      { name: "MaterialUI", icon: <SiMui /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Illustrator", icon: <SiAdobeillustrator /> },
    ],
  },
  {
    title: "Deployment",
    icon: <UploadCloud className="w-5 h-5 mr-2" />,
    skills: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Nginx", icon: <SiNginx /> },
    ],
  },
  {
    title: "Others",
    icon: <Layers className="w-5 h-5 mr-2" />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      //   { name: "VS Code", icon: <SiVscode /> },
      { name: "Prettier", icon: <SiPrettier /> },
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
            className={`bg-gray-50 dark:bg-[#1f1f1f] transition-all duration-300`}
          >
            {/* Header */}
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

            {/* Content */}
            {isOpen && (
              <div className="px-4 pb-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  {skills.map(({ name, icon }) => (
                    <span
                      key={name}
                      className="flex items-center gap-2 px-3 py-1 text-sm rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                    >
                      <span className="text-base">{icon}</span>
                      {name}
                    </span>
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
