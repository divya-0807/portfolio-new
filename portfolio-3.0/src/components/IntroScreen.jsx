import React, { useEffect, useState } from 'react';


const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true); // start fading
    }, 3000);

    const hideTimer = setTimeout(() => {
      onFinish();
    }, 3800); // fade time + buffer

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

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
