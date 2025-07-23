import React, { useState } from 'react';
import { techStack } from '../../data/TechStack';
import Card from './Card';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;

  const handleNext = () => {
    if (currentIndex + cardsPerPage < techStack.length) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - cardsPerPage >= 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  const visibleCards = techStack.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <div id='skills' className='mt-36 mx-5 md:mx-44'>
      <h2 className='text-4xl font-semibold mt-2 text-zinc-200 mb-5'>What I Know</h2>

      {/* Desktop carousel */}
      <div className='relative hidden md:flex items-center'>
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute cursor-pointer left-[-2rem] top-1/2 -translate-y-1/2 text-white z-10"
          >
            <FaArrowLeft size={20} />
          </button>
        )}

        {/* Cards with sliding animation */}
        <div className='overflow-hidden py-4 w-[1250px]'>
          <motion.div
            key={currentIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'tween', duration: 0.4 }}
            className='flex gap-10'
          >
            {visibleCards.map((item, index) => (
              <div key={index} className='flex-shrink-0 w-[250px]'>
                <Card heading={item.heading} stack={item.stack} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Arrow */}
        {currentIndex + cardsPerPage < techStack.length && (
          <button
            onClick={handleNext}
            className="absolute cursor-pointer right-[-2rem] top-1/2 -translate-y-1/2 text-white z-10"
          >
            <FaArrowRight size={20} />
          </button>
        )}
      </div>

      {/* Mobile stacked view */}
      <div className='flex flex-col gap-8 md:hidden mt-5'>
        {techStack.map((item, index) => (
          <div key={index} className='flex justify-center'>
            <Card heading={item.heading} stack={item.stack} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
