// src/components/Skills.jsx
import React from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

const slugs = [
  "react",
  "javascript",
  "typescript",
  "html5",
  "css3",
  "tailwindcss",
  "python",
  "git",
  "github",
  "figma",
  "vercel",
  "nextdotjs",
  "bootstrap",
  "visualstudiocode",
  "adobephotoshop",
  "canva",
];

// Hook to fetch and render icons
const useIcons = (slugs) => {
  const [icons, setIcons] = React.useState(null);

  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, []);

  if (!icons) return <span className="text-sm text-gray-400">Loading...</span>;

  return Object.values(icons.simpleIcons).map((icon) =>
    renderSimpleIcon({
      icon,
      size: 42,
      aProps: {
        href: "#",
        onClick: (e) => e.preventDefault(),
      },
    })
  );
};

// Cloud settings
const cloudProps = {
  id: "skills-cloud",
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltip: "native",
    outlineColour: "#0000",
  },
};

// Static skill list for mobile view
const StaticSkillList = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-white">
    {slugs.map((tech) => (
      <div
        key={tech}
        className="bg-gray-800 py-2 px-4 rounded-lg text-center shadow-md hover:scale-105 transition-transform"
      >
        {tech.toUpperCase()}
      </div>
    ))}
  </div>
);

// Full Skills Section
const Skills = () => {
  const icons = useIcons(slugs);

  return (
    <section id="skills" className="py-16 bg-[#0f172a] text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-2">Skills & Tools</h2>
        <p className="text-gray-400 mb-8">Technologies I work with regularly</p>
      </div>

      {/* 3D Cloud for medium+ screens */}
      <div className="hidden md:flex justify-center">
        <div className="h-[500px] w-full flex justify-center items-center">
          <Cloud {...cloudProps}>{icons}</Cloud>
        </div>
      </div>

      {/* Static list for mobile */}
      <div className="block md:hidden mt-10 px-6">
        <StaticSkillList />
      </div>
    </section>
  );
};

export default Skills;
