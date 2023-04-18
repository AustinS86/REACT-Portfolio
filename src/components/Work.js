import React from "react";

const Work = () => {
  return (
    <section id="work" className="mb-10">
      <h1 className="text-4xl mb-4 font-bold">Projects & Challenges</h1>
      <div className="flex flex-wrap space-x-4 space-y-4 lg:space-x-20 lg:space-y-0">
        <a
          target="_blank"
          href="https://github.com/AustinS86/Challenge-Week-1-Accessibility"
          rel="noreferrer"
        >
          <figcaption className="title text-xl font-bold">
            Challenge-Accessibility
          </figcaption>
          <img
            src="assets\images\pexels-pixabay-256502.jpg"
            alt="code on a computer monitor"
            className="w-64 h-64 object-cover rounded-2xl"
          />
        </a>
        <a
          target="_blank"
          href="https://sampaul10.github.io/Project-01/"
          rel="noreferrer"
        >
          <figcaption className="title text-xl font-bold">Pear'd</figcaption>
          <img
            src="./assets/images/spaghetti-1932466_1920 (1).jpg"
            alt="spaghetti and tomatoes"
            className="w-64 h-64 object-cover rounded-2xl"
          />
        </a>
        <a
          target="_blank"
          href="https://murmuring-escarpment-43025.herokuapp.com/"
          rel="noreferrer"
        >
          <figcaption className="title text-xl font-bold">
            TotoroBank
          </figcaption>
          <img
            src="./assets/images/totoro-bw.png"
            alt="My Neighbor Totoro icon"
            className="w-64 h-64 object-cover rounded-2xl"
          />
        </a>
      </div>
    </section>
  );
};

export default Work;
