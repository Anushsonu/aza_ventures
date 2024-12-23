import React from "react";
import logos from "../../assets/utilities/logos";

const Portfolio = () => {
  const duplicatedLogos1 = logos.slice(1, 27).concat(logos.slice(1, 27)); // Duplicate logos for seamless scrolling
  const duplicatedLogos2 = logos.slice(28, 50).concat(logos.slice(28, 50));

  return (
    <div className="py-10 bg-[#222222] rounded-xl mt-20 overflow-hidden">
      <h2
        className="text-5xl text-white sm:text-6xl md:text-7xl text-center my-14"
        data-aos="fade-down"
        data-aos-duration="300"
      >
        Our Portfolio
      </h2>

      {/* Row 1 - Scroll Left */}
      <div className="flex space-x-4 md:space-x-10 animate-scroll-left">
        {duplicatedLogos1.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-lg flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="max-w-full max-h-full"
            />
          </div>
        ))}
      </div>

      {/* Row 2 - Scroll Right */}
      <div className="flex space-x-4 md:space-x-10 animate-scroll-left mt-10">
        {duplicatedLogos2.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-lg flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="max-w-full max-h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
