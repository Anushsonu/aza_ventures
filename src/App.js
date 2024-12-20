import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Partnership from "./components/Partnerships/Partnership";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/ContactUs/Contact";
import Achievements from "./components/Achievements/Achievements";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
    window.addEventListener("resize", AOS.refresh);
    return () => {
      window.removeEventListener("resize", AOS.refresh);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-200 via-purple-300 to-yellow-200 flex flex-col items-center max-w-screen h-full px-12 sm:px-24">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="pt-36 items-center space-y-8 w-full">
        <div id="home">
          <Home />
        </div>
        <div id="achievements">
          <Achievements />
        </div>
        <div id="about">
          <AboutUs />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="partnership">
          <Partnership />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
