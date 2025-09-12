import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CountingNumber = ({ 
  value = 0, 
  duration = 2, 
  prefix = "", 
  suffix = "",
  decimals = 0,
  separator = ",",
  className = "",
  animate = true
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!animate) {
      setDisplayValue(value);
      return;
    }

    let startTime;
    let animationFrame;

    const animateValue = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = value * easeOutQuart;
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateValue);
      }
    };

    animationFrame = requestAnimationFrame(animateValue);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration, animate]);

  const formatNumber = (num) => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join('.');
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        animate={{ 
          textShadow: animate ? [
            "0 0 0px rgba(59, 130, 246, 0)",
            "0 0 10px rgba(59, 130, 246, 0.5)",
            "0 0 0px rgba(59, 130, 246, 0)"
          ] : "none"
        }}
        transition={{ duration: 0.5, delay: duration }}
      >
        {prefix}{formatNumber(displayValue)}{suffix}
      </motion.span>
    </motion.span>
  );
};

export default CountingNumber;