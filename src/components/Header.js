import React from "react";

const Header = () => {
  return (
    <header className="text-white p-4 text-center">
      <h1 className=" text-3xl font-bold">Austin Stancil Portfolio</h1>
      <div className="flex justify-center mt-2">
        <img
          src="assets\images\Remy.jpg"
          className="remy w-64 h-64 object-cover rounded-2xl"
          alt="My yellow lab Remy chewing on a stick on my lap"
        />
      </div>
      <nav className="flex space-x-4 mt-2 justify-center">
        <a href="#about-me" className="bg-blue-200 text-black p-2 rounded">
          About Me
        </a>
        <a href="#portfolio" className="bg-blue-200 text-black p-2 rounded">
          Portfolio
        </a>
        <a href="#resume" className="bg-blue-200 text-black p-2 rounded">
          Resume
        </a>
        <a href="#contact" className="bg-blue-200 text-black p-2 rounded">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
