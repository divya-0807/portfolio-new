import React from "react";
import { motion } from "framer-motion";

const Card = ({ heading, stack }) => {
  const randomDelay = Math.random() * 3;

  return (
    <motion.div
      className="w-[280px] bg-[#1c1b23] rounded-lg h-[290px] text-white shadow-md"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: randomDelay,
      }}
    >
      <div className="flex flex-col p-5">
        <h1 className="text-3xl mb-3">{heading}</h1>
        <div className="flex flex-row flex-wrap justify-evenly gap-4">
          {stack.map((element, index) => (
            <div className="flex flex-col items-center text-center" key={index}>
              <span className="text-xl">{element.icon}</span>
              <span className="text-sm mt-1">{element.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
