import React from "react";
import SkillsCloud from "./SkillsCloud";
import SkillsGroup from "./SkillsGroup";

const Skills = () => {
  return (
    <section id="skills" className="py-16 pt-10 pb-16 dark:text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:space-x-10 items-start h-screen">
        {/* Left: 3D Skills Cloud */}
        <div className="w-full md:w-1/2 flex justify-center items-center h-1/2 md:h-auto mb-10 md:mb-0">
          <SkillsCloud />
        </div>

        {/* Right: Grouped Skills */}
        <div className="w-full md:w-1/2 h-1/2 md:h-auto">
          <h2 className="text-3xl font-medium mb-6 text-center mt-10 md:mt-32 md:text-left pl-8">
            Skills / Stack
          </h2>
          <SkillsGroup />
        </div>
      </div>
    </section>
  );
};

export default Skills;
