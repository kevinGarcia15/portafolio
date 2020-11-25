import React, { useEffect } from "react";
import AOS from "aos";

import About from "./components/About";
import LandinPage from "./components/LandinPage";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

import "aos/dist/aos.css";
import Skills from "./components/Skills";

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
      <div className="px-4 py-6 xl:px-64 lg:px-56 lg:h-screen1_2">
        <About />
      </div>
      <div className="px-4 py-6 backgound-primary xl:px-64 lg:px-56">
        <Projects/>
      </div>  
      <div className="px-4 py-6 xl:px-64 lg:px-56 lg:h-screen1_2">
        <Skills/>
      </div>    
    </div>
  );
}

export default App;
