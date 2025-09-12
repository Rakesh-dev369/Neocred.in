import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = "md",
  showCloseButton = true,
  closeOnOverlayClick = true,
  className = ""
}) => {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-full mx-4'
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleOverlayClick}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              duration: 0.3 
            }}
            className={`
              relative w-full ${sizes[size]} bg-white dark:bg-gray-800 
              rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700
              max-h-[90vh] overflow-hidden ${className}
            `}
          >
            {/* Header */}
            {(title || showCloseButton) && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700"
              >
                {title && (
                  <motion.h2
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    {title}
                  </motion.h2>
                )}
                
                {showCloseButton && (
                  <motion.button
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 90,
                      backgroundColor: "rgba(239, 68, 68, 0.1)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-2 rounded-full text-gray-500 hover:text-red-500 transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                )}
              </motion.div>
            )}

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]"
            >
              {children}
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl -translate-y-16 translate-x-16"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-500 to-blue-500 rounded-full blur-3xl translate-y-12 -translate-x-12"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;