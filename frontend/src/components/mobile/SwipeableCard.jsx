import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const SwipeableCard = ({ 
  children, 
  onSwipeLeft, 
  onSwipeRight, 
  threshold = 100,
  className = ""
}) => {
  const [exitX, setExitX] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(offset) < 10 && Math.abs(velocity) < 100) {
      // This was likely a click, not a swipe - don't interfere
      return;
    }

    if (offset > threshold || velocity > 500) {
      setExitX(1000);
      onSwipeRight?.();
    } else if (offset < -threshold || velocity < -500) {
      setExitX(-1000);
      onSwipeLeft?.();
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: -200, right: 200 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      animate={exitX !== 0 ? { x: exitX } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      
      {/* Swipe indicators */}
      <motion.div
        className="absolute inset-0 bg-green-500/20 rounded-lg flex items-center justify-start pl-8"
        style={{ opacity: useTransform(x, [0, 100], [0, 1]) }}
      >
        <span className="text-green-600 text-2xl">→</span>
      </motion.div>
      
      <motion.div
        className="absolute inset-0 bg-red-500/20 rounded-lg flex items-center justify-end pr-8"
        style={{ opacity: useTransform(x, [-100, 0], [1, 0]) }}
      >
        <span className="text-red-600 text-2xl">←</span>
      </motion.div>
    </motion.div>
  );
};

export default SwipeableCard;