import React, { useEffect } from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./compontents/navbar/Navbar";
import { useSettingsContext } from "./context/SettingsContext";
import About from "./sections/about/About";
import SectionBorder from "./compontents/general/SectionBorder";

function App() {
  const { disableScroll } = useSettingsContext();
  useEffect(() => {
    document.body.style.overflow = disableScroll ? "hidden" : "unset";
  }, [disableScroll]);
  return (
    <div>
      <Navbar />
      <Homepage />
      <SectionBorder text="About" repeat={20} />
      <About />
    </div>
  );
}

export default App;
