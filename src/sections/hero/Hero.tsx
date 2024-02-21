import React from "react";
import profilePicture from "../../images/profilePicture.jpg";
import AnimatedDescription from "./AnimatedDescription";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
function Hero() {
  return (
    <div
      id="hero"
      className="realtive h-screen flex sm:flex-row flex-col text-center sm:text-left items-center justify-center gap-3 overflow-hidden sm:p-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            delay: 1,
            type: "spring",
            stiffness: 67,
            damping: 11,
            mass: 1,
          },
        }}
        className="aspect-square w-60 sm:w-80 rounded-full shadow-lg border-4 border-primary-50 overflow-hidden flex-shrink-0"
      >
        <img src={profilePicture} className="w-full h-full" />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: {
            delay: 1,
            type: "spring",
            stiffness: 75,
            damping: 12,
            mass: 0.5,
          },
        }}
      >
        <p className="text-2xl">Hi, I am</p>
        <p className="text-4xl sm:text-5xl ">Mateusz Fijałkowski</p>
        <AnimatedDescription />
      </motion.div>
      <AnimatedBackground />
    </div>
  );
}

export default Hero;
