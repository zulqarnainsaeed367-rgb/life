import React from "react";
import { Link } from "react-router-dom";
import { Users, Award, Heart, TrendingUp } from "lucide-react";

const FALLBACK_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJBkpR9V3GDVdk6wjl2czgRQ1BMNimzKySA&s";

const About = () => {
  return (
    <div className="bg-white theme-canvas">
      {/* Hero Section */}
      <section className="hero-premium text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About ProTech Healthcare</h1>
          <p className="text-xl text-[#E1E8F0] max-w-2xl">
            Transforming healthcare delivery with innovative technology and compassionate care.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 section-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gradient-soft mb-6">Our Mission</h2>
              <p className="text-[#3F4A63] mb-4 leading-relaxed text-lg">
                ProTech Healthcare is committed to making world-class medical services accessible to everyone. We believe that quality healthcare should not be limited by geography or time constraints.
              </p>
              <p className="text-[#3F4A63] mb-4 leading-relaxed text-lg">
                Our platform connects patients with experienced medical professionals, ensuring timely and effective healthcare delivery. With a focus on innovation, compassion, and excellence, we're revolutionizing the way people access healthcare.
              </p>
              <p className="text-[#3F4A63] leading-relaxed text-lg">
                Whether you need a routine checkup, specialist consultation, or emergency medical advice, ProTech is here to serve your healthcare needs with the highest standards of professionalism.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl h-96 overflow-hidden shadow-lg-medical border border-[#D6EAF2]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=900&fit=crop"
                  alt="Modern healthcare team"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = FALLBACK_IMAGE;
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Expert Doctors", icon: Users },
              { number: "10K+", label: "Happy Patients", icon: Heart },
              { number: "15+", label: "Years Experience", icon: Award },
              { number: "99%", label: "Satisfaction Rate", icon: TrendingUp },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center p-8 panel-premium">
                  <Icon className="w-12 h-12 text-[#0A7BA6] mx-auto mb-4" />
                  <p className="text-4xl font-bold text-[#1A1F3A]">{stat.number}</p>
                  <p className="text-[#3F4A63] mt-2">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 section-soft">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gradient-soft mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Patient-Centric Care",
                description: "Your health and well-being are at the center of everything we do. We prioritize your comfort and concerns.",
                icon: "❤️"
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards of medical practice and continuous improvement in all our services.",
                icon: "⭐"
              },
              {
                title: "Accessibility",
                description: "Making quality healthcare available to everyone, everywhere, at any time through our innovative platform.",
                icon: "🌍"
              },
              {
                title: "Integrity",
                description: "We operate with transparency, honesty, and ethical practices in all our healthcare services.",
                icon: "🤝"
              },
              {
                title: "Innovation",
                description: "We leverage cutting-edge technology to improve healthcare delivery and patient experience.",
                icon: "🚀"
              },
              {
                title: "Community",
                description: "We believe in building a supportive community of healthcare professionals and patients.",
                icon: "👥"
              },
            ].map((value, idx) => (
              <div key={idx} className="panel-premium p-8 hover:shadow-lg-medical transition">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-[#054E6F] mb-3">{value.title}</h3>
                <p className="text-[#3F4A63]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gradient-soft mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Hassan Ahmed",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop"
              },
              {
                name: "Dr. Zainab Khan",
                role: "Chief Medical Officer",
                image: "https://images.unsplash.com/photo-1594824388853-d0c7cf59f9f7?w=300&h=300&fit=crop"
              },
              {
                name: "Mohammed Ali",
                role: "Technology Director",
                image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop"
              },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = FALLBACK_IMAGE;
                  }}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#0A7BA6] object-cover"
                />
                <h3 className="text-xl font-bold text-[#1A1F3A]">{member.name}</h3>
                <p className="text-[#0A7BA6] font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="hero-premium text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Experience ProTech Healthcare Today</h2>
          <p className="text-xl text-[#E1E8F0] mb-8">
            Join thousands of satisfied patients who have found quality healthcare with us.
          </p>
          <Link
            to="/booking"
            className="inline-block px-12 py-4 bg-white text-[#0A7BA6] font-bold rounded-lg hover:bg-[#E1E8F0] transition transform hover:scale-105"
          >
            Book Your Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;