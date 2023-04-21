import React from "react";

const Footer = () => {
  return (
    <div>
      <section id="contact" className="contact mb-10">
        <h1 className="text-4xl font-bold">Contact</h1>
      </section>
      <section className="links grid grid-cols-3 gap-1 text-center">
        <h3>
          <a
            href="mailto:austin.stancil@yahoo.com"
            className="bg-blue-200 text-black font-bold p-2 rounded"
            alt="email"
          >
            austin.stancil@yahoo.com
          </a>
        </h3>
        <h3>
          <a
            href="https://github.com/AustinS86"
            className="bg-blue-200 text-black font-bold p-2 rounded"
            alt="Github"
          >
            Github
          </a>
        </h3>
        <h3>
          <a
            href="https://www.linkedin.com/in/austin-stancil-00029480"
            className="bg-blue-200 text-black font-bold p-2 rounded"
            alt="Linkedin"
          >
            Linkedin
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
