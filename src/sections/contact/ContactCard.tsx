import { motion } from "framer-motion";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  title: string;
  linkText: string;
  link?: string;
}
function ContactCard(props: Props) {
  return (
    <div className="flex flex-col items-center justify-center  text-xl lg:w-[30rem] overflow-hidden">
      <h1 className="flex items-center justify-center gap-1 text-2xl font-normal pointer-events-none">
        {props.children} {props.title}
      </h1>
      {props.link ? (
        <motion.a
          href={props.link}
          target="_blank"
          className="text-action-800 transition-all hover:text-action-700 hover:tracking-wider"
        >
          {props.linkText}
        </motion.a>
      ) : (
        <p>{props.linkText}</p>
      )}
    </div>
  );
}

export default ContactCard;
