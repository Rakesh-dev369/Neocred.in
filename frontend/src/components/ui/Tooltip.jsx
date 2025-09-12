import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip = ({ 
  children, 
  content, 
  position = "top",
  delay = 0.5,
  className = "",
  contentClassName = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [actualPosition, setActualPosition] = useState(position);
  const triggerRef = useRef(null);
  const timeoutRef = useRef(null);

  const positions = {
    top: {
      tooltip: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      arrow: 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-900 dark:border-t-white'
    },
    bottom: {
      tooltip: 'top-full left-1/2 -translate-x-1/2 mt-2',
      arrow: 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-900 dark:border-b-white'
    },
    left: {
      tooltip: 'right-full top-1/2 -translate-y-1/2 mr-2',
      arrow: 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-900 dark:border-l-white'
    },
    right: {
      tooltip: 'left-full top-1/2 -translate-y-1/2 ml-2',
      arrow: 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-900 dark:border-r-white'
    }
  };

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const getAnimationVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    };

    switch (actualPosition) {
      case 'top':
        return {
          hidden: { ...baseVariants.hidden, y: 10 },
          visible: { ...baseVariants.visible, y: 0 }
        };
      case 'bottom':
        return {
          hidden: { ...baseVariants.hidden, y: -10 },
          visible: { ...baseVariants.visible, y: 0 }
        };
      case 'left':
        return {
          hidden: { ...baseVariants.hidden, x: 10 },
          visible: { ...baseVariants.visible, x: 0 }
        };
      case 'right':
        return {
          hidden: { ...baseVariants.hidden, x: -10 },
          visible: { ...baseVariants.visible, x: 0 }
        };
      default:
        return baseVariants;
    }
  };

  return (
    <div 
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={triggerRef}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && content && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={getAnimationVariants()}
            transition={{ 
              type: "spring", 
              damping: 20, 
              stiffness: 300,
              duration: 0.2 
            }}
            className={`
              absolute z-50 ${positions[actualPosition].tooltip}
            `}
          >
            {/* Tooltip Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              className={`
                px-3 py-2 text-sm text-white bg-gray-900 dark:bg-white dark:text-gray-900 
                rounded-lg shadow-lg whitespace-nowrap max-w-xs break-words
                backdrop-blur-sm border border-gray-700 dark:border-gray-300
                ${contentClassName}
              `}
            >
              {content}
              
              {/* Shimmer Effect */}
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: '100%', opacity: [0, 0.5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-lg"
              />
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.15, type: "spring" }}
              className={`
                absolute w-0 h-0 border-4 ${positions[actualPosition].arrow}
              `}
            />

            {/* Glow Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.3, scale: 1.2 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md -z-10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;