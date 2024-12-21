import React from "react";
import Lottie from "react-lottie";
import crypto_investment from "../../assets/animations/crypto_investment.json";
import bitcoin_logo from "../../assets/icons/bitcoin_logo.png";
import ethereum_logo from "../../assets/icons/ethereum_logo.png";

const Home = () => {
  const defaultOptions = {
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true if you want the animation to autoplay
    animationData: crypto_investment, // Animation data from your .json file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Adjust how the animation is scaled
    },
  };
  return (
    <div className="flex flex-col-reverse md:flex-row px-5 md:px-20 justify-center md:justify-end overflow-hidden">
      {/* Left Section */}
      <div
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="w-full md:w-1/2 pr-0 md:pr-6 pt-10 md:pt-28 text-center md:text-left"
      >
        <h1 className="font-bold text-transparent bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-4xl md:text-6xl lg:text-8xl">
          Aza Ventures
        </h1>
        <p className="text-lg md:text-2xl my-3 md:my-5">
          Your trusted partner in the dynamic world of cryptocurrency
          investments.
        </p>
        <p className="mt-2 text-xl md:text-3xl font-medium">
          Our Journey in Crypto Investment
        </p>
        <div className="mt-4"></div>
        <p className="mt-4 text-base md:text-2xl">
          <span className="font-semibold">Founded:</span> 2021
        </p>

        <div className="mt-4"></div>
        <p className="mt-4 text-base md:text-2xl">
          <span className="font-semibold">Experience:</span> Navigating the
          crypto landscape since 2017
        </p>

        <div className="mt-4"></div>
        <p className="mt-4 text-base md:text-2xl">
          <span className="font-semibold">Focus:</span> Early-stage
          cryptocurrency investments
        </p>
        <div className="flex justify-center items-center mt-10 space-x-16">
          <div className="w-28 h-28 md:w-40 md:h-40 rounded-full flex justify-center items-center animate-float">
            <img
              src={bitcoin_logo}
              alt="Logo 1"
              className="w-20 h-20 md:w-32 md:h-32 object-contain"
            />
          </div>
          <div className="w-28 h-28 md:w-40 md:h-40x rounded-full flex justify-center items-center animate-float">
            <img
              src={ethereum_logo}
              alt="Logo 2"
              className="w-20 h-20 md:w-32 md:h-32 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 overflow-hidden relative mt-8 md:mt-0">
        <div className="w-full h-full max-w-[400px] md:max-w-none flex justify-center items-center mx-auto">
          <Lottie
            options={defaultOptions}
            width="100%" // Responsive width
            height="auto" // Maintain aspect ratio
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
