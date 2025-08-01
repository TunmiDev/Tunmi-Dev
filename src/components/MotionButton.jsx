// components/MotionButton.jsx
import { motion } from "framer-motion";

const MotionButton = ({ children, className, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

export default MotionButton;
