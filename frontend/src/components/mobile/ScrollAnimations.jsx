import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = "" 
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y: smoothY }}>
        {children}
      </motion.div>
    </div>
  );
};

export const FadeInOnScroll = ({ 
  children, 
  threshold = 0.1, 
  className = "" 
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleOnScroll = ({ 
  children, 
  scaleRange = [0.8, 1], 
  className = "" 
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], 1, scaleRange[1]]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StickyProgress = ({ className = "" }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50 ${className}`}
      style={{ scaleX }}
    />
  );
};

export const ScrollReveal = ({ 
  children, 
  direction = "up", 
  distance = 50, 
  className = "" 
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"]
  });

  const getTransform = () => {
    switch (direction) {
      case 'up': return [distance, 0];
      case 'down': return [-distance, 0];
      case 'left': return [distance, 0];
      case 'right': return [-distance, 0];
      default: return [distance, 0];
    }
  };

  const [start, end] = getTransform();
  const y = direction === 'up' || direction === 'down' 
    ? useTransform(scrollYProgress, [0, 1], [start, end])
    : 0;
  const x = direction === 'left' || direction === 'right'
    ? useTransform(scrollYProgress, [0, 1], [start, end])
    : 0;
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};