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
        className="bg-coolors-3 text-black p-2 rounded"
      >
        About Me
      </button>
      <button
        onClick={() => handleClick("portfolio")}
        className="bg-coolors-3 text-black p-2 rounded"
      >
        Portfolio
      </button>
      <button
        onClick={() => handleClick("resume")}
        className="bg-coolors-3 text-black p-2 rounded"
      >
        Resume
      </button>
      <button
        onClick={() => handleClick("contact")}
        className="bg-coolors-3 text-black p-2 rounded"
      >
        Contact
      </button>
    </nav>
  );
};

export default Navigation;
