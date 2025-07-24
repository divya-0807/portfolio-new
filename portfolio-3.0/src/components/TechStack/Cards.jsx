import React, { useState } from 'react';
import { techStack } from '../../data/TechStack';
import Card from './Card';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;
  const cardWidth = 250; // Tailwind w-[250px]
  const gap = 40; // Tailwind gap-10 = 2.5rem = 40px

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

  return (
    <div id='skills' className='mt-36 mx-5 md:mx-44'>
      <h2 className='text-4xl font-semibold mt-2 text-zinc-200 mb-5'>What I Know</h2>

      {/* Desktop carousel */}
      <div className='relative hidden md:flex items-center justify-center'>
        {/* Left Arrow */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute cursor-pointer left-[-2rem] top-1/2 -translate-y-1/2 text-white z-10"
          >
            <FaArrowLeft size={20} />
          </button>
        )}

        {/* Cards with smooth sliding animation */}
        <div className='overflow-hidden  px-2 w-full 2xl:max-w-[1165px] max-w-[1250px] py-4'>
          <motion.div
            className='flex gap-10'
            animate={{ x: -currentIndex * (cardWidth + gap) }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ width: `${techStack.length * (cardWidth + gap)}px` }}
          >
            {techStack.map((item, index) => (
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
