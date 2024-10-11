import React, { useState } from "react";
import Navroutes from "../data/navLink";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/Logo-Musicine-1.png";
import Button from "./Button";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu and close

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Toggle for the menu

  function isActive(routePath: string) {
    return location.pathname === routePath;
  }

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white mt-2">
      {/* Logo */}
      <div className="">
        <img src={Logo} alt="" className="w-40 cursor-pointer" />
      </div>

      {/* Toggle Button for Mobile */}
      <div className="md:hidden">
        {/* Hamburger Icon or Close Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-black focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation Links (visible on medium+ screens) */}
      <div
        className={`md:flex ${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex-row md:space-x-14 items-center`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-14 items-center justify-center px-4 py-2">
          {Navroutes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className={
                  isActive(route.path)
                    ? "text-icon-color font-PlusJakartaSans"
                    : "text-gray-500 font-PlusJakartaSans"
                }
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Appointment Button (visible on medium+ screens) */}
      <div className={`hidden md:block`}>
        <Button className="hover:bg-icon-color text-white uppercase bg-black">
          Appointment
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
