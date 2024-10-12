import React from "react";
import lofo from "../assets/img/boy-at-music-school-learning-to-play-drums-2021-09-24-04-29-43-utc-683x1024.jpg";
import { FaGuitar, FaMusic, FaChalkboardTeacher } from "react-icons/fa"; // Import icons from react-icons

const features = [
  {
    icon: <FaGuitar size={30} />,
    title: "Free Equipment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaMusic size={30} />,
    title: "Music Studio",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaChalkboardTeacher size={30} />,
    title: "Expert Teacher",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const WhyChooseUs: React.FC = () => {
  return (
    <div className="p-8 flex flex-col lg:flex-row  justify-center lg:p-20 bg-[#F8F8F8]">
      {/* Left Section (Text and Image) */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 ">
        {/* Heading */}
        <h1 className="text-center mb-3 uppercase text-icon-color font-[500] font-serif lg:text-left">
          Why Choose Us
        </h1>
        <h2 className="text-[34px] font-bold text-black mb-4 text-center font-OpenSans lg:text-left lg:text-[45px]">
          Why You Should Choose Us
        </h2>
        <p className="font-PlusJakartaSans text-[#838383] leading-8 text-center lg:text-left ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        {/* Image */}
        <div className="w-full max-w-lg mx-auto mt-8 space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center flex-col space-x-4 lg:flex-row text-center lg:text-left"
            >
              {/* Icon with circular background */}
              <div className="bg-[#B38B37] p-4 rounded-full flex items-center justify-center text-white">
                {feature.icon}
              </div>

              {/* Text content */}
              <div>
                <h3 className="text-lg font-extrabold p-3 font-PlusJakartaSans ">
                  {feature.title}
                </h3>
                <p className="text-gray-600 p-3 font-PlusJakartaSans ">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (List, Button, Stats) */}
      {/* Right Section (List, Button, Stats) */}
      <div className="w-full lg:w-2/3 flex flex-col items-start lg:p-16">
        <img
          src={lofo}
          alt="Music Teaching"
          className="rounded-lg shadow-lg w-full mb-6 h-full"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
