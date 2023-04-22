import React from "react";

const Project = ({ title, imgSrc, alt, url }) => {
  return (
    <a target="_blank" href={url} rel="noreferrer">
      <figcaption className="title text-xl font-bold">{title}</figcaption>
      <img
        src={imgSrc}
        alt={alt}
        className="w-64 h-64 object-cover rounded-2xl"
      />
    </a>
  );
};

export default Project;
