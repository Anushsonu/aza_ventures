import React from "react";
import about_banner_1 from "../../assets/images/about_banner_1.jpg";
import about_banner_2 from "../../assets/images/about_banner_2.jpg";
import about_banner_3 from "../../assets/images/about_banner_3.jpg";
const AboutUs = () => {
  const sections = [
    {
      title: "Building Trust in the Crypto Community",
      description:
        "Our success is mirrored in the trust of our growing community. Since our inception, we've fostered a large and loyal community of investors who believe in our vision. They trust us to safeguard and grow their investments, and we take pride in being their reliable partner on this crypto journey.",
      image: about_banner_1,
      animationImage: "fade-right",
      animationText: "fade-left",
    },
    {
      title: "Bridging Experience and Innovation",
      description:
        "At Aza Ventures, we blend seasoned experience with a youthful spirit, positioning ourselves as industry veterans who understand the pulse of the market. Our commitment is to remain relevant to the young generation of investors, offering them a bridge to the exciting and ever-evolving world of cryptocurrency.",
      image: about_banner_2,
      animationImage: "fade-left",
      animationText: "fade-right",
    },
    {
      title: "Strategic Partnerships and High-Potential Investments",
      description:
        "Aza Ventures stands out not only for our community but also for our strategic partnerships. We've joined forces with well-known institutional investors, leveraging their expertise to identify and invest in high-potential projects. This collaborative approach has allowed us to stay ahead in the ever-evolving crypto landscape.",
      image: about_banner_3,
      animationImage: "fade-right",
      animationText: "fade-left",
    },
  ];
  return (
    <div className="w-full px-4 md:px-10">
      <h1
        className="text-center text-5xl sm:text-6xl md:text-7xl my-20"
        data-aos="fade-down"
        data-aos-duration="300"
      >
        Who we are?
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0 lg:space-x-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col space-y-4 w-full h-[650px] lg:w-1/3 shadow-xl"
            data-aos="fade-down"
            data-aos-duration="300"
          >
            <div className="w-full flex justify-center">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {section.title}
              </h2>
              <p className="text-base md:text-lg">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
