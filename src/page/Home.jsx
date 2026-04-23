import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HeroSection from "../component/Homecomponent/HeroSection";
import HeroSlider from "../component/Homecomponent/awiper";
import Features from "../component/Features";
import DoctorCard from "../component/DoctorCard";
import Testimonials from "../component/Testimonials";
import { DoctorContext } from "../Context/Doctercontext";
import { doctors } from "../data/doctors";

const Home = () => {
    const { setDoctor } = useContext(DoctorContext);
    const navigate = useNavigate();

    const handleBookNow = (doctor) => {
        setDoctor(doctor);
        navigate("/booking");
    };

    return (
        <div className="bg-white theme-canvas">
            <HeroSlider />
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <Features />

            {/* Doctors Section */}
            <section className="py-20 section-soft relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#CFEFF5] opacity-35 blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#BDE5F0] opacity-30 blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-12 fade-up">
                        <span className="inline-block px-4 py-2 kicker-badge rounded-full text-sm font-semibold mb-4">
                            Our Medical Team
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gradient-soft mb-4">
                            Meet Our Expert Doctors
                        </h2>
                        <p className="text-[#3F4A63] max-w-2xl mx-auto text-lg">
                            Choose from our panel of experienced medical professionals across various specialties.
                        </p>
                    </div>

                    {/* Doctors Swiper */}
                    <div className="doctor-swiper fade-up" style={{ animationDelay: "120ms" }}>
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            pagination={{ clickable: true }}
                            spaceBetween={24}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1200: { slidesPerView: 3 },
                            }}
                            className="pb-12"
                        >
                            {doctors.map((doctor) => (
                                <SwiperSlide key={doctor.id}>
                                    <DoctorCard doctor={doctor} onBook={handleBookNow} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />

            {/* CTA Section */}
            <section className="hero-premium text-white py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Book Your Appointment?</h2>
                    <p className="text-xl text-[#E1E8F0] mb-8">
                        Get expert medical consultation from our qualified doctors. Book now and receive quality healthcare.
                    </p>
                    <button
                        onClick={() => navigate("/booking")}
                        className="px-12 py-4 bg-white text-[#0A7BA6] font-bold rounded-lg hover:bg-[#E1E8F0] transition transform hover:scale-105 shadow-lg duration-300"
                    >
                        Book Your Appointment Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
