import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import SocialIcon from "./SocialIcon";

function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle

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

  return (
    <nav className="w-full px-6 py-3 bg-white dark:bg-black text-black dark:text-white transition-all duration-300 fixed z-50 top-0 left-0 ">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl font-bold italic font-serif">Tunmidev</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-serif ml-40">
          <li className="font-semibold cursor-pointer">Home</li>
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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Socials + Theme toggle */}
        <div className="hidden md:flex items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-300 italic">
            Software Engineer | Frontend Dev
          </p>
          <SocialIcon
            href="https://github.com/tunmidev"
            icon={FaGithub}
            label="GitHub"
            hoverColor="hover:text-gray-800 dark:hover:text-gray-300"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/oluwatunmiseadewole"
            icon={FaLinkedin}
            label="LinkedIn"
            hoverColor="hover:text-blue-600 dark:hover:text-blue-400"
          />
          <button onClick={toggleTheme}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-end text-right mt-4 space-y-3 font-serif pr-2">
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
          <li className="flex gap-4 mt-4">
            <SocialIcon
              href="https://github.com/tunmidev"
              icon={FaGithub}
              label="GitHub"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/oluwatunmiseadewole"
              icon={FaLinkedin}
              label="LinkedIn"
            />
            <button onClick={toggleTheme}>
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
