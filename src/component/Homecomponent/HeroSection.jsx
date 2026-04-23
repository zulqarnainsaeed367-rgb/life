import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Heart, Stethoscope, Activity, Users } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative hero-premium text-white overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-[#1F9CBE] rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-[#1DC4D0] rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#0A7BA6] rounded-full opacity-5 blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white bg-opacity-15 backdrop-blur-sm rounded-full text-sm font-semibold border border-white border-opacity-20">
                <Heart size={18} className="text-[#1DC4D0]" />
                Trusted Healthcare Provider
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your Health is Our <span className="text-[#1DC4D0] drop-shadow-lg">Priority</span>
            </h1>

            <p className="text-xl text-[#E1E8F0] leading-relaxed">
              Access world-class healthcare professionals 24/7. Book appointments instantly and receive expert medical consultation from the comfort of your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={() => navigate("/booking")}
                className="px-8 py-4 bg-white text-[#0A7BA6] font-bold rounded-lg hover:bg-[#E1E8F0] transition transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg duration-300"
              >
                Book Appointment <ChevronRight size={20} />
              </button>
              <button
                onClick={() => navigate("/services")}
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#0A7BA6] transition duration-300"
              >
                View Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white border-opacity-20">
              <div className="group hover:scale-110 transition duration-300">
                <p className="text-3xl md:text-4xl font-bold text-[#1DC4D0] group-hover:text-white">500+</p>
                <p className="text-[#E1E8F0] text-sm group-hover:text-white transition duration-300">Expert Doctors</p>
              </div>
              <div className="group hover:scale-110 transition duration-300">
                <p className="text-3xl md:text-4xl font-bold text-[#1DC4D0] group-hover:text-white">10K+</p>
                <p className="text-[#E1E8F0] text-sm group-hover:text-white transition duration-300">Happy Patients</p>
              </div>
              <div className="group hover:scale-110 transition duration-300">
                <p className="text-3xl md:text-4xl font-bold text-[#1DC4D0] group-hover:text-white">24/7</p>
                <p className="text-[#E1E8F0] text-sm group-hover:text-white transition duration-300">Support</p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F9CBE] to-[#1DC4D0] rounded-3xl opacity-20 blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-[#1F9CBE] to-[#06A3AD] rounded-3xl p-8 shadow-2xl border border-white border-opacity-10">
              <div className="space-y-6">
                <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm border border-white border-opacity-20 hover:border-opacity-40 transition duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1DC4D0] to-[#0FA968] rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300">
                      <Stethoscope size={32} className="text-[#054E6F]" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Expert Doctors</p>
                      <p className="text-[#E1E8F0] text-sm">Qualified Specialists</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm border border-white border-opacity-20 hover:border-opacity-40 transition duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF9E00] to-[#FFB81C] rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300">
                      <Activity size={32} className="text-[#054E6F]" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">24/7 Support</p>
                      <p className="text-[#E1E8F0] text-sm">Always Available</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm border border-white border-opacity-20 hover:border-opacity-40 transition duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D1345B] to-[#E85A6C] rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300">
                      <Users size={32} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Patient Care</p>
                      <p className="text-[#E1E8F0] text-sm">Your Well-being</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
