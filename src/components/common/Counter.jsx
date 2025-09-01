import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

// This is the definitive, working version of the Counter component.
const Counter = ({ value, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Triggers animation only once

  // 1. Create a spring animation that goes from 0 to the target value
  const spring = useSpring(0, { duration: 0.5, stiffness: 100, damping: 50 });

  // 2. This hook starts the animation when the component is visible
  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  // 3. This transforms the spring value into a rounded integer for display
  const rounded = useTransform(spring, (latest) => Math.round(latest));

  return (
    <h3 ref={ref}>
      {/* 4. Display the animated, rounded number */}
      <motion.span>{rounded}</motion.span>
      {children}
    </h3>
  );
};

export default Counter;
