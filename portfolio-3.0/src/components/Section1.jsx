import React from "react";
import { ABOUT_1, ABOUT_2 } from "../lib/utils";
import MaskContainer from "../ui/MaskContainer";
import { FaArrowDown } from "react-icons/fa";

const Section1 = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative top-28 z-10">
      <div className="w-3/4 h-[600px] mx-auto rounded-xl flex flex-col">

        {/* Top: Name and subtitle */}
        <div className="flex flex-col items-center justify-center h-[200px] shrink-0">
          <span className="text-white text-5xl font-bold">Deeshank Batra</span>
          <span className="text-white italic text-xl mt-2">OG Duck Icon Owner</span>
        </div>

        {/* Middle: Button (with z-index fix) */}
        <div className="flex items-center justify-center -mt-2 mb-2 z-20 relative">
          <button
            onClick={() => scrollToSection("section2")}
            className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 transition-all px-6 py-2 rounded-full border border-white/20 text-sm"
            style={{
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            }}
          >
            See my work <FaArrowDown className="animate-bounce mt-1" />
          </button>
        </div>

        {/* Bottom: Masked content */}
        <div className="flex-1 relative -mt-4 z-10">
          <MaskContainer revealText={ABOUT_1}>{ABOUT_2}</MaskContainer>
        </div>
      </div>
    </div>
  );
};

export default Section1;
