import React, { useState } from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import "./App.css";

function App() {
  const [selectedSection, setSelectedSection] = useState("about-me");

  return (
    <div className=" bg-coolors-gradient font-mono min-h-screen flex flex-col">
      <Header setSelectedSection={setSelectedSection} />
      <div className="flex-grow">
        {selectedSection === "about-me" && <AboutMe />}
        {selectedSection === "portfolio" && <Work />}
        {selectedSection === "resume" && <Resume />}
        {selectedSection === "contact" && <Contact />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
