import React from "react";
import { FaFacebook, FaTelegram, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <div className="max-w-screen bg-[#222222] text-white rounded-t-xl -mx-12 sm:-mx-24 flex flex-col items-center justify-center space-y-6 px-4 sm:px-8">
      <h1
        className="py-20 text-3xl sm:text-5xl md:text-7xl text-center"
        data-aos="fade-down"
        data-aos-duration="300"
      >
        Connect with us!
      </h1>

      {/* Social Media Icons */}
      <div className="flex space-x-6 sm:space-x-8 md:space-x-10 justify-center">
        <a
          href="https://www.facebook.com/AZA-Groups-103569288807339/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl sm:text-3xl hover:text-blue-600 transition duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="https://t.me/Aza_Ventures"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl sm:text-3xl hover:text-blue-400 transition duration-300"
        >
          <FaTelegram />
        </a>
        <a
          href="https://x.com/Aza_Enterprises"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl sm:text-3xl hover:text-blue-500 transition duration-300"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.instagram.com/azagroups"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl sm:text-3xl hover:text-pink-500 transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Footer Text */}
      <div className="py-5 text-center text-sm sm:text-base mt-4">
        Copyright © {currentYear} by Aza Enterprises Private Limited. All rights
        reserved.
      </div>
    </div>
  );
};

export default Contact;
