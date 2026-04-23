import React from "react";
import { Heart } from "lucide-react";

const ProTechLogo = ({ title = "ProTech", subtitle = "Healthcare", showText = true, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Professional Logo */}
      <div className="relative w-14 h-14 bg-linear-to-br from-[#0A7BA6] to-[#06A3AD] rounded-xl flex items-center justify-center shadow-md overflow-hidden group">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-linear-to-br from-[#1F9CBE] to-[#1DC4D0]"></div>
        </div>

        {/* Heart Icon */}
        <Heart size={28} className="text-white relative z-10 fill-current" />
      </div>

      {/* Text Branding */}
      {showText && <div className="hidden sm:block">
        <h1 className="text-2xl font-bold bg-linear-to-r from-[#0A7BA6] to-[#06A3AD] bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-xs font-semibold text-[#0A7BA6] tracking-wide">{subtitle}</p>
      </div>}
    </div>
  );
};

export default ProTechLogo;
