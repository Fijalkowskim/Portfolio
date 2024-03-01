import React, { useEffect, useRef, useState } from "react";
import { ProjectData } from "../../models/ProjectData";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
interface Props {
  data: ProjectData;
  inverted?: boolean;
}
const hiddenDistance = 50;
const variants = {
  hiddenLeft: { opacity: 0, x: -hiddenDistance },
  hiddenRight: { opacity: 0, x: hiddenDistance },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1.2 } },
};
const imageAnimDuration = 2;

const imageVariants = {
  initial: { opacity: 0, transition: { duration: imageAnimDuration } },
  animate: { opacity: 1, transition: { duration: imageAnimDuration } },
};
function ProjectCard({ data, inverted }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animControlls = useAnimation();
  const image1Controlls = useAnimation();
  const image2Controlls = useAnimation();
  const [alreadyShown, setAlreadyShown] = useState(false);
  const [nextImage, setNextImage] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const imageHoldDuration = 4.5;
  useEffect(() => {
    if (isInView && !alreadyShown) {
      animControlls.start("visible");
      setTimeout(() => {
        setNextImage(1);
        setAlreadyShown(true);
      }, imageHoldDuration * 1000 + 1000);
    }
  }, [isInView]);
  const imageAnimation = (oldNextImage: number) => {
    image1Controlls.start("initial");
    image2Controlls.start("animate");
    setTimeout(() => {
      const newImage1 =
        oldNextImage + 1 >= data.images.length ? 0 : oldNextImage + 1;
      setCurrentImage(newImage1);
      image1Controlls.start("animate");
      image2Controlls.start("initial");
      setTimeout(() => {
        setNextImage(newImage1 + 1 >= data.images.length ? 0 : newImage1 + 1);
      }, imageHoldDuration * 1000);
    }, imageHoldDuration * 1000);
  };

  useEffect(() => {
    if (isInView && data.images.length > 2) {
      imageAnimation(nextImage);
    }
  }, [nextImage]);
  return (
    <motion.div
      ref={ref}
      className={`flex ${
        inverted ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
      } items-center justify-center gap-8 p-2`}
    >
      <motion.div
        variants={variants}
        initial={`${inverted ? "hiddenRight" : "hiddenLeft"}`}
        animate={animControlls}
        className="relative aspect-video w-full max-w-[30rem] overflow-hidden rounded-md shadow-lg"
      >
        {data.images.length > 2 && (
          <motion.img
            variants={imageVariants}
            initial="initial"
            animate={image2Controlls}
            src={data.images[nextImage] ?? ""}
            alt={data.name}
            className="w-full h-full  absolute top-0 left-0 z-10 object-cover"
          />
        )}
        <motion.img
          initial="animate"
          variants={imageVariants}
          animate={image1Controlls}
          src={data.images[currentImage] ?? ""}
          alt={data.name}
          className="w-full h-full z-10 object-cover"
        />
      </motion.div>
      <motion.div
        variants={variants}
        initial={`${inverted ? "hiddenLeft" : "hiddenRight"}`}
        animate={animControlls}
        className={`flex flex-col "items-start text-center lg:text-left"
        justify-center gap-2`}
      >
        <h1 className="text-4xl font-normal tracking-wide">{data.name}</h1>
        <p className="max-w-lg">{data.description}</p>
        <h2 className="max-w-lg ">
          Technologies:{" "}
          <span className="text-lg text-action-700 font-normal">
            {data.technologies}
          </span>
        </h2>
        <div className="max-w-lg flex justify-center items-center gap-6">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.01 }}
            href={data.githubLink}
            target="_blank"
            className="flex items-center justify-center gap-1 text-2xl cursor-pointer transition-all hover:text-action-700"
          >
            <FaGithub />
            GitHub
          </motion.a>
          {data.websiteLink && (
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1.01 }}
              href={data.websiteLink}
              target="_blank"
              className="flex items-center justify-center gap-1 text-2xl cursor-pointer transition-all hover:text-action-700"
            >
              <MdOutlineWeb />
              Website
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
