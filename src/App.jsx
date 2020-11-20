import React, { useEffect } from "react";
import AOS from "aos";

import About from "./components/About";
import LandinPage from "./components/LandinPage";
import Nav from "./components/Nav";

import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="px-4 py-6 backgound-primary xl:px-64 lg:px-56">
        <Nav />
        <LandinPage />
      </div>
      <div
        className="px-4 py-6 xl:px-64 lg:px-56"
      >
        <About />
      </div>
    </div>
  );
}

export default App;
