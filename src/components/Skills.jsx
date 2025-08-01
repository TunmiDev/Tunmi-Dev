import React from "react";
import SkillsCloud from "./SkillsCloud";
import SkillsGroup from "./SkillsGroup";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="pt-8 pb-0 dark:text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:space-x-10 items-start">
        {/* Left: 3D Skills Cloud */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center h-1/2 md:h-auto mb-10 md:mb-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SkillsCloud />
        </motion.div>

        {/* Right: Grouped Skills */}
        <motion.div
          className="w-full md:w-1/2 h-1/2 md:h-auto"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-medium mb-6 text-center mt-0 md:mt-32 md:text-left pl-8">
            Skills / Stack
          </h2>
          <SkillsGroup />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
