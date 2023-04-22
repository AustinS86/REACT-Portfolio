import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-coolors-2">
      <section className="flex justify-center space-x-6 text-center">
        <h3>
          <a
            href="mailto:austin.stancil@yahoo.com"
            className=" text-black font-bold p-2 rounded"
            alt="email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </h3>
        <h3>
          <a
            href="https://github.com/AustinS86"
            className=" text-black font-bold p-2 rounded"
            alt="Github"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </h3>
        <h3>
          <a
            href="https://www.linkedin.com/in/austin-stancil-00029480"
            className=" text-black font-bold p-2 rounded"
            alt="Linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </h3>
      </section>
      <footer className="text-white text-center font-bold p-4 mt-10">
        <h1 className="text-2xl">Thank You for Visiting!</h1>
      </footer>
    </div>
  );
};

export default Footer;
