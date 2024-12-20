import React from "react";
import about_banner_1 from "../../assets/images/about_banner_1.jpg";
import about_banner_2 from "../../assets/images/about_banner_2.jpg";
import about_banner_3 from "../../assets/images/about_banner_3.jpg";
const AboutUs = () => {
  const sections = [
    {
      title: "Fostering Trust in Crypto",
      description:
        "We’ve built a loyal community of investors who trust us to protect and grow their investments, making us a reliable partner in their crypto journey.",
      image: about_banner_1,
      animationImage: "fade-right",
      animationText: "fade-left",
    },
    {
      title: "Bridging Experience and Innovation",
      description:
        "At Aza Ventures, we combine expertise with youthful energy, connecting seasoned knowledge to the dynamic world of cryptocurrency for the next generation of investors.",
      image: about_banner_2,
      animationImage: "fade-left",
      animationText: "fade-right",
    },
    {
      title: "Strategic Partnerships & Growth",
      description:
        "Aza Ventures thrives through strategic collaborations with leading institutional investors, leveraging their expertise to identify and invest in high-potential crypto projects, ensuring we stay ahead in the evolving market.",
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
            className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col space-y-4 w-full h-[600px] lg:w-1/3 shadow-xl"
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
