import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CopyButton = ({ textToCopy, children, className = "", onClick }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick?.(e);
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      className={`relative ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={copied ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>

      {/* Success feedback */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
          >
            Copied!
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-green-500"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success particles */}
      {copied && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full"
              initial={{ 
                x: "50%", 
                y: "50%", 
                scale: 0 
              }}
              animate={{ 
                x: `${50 + (Math.random() - 0.5) * 80}%`,
                y: `${50 + (Math.random() - 0.5) * 80}%`,
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 0.5,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      )}
    </motion.button>
  );
};

export default CopyButton;