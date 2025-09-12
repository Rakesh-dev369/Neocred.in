import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CountingNumber = ({ value, duration = 1.5, prefix = "₹", suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(Math.floor(value * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <motion.span
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {prefix}{displayValue.toLocaleString()}{suffix}
    </motion.span>
  );
};

const AnimatedResults = ({ results, isVisible = true, title = "Results" }) => {
  return (
    <AnimatePresence>
      {isVisible && results && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="space-y-6"
        >
          <motion.div 
            className="bg-gray-200 dark:bg-white/5 p-6 rounded-xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {/* Background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            
            <motion.h3 
              className="text-lg font-semibold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {title}
            </motion.h3>
            
            <div className="space-y-3 relative z-10">
              {Object.entries(results).map(([key, value], index) => {
                if (key === 'data') return null;
                
                const formatKey = (k) => {
                  return k.replace(/([A-Z])/g, ' $1')
                    .replace(/^./, str => str.toUpperCase())
                    .replace(/([a-z])([A-Z])/g, '$1 $2');
                };

                const getValueColor = (k) => {
                  if (k.includes('return') || k.includes('gain') || k.includes('profit')) {
                    return 'text-green-600 dark:text-green-400';
                  }
                  if (k.includes('invested') || k.includes('principal')) {
                    return 'text-blue-600 dark:text-blue-400';
                  }
                  if (k.includes('maturity') || k.includes('total') || k.includes('amount')) {
                    return 'text-yellow-600 dark:text-yellow-400';
                  }
                  return 'text-purple-600 dark:text-purple-400';
                };

                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex justify-between items-center py-2 border-b border-gray-300 dark:border-white/20 last:border-b-0"
                  >
                    <span className="text-gray-700 dark:text-white/80">
                      {formatKey(key)}:
                    </span>
                    <motion.span 
                      className={`font-semibold ${getValueColor(key)} ${
                        key.includes('maturity') || key.includes('total') ? 'text-lg' : ''
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <CountingNumber 
                        value={typeof value === 'number' ? value : 0} 
                        duration={1.5 + index * 0.2}
                      />
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedResults;