import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import lofo from "../assets/img/teach.webp";
const HeroSection: React.FC = () => {
  return (
    <div className="flex   bg-black h-full">
      {/* Left Section (Image and Testimonial) */}
      <div className="w-3/4 relative">
        {/* Image */}
        <img
          src={lofo}
          alt="Music Teacher and Student"
          className="rounded-lg shadow-lg lg:h-screen object-cover"
        />
        {/* Testimonial Box */}
        <div className="absolute bottom-8 left-10 bg-white p-6 rounded-lg shadow-md">
          <p className="italic text-gray-700">
            “I like to learn music with Musicine, the method used is perfect and
            easy to understand. Awesome!”
          </p>
          <h4 className="mt-4 font-bold text-gray-800">Olivia Wilson</h4>
        </div>
      </div>

      {/* Right Section (Title and Buttons) */}
      <div className="w-1/2 pl-10">
        <p className="text-sm uppercase text-gold-500 font-semibold">
          Welcome to Musicine
        </p>
        <h1 className="mt-4 text-5xl font-serif font-bold text-black">
          Learning Music With Easy Way
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center">
          <button className="bg-gold-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gold-600">
            Get Started
          </button>
          <div className="flex items-center ml-6 cursor-pointer text-black">
            <BsPlayCircleFill size={40} className="text-gold-500" />
            <span className="ml-2 font-semibold">How it Works</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
