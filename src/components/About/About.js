import React from "react";
import {
  BsFillPeopleFill,
  BsBriefcaseFill,
  BsPeopleFill,
} from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";
import about_banner_1 from "../../assets/images/about_banner_1.jpg";
import about_banner_2 from "../../assets/images/about_banner_2.jpg";
import about_banner_3 from "../../assets/images/about_banner_3.jpg";
import bitcoin_logo from "../../assets/icons/bitcoin_logo.png";
import ethereum_logo from "../../assets/icons/ethereum_logo.png";
import dogecoin_logo from "../../assets/icons/dogecoin_logo.png";
import filecoin_logo from "../../assets/icons/filecoin_logo.png";
import litecoin_logo from "../../assets/icons/litecoin_logo.png";
import tether_logo from "../../assets/icons/tether_logo.png";

const About = () => {
  const aboutData = [
    {
      id: 1,
      title: "Community Members",
      count: "20000+",
      icon: <BsFillPeopleFill />,
    },
    {
      id: 2,
      title: "Asset Under Management",
      count: "15M+",
      icon: <BsBriefcaseFill />,
    },
    {
      id: 3,
      title: "Invested Projects",
      count: "100+",
      icon: <FaProjectDiagram />,
    },
    {
      id: 4,
      title: "Team Members",
      count: "11+",
      icon: <BsPeopleFill />,
    },
  ];
  return (
    <>
      {/* =========================Achievements======================== */}
      <div className="w-full flex flex-wrap justify-between gap-4 px-4 mt-10">
        {aboutData.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 lg:w-[23%] bg-white flex flex-col justify-center items-center rounded-xl py-4 md:py-6 lg:py-8 gap-3 md:gap-4 shadow-xl"
            data-aos="flip-right"
            data-aos-duration="500"
          >
            <div className="flex justify-center items-center text-yellow-500 text-3xl md:text-4xl lg:text-5xl">
              {item.icon}
            </div>
            <div className="flex flex-col text-center">
              <div className="text-xl md:text-3xl lg:text-4xl font-semibold">
                {item.count}
              </div>
              <div className="text-sm md:text-base lg:text-sm">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1
        className="flex justify-center text-5xl sm:text-6xl md:text-8xl my-20"
        data-aos="fade-down"
        data-aos-duration="300"
      >
        Who we are?
      </h1>

      {/*========================= About============================= */}
      <div className="flex flex-col w-full space-y-10 px-4 md:px-10">
        {/* Section 1 */}
        <div className="relative w-full flex flex-col-reverse lg:flex-row justify-between items-center lg:gap-10">
          <div className="lg:w-1/3 w-full">
            <img
              data-aos="fade-right"
              data-aos-duration="300"
              src={about_banner_1}
              className="rounded-xl w-full"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="300"
            className="w-full lg:w-2/3 flex flex-col justify-center lg:justify-center items-center lg:items-start lg:text-left min-h-full"
          >
            <img
              src={litecoin_logo}
              alt="Floating Icon"
              className="absolute w-40 h-40 animate-float hidden lg:block -top-48 left-48"
            />
            <img
              src={dogecoin_logo}
              alt="Floating Icon"
              className="absolute w-40 h-40 animate-float hidden lg:block -bottom-48 right-48"
            />
            <h1 className="text-3xl md:text-5xl font-semibold px-4 md:px-10">
              Building Trust in the Crypto Community
            </h1>
            <p className="px-4 md:px-10 py-6 text-base md:text-xl">
              Our success is mirrored in the trust of our growing community.
              Since our inception, we've fostered a large and loyal community of
              investors who believe in our vision. They trust us to safeguard
              and grow their investments, and we take pride in being their
              reliable partner on this crypto journey.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col-reverse lg:flex-row-reverse justify-between items-center lg:gap-10">
          <div className="lg:w-1/3 w-full">
            <img
              data-aos="fade-left"
              data-aos-duration="300"
              src={about_banner_2}
              className="rounded-xl w-full"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="300"
            className="lg:w-2/3 w-full flex flex-col justify-center lg:justify-center items-center lg:items-start text-center lg:text-left min-h-full"
          >
            <img
              src={ethereum_logo}
              alt="Floating Icon"
              className="absolute w-40 h-40 animate-float hidden lg:block -top-60 right-32"
            />
            <img
              src={filecoin_logo}
              alt="Floating Icon"
              className="absolute w-40 h-40 animate-float hidden lg:block -bottom-52 left-32"
            />
            <h1 className="text-3xl md:text-5xl font-semibold px-4 md:px-10">
              Bridging Experience and Innovation
            </h1>
            <p className="px-4 md:px-10 py-6 text-base md:text-xl">
              At Aza Ventures, we blend seasoned experience with a youthful
              spirit, positioning ourselves as industry veterans who understand
              the pulse of the market. Our commitment is to remain relevant to
              the young generation of investors, offering them a bridge to the
              exciting and ever-evolving world of cryptocurrency.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:gap-10">
          <div className="lg:w-1/3 w-full">
            <img
              data-aos="fade-right"
              data-aos-duration="300"
              src={about_banner_3}
              className="rounded-xl w-full"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="300"
            className="lg:w-2/3 w-full flex flex-col justify-center lg:justify-center items-center lg:items-start text-center lg:text-left min-h-full"
          >
            <img
              src={bitcoin_logo}
              alt="Floating Icon"
              className="absolute w-40 h-40 animate-float hidden lg:block -top-48 left-48"
            />
            <img
              src={tether_logo}
              alt="Floating Icon"
              className="absolute w-40 h-40 animate-float hidden lg:block -bottom-48 right-48"
            />
            <h1 className="text-3xl md:text-5xl font-semibold px-4 md:px-10">
              Strategic Partnerships and High-Potential Investments
            </h1>
            <p className="px-4 md:px-10 py-6 text-base md:text-xl">
              Aza Ventures stands out not only for our community but also for
              our strategic partnerships. We've joined forces with well-known
              institutional investors, leveraging their expertise to identify
              and invest in high-potential projects. This collaborative approach
              has allowed us to stay ahead in the ever-evolving crypto
              landscape.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
