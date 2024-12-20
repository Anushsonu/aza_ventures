import React from "react";
import logos from "../../assets/utilities/logos";

const Portfolio = () => {
  return (
    <>
      <div className="py-10 bg-[#3d3d3d] rounded-xl mt-20">
        <h2
          className="text-5xl text-white sm:text-6xl md:text-7xl text-center my-14"
          data-aos="fade-down"
          data-aos-duration="300"
        >
          Our Portfolio
        </h2>
        <div className="relative overflow-hidden">
          {/* Row 1 - Scroll Left */}
          <div className="flex space-x-10 animate-scroll-left">
            {logos.slice(1, 27).map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-44 h-44 rounded-lg flex items-center justify-center"
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
          <div className="flex space-x-10 animate-scroll-right mt-10">
            {logos.slice(28, 50).map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-44 h-44 rounded-lg flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div>

          {/* Row 3 - Scroll Left */}
          {/* <div className="flex space-x-10 animate-scroll-left mt-10">
            {logos.slice(34, 50).map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-32 rounded-lg flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
