import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import SocialIcon from "./SocialIcon";

function Navbar() {
  const [theme, setTheme] = useState("light");

  // Load saved theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  // Toggle theme handler
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white dark:bg-black text-black dark:text-white transition-all duration-300 ">
      <div className="text-xl font-bold italic font-serif">Tunmidev</div>

      <ul className="flex gap-6 text-sm font-serif ml-48">
        <li className="font-semibold cursor-pointer">Home</li>
        <li className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
          <a href="#">Skills</a>
        </li>
        <li className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <p className="text-xs text-gray-500 dark:text-gray-300 italic">
          Software Engineer | Frontend Dev
        </p>
        <div className="flex gap-6">
          <SocialIcon
            href="https://github.com/tunmidev"
            icon={FaGithub}
            label="GitHub"
            hoverColor="hover:text-gray-800 dark:hover:text-gray-300"
          />
          <SocialIcon
            href="www.linkedin.com/in/oluwatunmiseadewole"
            icon={FaLinkedin}
            label="LinkedIn"
            hoverColor="hover:text-[#0077B5]"
          />
          <SocialIcon
            href="mailto:adewoleoluwatunmise"
            icon={FaEnvelope}
            label="Email"
            hoverColor="hover:text-red-600 dark:hover:text-red-400"
          />
        </div>

        <button onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
