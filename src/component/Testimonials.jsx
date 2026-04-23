import React from "react";
import { Star, Quote, ShieldCheck, ThumbsUp } from "lucide-react";

const FALLBACK_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJBkpR9V3GDVdk6wjl2czgRQ1BMNimzKySA&s";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmad Ali",
      role: "Cardiology Patient",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      content: "ProTech provided exceptional healthcare service. The doctors are highly professional and the booking process is seamless. Highly recommended!",
      rating: 5,
      treatment: "Post Checkup",
    },
    {
      id: 2,
      name: "Fatima Khan",
      role: "Telemedicine Patient",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      content: "I was impressed with the quick response time and the quality of consultation. The entire experience was very positive.",
      rating: 5,
      treatment: "Video Consultation",
    },
    {
      id: 3,
      name: "Hassan Raza",
      role: "General Care Patient",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      content: "Best healthcare platform I've used. The doctors are experienced and the services are top-notch. Will definitely use again.",
      rating: 4.5,
      treatment: "Routine Follow Up",
    },
  ];

  const highlights = [
    { label: "Verified Reviews", value: "4.9/5", icon: ShieldCheck },
    { label: "Patient Satisfaction", value: "98%", icon: ThumbsUp },
    { label: "Total Testimonials", value: "12K+", icon: Star },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#EAF6FA] via-[#F5FBFD] to-white relative overflow-hidden">
      <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-[#BEEAF2] opacity-35 blur-3xl float-soft"></div>
      <div className="absolute -bottom-24 -left-12 w-72 h-72 rounded-full bg-[#CDEFF3] opacity-30 blur-3xl float-soft"></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 fade-up">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#0A7BA6] to-[#06A3AD] text-white rounded-full text-xs font-bold uppercase tracking-wider">
            Patient Testimonials
          </div>
          <h2 className="text-5xl font-bold text-gradient-soft mb-4">
            What Our Patients Say
          </h2>
          <p className="text-[#3F4A63] max-w-2xl mx-auto text-lg">
            Real experiences from our satisfied patients. See why thousands choose ProTech for their healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="bg-white rounded-xl border border-[#D6EAF2] p-4 flex items-center gap-3 shadow-sm-medical fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-lg bg-[#E8F4F9] flex items-center justify-center">
                  <Icon size={20} className="text-[#0A7BA6]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#054E6F] leading-none">{item.value}</p>
                  <p className="text-xs text-[#3F4A63] mt-1">{item.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white/95 backdrop-blur-sm rounded-2xl border-2 border-[#DDECF2] hover:border-[#0A7BA6] shadow-sm-medical hover:shadow-lg-medical p-8 transition-all duration-400 group relative overflow-hidden fade-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-[#E8F4F9] opacity-70"></div>

              <div className="relative mb-6 flex items-center justify-between">
                <Quote size={32} className="text-[#0A7BA6] opacity-60" />
                <span className="text-xs font-bold uppercase tracking-wide text-[#0A7BA6] bg-[#E8F4F9] px-3 py-1 rounded-full">
                  Verified
                </span>
              </div>

              <p className="text-[#3F4A63] mb-6 italic leading-relaxed min-h-24 relative">
                "{testimonial.content}"
              </p>

              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < Math.floor(testimonial.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-300"
                    }
                  />
                ))}
                </div>
                <span className="text-sm font-bold text-[#054E6F]">{testimonial.rating.toFixed(1)}</span>
              </div>

              <div className="border-t border-[#E1E8F0] my-4"></div>

              <div className="flex items-center gap-4 pt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = FALLBACK_IMAGE;
                  }}
                  className="w-14 h-14 rounded-full border-2 border-[#0A7BA6]"
                />
                <div>
                  <p className="font-bold text-[#054E6F]">{testimonial.name}</p>
                  <p className="text-xs text-[#0A7BA6] font-semibold">{testimonial.role}</p>
                  <p className="text-xs text-[#7B8CA3] mt-0.5">{testimonial.treatment}</p>
                </div>
              </div>

              <div className="mt-4 text-xs text-[#3F4A63]">
                Review {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
