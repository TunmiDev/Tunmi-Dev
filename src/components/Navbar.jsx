import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="w-full px-6 py-3 bg-white dark:bg-black text-black dark:text-white transition-all duration-300 fixed z-50 top-0 left-0">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
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

        {/* Social + Theme toggle + Mobile menu button */}
        <div className="flex items-center gap-4 text-sm">
          <p className="hidden md:block text-xs text-gray-500 dark:text-gray-300 italic">
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

          {/* Mobile menu toggle button */}
          <div className="md:hidden ml-2">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-end">
          <div className="w-64 bg-white dark:bg-zinc-900 h-full shadow-lg p-5 text-black dark:text-white relative flex flex-col justify-between">
            {/* Top section */}
            <div>
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-xl"
              >
                <FaTimes />
              </button>

              {/* Logo */}
              <div className="text-lg font-bold mb-6">
                <div className="text-xl font-bold italic font-serif">
                  Tunmidev
                </div>
              </div>

              {/* Links */}
              <ul className="space-y-5 text-sm ">
                <li className="flex items-center gap-3 cursor-pointer">
                  <a href="#about">About me</a>
                </li>
                <li className="flex items-center gap-3 cursor-pointer">
                  <a href="#projects">Projects</a>
                </li>
                <li className="flex items-center gap-3 cursor-pointer">
                  <a href="#gallery">Gallery</a>
                </li>
                <li className="flex items-center gap-3 cursor-pointer">
                  <FaLinkedin />
                  <a
                    href="https://www.linkedin.com/in/oluwatunmiseadewole"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center gap-3 cursor-pointer">
                  <FaGithub />
                  <a
                    href="https://github.com/tunmidev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
