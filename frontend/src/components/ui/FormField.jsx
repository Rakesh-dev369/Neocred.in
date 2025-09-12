import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FormField = ({ 
  label, 
  type = "text", 
  value, 
  onChange, 
  error, 
  placeholder,
  required = false,
  disabled = false,
  className = "",
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    setHasValue(value && value.length > 0);
  };

  const handleChange = (e) => {
    setHasValue(e.target.value.length > 0);
    if (onChange) onChange(e);
  };

  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Floating Label */}
      <motion.label
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          isFocused || hasValue || value
            ? 'top-2 text-xs text-blue-600 dark:text-blue-400'
            : 'top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'
        }`}
        animate={{
          y: isFocused || hasValue || value ? -8 : 0,
          scale: isFocused || hasValue || value ? 0.85 : 1,
          color: error ? '#EF4444' : isFocused ? '#3B82F6' : '#6B7280'
        }}
      >
        {label} {required && <span className="text-red-400">*</span>}
      </motion.label>

      {/* Input Field */}
      <motion.input
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={isFocused ? placeholder : ''}
        disabled={disabled}
        whileFocus={{ 
          scale: 1.02,
          boxShadow: error 
            ? "0 0 0 3px rgba(239, 68, 68, 0.1)" 
            : "0 0 0 3px rgba(59, 130, 246, 0.1)"
        }}
        animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className={`
          w-full px-4 py-4 pt-6 bg-gray-100 dark:bg-white/10 border rounded-lg 
          text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/50 
          focus:outline-none transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error 
            ? 'border-red-500 focus:border-red-500' 
            : 'border-gray-300 dark:border-white/20 focus:border-blue-500'
          }
        `}
        {...props}
      />

      {/* Focus Ring Animation */}
      {isFocused && (
        <motion.div
          className={`absolute inset-0 rounded-lg border-2 pointer-events-none ${
            error ? 'border-red-500' : 'border-blue-500'
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 flex items-center gap-2"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-red-500 text-sm"
            >
              ⚠️
            </motion.span>
            <motion.p 
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-red-500 text-sm"
            >
              {error}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Indicator */}
      {!error && value && value.length > 0 && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 0.5 }}
            className="text-green-500 text-lg"
          >
            ✓
          </motion.span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FormField;