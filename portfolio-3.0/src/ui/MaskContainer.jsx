import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const MaskContainer = ({ children, revealText }) => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const rawSize = useMotionValue(10); // Initial dot size
  const maskSize = useSpring(rawSize, { stiffness: 300, damping: 30 }); // Smooth animation

  const handleEnter = () => rawSize.set(300); // Enlarge mask
  const handleLeave = () => rawSize.set(10);  // Shrink mask

  useEffect(() => {
    const el = containerRef.current;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseOut = (e) => {
      // Shrink mask when mouse leaves container
      if (!el.contains(e.relatedTarget)) {
        handleLeave();
      }
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseOut);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full -mt-5 h-full overflow-hidden"
    >
      {/* Base text (dark background) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
        <p className="max-w-3xl text-white text-base sm:text-2xl font-semibold">
          {revealText}
        </p>
      </div>

      {/* Mask layer (text on white that is revealed via SVG mask) */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
        style={{
          maskImage: "url(/mask.svg)",
          WebkitMaskImage: "url(/mask.svg)",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: `${maskSize.get()}px`,
          WebkitMaskSize: `${maskSize.get()}px`,
          maskPosition: `${mousePos.x - maskSize.get() / 2 + 100}px ${mousePos.y - maskSize.get() / 2}px`,
          WebkitMaskPosition: `${mousePos.x - maskSize.get() / 2 + 100}px ${mousePos.y - maskSize.get() / 2}px`,
        }}
      >
        <div className="pointer-events-auto px-6 text-center w-full h-full flex items-center justify-center bg-white">
          <p
            className="max-w-3xl text-black text-base sm:text-2xl font-semibold"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            {children}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MaskContainer;
