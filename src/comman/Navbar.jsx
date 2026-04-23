import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { Phone, Mail, Clock } from "lucide-react";
import ProTechLogo from "../component/ProTechLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Doctors", path: "/docter" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hero-premium text-white text-sm hidden md:block border-b border-[#53BFD2] border-opacity-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex gap-8">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-[#1DC4D0] transition duration-300">
              <Phone size={16} className="text-[#1DC4D0]" /> +1 (234) 567-890
            </a>
            <a href="mailto:info@portech.com" className="flex items-center gap-2 hover:text-[#1DC4D0] transition duration-300">
              <Mail size={16} className="text-[#1DC4D0]" /> info@portech.com
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <Clock size={16} className="text-[#1DC4D0]" />
            <span className="hover:text-[#1DC4D0] transition duration-300">Mon - Fri: 9AM - 5PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-[#D6EAF2]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="hover:opacity-80 transition duration-300">
            <ProTechLogo />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-[#054E6F] font-semibold hover:text-[#0A7BA6] transition duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#0A7BA6] to-[#06A3AD] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/booking"
            className="hidden md:block px-7 py-2.5 bg-linear-to-r from-[#0A7BA6] to-[#06A3AD] text-white font-bold rounded-lg hover:shadow-lg transition transform hover:scale-105 duration-300"
          >
            Book Appointment
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-[#0A7BA6] hover:text-[#06A3AD] transition duration-300"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-linear-to-b from-white to-[#FAFBFC] border-t border-[#E1E8F0] shadow-lg">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.name} className="border-b border-[#E1E8F0]">
                  <Link
                    to={link.path}
                    className="block px-4 py-3 text-[#054E6F] font-semibold hover:bg-[#F0F3F7] hover:text-[#0A7BA6] transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="px-4 py-3">
                <Link
                  to="/booking"
                  className="block w-full text-center px-4 py-3 bg-linear-to-r from-[#0A7BA6] to-[#06A3AD] text-white font-bold rounded-lg hover:shadow-lg transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;