import React from "react";
// Import Icons from React Icons
import { MdEmail, MdPhone } from "react-icons/md";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { BiLogoFacebookCircle } from "react-icons/bi";
import NavBar from "../components/NavBar";

const HeroPage: React.FC = () => {
  return (
    <header className="bg-black text-white w-full">
      {/* Top Bar with Email, Phone and Social Media Icons */}
      <div className=" justify-between items-center py-3 px-8 hidden lg:flex">
        <div className="flex space-x-6 font-PlusJakartaSans">
          {/* Email and Phone */}
          <a
            href="mailto:email@tokomoo.com"
            className="flex items-center space-x-2"
          >
            <MdEmail
              aria-label="Email icon"
              className="text-icon-color text-[22px]"
            />
            <span>email@tokomoo.com</span>
          </a>
          <a href="tel:+12055550100" className="flex items-center space-x-2">
            <MdPhone
              aria-label="Phone icon"
              className="text-icon-color text-[22px]"
            />
            <span>(205) 555-0100</span>
          </a>
        </div>
        {/* Social Icons */}
        <div className="flex space-x-4">
          <BiLogoFacebookCircle
            aria-label="Facebook"
            className="text-white text-[22px] hover:text-icon-color cursor-pointer"
          />
          <FaTwitter
            aria-label="Twitter"
            className="text-white text-[22px] hover:text-icon-color cursor-pointer"
          />
          <FaYoutube
            aria-label="YouTube"
            className="text-white text-[22px] hover:text-icon-color cursor-pointer"
          />
        </div>
      </div>

      <NavBar />
    </header>
  );
};

export default HeroPage;
