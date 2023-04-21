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
    <div className="bg-gray-400 font-mono">
      <Header setSelectedSection={setSelectedSection} />
      {selectedSection === "about-me" && <AboutMe />}
      {selectedSection === "portfolio" && <Work />}
      {selectedSection === "resume" && <Resume />}
      {selectedSection === "contact" && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
