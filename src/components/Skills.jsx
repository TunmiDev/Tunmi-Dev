// src/components/Skills.jsx
import React from "react";
import SkillsCloud from "./SkillsCloud";
import SkillsGroup from "./SkillsGroup";

const Skills = () => {
  return (
    <section id="skills" className="py-16 pt-10 pb-16  dark:text-white">
      <div className="container mx-auto px-6 md:flex md:space-x-10 items-start">
        {/* Left: 3D Skills Cloud */}
        <div className="hidden md:flex w-1/2 justify-center items-center">
          <SkillsCloud />
        </div>

        {/* Right: Grouped Skills */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-medium mb-6 text-center mt-32 md:text-left pl-12">
            Skills / Stack
          </h2>
          <SkillsGroup />
        </div>
      </div>
    </section>
  );
};

export default Skills;
