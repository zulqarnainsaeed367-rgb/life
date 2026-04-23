import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay,Pagination } from "swiper/modules";

const FALLBACK_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJBkpR9V3GDVdk6wjl2czgRQ1BMNimzKySA&s";

const Swipercomponent =() => {
  return (
    <Swiper
      modules={[Pagination ,Autoplay]}
      autoplay={{ delay:3000 , disableOnInteraction: true }}
      pagination={{ clickable: true }}
      spaceBetween={2}
      slidesPerView={1}
      className="w-full h-120"
    >
      <SwiperSlide>
        
        <img className="object-cover h-120 w-full" src="https://thumbs.dreamstime.com/b/business-solutions-success-concept-businessman-hand-connecting-jigsaw-puzzle-office-morning-light-148425510.jpg?w=768" alt="" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = FALLBACK_IMAGE; }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  text-[#174C38]   ">
        <h1 className="font-bold text-5xl " >Smart Business Solutions for Your Growth</h1>
        <h4 className=" text-2xl text-white">We connect ideas, strategy, and technology to build your success.</h4>
        <div className=" mt-10 flex gap-5 justify-center text-white font-bold">
          <button className="bg-transparent border-2 border-[#174C38]  hover:bg-[#174C38] hover:text-black hover:scale-105 transition-transform duration-300 text-2xl p-2 rounded-2xl">
          Get Started
        </button>
        <button className="bg-transparent p-2 border-2 border-[#174C38] text-2xl hover:bg-[#174C38] hover:text-black rounded-2xl">Learn More</button>
        </div>
        

          
        </div>


      </SwiperSlide>
      <SwiperSlide>
        <img className="object-cover h-full w-full" src="https://thumbs.dreamstime.com/b/dollar-sign-resting-hryvnias-used-currency-exchange-money-storage-investments-financial-solutions-business-433707813.jpg?w=768" alt="" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = FALLBACK_IMAGE; }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  text-[#174C38]   ">
        <h1 className="font-bold text-5xl " >Smart Financial Solutions for a Better Future</h1>
        <h4 className=" text-2xl text-white">Secure your investments and grow your wealth with expert strategies.</h4>
        <div className=" mt-10 flex gap-5 justify-center text-white font-bold">
          <button className="bg-transparent border-2 border-[#174C38]  hover:bg-[#174C38] hover:text-black hover:scale-105 transition-transform duration-300 text-2xl p-2 rounded-2xl">
          Get Started
        </button>
        <button className="bg-transparent p-2 border-2 border-[#174C38] text-2xl hover:bg-[#174C38] hover:text-black rounded-2xl">Learn More</button>
        </div>
        </div>

      </SwiperSlide>
      
    </Swiper>
  );
}
export default Swipercomponent ;