import React, { useState } from "react";
import Navroutes from "../data/navLink";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/img/Logo-Musicine-1.png";
import Button from "./Button";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Toggle for the menu

  // Determine if the current route is active
  const isActive = (routePath: string) => location.pathname === routePath;

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white mt-2 relative">
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo" className="lg:w-40 cursor-pointer md:w-44" />
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-white focus:outline-none bg-black rounded-lg p-3 z-50"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-40 flex items-center justify-center"
          onClick={() => setIsOpen(false)} // Close the menu on overlay click
        >
          <div
            className="space-y-8 text-center bg-white p-6 rounded-lg "
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
          >
            <ul>
              {Navroutes.map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    onClick={() => setIsOpen(false)} // Close on link click
                    className={`text-2xl ${
                      isActive(route.path)
                        ? "text-icon-color font-bold"
                        : "text-gray-700"
                    } font-PlusJakartaSans`}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Desktop Navigation Links */}
      <div className={`hidden md:flex md:space-x-14 items-center`}>
        <ul className="flex space-x-14 items-center px-4 py-2">
          {Navroutes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className={`${
                  isActive(route.path)
                    ? "text-icon-color font-PlusJakartaSans"
                    : "text-gray-500 font-PlusJakartaSans"
                }`}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Appointment Button (Desktop Only) */}
      <div className="hidden md:block">
        <Button className="hover:bg-icon-color text-white uppercase bg-black">
          Appointment
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
