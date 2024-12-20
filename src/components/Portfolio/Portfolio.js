import React from "react";
import logos from "../../assets/utilities/logos";
import Slider from "react-slick";

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="py-10 bg-[#3d3d3d] rounded-xl">
        <h2 className="text-5xl text-white sm:text-6xl md:text-8xl text-center my-20">
          Our Portfolio
        </h2>
        <div className="relative overflow-hidden">
          {/* Row 1 - Scroll Left */}
          <div className="flex space-x-10 animate-scroll-left">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-32 rounded-lg flex items-center justify-center"
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
          {/* <div className="flex space-x-10 animate-scroll-right mt-10">
            {logos.slice(17, 34).map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-32 rounded-lg flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div> */}

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
