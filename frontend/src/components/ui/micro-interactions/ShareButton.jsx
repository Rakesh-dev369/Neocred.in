import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ShareButton = ({ onShare, icon, children, className = "" }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsClicked(true);
    onShare?.(e);
    setTimeout(() => setIsClicked(false), 600);
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      {/* Ripple effect */}
      {isClicked && (
        <motion.div
          className="absolute inset-0 bg-blue-400 rounded-full opacity-30"
          initial={{ scale: 0 }}
          animate={{ scale: 4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
      
      <motion.div
        className="relative z-10 flex items-center gap-2"
        animate={isClicked ? { y: [-2, 0] } : {}}
        transition={{ duration: 0.2 }}
      >
        {icon && (
          <motion.div
            animate={isClicked ? { rotate: [0, 10, -10, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            {icon}
          </motion.div>
        )}
        {children}
      </motion.div>
    </motion.button>
  );
};

export default ShareButton;