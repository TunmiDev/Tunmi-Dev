import React from "react";
import { FaSearch, FaPaintBrush } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-black text-white rounded-lg shadow-md">
      {/* Left - Logo */}
      <div className="text-xl font-bold italic font-serif text-white">
        Tunmidev
      </div>

      {/* Center - Links */}
      <ul className="flex gap-6 text-sm  font-serif">
        <li className="font-semibold text-white">Home</li>
        <li className="hover:text-gray-400 cursor-pointer">Blog</li>
        <li className="hover:text-gray-400 cursor-pointer">Projects</li>
        <li className="hover:text-gray-400 cursor-pointer">About</li>
        <li className="hover:text-gray-400 cursor-pointer">Guestbook</li>
      </ul>

      {/* Right - Search and Theme Toggle */}
      <div className="flex items-center gap-4">
        {/* Search bar */}
        <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 text-gray-300 rounded-md border border-zinc-700">
          <FaSearch className="text-sm" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-24"
          />
          <span className="text-xs text-gray-400 bg-zinc-800 px-1.5 py-0.5 rounded">
            Ctrl K
          </span>
        </div>

        {/* Theme toggle (dummy icon) */}
        <FaPaintBrush className="cursor-pointer hover:text-gray-400" />
      </div>
    </nav>
  );
}

export default Navbar;
