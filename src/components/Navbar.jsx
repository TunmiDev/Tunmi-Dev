import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaUser,
  FaFolderOpen,
  FaTools,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";

function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full px-4 sm:px-6 py-3 bg-white dark:bg-black text-black dark:text-white transition-all duration-300 fixed z-50 top-0 left-0"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold italic font-serif">
          {" "}
          <a href="/home">Tunmidev</a>
        </div>

        {/* Show nav links from sm and up */}
        <ul className="hidden sm:flex gap-6 text-sm font-serif ml-6 md:ml-10 lg:ml-20">
          <li className="font-semibold cursor-pointer">
            <a href="#hero">Home</a>
          </li>
          <li className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Right icons */}
        <div className="flex items-center gap-4 text-sm">
          <p className="hidden sm:block text-xs text-gray-500 dark:text-gray-300 italic">
            Software Engineer | Frontend Dev
          </p>

          <a
            href="https://github.com/tunmidev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 dark:hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/oluwatunmiseadewole"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

          <button onClick={toggleTheme} className="text-lg">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* Hamburger only for screens below sm */}
          <div className="sm:hidden ml-2" ref={toggleRef}>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sm:hidden absolute top-full right-4 w-[90vw] max-w-sm z-40">
          <div
            ref={menuRef}
            className="bg-white dark:bg-zinc-900 shadow-lg p-5 rounded-xl text-black dark:text-white flex flex-col"
          >
            <div className="text-xl font-bold italic font-serif mb-4">
              Tunmidev
              <hr className="my-3 border-gray-400 dark:border-white" />
            </div>

            <ul className="space-y-2 text-sm font-serif">
              {[
                { icon: <FaHome />, label: "Home", href: "#hero" },
                { icon: <FaUser />, label: "About Me", href: "#about" },
                {
                  icon: <FaFolderOpen />,
                  label: "Projects",
                  href: "#projects",
                },
                { icon: <FaTools />, label: "Skills", href: "#skills" },
                { icon: <FaEnvelope />, label: "Contact", href: "#contact" },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  <li className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transform hover:scale-105 transition duration-200">
                    {icon}
                    <span>{label}</span>
                  </li>
                </a>
              ))}

              <hr className="my-3 border-gray-400 dark:border-white" />

              <a
                href="https://www.linkedin.com/in/oluwatunmiseadewole"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <li className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transform hover:scale-105 transition duration-200">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </li>
              </a>

              <a
                href="https://github.com/tunmidev"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <li className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transform hover:scale-105 transition duration-200">
                  <FaGithub />
                  <span>GitHub</span>
                </li>
              </a>
            </ul>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
