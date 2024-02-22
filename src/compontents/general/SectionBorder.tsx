import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
export enum BorderDirection {
  LEFT,
  RIGHT,
}
interface Props {
  text: string;
  repeat: number;
  direction?: BorderDirection;
}
const scrollTime = 30;

function SectionBorder(props: Props) {
  const variants = {
    initial: { x: props.direction === BorderDirection.LEFT ? "100vw" : 0 },
    animate: {
      x: props.direction === BorderDirection.LEFT ? 0 : "100vw",
      transition: { duration: scrollTime, ease: "easeInOut" },
    },
    reset: {
      x: props.direction === BorderDirection.LEFT ? "100vw" : 0,
      transition: { duration: scrollTime, ease: "easeInOut" },
    },
  };

  const controls = useAnimation();
  const [animReset, setAnimReset] = useState(true);
  const textAnimation = async () => {
    controls.start("animate");
    setTimeout(async () => {
      controls.start("reset");
      setTimeout(async () => {
        setAnimReset((prev) => !prev);
      }, scrollTime * 1000);
    }, scrollTime * 1000);
  };
  useEffect(() => {
    textAnimation();
  }, [controls, animReset]);
  return (
    <div className="w-full overflow-hidden flex flex-row-reverse justify-start">
      <motion.div
        variants={variants}
        initial="initial"
        animate={controls}
        className={`flex-shrink-0 w-[250%] flex items-center ${
          props.direction === BorderDirection.LEFT
            ? "justify-start"
            : "justify-end"
        } overflow-hidden flex-nowrap gap-10 tracking-widest py-1 bg-primary-950 text-primary-50 px-6`}
      >
        {[...Array(props.repeat)].map((_, index) => (
          <p key={index} className="flex-shrink-0">
            {props.text}
          </p>
        ))}
      </motion.div>
    </div>
  );
}

export default SectionBorder;
