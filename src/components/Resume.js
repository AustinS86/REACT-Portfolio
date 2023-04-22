import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="mb-0 bg-coolors-gradient">
      <h1 className="text-4xl mt-4 font-bold">Resume</h1>
      <a
        href="https://www.linkedin.com/in/austin-stancil-00029480"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="./assets/images/Wyoming.jpg"
          alt="coming soon sign"
          className="w-64 h-64 object-cover rounded-2xl"
        />
      </a>
    </section>
  );
};

export default Resume;
