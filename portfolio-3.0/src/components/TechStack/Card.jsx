import React from "react";
import { motion } from "framer-motion";

const Card = ({ heading, stack }) => {
  // random delay between 0 and 3
  const randomDelay = Math.random() * 3;

  return (
    <motion.div
      className="w-[280px] bg-[#1c1b23] rounded-lg h-[290px]"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: randomDelay, 
      }}
    >
      <div className="flex flex-col p-5">
        <div>
          <h1 className="text-3xl">{heading}</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-evenly pt-4 gap-x-5">
          {stack.map((element, index) => (
            <div className="m-2 gap-8" key={index}>
              <div className="flex flex-col items-center justify-center gap-1 font-sans">
                <span>{element.icon}</span>
                <span className="text-sm">{element.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
