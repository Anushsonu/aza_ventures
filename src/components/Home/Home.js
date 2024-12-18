import React, { useEffect } from "react";
import home_banner from "../../assets/images/home_banner.jpg";
import ethereum_logo from "../../assets/icons/ethereum_logo.png";
import bitcoin_logo from "../../assets/icons/bitcoin_logo.png";
import LottieAnimation from "../../assets/utilities/LottieAnimation";
import crypto_investment from "../../assets/animations/bitcoin_rocket.lottie";

const Home = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // Animation duration (in ms)
  //     easing: "ease-in-out", // Animation easing
  //     once: true, // Whether animation should happen only once
  //   });
  // }, []);
  // console.log(crypto_investment);
  // const LottieAnimation = useLottieAnimation({ crypto_investment });
  return (
    <div className="flex flex-col md:flex-row px-5 md:px-20 justify-center md:justify-end overflow-hidden">
      {/* Left Section */}
      <div
        data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="w-full md:w-2/3 pr-0 md:pr-6 pt-10 md:pt-28 text-center md:text-left"
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
        <p className="mt-4 text-base md:text-2xl">
          Founded in 2021, Aza Ventures has been at the forefront of early-stage
          crypto investments. Although our official establishment was in 2021,
          our roots trace back to 2017, marking years of insightful experience
          in navigating the crypto landscape.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 overflow-hidden relative mt-8 md:mt-0">
        <img
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          src={home_banner}
          alt="Crypto Investment"
          className="rounded-3xl w-full md:w-auto"
        />
      </div>
      {/* <div className="w-full md:w-1/3 overflow-hidden relative mt-8 md:mt-0">
        <LottieAnimation
          src={crypto_investment}
          style={{ height: 300, width: 300 }}
        />
      </div> */}
    </div>
  );
};

export default Home;
