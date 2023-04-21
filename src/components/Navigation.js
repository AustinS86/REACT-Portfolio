// src/components/Navigation.js
import React from "react";

const Navigation = ({ setSelectedSection }) => {
  const handleClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <nav className="flex space-x-4 mt-2 justify-center">
      <button
        onClick={() => handleClick("about-me")}
        className="bg-blue-200 text-black p-2 rounded"
      >
        About Me
      </button>
      <button
        onClick={() => handleClick("portfolio")}
        className="bg-blue-200 text-black p-2 rounded"
      >
        Portfolio
      </button>
      <button
        onClick={() => handleClick("resume")}
        className="bg-blue-200 text-black p-2 rounded"
      >
        Resume
      </button>
      <button
        onClick={() => handleClick("contact")}
        className="bg-blue-200 text-black p-2 rounded"
      >
        Contact
      </button>
    </nav>
  );
};

export default Navigation;
