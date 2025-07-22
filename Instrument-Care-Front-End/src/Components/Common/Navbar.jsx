import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Technician", "Contact"];

  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="src/assets/images/national-logo.jpg" alt="Logo" className="h-14 w-14s" />
            <img src="src/assets/images/NSF-Logo.jpg" alt="Logo" className="h-11 w-10s" />
            {/* <span className="text-xl font-semibold text-gray-800">Instrument Care</span> */}
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex space-x-25">
            {navLinks.map((link) => (
                <Link
                    key={link}
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-gray-800 font-medium text-lg hover:text-orange-600 transition font-poppins"
                >
                    {link}
                </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <a href="#" className="text-orange-600 font-medium hover:underline font-poppins">
              Log In
            </a> */}
            <button className="bg-orange-200 text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-orange-100 transition font-poppins">
              Log In
            </button>
            <button className="bg-orange-400 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-500 transition font-poppins">
              Create an account
            </button>
          </div>

          {/* Hamburger icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 pb-4">
            {navLinks.map((link) => (
                <Link
                    key={link}
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-gray-800 font-medium text-lg hover:text-orange-600 transition font-poppins"
                >
                    {link}
                </Link>
            ))}
            <button className="bg-orange-200 text-orange-600 px-4 py-2 rounded-md font-medium hover:bg-orange-100 transition font-poppins">
              Log In
            </button>
            <button className="bg-orange-400 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-500 transition font-poppins">
              Create an account
            </button>
          </div>
        )}
        {/* Need to do Tablet Responsive */}
      </div>
    </nav>
  );
}
