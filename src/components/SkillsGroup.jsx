import React, { useState } from "react";
import {
  Code2,
  UploadCloud,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5 mr-2" />,
    skills: [
      "ReactJS",
      "NextJS",
      "MaterialUI",
      "Bootstrap",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Figma",
      "Canva",
      "Photoshop",
      "Illustrator",
    ],
  },
  {
    title: "Deployment",
    icon: <UploadCloud className="w-5 h-5 mr-2" />,
    skills: ["Docker", "Jenkins", "Vercel", "Netlify", "Nginx"],
  },
  {
    title: "Others",
    icon: <Layers className="w-5 h-5 mr-2" />,
    skills: ["Git", "GitHub", "VS Code", "Prettier"],
  },
];

const SkillsGroup = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (title) => {
    setOpenCategory((prev) => (prev === title ? null : title));
  };

  return (
    <div className="border border-gray-300 dark:border-gray-700 divide-y divide-gray-300 dark:divide-gray-700 rounded-md overflow-hidden">
      {categories.map(({ title, icon, skills }, index) => {
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
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                    >
                      {skill}
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
