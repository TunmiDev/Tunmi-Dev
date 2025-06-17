import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMoon, FaSun } from "react-icons/fa";

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
    <nav className="flex justify-between items-center px-6 py-3 bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-md">
      <div className="text-xl font-bold italic font-serif">Tunmidev</div>

      <ul className="flex gap-6 text-sm font-serif">
        <li className="font-semibold cursor-pointer">Home</li>
        <li className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
          Blog
        </li>
        <li className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
          Projects
        </li>
        <li className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
          About
        </li>
        <li className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
          Skills
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <p className="text-xs text-gray-500 dark:text-gray-300 italic">
          Software Engineer | Frontend Dev
        </p>
        <div className="flex gap-4 text-xl">
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
        </div>

        <button onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
