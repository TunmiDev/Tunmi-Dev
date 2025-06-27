// src/App.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./Components/Project";

function App() {
  const [darkMode, setDarkMode] = useState(true); // Start in dark mode

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 p-4">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Project />
    </div>
  );
}

export default App;
