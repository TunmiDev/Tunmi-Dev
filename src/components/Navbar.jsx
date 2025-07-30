import React, { useEffect, useRef, useState } from "react";
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

  // Handle click outside dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="w-full px-6 py-3 bg-white dark:bg-black text-black dark:text-white transition-all duration-300 fixed z-50 top-0 left-0">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold italic font-serif">Tunmidev</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-serif ml-40">
          <li className="font-semibold cursor-pointer">
            <a href="#">Home</a>
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

          {/* Mobile menu toggle */}
          <div className="md:hidden ml-2" ref={toggleRef}>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full right-6 z-40">
          <div
            ref={menuRef}
            className="w-64 bg-white dark:bg-zinc-900 shadow-lg p-5 rounded-xl text-black dark:text-white flex flex-col"
          >
            {/* Logo */}
            <div className="text-xl font-bold italic font-serif mb-4">
              Tunmidev
              <hr className="my-3 border-gray-400 dark:border-white" />
            </div>

            {/* Nav Links */}
            <ul className="space-y-2 text-sm font-serif">
              {[
                { icon: <FaHome />, label: "Home", href: "#home" },
                { icon: <FaUser />, label: "About Me", href: "#about" },
                {
                  icon: <FaFolderOpen />,
                  label: "Projects",
                  href: "#projects",
                },
                { icon: <FaTools />, label: "Skills", href: "#skills" },
                { icon: <FaEnvelope />, label: "Contact", href: "#contact" },
              ].map(({ icon, label, href }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer hover:text-blue-500 dark:hover:text-blue-500"
                >
                  {icon}
                  <a href={href} onClick={() => setIsOpen(false)}>
                    {label}
                  </a>
                </li>
              ))}

              {/* Divider */}
              <hr className="my-3 border-gray-400 dark:border-white" />

              {/* Social Links */}
              <li className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer hover:text-blue-500 dark:hover:text-blue-500">
                <FaLinkedin />
                <a
                  href="https://www.linkedin.com/in/oluwatunmiseadewole"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer hover:text-blue-500 dark:hover:text-blue-500">
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
      )}
    </nav>
  );
}

export default Navbar;
