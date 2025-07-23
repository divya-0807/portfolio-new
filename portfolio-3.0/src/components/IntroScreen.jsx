// src/components/SplashScreen.jsx
import React, { useEffect, useState } from 'react';


const SplashScreen = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const [fadeOut,setFadeOut] = useState(false);

  
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true); // start fade out
    }, 5000);

    const timer = setTimeout(() => {
      setShow(false);
      onFinish(); // optional callback to tell App.jsx that splash is done
    }, 2000); // duration of animation + buffer

    return () =>{
        clearTimeout(fadeTimer);
        clearTimeout(timer);
    };
  }, []);

  if (!show) return null;

  return (
     <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
      <svg viewBox="0 0 600 200" className="namaste-svg">
        <text x="50%" y="50%" textAnchor="middle" className="namaste-path">
          Namaste
        </text>
      </svg>
    </div>
  );
};

export default SplashScreen;
