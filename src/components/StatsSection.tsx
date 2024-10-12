import React from "react";
import CountUp from "react-countup";

const numbers = [
  { value: 75, label: "Satisfied Students" },
  { value: 100, label: "Expert Instructor" },
  { value: 50, label: "Locations" },
  { value: 15, label: "Selectable Class" },
];

const StatsSection: React.FC = () => {
  return (
    <div className="p-8 flex flex-col lg:flex-row justify-center lg:p-20 bg-white">
      {/* Left Section (Text) */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 ">
        {/* Heading */}
        <h1 className="text-center mb-3 uppercase text-icon-color font-[500] font-serif lg:text-left">
          Our Journey
        </h1>
        <h2 className="text-[34px] font-bold text-black mb-4 text-center font-OpenSans lg:text-left lg:text-[49px]">
          Trusted by 600+ Happy Students
        </h2>
        <p className="font-PlusJakartaSans text-[#838383] leading-8 text-center lg:text-left ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Right Section (Stats) */}
      <div className="w-full lg:w-2/3 flex flex-col  ">
        <div className=" mx-auto  relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {numbers.map((item, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center lg:justify-center"
            >
              <span className="block text-[60px] text-icon-color mb-2 font-serif font-bold">
                <CountUp end={item.value} duration={2} suffix="+" />
              </span>
              <p className="text-[#6E7073] font-PlusJakartaSans text-[20px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
