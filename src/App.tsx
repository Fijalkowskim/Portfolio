import React, { useEffect } from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./compontents/navbar/Navbar";
import { useSettingsContext } from "./context/SettingsContext";

function App() {
  const { disableScroll } = useSettingsContext();
  useEffect(() => {
    document.body.style.overflow = disableScroll ? "hidden" : "unset";
  }, [disableScroll]);
  return (
    <div>
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
