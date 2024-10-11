import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import lofo from "../assets/img/teach.webp";

const HeroSection: React.FC = () => {
  return (
    <div className=" bg-slate-900 flex items-center justify-center  flex-col-reverse lg:flex-row lg:gap-20 lg:justify-start">
      <div className=" relative bg-black p-10 lg:p-0">
        {/* Image */}
        <img
          src={lofo}
          alt="Music Teacher and Student"
          className="w-full h-auto lg:h-screen object-cover  rounded-md lg:rounded-b-lg lg:rounded-t-none  "
        />
        {/* Testimonial Box */}
        {/* <div className="absolute bottom-8 left-10 bg-white p-6 rounded-lg shadow-md">
          <p className="italic text-gray-700">
            “I like to learn music with Musicine, the method used is perfect and
            easy to understand. Awesome!”
          </p>
          <h4 className="mt-4 font-bold text-gray-800">Olivia Wilson</h4>
        </div> */}
      </div>

      {/* Right Section (Title and Buttons) */}
      <div className="lg:w-1/2 text-center  p-10 ">
        <p className="text-sm uppercase text-gold-500 font-[500] text-icon-color font-PlusJakartaSans ">
          Welcome to Musicine
        </p>
        <h1 className="mt-4 text-[30px] font-serif font-extrabold  text-black   text-center lg:text-[60px] ">
          Learning Music With Easy Way
        </h1>
        <p className="mt-4 text-black leading-relaxed font-PlusJakartaSans text-[12px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Buttons */}
        <div className="mt-8 lg:flex justify-center lg:items-center gap-10">
          <button className="text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gold-600 w-full bg-icon-color font-OpenSans uppercase lg:w-auto lg:px-10">
            Get Started
          </button>
          <div className="flex items-center cursor-pointer text-white justify-center p-6 flex-col gap-5 lg:flex-row lg:p-0">
            <BsPlayCircleFill
              size={70}
              className="text-gold-500 fill-black lg:text-[100px]"
            />
            <span className="font-serif text-black font-[400] text-[12px] lg:text-[20px]">
              How it Works
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
