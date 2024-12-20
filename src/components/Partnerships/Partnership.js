import React from "react";
import Slider from "react-slick";
import partnershipImages from "../../assets/utilities/partnerships_images"; // Import your partnership images

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LuChevronsRight } from "react-icons/lu";
import { LuChevronsLeft } from "react-icons/lu";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent border-none focus:outline-none"
  >
    <LuChevronsLeft size={40} color="black" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 z-10 bg-transparent border-none focus:outline-none"
  >
    <LuChevronsRight size={40} color="black" />
  </button>
);

const Partnership = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Animation speed
    slidesToShow: 3, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides scrolled per swipe
    nextArrow: <CustomPrevArrow />,
    prevArrow: <CustomNextArrow />,
    responsive: [
      // Make carousel responsive
      {
        breakpoint: 1024, // Tablet and above
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Mobile landscape
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto">
      <h1
        className="text-5xl sm:text-6xl md:text-7xl text-center py-10"
        data-aos="fade-down"
        data-aos-duration="300"
      >
        Partnerships
      </h1>
      <Slider {...settings}>
        {partnershipImages.map((image, index) => (
          <div key={index} className="px-2">
            <img
              src={image}
              alt={`Partnership ${index + 1}`}
              className="w-full h-48 md:h-60 lg:h-40 xl:h-[500px] object-contain mx-auto rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partnership;
