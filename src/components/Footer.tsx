import { FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import footerlogo from "../assets/img/Logo-Musicine-2.png";
const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white p-8 lg:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 text-center lg:text-left ">
        {/* Logo and Description */}
        <div className="flex flex-col items-center lg:items-start p-5">
          <img src={footerlogo} alt="flogo" />
          <p className="text-gray-400 mb-4 mt-6 font-PlusJakartaSans">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
            nonumy.
          </p>
          <div className="flex space-x-4">
            <Link to={""} className="hover:text-[#B38B37]">
              <FaTwitter className="text-white text-[50px] cursor-pointer bg-icon-color rounded-full p-3" />
            </Link>
            <Link to={""} className="hover:text-[#B38B37]">
              <FaYoutube className="text-white text-[50px] cursor-pointer bg-icon-color rounded-full p-3" />
            </Link>
            <Link to={""} className="hover:text-[#B38B37]">
              <BiLogoFacebookCircle className="text-white text-[50px]  cursor-pointer bg-icon-color rounded-full p-3" />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col ">
          <h3 className="text-xl font-bold mb-4 font-serif">Services</h3>
          <ul className="font-PlusJakartaSans ">
            <li className="mb-4 text-gray-400">Mobile Phone Repair</li>
            <li className="mb-4 text-gray-400">Laptop Repair</li>
            <li className="mb-4 text-gray-400">Tablet Repair</li>
            <li className="mb-4 text-gray-400">Camera Repair</li>
          </ul>
        </div>

        {/* Pages */}
        <div className="flex flex-col  ">
          <h3 className="text-xl font-bold mb-4">Pages</h3>
          <ul className="font-PlusJakartaSans ">
            <li className="mb-4 text-gray-400">About Us</li>
            <li className="mb-4 text-gray-400">Projects</li>
            <li className="mb-4 text-gray-400">Pricing</li>
            <li className="mb-4 text-gray-400">Team</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col  ">
          <h3 className="text-xl font-bold mb-4 ">Contact</h3>
          <ul className="text-gray-400 font-PlusJakartaSans">
            <li className="mb-2 flex items-center flex-col gap-4 lg:flex-row">
              <FaPhoneAlt className="mr-2 text-[#B38B37] text-[20px]" /> (205)
              555-0100
            </li>
            <li className="mb-2 flex items-center flex-col  gap-4 lg:flex-row">
              <FaEnvelope className="mr-2 text-[#B38B37] text-[20px]" />{" "}
              email@tokomoo.com
            </li>
            <li className="mb-2 flex items-center flex-col  gap-4 lg:flex-row">
              <FaEnvelope className="mr-2 text-[#B38B37] text-[20px]" /> Mon -
              Fri: 9 am - 11 pm
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-600 mt-12 flex items-start justify-between">
        <p>Copyright © 2022 Tokomoo</p>
        <div className="flex justify-center space-x-4 ">
          <a href="#" className="text-gray-400 hover:text-white">
            Help & Support
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
