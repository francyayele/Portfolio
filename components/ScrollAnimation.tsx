import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
}

export const FadeUp = ({ children, className = "" }: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
        transition: {
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({ children, className = "" }: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{
        opacity: isInView ? 1 : 0,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleUp = ({ children, className = "" }: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.8,
        transition: {
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
