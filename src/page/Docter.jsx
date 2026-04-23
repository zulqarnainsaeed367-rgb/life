import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DoctorCard from "../component/DoctorCard";
import { DoctorContext } from "../Context/Doctercontext";
import { doctors } from "../data/doctors";

const Docter = () => {
    const navigate = useNavigate();
    const { setDoctor } = useContext(DoctorContext);

    const handleBookNow = (selectedDoctor) => {
        setDoctor(selectedDoctor);
        navigate("/booking");
    };

    return (
        <div className="bg-white theme-canvas">
            <section className="hero-premium text-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">Our Doctors</h1>
                    <p className="text-xl text-[#E1E8F0] max-w-2xl">
                        Browse our complete specialist team and choose the doctor that fits your care needs.
                    </p>
                </div>
            </section>

            <section className="py-20 section-soft relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#CFEFF5] opacity-35 blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#BDE5F0] opacity-30 blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="mb-10 text-center">
                        <span className="inline-block px-4 py-2 kicker-badge rounded-full text-sm font-semibold mb-4">
                            Trusted Specialists
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gradient-soft mb-4">Find The Right Doctor</h2>
                        <p className="text-[#3F4A63] max-w-2xl mx-auto text-lg">
                            Every profile includes specialty, availability, experience, and consultation fee so you can book confidently.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {doctors.map((doctor) => (
                            <DoctorCard key={doctor.id} doctor={doctor} onBook={handleBookNow} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Docter;
