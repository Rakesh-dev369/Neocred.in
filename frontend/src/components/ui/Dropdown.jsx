import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

const Dropdown = ({ 
  options = [], 
  value, 
  onChange, 
  placeholder = "Select an option",
  disabled = false,
  searchable = false,
  multiple = false,
  className = "",
  optionClassName = "",
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  const filteredOptions = searchable 
    ? options.filter(option => 
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex(prev => 
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0) {
            handleOptionClick(filteredOptions[highlightedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setSearchTerm('');
          setHighlightedIndex(-1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, highlightedIndex, filteredOptions]);

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    if (!isOpen && searchable) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  };

  const handleOptionClick = (option) => {
    if (multiple) {
      const newValue = Array.isArray(value) ? [...value] : [];
      const index = newValue.findIndex(v => v.value === option.value);
      
      if (index >= 0) {
        newValue.splice(index, 1);
      } else {
        newValue.push(option);
      }
      
      onChange(newValue);
    } else {
      onChange(option);
      setIsOpen(false);
      setSearchTerm('');
    }
    setHighlightedIndex(-1);
  };

  const getDisplayValue = () => {
    if (multiple && Array.isArray(value)) {
      return value.length > 0 
        ? `${value.length} selected`
        : placeholder;
    }
    return value?.label || placeholder;
  };

  const isSelected = (option) => {
    if (multiple && Array.isArray(value)) {
      return value.some(v => v.value === option.value);
    }
    return value?.value === option.value;
  };

  return (
    <div ref={dropdownRef} className={`relative ${className}`} {...props}>
      {/* Trigger Button */}
      <motion.button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        whileHover={!disabled ? { scale: 1.02 } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
        className={`
          w-full px-4 py-3 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 
          rounded-lg text-left text-gray-900 dark:text-white focus:outline-none focus:ring-2 
          focus:ring-blue-500 transition-all duration-200 flex items-center justify-between
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200 dark:hover:bg-white/20'}
          ${isOpen ? 'ring-2 ring-blue-500 border-blue-500' : ''}
        `}
      >
        <span className={value ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}>
          {getDisplayValue()}
        </span>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-60 overflow-hidden"
          >
            {/* Search Input */}
            {searchable && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-3 border-b border-gray-200 dark:border-gray-700"
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search options..."
                  className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
            )}

            {/* Options List */}
            <div className="max-h-48 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <motion.button
                    key={option.value}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    whileHover={{ 
                      backgroundColor: "rgba(59, 130, 246, 0.1)",
                      x: 5
                    }}
                    onClick={() => handleOptionClick(option)}
                    className={`
                      w-full px-4 py-3 text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 
                      transition-all duration-200 flex items-center justify-between
                      ${highlightedIndex === index ? 'bg-blue-50 dark:bg-blue-900/20' : ''}
                      ${isSelected(option) ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'text-gray-900 dark:text-white'}
                      ${optionClassName}
                    `}
                  >
                    <span>{option.label}</span>
                    
                    {isSelected(option) && (
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", damping: 15 }}
                      >
                        <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                    )}
                  </motion.button>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="px-4 py-3 text-gray-500 dark:text-gray-400 text-center"
                >
                  No options found
                </motion.div>
              )}
            </div>

            {/* Decorative Gradient */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;