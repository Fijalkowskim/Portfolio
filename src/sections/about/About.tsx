import React, { useEffect, useRef } from "react";
import SectionBase from "../SectionBase";
import AboutPic from "../../images/about.jpg";
import AboutBG from "../../images/aboutBG.jpg";
import { useAnimation, useInView, motion } from "framer-motion";
const hiddenDistance = 200;
const variants = {
  hiddenLeft: { opacity: 0, x: -hiddenDistance },
  hiddenRight: { opacity: 0, x: hiddenDistance },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
};
function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animControlls = useAnimation();
  useEffect(() => {
    if (isInView) {
      animControlls.start("visible");
    }
  }, [isInView]);
  return (
    <SectionBase name="About">
      <div className="relative bg-primary-900 min-h-screen lg:text-left text-center flex-col-reverse lg:flex-row flex items-center justify-center text-primary-50 gap-6 p-2 z-10">
        <img
          src={AboutBG}
          className="w-full h-full absolute top-0 left-0 -z-10 object-cover opacity-15"
        />
        <motion.div
          ref={ref}
          className="aspect-square w-60 sm:w-96 rounded-lg overflow-hidden shadow-md"
          variants={variants}
          initial="hiddenLeft"
          animate={animControlls}
        >
          <img
            src={AboutPic}
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hiddenRight"
          animate={animControlls}
          className="flex flex-col justify-center gap-2"
        >
          <h1 className="text-6xl font-thin">About me</h1>
          <p className="max-w-xl">
            I am a 22-year-old Polish computer science student with a passion
            for creating innovative websites and robust backend services ready
            to embark on a career in the IT industry. My expertise lies in
            crafting intelligent, responsive website designs and developing
            well-organized backend applications featuring clean, modular code. I
            have consistently enhanced my skills through numerous personal
            projects.
          </p>
        </motion.div>
      </div>
    </SectionBase>
  );
}

export default About;
