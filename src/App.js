import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Partnership from "./components/Partnerships/Partnership";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/ContactUs/Contact";

function App() {
  useEffect(() => {
    // Initialize AOS when the component is mounted
    AOS.init({
      duration: 1000, // Default duration for all animations (1 second)
      once: false, // Allow animation to trigger every time the element comes into view
      mirror: true, // Allow animations when scrolling back up as well
    });

    // Re-initialize AOS on window resize to handle responsiveness
    window.addEventListener("resize", AOS.refresh);

    // Cleanup the event listener when the component unmounts
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
        <div id="about">
          <About />
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
