import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Stethoscope, Baby, Bone, Eye, Ear, Pill, Video, ChevronRight } from "lucide-react";

const Services = () => {
    const navigate = useNavigate();

    const services = [
        {
            id: 1,
            icon: Stethoscope,
            title: "General Consultation",
            description: "Meet with general physicians for routine checkups, illness diagnosis, and general health advice.",
            features: ["Initial Assessment", "Medical History Review", "Health Recommendations"],
            color: "from-[#0A7BA6] to-[#1F9CBE]"
        },
        {
            id: 2,
            icon: Heart,
            title: "Cardiology",
            description: "Expert care for heart and cardiovascular conditions from experienced cardiologists.",
            features: ["Heart Health Check", "ECG Consultation", "Preventive Care"],
            color: "from-[#D1345B] to-[#E85A6C]"
        },
        {
            id: 3,
            icon: Baby,
            title: "Pediatrics",
            description: "Specialized healthcare for infants, children, and adolescents with care and compassion.",
            features: ["Child Care", "Vaccination Guidance", "Growth Monitoring"],
            color: "from-[#FF9E00] to-[#FFB81C]"
        },
        {
            id: 4,
            icon: Bone,
            title: "Orthopedics",
            description: "Comprehensive treatment for bones, joints, muscles, and sports-related injuries.",
            features: ["Injury Treatment", "Joint Care", "Physical Therapy"],
            color: "from-[#06A3AD] to-[#1DC4D0]"
        },
        {
            id: 5,
            icon: Eye,
            title: "Dermatology",
            description: "Specialized skin care and treatment from experienced dermatologists.",
            features: ["Skin Condition Treatment", "Aesthetic Procedures", "Acne Management"],
            color: "from-[#0FA968] to-[#20C997]"
        },
        {
            id: 6,
            icon: Ear,
            title: "ENT",
            description: "Ear, Nose, and Throat specialist care for all ORL conditions and concerns.",
            features: ["Hearing Tests", "Allergy Treatment", "Throat Conditions"],
            color: "from-[#0A7BA6] to-[#06A3AD]"
        },
        {
            id: 7,
            icon: Pill,
            title: "Pharmacy Consultation",
            description: "Get expert advice on medications, dosages, and potential drug interactions.",
            features: ["Medication Review", "Prescription Guidance", "Alternative Options"],
            color: "from-[#1F9CBE] to-[#1DC4D0]"
        },
        {
            id: 8,
            icon: Video,
            title: "Telemedicine",
            description: "Remote consultations with doctors via video call for convenience and safety.",
            features: ["Video Consultations", "24/7 Availability", "Prescription Delivery"],
            color: "from-[#054E6F] to-[#0A7BA6]"
        },
    ];

    return (
        <div className="bg-white theme-canvas">
            {/* Hero Section */}
            <section className="hero-premium text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl text-[#E1E8F0] max-w-2xl">
                        Comprehensive healthcare services from expert medical professionals for all your health needs.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 section-soft">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    className="service-card bg-white rounded-2xl border-2 border-[#E1E8F0] hover:border-[#0A7BA6] shadow-sm-medical overflow-hidden transition-all duration-400 group"
                                >
                                    {/* Icon Background */}
                                    <div className={`bg-gradient-to-br ${service.color} h-28 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon size={48} className="text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-[#054E6F] mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-[#3F4A63] text-sm mb-4">
                                            {service.description}
                                        </p>

                                        {/* Features List */}
                                        <ul className="space-y-2 mb-4">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-xs text-[#3F4A63]">
                                                    <ChevronRight size={14} className="text-[#0A7BA6] flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Learn More Button */}
                                        <button
                                            onClick={() => navigate("/booking")}
                                            className="w-full px-4 py-2.5 border-2 border-[#0A7BA6] text-[#0A7BA6] font-bold rounded-lg hover:bg-gradient-to-r hover:from-[#0A7BA6] hover:to-[#06A3AD] hover:text-white transition duration-300"
                                        >
                                            Book Service
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-transparent">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4 px-4 py-2 kicker-badge rounded-full text-xs font-bold uppercase tracking-wider">
                            Why Choose Us
                        </div>
                        <h2 className="text-5xl font-bold text-gradient-soft mb-4">
                            Why Choose Our Services?
                        </h2>
                        <p className="text-[#3F4A63] max-w-2xl mx-auto text-lg">
                            We combine expertise, compassion, and technology to deliver exceptional healthcare.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Expert Professionals",
                                description: "Our doctors are highly qualified with years of experience in their respective fields.",
                                icon: "👨‍⚕️"
                            },
                            {
                                title: "Personalized Care",
                                description: "Each patient receives individualized attention and customized treatment plans.",
                                icon: "❤️"
                            },
                            {
                                title: "Advanced Technology",
                                description: "We use the latest medical technology and procedures for accurate diagnosis.",
                                icon: "🔬"
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="text-center p-8 bg-[#F0F3F7] rounded-2xl border-2 border-[#E1E8F0] hover:border-[#0A7BA6] transition duration-300 group hover:shadow-md-medical">
                                <div className="text-5xl mb-4 group-hover:scale-125 transition duration-300">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-[#054E6F] mb-2">{item.title}</h3>
                                <p className="text-[#3F4A63]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="hero-premium text-white py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">Need Professional Medical Care?</h2>
                    <p className="text-xl text-[#E1E8F0] mb-8">
                        Book an appointment with our specialists today and get expert healthcare services.
                    </p>
                    <button
                        onClick={() => navigate("/booking")}
                        className="px-12 py-4 bg-white text-[#0A7BA6] font-bold rounded-lg hover:bg-[#E1E8F0] transition transform hover:scale-105 shadow-lg duration-300"
                    >
                        Book Appointment Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Services;
