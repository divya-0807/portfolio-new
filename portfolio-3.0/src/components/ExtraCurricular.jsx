import React from 'react';
import { motion } from 'framer-motion';
import { clubData } from '../data/clubs';

const ExtraCurricular = () => {
  return (
    <div className="w-full mb-14 py-32 bg-black text-white relative">
      <h1 className="text-4xl font-semibold text-center mb-52">
        Extra Curricular Activities
      </h1>

      <div className="relative w-full flex justify-center items-center">
        {/* Horizontal Timeline */}
        <div className="absolute top-1/2 w-[90%] h-[2px] bg-white z-0" />

        {/* Timeline Nodes */}
        <div className="w-[90%] flex justify-between items-center relative z-10">
          {clubData.map((item, index) => {
            const isAbove = index % 2 === 0;
            return (
              <div key={index} className="relative w-1/4 flex justify-center">
                <motion.div
                  initial={{ y: isAbove ? -50 : 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute ${
                    isAbove ? 'bottom-[60%]' : 'top-[60%]'
                  } text-center`}
                >
                  {/* TOP (Above Timeline) */}
                  {isAbove && (
                    <>
                      <p className="text-sm italic">Role: {item.name}</p>
                      <h2 className="text-lg font-bold">{item.club}</h2>
                      
                      <img
                        src={item.icon}
                        alt={item.club}
                        className="w-20 h-20 rounded-full mx-auto mb-2 mt-2 border-2 border-white"
                      />
                      {/* Downward Line from post to timeline */}
                      <div className="w-[2px] h-10 bg-white mx-auto mt-2" />
                    </>
                  )}

                  {/* BOTTOM (Below Timeline) */}
                  {!isAbove && (
                    <>
                      {/* Upward Line from timeline to content */}
                      <div className="w-[2px] h-10 bg-white mx-auto mb-2" />
                      <img
                        src={item.icon}
                        alt={item.club}
                        className="w-20 h-20 rounded-full mx-auto mb-2 py-1 border-2 border-white"
                      />
                      <h2 className="text-lg font-bold">{item.club}</h2>
                      <p className="text-sm italic">Role: {item.name}</p>
                    </>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExtraCurricular;
