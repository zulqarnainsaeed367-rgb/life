import React from "react";
import { Calendar, Users, Clock, Shield, Video, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Schedule appointments instantly with your preferred doctor at convenient times.",
      color: "from-[#0A7BA6] to-[#1F9CBE]",
      bgColor: "#E8F4F9",
    },
    {
      icon: Users,
      title: "Expert Doctors",
      description: "Access highly qualified medical professionals across various specialties.",
      color: "from-[#06A3AD] to-[#1DC4D0]",
      bgColor: "#E8F8FA",
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Get healthcare support anytime, anywhere with our round-the-clock availability.",
      color: "from-[#0FA968] to-[#20C997]",
      bgColor: "#E8F8F0",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health data is protected with enterprise-grade security measures.",
      color: "from-[#D1345B] to-[#E85A6C]",
      bgColor: "#FEE8ED",
    },
    {
      icon: Video,
      title: "Telemedicine",
      description: "Consult with doctors via video call from the comfort of your home.",
      color: "from-[#FF9E00] to-[#FFB81C]",
      bgColor: "#FFF8E8",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "We maintain highest standards of medical practice and patient care.",
      color: "from-[#0A7BA6] to-[#06A3AD]",
      bgColor: "#E8F4F9",
    },
  ];

  return (
    <section className="py-20 section-soft">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 kicker-badge rounded-full text-xs font-bold uppercase tracking-wider">
            Why Choose Us
          </div>
          <h2 className="text-5xl font-bold text-gradient-soft mb-4">Premium Healthcare Features</h2>
          <p className="text-[#3F4A63] max-w-2xl mx-auto text-lg">
            Experience world-class medical services with our comprehensive features designed for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="service-card rounded-2xl border-2 border-[#E1E8F0] hover:border-[#0A7BA6] p-8 transition-all duration-400 group"
                style={{ backgroundColor: feature.bgColor }}
              >
                <div
                  className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                >
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#054E6F] mb-2 group-hover:text-[#0A7BA6] transition duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#3F4A63] leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
