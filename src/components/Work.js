// src/components/Work.js
import React from "react";
import Project from "./Project";
import codeScreen from "../assets/images/pexels-pixabay-256502.jpg";
import totoro from "../assets/images/totoro-bw.png";
import pasta from "../assets/images/spaghetti-1932466_1920 (1).jpg";

const Work = () => {
  return (
    <section id="work" className="mb-0 bg-coolors-gradient">
      <h1 className="text-4xl mb-4 font-bold">Projects & Challenges</h1>
      <div className="flex flex-wrap space-x-4 space-y-4 lg:space-x-20 lg:space-y-0">
        <Project
          title="Challenge-Accessibility"
          imgSrc={codeScreen}
          alt="code on a computer monitor"
          url="https://github.com/AustinS86/Challenge-Week-1-Accessibility"
        />
        <Project
          title="Pear'd"
          imgSrc={pasta}
          alt="spaghetti and tomatoes"
          url="https://sampaul10.github.io/Project-01/"
        />
        <Project
          title="TotoroBank"
          imgSrc={totoro}
          alt="My Neighbor Totoro icon"
          url="https://murmuring-escarpment-43025.herokuapp.com/"
        />
      </div>
    </section>
  );
};

export default Work;
