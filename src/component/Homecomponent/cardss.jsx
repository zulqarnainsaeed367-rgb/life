import React from "react";
import { SiElectronbuilder } from "react-icons/si";
import { MdDeveloperMode, MdBrandingWatermark, MdScreenSearchDesktop } from "react-icons/md";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "UX/UI Design",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      icon: <SiElectronbuilder className="text-green-500 w-12 h-12" />
    },
    {
      id: 2,
      title: "Development",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      icon: <MdDeveloperMode className="text-green-500 w-12 h-12" />
    },
    {
      id: 3,
      title: "Branding",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      icon: <MdBrandingWatermark className="text-green-500 w-12 h-12" />
    },
    {
      id: 4,
      title: "Search Optimization",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      icon: <MdScreenSearchDesktop className="text-green-500 w-12 h-12" />
    },
     {
      id: 5,
      title: "Search Optimization",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      icon: <MdScreenSearchDesktop className="text-green-500 w-12 h-12" />
    }
    
  ];
 
  return (
    <section className="bg-gray-100 px-4 py-17 ">
      <div className="max-w-7xl mx-auto    grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-lg p-6 h-90 flex flex-col items-start transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-">{card.title}</h3>
            <p className="text-black text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;