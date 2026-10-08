import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -16 },
};

const pageTransition = {
  duration: 0.3,
  ease: 'easeInOut',
};

export default function PageTransition({ children, className = '' }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`w-full flex-grow ${className}`}
    >
      {children}
    </motion.div>
  );
}