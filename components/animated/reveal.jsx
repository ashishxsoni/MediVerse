'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Reveal({ children, variant, className = '', delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variant}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
