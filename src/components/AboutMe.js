import React from "react";
import starwars from "../assets/images/starwars.jpg";
import Container from "./Container";

const AboutMe = () => {
  return (
    <section id="about-me" className="mb-10 mx-4">
      <Container>
        <img
          src={starwars}
          alt="myself drinking blue milk at galaxy's edge"
          className="w-64 h-64 object-cover rounded-2xl"
        />
        <h1 className="text-4xl mt-4 font-bold text-white">About Me</h1>
        <p className="mt-4 text-2xl text-white">
          Hello! I'm Austin, and I live in Connecticut with my wonderful wife,
          Sarah, and our energetic 2-year-old yellow lab, Remy Alfredo. I have a
          wide range of hobbies that include watching movies, playing video
          games, participating in sports, hiking with Remy, and exploring new
          places. My wife and I especially love traveling to Disney World
          together to create cherished memories. In my professional life, I
          currently work at Whole Foods Market as a Store Receiver, where I
          handle various programs such as DVO, Peoplesoft, and IRMA. However,
          I've recently decided to shift gears in my career and enrolled in a
          Coding Bootcamp for Web Development. My goal is to break into the
          exciting field of web development, which will allow me to grow
          professionally and enhance my career prospects. I'm excited about this
          new chapter in my life and eager to tackle the challenges ahead!
        </p>
      </Container>
    </section>
  );
};

export default AboutMe;
