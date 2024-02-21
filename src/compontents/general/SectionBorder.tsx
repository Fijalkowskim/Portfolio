import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
interface Props {
  text: string;
  repeat: number;
}
const scrollTime = 30;
const variants = {
  initial: { x: 0 },
  animate: {
    x: "100%",
    transition: { duration: scrollTime, ease: "easeInOut" },
  },
  reset: { x: 0, transition: { duration: scrollTime, ease: "easeInOut" } },
};
function SectionBorder(props: Props) {
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
        className="flex-shrink-0 w-full flex items-center justify-start overflow-hidden flex-nowrap gap-10 tracking-widest py-1 bg-primary-950 text-primary-50 pl-6"
      >
        {[...Array(props.repeat)].map((_, index) => (
          <p key={index} className="flex-shrink-0">
            {props.text}
          </p>
        ))}
      </motion.div>
      <motion.div
        variants={variants}
        initial="initial"
        animate={controls}
        className="flex-shrink-0 w-full flex items-center justify-end overflow-hidden flex-nowrap gap-10 tracking-widest py-1 bg-primary-950 text-primary-50 -mr-[0.5px] pr-6"
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
