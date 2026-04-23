import React from "react";

const Aboutus = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1e13] px-4">

      <div className="max-w-2xl w-full relative overflow-hidden rounded-lg py-12 px-10 border border-[#174C38]/30 border-l-4 border-l-[#155DFC] bg-[#0e2419]">

        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#174C38]/10 blur-2xl pointer-events-none" />

        {/* Tag */}
        <span className="inline-block text-[11px] tracking-[0.3em] uppercase mb-5 text-[#155DFC] border border-[#155DFC]/30 px-3 py-1 rounded-sm">
          Who We Are
        </span>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-[#f0f4ff] leading-tight mb-2">
          About <span className="text-[#155DFC]">Us</span>
        </h1>

        {/* Divider */}
        <div className="w-12 h-[3px] rounded my-5 bg-gradient-to-r from-[#155DFC] to-[#174C38]" />

        {/* Paragraph */}
        <p className="text-base leading-relaxed text-[#9dc4ae]">
          Far far away, behind the word mountains, far from the countries Vokalia and
          Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
          right at the coast of the Semantics, a large language ocean. A small river named
          Duden flows by their place and supplies it with the necessary regelialia. It is a
          paradisematic country, in which roasted parts of sentences fly into your mouth.
          Even the all-powerful Pointing has no control about the blind texts it is an almost
          unorthographic life.{" "}
          <em className="text-[#c5d9ff] not-italic">
            One day however a small line of blind text by the name of Lorem Ipsum decided to
            leave for the far World of Grammar.
          </em>{" "}
          The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
          wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen.
          She packed her seven versalia, put her initial into the belt and made herself on the way.
        </p>

      </div>
    </div>
  );
};

export default Aboutus;