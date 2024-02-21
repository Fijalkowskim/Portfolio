import Reactfrom from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../../helpers/helpers";
interface Props {
  className?: string;
  text: string;
  to: string;
}
const letterAnimation = {
  initial: { y: 0, x: 0 },
  animate: { y: [0, -1, 0], x: [0, 1, 0] },
};
function NavbarLink(props: Props) {
  const controls = useAnimation();
  return (
    <motion.a
      href={props.to}
      className={cn(
        "group font-light relative w-fit flex-shrink-0 cursor-pointer transition-all hover:text-action-800 active:text-action-950",
        props.className
      )}
      onHoverStart={() => {
        controls.start("animate");
      }}
    >
      {props.text.split("").map((letter, idx) => (
        <motion.span
          className="inline-block "
          transition={{ delay: idx * 0.03, times: [0, 0.4, 1] }}
          key={idx}
          variants={letterAnimation}
          initial="initial"
          animate={controls}
        >
          {letter}
        </motion.span>
      ))}
    </motion.a>
  );
}

export default NavbarLink;
