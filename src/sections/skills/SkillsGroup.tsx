import React, { useEffect, useRef } from "react";
import { SkillData } from "../../models/SkillData";
import SkillCard from "./SkillCard";
import { motion, useAnimation, useInView } from "framer-motion";
interface Props {
  header: string;
  skills: SkillData[];
}
const cardVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
};
const delayPerCard = 0.05;
function SkillsGroup(props: Props) {
  const controlls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controlls.start("animate");
    }
  }, [isInView, controlls]);
  return (
    <div className="flex flex-col items-center flex-wrap justify-center p-2 text-center sm:gap-6">
      <motion.h1
        variants={cardVariants}
        initial="initial"
        animate={controlls}
        className="text-4xl sm:text-5xl uppercase text-primary-950 tracking-wide"
      >
        {props.header}
      </motion.h1>
      <motion.div
        layout
        ref={ref}
        transition={{ delayChildren: 1 }}
        className="flex flex-row gap-4 p-2 w-full rounded-md items-start justify-center flex-wrap max-w-full"
      >
        {props.skills.map((skill, idx) => (
          <SkillCard
            key={idx}
            skill={skill}
            controlls={controlls}
            variant={cardVariants}
            delay={delayPerCard * idx}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default SkillsGroup;
