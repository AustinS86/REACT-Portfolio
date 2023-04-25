import React from "react";
import Container from "./Container";

const Resume = () => {
  return (
    <section id="resume" className="mb-0 ">
      <Container>
        <h1 className="text-4xl mt-4 font-bold text-white">Resume</h1>
        <section className="flex flex-col items-center font-bold text-white text-xl">
          <h2>Download my resume:</h2>
          <a
            href="https://1drv.ms/w/s!AhwGtqkRgroEm1F4eWatnQFsdH36?e=MVjyRs"
            target="_blank"
            rel="noopener noreferrer"
            download
            className=" mb-4 py-2 px-4 rounded bg-coolors-3 text-white font-bold"
          >
            Download Resume
          </a>
          <section className="w-full">
            <h2>Front End Proficiency</h2>
            <ul className="bullet-points">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap/TailwindCSS/Bulma</li>
            </ul>
            <h2>Back End Proficiency</h2>
            <ul className="bullet-points">
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
            <h2>Other Proficiencies</h2>
            <ul className="bullet-points">
              <li>Git</li>
              <li>Command Line</li>
              <li>Agile</li>
              <li>Object-Oriented Programming</li>
              <li>Test-Driven Development</li>
              <li>Web Accessibility</li>
            </ul>
          </section>
        </section>
      </Container>
    </section>
  );
};

export default Resume;
