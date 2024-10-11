import React from "react";
import lofo from "../assets/img/girlteach.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Button from "./Button";
import CountUp from "react-countup";

const GrowSection: React.FC = () => {
  return (
    <div className="p-8 flex flex-col lg:flex-row  justify-center lg:p-20">
      {/* Left Section (Text and Image) */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 ">
        {/* Heading */}
        <h1 className="text-center mb-3 uppercase text-icon-color font-[500] font-PlusJakartaSans lg:text-left">
          About Us
        </h1>
        <h2 className="text-[34px] font-bold text-black mb-4 text-center font-OpenSans lg:text-left lg:text-[45px]">
          We Help You to Grow Faster and Better
        </h2>

        {/* Image */}
        <img
          src={lofo}
          alt="Music Teaching"
          className="rounded-lg shadow-lg w-full mb-6"
        />
      </div>

      {/* Right Section (List, Button, Stats) */}
      {/* Right Section (List, Button, Stats) */}
      <div className="w-full lg:w-2/3 flex flex-col items-start lg:p-20">
        <p className="text-gray-600 leading-relaxed mb-4 font-serif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>

        {/* List of services */}
        <ul className="space-y-4 mb-8 text-gray-600">
          <li className="flex items-center text-lg font-PlusJakartaSans ">
            <span className="text-gold-500 text-xl mr-2 ">
              <FaCheckCircle className="fill-black" />
            </span>{" "}
            Quality services and support all time
          </li>
          <li className="flex items-center text-lg">
            <span className="text-gold-500 text-xl mr-2">
              <FaCheckCircle className="fill-black" />
            </span>{" "}
            Expert team member
          </li>
          <li className="flex items-center text-lg">
            <span className="text-gold-500 text-xl mr-2">
              <FaCheckCircle className="fill-black" />
            </span>{" "}
            Lifetime online support
          </li>
        </ul>

        {/* Button */}
        <Button className="hover:bg-black text-white uppercase bg-icon-color  mb-8  w-full lg:w-72">
          Appointment
        </Button>
        {/* Stats */}
        <div className="flex justify-between w-full text-center text-lg font-bold flex-col gap-9 lg:flex-row lg:mt-7">
          <div>
            <span className="block text-4xl text-icon-color mb-2 font-serif font-bold">
              <CountUp end={250} duration={2} suffix="+" />
            </span>
            <span className="font-light font-PlusJakartaSans lg:text-[15px] text-[#6E6E6E]">
              Project Done
            </span>
          </div>
          <div>
            <span className="block text-4xl text-icon-color mb-2 font-serif ">
              <CountUp end={640} duration={2} suffix="+" />
            </span>
            <span className="font-light font-PlusJakartaSans lg:text-[15px] text-[#6E6E6E]">
              Satisfied Client
            </span>
          </div>
          <div>
            <span className="block text-4xl text-icon-color mb-2 font-serif">
              <CountUp end={800} duration={2} suffix="+" />
            </span>
            <span className="font-light font-PlusJakartaSans lg:text-[15px] text-[#6E6E6E]">
              User Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowSection;
