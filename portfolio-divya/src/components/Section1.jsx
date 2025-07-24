import React from "react";
import { ABOUT_1, ABOUT_2 } from "../lib/utils";
import MaskContainer from "../ui/MaskContainer";
import { FaArrowDown, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Section1 = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="relative pt-28 z-20">
      {/* ✅ Main Content */}
      <div className="w-3/4 h-[600px] mx-auto rounded-xl flex flex-col relative z-40 max-md:w-[90%] max-md:h-auto max-md:items-center">
        {/* Header */}
        <div className="flex flex-col items-center justify-center h-[200px] shrink-0">
          <span className="text-white text-5xl font-bold">Divya Lokwani</span>
          <span className="text-white italic text-xl mt-2">MERN Stack Web Developer</span>
        </div>

        {/* ✅ Animated Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex gap-x-5 items-center justify-center mb-2"
        >
          <button
            onClick={() => scrollToSection("section2")}
            className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 transition-all px-6 py-2 rounded-full border border-white/20 text-sm cursor-pointer"
            style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
          >
            See my work <FaArrowDown className="animate-bounce mt-1" />
          </button>

          <a
            href="/Divya_Lokwani_Resume.pdf"
            download
            className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 transition-all px-6 py-2 rounded-full border border-white/20 text-sm cursor-pointer"
            style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
          >
            Download Resume <FaDownload />
          </a>
        </motion.div>

        {/* Mask Reveal */}
        <div className="flex-1 relative -mt-2 z-40">
          <MaskContainer revealText={ABOUT_1}>{ABOUT_2}</MaskContainer>
        </div>
      </div>
    </div>
  );
};

export default Section1;
