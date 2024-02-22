import React, { useEffect } from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./compontents/navbar/Navbar";
import { useSettingsContext } from "./context/SettingsContext";
import About from "./sections/about/About";
import SectionBorder from "./compontents/general/SectionBorder";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { disableScroll } = useSettingsContext();
  useEffect(() => {
    document.body.style.overflow = disableScroll ? "hidden" : "unset";
  }, [disableScroll]);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Homepage />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
