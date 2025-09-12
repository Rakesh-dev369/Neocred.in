import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ 
  value = 0, 
  max = 100, 
  showLabel = true, 
  showPercentage = true,
  color = "blue",
  size = "md",
  animated = true,
  label = "",
  className = ""
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const percentage = Math.min((value / max) * 100, 100);

  const colors = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    red: 'from-red-500 to-red-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  };

  const sizes = {
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-6'
  };

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setAnimatedValue(percentage), 100);
      return () => clearTimeout(timer);
    } else {
      setAnimatedValue(percentage);
    }
  }, [percentage, animated]);

  return (
    <div className={`w-full ${className}`}>
      {(showLabel || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {showLabel && (
            <motion.span 
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {label}
            </motion.span>
          )}
          {showPercentage && (
            <motion.span 
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {Math.round(animatedValue)}%
            </motion.span>
          )}
        </div>
      )}
      
      <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${sizes[size]}`}>
        <motion.div
          className={`${sizes[size]} bg-gradient-to-r ${colors[color]} rounded-full relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={{ width: `${animatedValue}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          />
          
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

    </div>
  );
};

export default ProgressBar;