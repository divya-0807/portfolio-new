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
    <div className="fixed top-3 left-0 w-full z-[100] flex justify-center">
      <div
        className={`relative transition-all duration-500 border border-white/15 rounded-full flex justify-center items-center gap-6 overflow-hidden backdrop-blur-md ${
          scrolled ? 'w-[200px] h-[50px] py-2 px-4' : 'w-full py-4 px-10'
        } 
        ${scrolled ? 'before:absolute before:top-0 before:left-0 before:w-full before:h-full before:backdrop-blur-sm before:z-[-1]' : ''}`}
      >
        {/* HOME */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-white cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-125"
          title={scrolled ? 'Home' : ''}
        >
          {scrolled ? <FaHome size={25} /> : <span className="text-xl">Home</span>}
        </button>

        {/* PROJECTS */}
        <button
          onClick={() => scrollToSection('section2')}
          className="text-white cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-125"
          title={scrolled ? 'Projects' : ''}
        >
          {scrolled ? <FaProjectDiagram size={25} /> : <span className="text-xl">Projects</span>}
        </button>

        {/* SKILLS */}
        <button
          onClick={() => scrollToSection('skills')}
          className="text-white cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-125"
          title={scrolled ? 'Skills' : ''}
        >
          {scrolled ? <FaTools size={25} /> : <span className="text-xl">Skills</span>}
        </button>

        {/* CONTACT */}
        <button
          onClick={() => scrollToSection('contact')}
          className="text-white cursor-pointer flex items-center justify-center transition-transform duration-300 hover:scale-125"
          title={scrolled ? 'Contact' : ''}
        >
          {scrolled ? <FaEnvelope size={25} /> : <span className="text-xl">Contact</span>}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
