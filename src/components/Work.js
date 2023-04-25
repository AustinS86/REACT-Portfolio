// src/components/Work.js
import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import CodeScreen from "../assets/images/pexels-pixabay-256502.jpg";
import Totoro from "../assets/images/totoro-bw.png";
import Peard from "../assets/images/spaghetti-1932466_1920 (1).jpg";
import Jate from "../assets/images/JATE.jpg";
import Weather from "../assets/images/weather-dashboard-screenshot.jpg";
import TechBlog from "../assets/images/Developer-Tech-Blog.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Work = () => {
  const varients = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <section id="work" className="mb-0 ">
      <Container>
        <h1 className="text-4xl mb-4 font-bold text-white">
          Projects & Challenges
        </h1>
        <motion.div
          className="flex flex-wrap text-white space-x-4 space-y-4 lg:space-x-20 lg:space-y-0"
          initial="hidden"
          animate="visible"
          variants={varients}
          transition={{ duration: 0.5 }}
        >
          <div className="project-container">
            <img
              src={CodeScreen}
              alt="code on a computer monitor"
              className="w-full object-cover h-48 object-center"
            />
            <div className="project-info">
              <h3 className="project-name">{/* Empty anchor tag */}</h3>
              <a
                href="https://github.com/AustinS86/Password-Generator"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link inline-block mr-4"
              >
                <i className="fab fa-github-square fa-3x"></i>
              </a>
              <a
                href="https://austins86.github.io/Password-Generator/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link text-xl"
              >
                Password Generator
              </a>
            </div>
          </div>
          <div className="project-container">
            <img
              src={Peard}
              alt="spaghetti and tomatoes"
              className="w-full object-cover h-48 object-center"
            />
            <div className="project-info">
              <h3 className="project-name">{/* Empty anchor tag */}</h3>
              <a
                href="https://github.com/sampaul10/Project-01"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link inline-block mr-4"
              >
                <i className="fab fa-github-square fa-3x"></i>
              </a>
              <a
                href="https://sampaul10.github.io/Project-01/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link text-xl"
              >
                Pear'd App
              </a>
            </div>
          </div>
          <div className="project-container">
            <img
              src={Totoro}
              alt="My Neighbor Totoro icon"
              className="w-full object-cover h-48 object-center"
            />
            <div className="project-info">
              <h3 className="project-name">{/* Empty anchor tag */}</h3>
              <a
                href="https://github.com/taeyoungP/TotoroBank"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link inline-block mr-4"
              >
                <i className="fab fa-github-square fa-3x"></i>
              </a>
              <a
                href="https://murmuring-escarpment-43025.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link text-xl"
              >
                TotoroBank
              </a>
            </div>
          </div>

          <div className="project-container">
            <img
              src={Jate}
              alt="Jate Web Text Editor"
              className="w-full object-cover h-48 object-center"
            />
            <div className="project-info">
              <h3 className="project-name">{/* Empty anchor tag */}</h3>
              <a
                href="https://github.com/AustinS86/PWA-Text-Editor"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link inline-block mr-4"
              >
                <i className="fab fa-github-square fa-3x"></i>
              </a>
              <a
                href="https://guarded-anchorage-60540.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link text-xl"
              >
                Jate Text Web Editor
              </a>
            </div>
          </div>

          <div className="project-container">
            <img
              src={Weather}
              alt="Weather Dashboard"
              className="w-full object-cover h-48 object-center"
            />
            <div className="project-info">
              <h3 className="project-name">{/* Empty anchor tag */}</h3>
              <a
                href="https://github.com/AustinS86/Weather-Forecast-Dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link inline-block mr-4"
              >
                <i className="fab fa-github-square fa-3x"></i>
              </a>
              <a
                href="https://austins86.github.io/Weather-Forecast-Dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link text-xl"
              >
                Weather Dashboard
              </a>
            </div>
          </div>

          <div className="project-container">
            <img
              src={TechBlog}
              alt="Developer Tech Blog "
              className="w-full object-cover h-48 object-center"
            />
            <div className="project-info">
              <h3 className="project-name">{/* Empty anchor tag */}</h3>
              <a
                href="https://github.com/AustinS86/Developer-Tech-Blog"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link inline-block mr-4"
              >
                <i className="fab fa-github-square fa-3x"></i>
              </a>
              <a
                href="https://github.com/AustinS86/Developer-Tech-Blog"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link text-xl"
              >
                Developer Tech Blog
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Work;
