// src/components/SkillsGroup.jsx
import React from "react";

const categories = [
  {
    title: "Frontend",
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
    title: "Backend",
    skills: ["Python", "Django", "PostgreSQL", "MySQL"],
  },
  {
    title: "Deployment",
    skills: ["Docker", "Jenkins", "Vercel", "Netlify", "Nginx"],
  },
  {
    title: "Others",
    skills: ["Git", "GitHub", "VS Code", "Prettier"],
  },
];

const SkillsGroup = () => {
  return (
    <div className="space-y-6">
      {categories.map((group) => (
        <div
          key={group.title}
          className="border rounded-md p-4 bg-white/10 dark:bg-white/5 shadow"
        >
          <h3 className="text-xl font-semibold mb-3">{group.title}</h3>
          <div className="flex flex-wrap gap-3">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-md text-sm bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGroup;
