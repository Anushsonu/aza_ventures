import React from "react";
import {
  BsFillPeopleFill,
  BsBriefcaseFill,
  BsPeopleFill,
} from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";

const Achievements = () => {
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
            <div className="text-sm md:text-base lg:text-lg">{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
