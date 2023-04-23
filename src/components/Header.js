import React from "react";
import Wyoming from "../assets/images/Wyoming.jpg";
import Navigation from "./Navigation";
import Container from "./Container";

const Header = ({ setSelectedSection }) => {
  return (
    <header className=" text-white p-4 text-center">
      <Container>
        <h1 className=" text-3xl font-bold">Austin Stancil</h1>
        <div className="flex justify-center mt-2">
          <img
            src={Wyoming}
            className="remy w-64 h-64 object-cover rounded-2xl"
            alt="My yellow lab Remy chewing on a stick on my lap"
          />
        </div>
        <Navigation setSelectedSection={setSelectedSection} />
      </Container>
    </header>
  );
};

export default Header;
