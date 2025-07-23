import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Cards from './components/TechStack/Cards';
import FeaturedProjects from './components/Section2';
import ExtraCurricular from './components/ExtraCurricular';
import ContactUs from './components/Form/ContactUs';
import { motion } from 'framer-motion';
import StatsImage from './assets/stats.png';
import stats2 from './assets/stats2.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Background from './components/Background';
import Experience from './components/Experience/Experience';
import SplashScreen from './components/IntroScreen';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      
      <div className={`relative w-full min-h-screen overflow-hidden z-10 ${showSplash ? 'blurred' : ''}`}>
        <Background />

        {/* Floating Stat Images */}
        <motion.div
          className="fixed left-4 top-28 md:left-19 md:top-35 scale-125 w-[300px] md:w-[400px] z-0 pointer-events-none"
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        >
          <img
            src={StatsImage}
            alt="Stats Left"
            className="w-full opacity-40 select-none scale-125"
            style={{
              transform: isMobile
                ? 'rotateX(25deg) rotateZ(-10deg)'
                : 'rotateX(25deg)',
            }}
          />
        </motion.div>

        <motion.div
          className="fixed right-4 bottom-32 md:right-15 md:bottom-24 scale-125 w-[300px] md:w-[400px] z-0 pointer-events-none"
          animate={{ y: [0, 10, 0, -10, 0] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        >
          <img
            src={stats2}
            alt="Stats Right"
            className="w-full opacity-40 select-none scale-125"
            style={{
              transform: isMobile
                ? 'rotateX(25deg) rotateZ(-10deg)'
                : 'rotateX(25deg)',
            }}
          />
        </motion.div>

        <div className="relative z-10">
          <Navbar />
          <Section1 />
          <Cards />
          <Experience />
          <FeaturedProjects />
          <ExtraCurricular />
          <ContactUs />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    </>
  );
};

export default App;
