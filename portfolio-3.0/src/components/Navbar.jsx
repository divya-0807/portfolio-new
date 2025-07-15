import React, { useEffect, useState } from 'react';
import { FaHome, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-3 left-0 w-full z-100">
      <div
        className={` transition-all duration-500 mx-auto border border-white/15 rounded-full flex justify-center items-center gap-6 overflow-hidden ${
          scrolled ? 'w-[200px] h-[50px] py-2 px-4' : 'w-full py-4 px-10'
        }`}
      >
        {/* HOME */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-white cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-125"
        >
          {scrolled ? <FaHome size={25} /> : <span className="text-xl">Home</span>}
        </button>

        {/* PROJECTS */}
        <button
          onClick={() => scrollToSection('projects')}
          className="text-white cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-125"
        >
          {scrolled ? <FaProjectDiagram size={25} /> : <span className="text-xl">Projects</span>}
        </button>

        {/* SKILLS */}
        <button
          onClick={() => scrollToSection('skills')}
          className="text-white cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-125 "
        >
          {scrolled ? <FaTools size={25} /> : <span className="text-xl">Skills</span>}
        </button>

        {/* CONTACT */}
        <button
          onClick={() => scrollToSection('contact')}
          className="text-white cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-125"
        >
          {scrolled ? <FaEnvelope size={25} /> : <span className="text-xl">Contact</span>}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
