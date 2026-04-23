import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import ProTechLogo from "../component/ProTechLogo";

const Footer = () => {
  return (
    <footer className="hero-premium text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <div className="mb-2">
              <ProTechLogo title="Life" subtitle="Smart Healthcare" className="[&_h1]:text-white [&_p]:text-[#BEEAF2]" />
            </div>
            <p className="text-[#E1E8F0] text-sm leading-relaxed">
              Connected healthcare journeys with trusted specialists, transparent appointments, and modern patient support.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-[#BEEAF2] hover:text-white transition-colors p-2 hover:bg-[#0A7BA6] rounded-full">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-[#BEEAF2] hover:text-white transition-colors p-2 hover:bg-[#0A7BA6] rounded-full">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="text-[#BEEAF2] hover:text-white transition-colors p-2 hover:bg-[#0A7BA6] rounded-full">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-[#BEEAF2] hover:text-white transition-colors p-2 hover:bg-[#0A7BA6] rounded-full">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <Link to="/" className="text-[#E1E8F0] hover:text-white hover:translate-x-1 transition-all">Home</Link>
            <Link to="/about" className="text-[#E1E8F0] hover:text-white hover:translate-x-1 transition-all">About</Link>
            <Link to="/services" className="text-[#E1E8F0] hover:text-white hover:translate-x-1 transition-all">Services</Link>
            <Link to="/docter" className="text-[#E1E8F0] hover:text-white hover:translate-x-1 transition-all">Doctors</Link>
            <Link to="/contact" className="text-[#E1E8F0] hover:text-white hover:translate-x-1 transition-all">Contact</Link>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg mb-2">Our Services</h3>
            <span className="text-[#E1E8F0]">General Consultation</span>
            <span className="text-[#E1E8F0]">Cardiology Support</span>
            <span className="text-[#E1E8F0]">Pediatric Care</span>
            <span className="text-[#E1E8F0]">Orthopedic Treatment</span>
            <span className="text-[#E1E8F0]">Telemedicine Visits</span>
          </div>

          {/* Column 4: Policies */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg mb-2">Patient Support</h3>
            <span className="text-[#E1E8F0]">Insurance Guidance</span>
            <span className="text-[#E1E8F0]">Appointment Assistance</span>
            <span className="text-[#E1E8F0]">Telehealth Setup Help</span>
            <span className="text-[#E1E8F0]">Prescription Follow-up</span>
            <span className="text-[#E1E8F0]">Medical Records Request</span>
          </div>

          {/* Column 5: Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg mb-2">Contact Us</h3>
            <div className="flex items-start gap-3 text-[#E1E8F0]">
              <FaMapMarkedAlt className="mt-1 shrink-0 text-[#7ED5E5]" />
              <span className="text-sm">123 Medical Plaza, Healthcare City</span>
            </div>
            <div className="flex items-start gap-3 text-[#E1E8F0]">
              <FaPhoneAlt className="mt-1 shrink-0 text-[#7ED5E5]" />
              <span className="text-sm">+1 (234) 567-890</span>
            </div>
            <div className="flex items-start gap-3 text-[#E1E8F0]">
              <FaEnvelope className="mt-1 shrink-0 text-[#7ED5E5]" />
              <span className="text-sm">info@protech.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#2C8BA5] pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left text-[#E1E8F0] text-sm">
            <p>© 2026 ProTech Healthcare. All rights reserved.</p>
            <p className="md:text-center">Care that feels human, delivered with precision</p>
            <p className="md:text-right">Trusted support from first visit to recovery</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;