import { BsPlayCircleFill } from "react-icons/bs";
import lofo from "../assets/img/teach.webp";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-black h-screen flex items-center">
      {/* Container for responsive layout */}
      <div className="container mx-auto flex items-start h-full">
        {/* Left Section (Image) */}
        <div className="relative w-1/2 h-full">
          <img
            src={lofo}
            alt="Music Teacher and Student"
            className="rounded-lg shadow-lg h-full w-full object-cover"
          />
        </div>

        {/* Right Section (Title and Buttons) */}
        <div className="w-1/2 pl-10 flex flex-col justify-center">
          <p className="text-sm uppercase text-gold-500 font-semibold">
            Welcome to Musicine
          </p>
          <h1 className="mt-4 text-5xl font-serif font-bold text-white">
            Learning Music With Easy Way
          </h1>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center">
            <button className="bg-gold-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gold-600">
              Get Started
            </button>
            <div className="flex items-center ml-6 cursor-pointer text-white">
              <BsPlayCircleFill size={40} className="text-gold-500" />
              <span className="ml-2 font-semibold">How it Works</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
