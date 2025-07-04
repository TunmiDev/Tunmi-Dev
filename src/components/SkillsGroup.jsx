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
  SiVercel,
  SiNetlify,
  SiGit,
  SiGithub,
  SiPrettier,
} from "react-icons/si";

// Define categories and skills
const categories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5 mr-2" />,
    skills: [
      { name: "ReactJS", icon: <SiReact size={28} color="#61DAFB" /> },
      { name: "NextJS", icon: <SiNextdotjs size={28} color="#000000" /> },
      { name: "MaterialUI", icon: <SiMui size={28} color="#007FFF" /> },
      {
        name: "Bootstrap",
        icon: <SiBootstrap size={28} color="#7952B3" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript size={28} color="#F7DF1E" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={28} color="#3178C6" />,
      },
      { name: "HTML5", icon: <SiHtml5 size={28} color="#E34F26" /> },
      { name: "CSS3", icon: <SiCss3 size={28} color="#1572B6" /> },
      { name: "Figma", icon: <SiFigma size={28} color="#F24E1E" /> },
      { name: "Canva", icon: <SiCanva size={28} color="#00C4CC" /> },
      {
        name: "Photoshop",
        icon: <SiAdobephotoshop size={28} color="#31A8FF" />,
      },
    ],
  },
  {
    title: "Deployment",
    icon: <UploadCloud className="w-5 h-5 mr-2" />,
    skills: [
      { name: "Vercel", icon: <SiVercel size={28} color="#000000" /> },
      { name: "Netlify", icon: <SiNetlify size={28} color="#00C7B7" /> },
    ],
  },
  {
    title: "Others",
    icon: <Layers className="w-5 h-5 mr-2" />,
    skills: [
      { name: "Git", icon: <SiGit size={28} color="#F05032" /> },
      { name: "GitHub", icon: <SiGithub size={28} color="#181717" /> },
      { name: "Prettier", icon: <SiPrettier size={28} color="#F7B93E" /> },
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

            {/* Skills */}
            {isOpen && (
              <div className="px-4 pb-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {skills.map(({ name, icon }) => (
                    <div
                      key={name}
                      className="p-2 w-[68px] flex flex-col items-center rounded-md bg-white dark:bg-gray-800 shadow-sm hover:scale-120 transition-transform text-center text-inherit"
                    >
                      <span className="text-inherit">{icon}</span>
                      <span className="text-[10px] font-medium mt-1 leading-tight">
                        {name}
                      </span>
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
