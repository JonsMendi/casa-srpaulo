/* This file contains motion-framer variants to be applied all over the project */

export const titleVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeInVariant = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };
};

export const containerVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export const buttonVariants = {
  rest: {
    backgroundColor: "rgba(0,0,0, 0.2)",
    color: "#fff",
    scale: 1,
  },
  hover: {
    backgroundColor: "rgba(0,0,0, 0.2)",
    color: "#000",
    scale: 1.1,
  },
  tap: {
    backgroundColor: "rgba(0,0,0, 0.2)",
    color: "#fff",
    scale: 0.9,
  },
};

const motionVariants = {
  titleVariant,
  fadeInVariant,
  containerVariants,
  buttonVariants,
};


export default motionVariants;
