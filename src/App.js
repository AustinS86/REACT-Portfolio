import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-400 font-mono">
      <Header />
      <AboutMe />
      <Work />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
