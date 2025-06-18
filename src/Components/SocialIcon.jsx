import React from "react";

const SocialIcon = ({ href, icon: Icon, label, hoverColor }) => {
  return (
    <div className="relative group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-colors duration-200 ${hoverColor}`}
        aria-label={label}
      >
        <Icon className="text-xl" />
      </a>
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 z-10 whitespace-nowrap">
        {label}
      </div>
    </div>
  );
};

export default SocialIcon;
