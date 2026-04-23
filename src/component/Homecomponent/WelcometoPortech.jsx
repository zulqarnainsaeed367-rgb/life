import React from 'react';
import { Users, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const FALLBACK_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJBkpR9V3GDVdk6wjl2czgRQ1BMNimzKySA&s";

const CreativeAgencySection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image Composition */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* Experience Badge */}
          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 z-30 bg-blue-600 text-white p-4 md:p-5 w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center shadow-2xl transform group-hover:rotate-3 transition-transform duration-300">
            <Lightbulb size={28} className="mb-1 text-blue-200" />
            <span className="text-2xl md:text-3xl font-black leading-none">42</span>
            <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-center mt-1">Years of Exp.</span>
          </div>

          <div className="relative flex items-end">
            {/* Main Background Image */}
            <div className="w-4/5 h-[350px] md:h-[500px] overflow-hidden rounded-sm shadow-lg bg-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Team working" 
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = FALLBACK_IMAGE;
                }}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Overlapping Foreground Image */}
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute right-0 -bottom-8 md:-bottom-10 w-3/5 h-48 md:h-72 border-[8px] md:border-[12px] border-white rounded-sm shadow-2xl overflow-hidden z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
                alt="Collaborative meeting" 
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = FALLBACK_IMAGE;
                }}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6 md:space-y-8"
        >
          <div>
            <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4 rounded-full">
              Welcome to Portech
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              We Are Portech <br />
              <span className="text-blue-600">Creative Studio</span> Agency
            </h2>
            <p className="text-gray-500 leading-relaxed text-base md:text-lg max-w-xl">
              Far far away, behind the word mountains, far from the countries Vokalia 
              and Consonantia, there live the blind texts. Separated they live in 
              Bookmarksgrove right at the coast of the Semantics.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="flex items-center gap-5 group/item">
              <div className="flex-shrink-0 p-4 bg-blue-50 text-blue-600 rounded-xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                <Users size={24} />
              </div>
              <div>
                <h5 className="font-bold text-slate-800 uppercase text-sm tracking-tight">Expert Team</h5>
                <p className="text-[11px] text-gray-400 mt-0.5 uppercase font-medium tracking-widest">For Business</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group/item">
              <div className="flex-shrink-0 p-4 bg-blue-50 text-blue-600 rounded-xl group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                <Lightbulb size={24} />
              </div>
              <div>
                <h5 className="font-bold text-slate-800 uppercase text-sm tracking-tight">Solution</h5>
                <p className="text-[11px] text-gray-400 mt-0.5 uppercase font-medium tracking-widest">For Business</p>
              </div>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 md:py-5 px-8 md:px-10 rounded-sm shadow-xl shadow-blue-100 transition-all uppercase text-xs md:text-sm tracking-[0.15em] w-fit"
          >
            Get In Touch With Us
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default CreativeAgencySection;