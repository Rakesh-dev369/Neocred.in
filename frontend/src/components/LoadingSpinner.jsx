import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ 
  size = 'md', 
  text = 'Loading...', 
  variant = 'spinner',
  color = 'blue'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    blue: 'border-t-blue-600 dark:border-t-blue-400',
    green: 'border-t-green-600 dark:border-t-green-400',
    purple: 'border-t-purple-600 dark:border-t-purple-400',
    red: 'border-t-red-600 dark:border-t-red-400'
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`${size === 'sm' ? 'w-2 h-2' : size === 'lg' ? 'w-4 h-4' : 'w-3 h-3'} bg-blue-600 dark:bg-blue-400 rounded-full`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        );
      
      case 'pulse':
        return (
          <motion.div
            className={`${sizeClasses[size]} bg-blue-600 dark:bg-blue-400 rounded-full`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      
      case 'bars':
        return (
          <div className="flex space-x-1 items-end">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`${size === 'sm' ? 'w-1' : size === 'lg' ? 'w-2' : 'w-1.5'} bg-blue-600 dark:bg-blue-400 rounded-sm`}
                animate={{
                  height: [size === 'sm' ? 8 : size === 'lg' ? 24 : 16, 
                          size === 'sm' ? 16 : size === 'lg' ? 32 : 24, 
                          size === 'sm' ? 8 : size === 'lg' ? 24 : 16]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        );
      
      case 'ring':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <motion.div
              className={`absolute inset-0 rounded-full border-2 border-transparent ${colorClasses[color]}`}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className={`absolute inset-1 rounded-full border-2 border-transparent border-b-gray-300 dark:border-b-gray-600`}
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        );
      
      default:
        return (
          <motion.div 
            className={`${sizeClasses[size]} rounded-full border-2 border-gray-300 dark:border-gray-600 ${colorClasses[color]}`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        );
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="flex flex-col items-center justify-center p-4"
    >
      {renderSpinner()}
      {text && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-sm text-gray-600 dark:text-gray-400 text-center"
        >
          {text}
        </motion.p>
      )}
    </motion.div>
  );
};

export default LoadingSpinner;