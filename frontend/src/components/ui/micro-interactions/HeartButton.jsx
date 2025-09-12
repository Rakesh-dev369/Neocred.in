import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeartButton = ({ isLiked = false, onClick, size = "md", className = "" }) => {
  const [liked, setLiked] = useState(isLiked);

  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setLiked(!liked);
    onClick?.(e);
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`relative ${className}`}
      whileTap={{ scale: 0.8 }}
    >
      <motion.div
        animate={liked ? { scale: [1, 1.3, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`${sizes[size]} flex items-center justify-center`}
      >
        <motion.svg
          viewBox="0 0 24 24"
          className={`${sizes[size]} ${liked ? 'text-red-500' : 'text-gray-400'}`}
          fill={liked ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </motion.svg>
      </motion.div>
      
      {/* Particles effect */}
      {liked && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-400 rounded-full"
              initial={{ 
                x: "50%", 
                y: "50%", 
                scale: 0,
                opacity: 1 
              }}
              animate={{ 
                x: `${50 + (Math.random() - 0.5) * 100}%`,
                y: `${50 + (Math.random() - 0.5) * 100}%`,
                scale: [0, 1, 0],
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      )}
    </motion.button>
  );
};

export default HeartButton;