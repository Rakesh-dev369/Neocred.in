import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const ProgressIndicator = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-center mb-6">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <motion.div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              index < currentStep 
                ? 'bg-green-500 text-white' 
                : index === currentStep 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            {index < currentStep ? '✓' : index + 1}
          </motion.div>
          {index < steps.length - 1 && (
            <motion.div
              className={`w-12 h-1 mx-2 rounded ${
                index < currentStep ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: index < currentStep ? 1 : 0.3 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const StatusMessage = ({ type, message, isVisible }) => {
  const getStatusConfig = () => {
    switch (type) {
      case 'success':
        return {
          icon: CheckCircleIcon,
          bgColor: 'bg-green-100 dark:bg-green-900/30',
          textColor: 'text-green-800 dark:text-green-200',
          iconColor: 'text-green-600 dark:text-green-400'
        };
      case 'error':
        return {
          icon: ExclamationTriangleIcon,
          bgColor: 'bg-red-100 dark:bg-red-900/30',
          textColor: 'text-red-800 dark:text-red-200',
          iconColor: 'text-red-600 dark:text-red-400'
        };
      default:
        return {
          icon: CheckCircleIcon,
          bgColor: 'bg-blue-100 dark:bg-blue-900/30',
          textColor: 'text-blue-800 dark:text-blue-200',
          iconColor: 'text-blue-600 dark:text-blue-400'
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className={`${config.bgColor} ${config.textColor} p-4 rounded-xl mb-4 flex items-center`}
        >
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Icon className={`h-5 w-5 ${config.iconColor} mr-3`} />
          </motion.div>
          <span className="font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CalculatorLayout = ({ 
  title, 
  children, 
  showProgress = false, 
  steps = [], 
  currentStep = 0,
  status = null,
  onSwipeLeft,
  onSwipeRight 
}) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Handle touch events for mobile swipe gestures
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
    }
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
    }
  };

  return (
    <motion.div 
      className="max-w-6xl mx-auto bg-gray-100 dark:bg-white/5 p-6 rounded-xl mt-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/5"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent, rgba(147, 51, 234, 0.05))",
            "linear-gradient(135deg, rgba(147, 51, 234, 0.1), transparent, rgba(59, 130, 246, 0.05))",
            "linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent, rgba(147, 51, 234, 0.05))"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.h2 
        className="text-2xl font-bold mb-6 text-gray-900 dark:text-white relative z-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h2>
      
      {showProgress && steps.length > 0 && (
        <ProgressIndicator steps={steps} currentStep={currentStep} />
      )}
      
      <StatusMessage 
        type={status?.type} 
        message={status?.message} 
        isVisible={!!status} 
      />
      
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {children}
      </motion.div>
      
      {/* Swipe indicator for mobile */}
      {(onSwipeLeft || onSwipeRight) && (
        <motion.div
          className="absolute bottom-4 right-4 text-xs text-gray-500 dark:text-gray-400 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          👈 Swipe to navigate 👉
        </motion.div>
      )}
    </motion.div>
  );
};

export default CalculatorLayout;