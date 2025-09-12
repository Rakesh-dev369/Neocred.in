import React from 'react';
import { motion } from 'framer-motion';

const TypingIndicator = ({ darkMode = false, message = "FinBot is analyzing..." }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex justify-start pl-10"
    >
      {/* Avatar */}
      <div className="absolute left-0 top-0">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">🤖</span>
        </div>
      </div>
      
      <motion.div 
        animate={{ 
          boxShadow: [
            "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            "0 10px 15px -3px rgba(59, 130, 246, 0.2)",
            "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`px-4 py-3 rounded-2xl rounded-bl-md max-w-xs backdrop-blur-sm border ${
          darkMode 
            ? 'bg-gray-800/90 border-gray-700 text-gray-100' 
            : 'bg-white/90 border-gray-200 text-gray-800'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">{message}</span>
          <div className="flex gap-1">
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity,
                delay: 0.2,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity,
                delay: 0.4,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
          </div>
        </div>
        
        {/* Processing indicator */}
        <motion.div
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mt-2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default TypingIndicator;