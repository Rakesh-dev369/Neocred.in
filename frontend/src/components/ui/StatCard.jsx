import React from 'react';
import { motion } from 'framer-motion';
import CountingNumber from './CountingNumber';

const StatCard = ({ 
  title, 
  value, 
  prefix = "", 
  suffix = "",
  decimals = 0,
  trend = null, // { value: 12, direction: 'up' | 'down' }
  icon = null,
  color = "blue",
  size = "md",
  animated = true,
  className = ""
}) => {
  const colors = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    red: 'from-red-500 to-red-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  };

  const sizes = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const getTrendColor = (direction) => {
    return direction === 'up' ? 'text-green-500' : 'text-red-500';
  };

  const getTrendIcon = (direction) => {
    return direction === 'up' ? '↗' : '↘';
  };

  return (
    <motion.div
      className={`
        bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700
        ${sizes[size]} ${className}
      `}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" 
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <motion.h3 
          className="text-gray-600 dark:text-gray-400 text-sm font-medium"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>
        
        {icon && (
          <motion.div
            className={`p-2 rounded-lg bg-gradient-to-r ${colors[color]} text-white`}
            initial={{ opacity: 0, scale: 0, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            {icon}
          </motion.div>
        )}
      </div>

      {/* Value */}
      <div className="flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <CountingNumber
            value={value}
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
            animate={animated}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          />
        </motion.div>

        {/* Trend */}
        {trend && (
          <motion.div
            className={`flex items-center gap-1 ${getTrendColor(trend.direction)}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.span
              animate={{ 
                y: trend.direction === 'up' ? [-2, 0, -2] : [2, 0, 2]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-lg"
            >
              {getTrendIcon(trend.direction)}
            </motion.span>
            <span className="text-sm font-medium">
              {trend.value}%
            </span>
          </motion.div>
        )}
      </div>

      {/* Decorative gradient bar */}
      <motion.div
        className={`mt-4 h-1 bg-gradient-to-r ${colors[color]} rounded-full`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={{ transformOrigin: 'left' }}
      />


    </motion.div>
  );
};

export default StatCard;