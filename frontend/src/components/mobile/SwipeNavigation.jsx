import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SwipeNavigation = ({ 
  items = [], 
  onItemChange, 
  className = "" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < items.length) {
      setDirection(newDirection);
      setCurrentIndex(newIndex);
      onItemChange?.(items[newIndex], newIndex);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0"
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
              onItemChange?.(items[index], index);
            }}
            whileTap={{ scale: 1.2 }}
          />
        ))}
      </div>

      {/* Navigation arrows (hidden on mobile) */}
      <div className="hidden md:block">
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg"
          onClick={() => paginate(-1)}
          disabled={currentIndex === 0}
        >
          ←
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg"
          onClick={() => paginate(1)}
          disabled={currentIndex === items.length - 1}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default SwipeNavigation;