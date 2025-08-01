// components/MotionButton.jsx
import { motion } from "framer-motion";

const MotionButton = ({
  children,
  className,
  href,
  delay = 0,
  type = "button",
  onClick,
}) => {
  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      whileHover={{
        scale: 1.12,
        rotate: 1,
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        transition: { type: "spring", stiffness: 300 },
      }}
      whileTap={{
        scale: 0.97,
        rotate: -1,
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default MotionButton;
