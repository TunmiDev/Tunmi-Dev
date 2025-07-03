// src/components/Skills.jsx
import React from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

// ✅ Valid Simple Icons slugs only
const slugs = [
  "react",
  "javascript",
  "html5",
  "css3",
  "tailwindcss",
  "git",
  "github",
  "figma",
  "vercel",
  "netlify",
  "bootstrap",
  "adobephotoshop",
  "canva",
  "vite",
  "npm",
  "prettier",
  "mui",
  "framermotion",
  "visualstudiocode",
];

// 🔧 Hook to fetch and render icons
const useIcons = (slugs) => {
  const [icons, setIcons] = React.useState(null);

  React.useEffect(() => {
    const loadIcons = async () => {
      try {
        const result = await fetchSimpleIcons({ slugs });
        setIcons(result);
      } catch (error) {
        console.error("Error fetching icons:", error);
      }
    };

    loadIcons();
  }, []);

  if (!icons) return null;

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

// 🌐 Cloud settings
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

// 📱 Static fallback list (for mobile)
const StaticSkillList = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-white">
    {slugs.map((tech) => (
      <div
        key={tech}
        className=" py-2 px-4 rounded-lg text-center shadow-md hover:scale-105 transition-transform"
      >
        {tech.toUpperCase()}
      </div>
    ))}
  </div>
);

// 💼 Full Skills Section Component
const Skills = () => {
  const icons = useIcons(slugs);

  return (
    <section id="skills" className="py-16  text-white">
      {/* 3D Cloud on large screens */}
      <div className="hidden md:flex justify-center">
        <div className="h-[500px] w-full flex justify-center items-center">
          <Cloud {...cloudProps}>{icons}</Cloud>
        </div>
      </div>

      {/* Static grid list on mobile */}
      <div className="block md:hidden mt-10 px-6">
        <StaticSkillList />
      </div>
    </section>
  );
};

export default Skills;
