import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import ProTechLogo from "../ProTechLogo";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image:
      "https://thumbs.dreamstime.com/b/medical-doctor-attending-patient-close-up-portrait-young-handsome-writing-prescription-to-female-clinic-57484845.jpg",
    title: "Clinical Care Built Around Real People",
    subtitle:
      "Consult trusted doctors, share reports securely, and get treatment plans designed for your lifestyle.",
    primaryText: "Book Consultation",
    primaryPath: "/booking",
    secondaryText: "Meet Doctors",
    secondaryPath: "/docter",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=",
    title: "Faster Decisions With Digital Medical Records",
    subtitle:
      "From first visit to follow-up, every update stays organized so your doctors can act with confidence.",
    primaryText: "Explore Services",
    primaryPath: "/services",
    secondaryText: "Contact Team",
    secondaryPath: "/contact",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JkvwzQNa1D3xu7mxYcdSRcZHYnuVSZ2JAg&s",
    title: "Compassionate Specialists, One Seamless Platform",
    subtitle:
      "Access top experts, transparent appointments, and patient-first support in one modern healthcare experience.",
    primaryText: "Start Appointment",
    primaryPath: "/booking",
    secondaryText: "About Us",
    secondaryPath: "/about",
  },
];

function HeroSlider() {
  const navigate = useNavigate();

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      effect="fade"
      speed={900}
      loop={true}
      className="hero-swiper h-[74vh] min-h-125 md:h-[88vh]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            <div className="absolute inset-0 bg-linear-to-r from-[#032231]/88 via-[#054a68]/72 to-[#0aa3ad]/35" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,196,208,0.38),transparent_46%)]" />

            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 py-14 md:px-8 lg:px-12">
              <div className="w-full max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-sm md:p-10">
                <div className="mb-4 flex items-center gap-3">
                  <ProTechLogo title="Life" subtitle="Smart Healthcare" className="[&_h1]:text-white [&_p]:text-[#bef4f8]" />
                  <span className="rounded-full border border-[#9ce7f0] bg-[#9ce7f0]/20 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-[#d7fcff]">
                    PATIENT FIRST
                  </span>
                </div>

                <h1 className="text-3xl font-bold leading-tight md:text-5xl">
                  {slide.title}
                </h1>
                <p className="mt-4 max-w-2xl text-base text-[#e9f9ff] md:text-lg">
                  {slide.subtitle}
                </p>

                <div className="mt-7 flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate(slide.primaryPath)}
                    className="rounded-xl bg-linear-to-r from-[#0A7BA6] to-[#06A3AD] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105 hover:shadow-xl md:text-base"
                  >
                    {slide.primaryText}
                  </button>
                  <button
                    onClick={() => navigate(slide.secondaryPath)}
                    className="rounded-xl border border-white/60 bg-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/25 md:text-base"
                  >
                    {slide.secondaryText}
                  </button>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
                  <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                    <p className="text-xl font-bold">24/7</p>
                    <p className="text-[#daf6fa]">Care Access</p>
                  </div>
                  <div className="rounded-xl border border-white/20 bg-white/10 p-3">
                    <p className="text-xl font-bold">150+</p>
                    <p className="text-[#daf6fa]">Doctors</p>
                  </div>
                  <div className="col-span-2 rounded-xl border border-white/20 bg-white/10 p-3 md:col-span-1">
                    <p className="text-xl font-bold">98%</p>
                    <p className="text-[#daf6fa]">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;