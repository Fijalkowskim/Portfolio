import React, { useEffect, useRef } from "react";
import { motion, useAnimate } from "framer-motion";
interface Props {}
function Logo() {
  const [scope, animate] = useAnimate();
  const lettersAnimation = () => {};
  useEffect(() => {
    animate("p", { y: 10 });
  });
  return (
    <motion.button className=" text-xl italic font-light" ref={scope}>
      <p>Fijalkowskim</p>
    </motion.button>
  );
}

export default Logo;
