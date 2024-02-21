import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import bgTexture from "../../images/heroBg.jpg";
const svgDelay = 2;
function AnimatedBackground() {
  return (
    <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden opacity-60">
      <motion.div
        animate={{
          transition: {
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
            times: [0, 0.4, 0.8, 1],
          },
          x: [0, 10, -10, 0],
          y: [0, -10, 10, 0],
        }}
        className="w-[110%] h-[110%] absolute -top-10 -left-10 -z-20 opacity-70"
      >
        <img src={bgTexture} className="w-full h-full object-cover" />
      </motion.div>
      <svg
        width="354"
        height="178"
        viewBox="0 0 354 178"
        fill="none"
        className="absolute top-14 right-2/3"
      >
        <motion.path
          d="M353 0V41L191 103H74L1 177"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            transition: { duration: 1.5, delay: svgDelay },
          }}
        />
      </svg>
      <svg
        width="354"
        height="178"
        viewBox="0 0 354 178"
        fill="none"
        className="absolute top-14 left-2/3"
      >
        <motion.path
          d="M1 0V41L163 103H280L353 177"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            transition: { duration: 2, delay: svgDelay },
          }}
        />
      </svg>
      <svg
        width="354"
        height="178"
        viewBox="0 0 354 178"
        fill="none"
        className="absolute bottom-0 left-2/3"
      >
        <motion.path
          d="M1 178V137L163 75H280L353 1"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            transition: { duration: 1.2, delay: svgDelay },
          }}
        />
      </svg>
      <svg
        width="354"
        height="178"
        viewBox="0 0 354 178"
        fill="none"
        className="absolute bottom-0 right-2/3"
      >
        <motion.path
          d="M353 178V137L191 75H74L1 1"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            transition: { duration: 2.1, delay: svgDelay },
          }}
        />
      </svg>
    </div>
  );
}

export default AnimatedBackground;
