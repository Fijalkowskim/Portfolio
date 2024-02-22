import React from "react";
import { AnimationControls, Variants, motion } from "framer-motion";
import { cn } from "../../helpers/helpers";
import { SkillData } from "../../models/SkillData";
interface Props {
  skill: SkillData;
  delay?: number;
  controlls?: AnimationControls;
  className?: string;
  variant?: Variants;
}
function SkillCard(props: Props) {
  return (
    <motion.div
      variants={props.variant}
      initial={props.variant ? "initial" : { scale: 0 }}
      animate={props.controlls ?? { scale: 1 }}
      transition={{ delay: props.delay ?? 0 }}
      className={cn(
        "p-1 aspect-square w-32 flex flex-col items-center justify-center rounded-md text-primary-950 text-center flex-shrink-0 ",
        props.className
      )}
    >
      <img
        src={props.skill.img}
        alt={props.skill.name}
        className="w-full h-full object-cover"
      />
      <p className="text-md">{props.skill.name}</p>
    </motion.div>
  );
}

export default SkillCard;
