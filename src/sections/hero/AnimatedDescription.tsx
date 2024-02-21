import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
interface DescriptionData {
  text: string;
  delayAfter: number;
}
const descriptions: DescriptionData[] = [
  {
    text: "Front-end developer",
    delayAfter: 1.5,
  },
  {
    text: "Back-end developer",
    delayAfter: 1.5,
  },
  {
    text: "Full-stack developer",
    delayAfter: 4,
  },
];
const letterAnimation = {
  initial: { x: -20, scale: 0 },
  animate: { x: 0, scale: 1 },
  shake: { y: [0, 5, -5, 5 - 5, 0], scale: [1, 1, 1, 0.6, 0.3, 0] },
};

const delayPerLetter = 0.03;

function AnimatedDescription() {
  const controls = useAnimation();
  const [descriptionIdx, setDescriptionIdx] = useState(0);

  useEffect(() => {
    const textAnimation = async () => {
      setTimeout(async () => {
        try {
          controls.start("animate");
          setTimeout(async () => {
            controls.start("shake");
            setTimeout(async () => {
              setDescriptionIdx((prev) =>
                prev + 1 >= descriptions.length ? 0 : prev + 1
              );
            }, descriptions[descriptionIdx].text.length * delayPerLetter * 1000 + 1000);
          }, descriptions[descriptionIdx].text.length * delayPerLetter * 1000 + descriptions[descriptionIdx].delayAfter * 1000);
        } catch (err) {
          console.log(err);
        }
      }, 1000);
    };

    textAnimation();
  }, [controls, descriptionIdx]);
  return (
    <motion.div className="text-6xl uppercase font-code mt-2 font-medium text-action-700">
      {[...descriptions[descriptionIdx].text].map((letter, idx) => (
        <motion.span
          className={`${letter === " " ? "block" : "inline-block"}`}
          transition={{
            delay: idx * delayPerLetter,
          }}
          key={idx}
          variants={letterAnimation}
          initial="initial"
          animate={controls}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default AnimatedDescription;
