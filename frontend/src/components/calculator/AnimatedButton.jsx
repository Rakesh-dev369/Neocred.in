import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ 
  children, 
  onClick, 
  type = "button", 
  disabled = false, 
  loading = false,
  variant = "primary",
  size = "md",
  className = "",
  ...props 
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl';
      case 'secondary':
        return 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white';
      case 'success':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl';
      case 'danger':
        return 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl';
      default:
        return 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3';
    }
  };

  const handleClick = (e) => {
    if (disabled || loading) return;
    
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={`
        relative overflow-hidden font-semibold rounded-xl transition-all duration-300 
        focus:outline-none focus:ring-4 focus:ring-blue-500/20 
        disabled:opacity-50 disabled:cursor-not-allowed
        ${getVariantStyles()} ${getSizeStyles()} ${className}
      `}
      whileHover={!disabled && !loading ? { 
        scale: 1.02, 
        y: -2,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
      } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {/* Ripple effect */}
      {isClicked && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-xl"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      )}
      
      {/* Shimmer effect */}
      {!disabled && !loading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      )}
      
      {/* Loading spinner */}
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
      
      <motion.span
        className={`relative z-10 flex items-center justify-center ${loading ? 'opacity-0' : 'opacity-100'}`}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default AnimatedButton;