import React, { useEffect } from "react";
import { FaSearchDollar } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { RiChatCheckFill } from "react-icons/ri";
import { FaChartSimple } from "react-icons/fa6";
import { PiLinkSimpleFill } from "react-icons/pi";
import { HiCurrencyDollar } from "react-icons/hi";
import bitcoin_logo from "../../assets/icons/bitcoin_logo.png";
import ethereum_logo from "../../assets/icons/ethereum_logo.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Research",
      description:
        "Unlock the secrets of the blockchain and uncover new opportunities with our expert research, tailored to your crypto business goals.",
      icon: <FaSearchDollar style={{ fontSize: "5rem", color: "#000000" }} />,
    },
    {
      id: 2,
      title: "Partnerships",
      description:
        "Forge powerful alliances that drive growth, innovation, and success in the crypto space with our strategic partnership expertise.",
      icon: (
        <FaHandshakeSimple style={{ fontSize: "5rem", color: "#000000" }} />
      ),
    },
    {
      id: 3,
      title: "Advice",
      description:
        "Navigate the complex world of crypto with confidence, guided by our expert advice and tailored to your unique business needs.",
      icon: <RiChatCheckFill style={{ fontSize: "5rem", color: "#000000" }} />,
    },
    {
      id: 4,
      title: "Marketing",
      description:
        "Amplify your crypto brand's voice and reach new heights with our targeted marketing strategies, designed to drive growth and adoption.",
      icon: <FaChartSimple style={{ fontSize: "5rem", color: "#000000" }} />,
    },
    {
      id: 5,
      title: "Connections",
      description:
        "Tap into our vast network of crypto industry connections and unlock new opportunities for collaboration and growth.",
      icon: <PiLinkSimpleFill style={{ fontSize: "5rem", color: "#000000" }} />,
    },
    {
      id: 6,
      title: "Raise Funds",
      description:
        "Fuel your crypto project's growth with our Raise Fund, designed to support innovative ideas and drive success in the blockchain ecosystem.",
      icon: <HiCurrencyDollar style={{ fontSize: "5rem", color: "#000000" }} />,
    },
  ];

  return (
    <div className="py-10 px-4">
      <h1
        className="text-5xl sm:text-6xl md:text-8xl text-center my-20"
        data-aos="fade-down"
        data-aos-duration="300"
      >
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {services.map((service, index) => (
          <div
            key={service.id}
            data-aos="flip-left" // AOS flip-left animation
            data-aos-delay={index * 100} // Delay each box by 100ms, increasing per box
            className="bg-gray-50 rounded-xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-xl hover:scale-110 transform transition-all duration-300 relative"
          >
            {/* Icon positioned outside the top-left corner */}
            <div className="absolute -top-8 -left-8">{service.icon}</div>

            <div className="text-3xl font-semibold mb-4">{service.title}</div>
            <p className="text-gray-600 text-xl">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
