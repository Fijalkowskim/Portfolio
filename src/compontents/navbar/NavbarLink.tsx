import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface Props {
  to: string;
  name: string;
}
function NavbarLink(props: Props) {
  return (
    <motion.button
      className={`group transition-colors hover:text-action-600/80`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.01 }}
    >
      <a href={props.to}>{props.name}</a>
      <div className="w-full h-[0.1px] bg-action-600/50 -mt-1 scale-0 origin-center group-hover:scale-100 transition-all" />
    </motion.button>
  );
}

export default NavbarLink;
