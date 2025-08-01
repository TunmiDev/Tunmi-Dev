import React, { useState, useRef } from "react";
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
  SiTailwindcss,
} from "react-icons/si";

// 💡 Subcomponent: one skill card
const SkillCard = ({ name, icon, color }) => {
  const iconRef = useRef(null);

  const handleMouseEnter = () => {
    iconRef.current?.classList.remove("grayscale");
  };

  const handleClick = () => {
    iconRef.current?.classList.remove("grayscale");
  };

  const handleMouseLeave = () => {
    iconRef.current?.classList.add("grayscale");
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer p-2 w-full max-w-[72px]  flex flex-col items-center rounded-md bg-white dark:bg-gray-800 shadow-sm transition-transform duration-300 hover:scale-110 border-2 border-transparent hover:border-current"
      style={{ color }}
    >
      <span
        ref={iconRef}
        title={name}
        className="transition-all duration-500 ease-in-out filter grayscale"
      >
        {icon}
      </span>
      <span className="text-[10px] font-medium mt-1 leading-tight text-black dark:text-white">
        {name}
      </span>
    </div>
  );
};

// 💡 Main categories + skill list
const categories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5 mr-2" />,
    skills: [
      {
        name: "ReactJS",
        icon: <SiReact size={28} color="#61DAFB" />,
        color: "#61DAFB",
      },
      {
        name: "NextJS",
        icon: <SiNextdotjs size={28} color="#000000" />,
        color: "#000000",
      },
      {
        name: "MaterialUI",
        icon: <SiMui size={28} color="#007FFF" />,
        color: "#007FFF",
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap size={28} color="#7952B3" />,
        color: "#7952B3",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript size={28} color="#F7DF1E" />,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={28} color="#3178C6" />,
        color: "#3178C6",
      },
      {
        name: "HTML5",
        icon: <SiHtml5 size={28} color="#E34F26" />,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: <SiCss3 size={28} color="#1572B6" />,
        color: "#1572B6",
      },
      {
        name: "Figma",
        icon: <SiFigma size={28} color="#F24E1E" />,
        color: "#F24E1E",
      },
      {
        name: "Canva",
        icon: <SiCanva size={28} color="#00C4CC" />,
        color: "#00C4CC",
      },
      {
        name: "Photoshop",
        icon: <SiAdobephotoshop size={28} color="#31A8FF" />,
        color: "#31A8FF",
      },
      {
        name: "Tailwindcss",
        icon: <SiTailwindcss size={28} color="#31A8FF" />,
        color: "#31A8FF",
      },
    ],
  },
  {
    title: "Deployment",
    icon: <UploadCloud className="w-5 h-5 mr-2" />,
    skills: [
      {
        name: "Vercel",
        icon: <SiVercel size={28} color="#000000" />,
        color: "#000000",
      },
      {
        name: "Netlify",
        icon: <SiNetlify size={28} color="#00C7B7" />,
        color: "#00C7B7",
      },
    ],
  },
  {
    title: "Others",
    icon: <Layers className="w-5 h-5 mr-2" />,
    skills: [
      {
        name: "Git",
        icon: <SiGit size={28} color="#F05032" />,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: <SiGithub size={28} color="#181717" />,
        color: "#181717",
      },
      {
        name: "Prettier",
        icon: <SiPrettier size={28} color="#F7B93E" />,
        color: "#F7B93E",
      },
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
              <div className="px-6 pb-5 pt-3">
                <div className="grid grid-cols-4 gap-x-4 gap-y-6 sm:grid-cols-5 sm:gap-x-3 sm:gap-y-4 md:grid-cols-6 md:gap-4">
                  {skills.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
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
