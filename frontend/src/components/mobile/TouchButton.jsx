import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TouchButton = ({ 
  children, 
  onClick, 
  disabled = false,
  variant = "primary",
  size = "md",
  className = "",
  haptic = true,
  ...props 
}) => {
  const [ripples, setRipples] = useState([]);

  const variants = {
    primary: 'bg-blue-600 text-white active:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 active:bg-gray-300',
    success: 'bg-green-600 text-white active:bg-green-700'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-[40px]',
    md: 'px-6 py-3 min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[56px]'
  };

  const handleTouch = (e) => {
    if (disabled) return;

    // Haptic feedback
    if (haptic && navigator.vibrate) {
      navigator.vibrate(10);
    }

    // Ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);

    onClick?.(e);
  };

  return (
    <motion.button
      className={`
        relative overflow-hidden font-semibold rounded-xl transition-all duration-200
        focus:outline-none focus:ring-4 focus:ring-blue-500/20 
        disabled:opacity-50 disabled:cursor-not-allowed
        select-none touch-manipulation
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      onTouchStart={handleTouch}
      onClick={!('ontouchstart' in window) ? onClick : undefined}
      disabled={disabled}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );
};

export default TouchButton;