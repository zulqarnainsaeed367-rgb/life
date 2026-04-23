import React from "react";
import { Star, MapPin, Clock, DollarSign, Stethoscope } from "lucide-react";

const FALLBACK_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJBkpR9V3GDVdk6wjl2czgRQ1BMNimzKySA&s";

const DoctorCard = ({ doctor, onBook }) => {
  // Match doctor image with doctor name for better trust and consistency.
  const getImageUrl = (name, id) => {
    const femaleNames = ["sara", "ayesha", "fatima", "zahra"];
    const safeName = (name || "").toLowerCase();
    const isFemale = femaleNames.some((femaleName) => safeName.includes(femaleName));

    const femaleImages = [
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1594824388853-d0c7cf59f9f7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=400&fit=crop",
    ];

    const maleImages = [
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
    ];

    const collection = isFemale ? femaleImages : maleImages;
    return collection[(id - 1) % collection.length];
  };

  const renderRating = (rating) => {
    return (
      <div className="flex items-center gap-1.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
          />
        ))}
        <span className="text-xs text-gray-600 ml-1 font-semibold">({rating.toFixed(1)})</span>
      </div>
    );
  };

  return (
    <div className="doctor-card bg-white rounded-2xl border border-[#E1E8F0] overflow-hidden shadow-sm-medical hover:shadow-lg-medical transition-all duration-400">
      {/* Doctor Image */}
      <div className="relative h-56 bg-gradient-to-br from-[#0A7BA6] to-[#06A3AD] flex items-center justify-center overflow-hidden group">
        <img
          src={getImageUrl(doctor.name, doctor.id)}
          alt={doctor.name}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = FALLBACK_IMAGE;
          }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#063B55]/55 via-transparent to-transparent"></div>
        <div className="absolute top-3 right-3 badge-success flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
          Available
        </div>
      </div>

      {/* Doctor Info */}
      <div className="p-5">
        {/* Name and Speciality */}
        <h3 className="text-xl font-bold text-[#054E6F]">{doctor.name}</h3>
        <p className="text-[#0A7BA6] font-semibold text-sm flex items-center gap-1.5 mt-1">
          <Stethoscope size={14} />
          {doctor.speciality}
        </p>

        {/* Rating */}
        <div className="mt-2.5">
          {renderRating(doctor.rating || 4.8)}
        </div>

        {/* Details */}
        <div className="space-y-2 mt-4 text-sm text-[#3F4A63] border-t border-[#E1E8F0] pt-4">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[#0A7BA6] flex-shrink-0" />
            <span className="font-medium">{doctor.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#0A7BA6] flex-shrink-0" />
            <span className="text-xs">{doctor.location || "Medical Plaza, Healthcare City"}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign size={16} className="text-[#0FA968] flex-shrink-0" />
            <span className="font-bold text-[#0FA968]">Rs {doctor.price.toLocaleString()}</span>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-4 text-xs text-[#7B8CA3] space-y-1 p-3 bg-[#F0F3F7] rounded-lg">
          <p>⭐ Experience: {doctor.experience || "10"}+ years</p>
          <p>👥 Patients: {doctor.patients || "2000"}+</p>
        </div>

        {/* Button */}
        <button
          onClick={() => onBook(doctor)}
          className="mt-5 w-full bg-gradient-to-r from-[#0A7BA6] to-[#06A3AD] text-white font-bold py-3 rounded-lg hover:shadow-lg-medical transition transform hover:scale-105 duration-300"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
