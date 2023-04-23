// src/components/Work.js
import React from "react";
import Project from "./Project";
import Container from "./Container";
import { motion } from "framer-motion";
import CodeScreen from "../assets/images/pexels-pixabay-256502.jpg";
import Totoro from "../assets/images/totoro-bw.png";
import Peard from "../assets/images/spaghetti-1932466_1920 (1).jpg";
import Jate from "../assets/images/JATE.jpg";
import Weather from "../assets/images/weather-dashboard-screenshot.jpg";
import TechBlog from "../assets/images/Developer-Tech-Blog.jpg";

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
          <Project
            title="Challenge-Accessibility"
            imgSrc={CodeScreen}
            alt="code on a computer monitor"
            url="https://github.com/AustinS86/Challenge-Week-1-Accessibility"
          />
          <Project
            title="Pear'd"
            imgSrc={Peard}
            alt="spaghetti and tomatoes"
            url="https://sampaul10.github.io/Project-01/"
          />
          <Project
            title="TotoroBank"
            imgSrc={Totoro}
            alt="My Neighbor Totoro icon"
            url="https://murmuring-escarpment-43025.herokuapp.com/"
          />
          <Project
            title="Jate Web Text Editor"
            imgSrc={Jate}
            alt="Jate text editor homescreen"
            url="https://guarded-anchorage-60540.herokuapp.com/"
          />
          <Project
            title="Weather Dashboard"
            imgSrc={Weather}
            alt="Weather Dashboard"
            url="https://austins86.github.io/Weather-Forecast-Dashboard/"
          />
          <Project
            title="Developer Tech Blog"
            imgSrc={TechBlog}
            alt="Tech Blog Home Page"
            url="https://github.com/AustinS86/Developer-Tech-Blog"
          />
        </motion.div>
      </Container>
    </section>
  );
};

export default Work;
