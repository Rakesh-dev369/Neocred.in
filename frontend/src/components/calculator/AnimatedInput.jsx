import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Field, ErrorMessage } from 'formik';

const AnimatedInput = ({ 
  name, 
  label, 
  type = "number", 
  placeholder, 
  prefix = "₹", 
  suffix = "", 
  step,
  className = "",
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <motion.label 
        className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
          isFocused ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-white/80'
        }`}
        animate={{ scale: isFocused ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.label>
      
      <div className="relative">
        {prefix && (
          <motion.span 
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-sm transition-colors duration-200 ${
              isFocused ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
            }`}
            animate={{ scale: isFocused ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {prefix}
          </motion.span>
        )}
        
        <Field name={name}>
          {({ field, meta }) => (
            <motion.input
              {...field}
              {...props}
              type={type}
              step={step}
              placeholder={placeholder}
              onWheel={(e) => e.target.blur()}
              onFocus={(e) => {
                setIsFocused(true);
                field.onFocus && field.onFocus(e);
              }}
              onBlur={(e) => {
                setIsFocused(false);
                field.onBlur(e);
              }}
              className={`w-full ${prefix ? 'pl-8' : 'pl-3'} ${suffix ? 'pr-12' : 'pr-3'} py-3 
                bg-white dark:bg-gray-800 border-2 rounded-xl text-gray-900 dark:text-white 
                placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300
                focus:outline-none focus:ring-4 focus:ring-blue-500/20 
                ${meta.error && meta.touched 
                  ? 'border-red-500 focus:border-red-500' 
                  : isFocused 
                  ? 'border-blue-500 dark:border-blue-400' 
                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                } ${className}`}
              whileFocus={{ 
                scale: 1.02,
                boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.1)"
              }}
              transition={{ duration: 0.2 }}
            />
          )}
        </Field>
        
        {suffix && (
          <motion.span 
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-sm transition-colors duration-200 ${
              isFocused ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
            }`}
            animate={{ scale: isFocused ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {suffix}
          </motion.span>
        )}
      </div>
      
      <ErrorMessage name={name}>
        {msg => (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm mt-1 flex items-center"
          >
            <span className="mr-1">⚠️</span>
            {msg}
          </motion.div>
        )}
      </ErrorMessage>
    </motion.div>
  );
};

export default AnimatedInput;