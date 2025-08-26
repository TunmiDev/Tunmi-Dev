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
    textColour: null,
  },
};

// 💼 Full Skills Section Component
const SkillsCloud = () => {
  const icons = useIcons(slugs);
  return (
    <section id="skills" className="text-white">
      {/* 3D Cloud on all screens */}
      <div className="flex justify-center">
        <div className="h-[500px] w-full flex justify-center items-center">
          <Cloud {...cloudProps}>{icons}</Cloud>
        </div>
      </div>
    </section>
  );
};
export default SkillsCloud;
