import React from "react";
import { motion } from "framer-motion";

// This is our reusable "animation box" component
const AnimateOnScroll = ({ children, delay = 0, duration = 0.6 }) => {
  // These are the animation properties
  const variants = {
    // The "hidden" state: element is invisible and slightly lower
    hidden: { opacity: 0, y: 30 },
    // The "visible" state: element fades in and moves up to its final position
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden" // Start in the "hidden" state
      whileInView="visible" // Animate to the "visible" state when it enters the screen
      viewport={{ once: true, amount: 0.2 }} // Trigger animation once, when 20% of the element is visible
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
