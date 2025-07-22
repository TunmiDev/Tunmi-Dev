import React from "react";
import { motion } from "framer-motion";

const FrontendAnimation = () => {
  const text = "FRONTEND".split("");

  // Parent container for staggered animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Increased delay between letters
      },
    },
  };

  // Animation for each letter
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Slower fade
  };

  return (
    <motion.span
      className="inline-block"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default FrontendAnimation;
