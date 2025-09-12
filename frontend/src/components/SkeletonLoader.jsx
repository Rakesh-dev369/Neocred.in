import React from 'react';
import { motion } from 'framer-motion';

const SkeletonBox = ({ className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0.6 }}
    animate={{ 
      opacity: [0.6, 1, 0.6],
      scale: [1, 1.02, 1]
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={`bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded ${className}`}
    style={{
      backgroundSize: '200% 100%',
      animation: 'shimmer 2s infinite linear'
    }}
  />
);

export const NewsCardSkeleton = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 overflow-hidden relative"
  >
    {/* Shimmer overlay */}
    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    
    <div className="flex items-start justify-between mb-4">
      <SkeletonBox className="h-4 w-20" delay={0} />
      <SkeletonBox className="h-4 w-16" delay={0.1} />
    </div>
    <SkeletonBox className="h-6 w-full mb-3" delay={0.2} />
    <SkeletonBox className="h-6 w-3/4 mb-4" delay={0.3} />
    <div className="space-y-2 mb-4">
      <SkeletonBox className="h-4 w-full" delay={0.4} />
      <SkeletonBox className="h-4 w-5/6" delay={0.5} />
      <SkeletonBox className="h-4 w-4/5" delay={0.6} />
    </div>
    <div className="flex justify-between items-center">
      <SkeletonBox className="h-8 w-24" delay={0.7} />
      <SkeletonBox className="h-8 w-20" delay={0.8} />
    </div>
  </motion.div>
);

export const ChatMessageSkeleton = () => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex space-x-3"
  >
    <motion.div 
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-8 h-8 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full"
    />
    <div className="flex-1 space-y-2">
      <SkeletonBox className="h-4 w-3/4" delay={0.1} />
      <SkeletonBox className="h-4 w-1/2" delay={0.2} />
    </div>
  </motion.div>
);

export const ToolCardSkeleton = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 relative overflow-hidden"
  >
    {/* Shimmer overlay */}
    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    
    <motion.div 
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg mb-4"
    />
    <SkeletonBox className="h-6 w-3/4 mb-2" delay={0.1} />
    <SkeletonBox className="h-4 w-full mb-4" delay={0.2} />
    <SkeletonBox className="h-10 w-full" delay={0.3} />
  </motion.div>
);

// Add shimmer keyframes to global CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    .animate-shimmer {
      animation: shimmer 2s infinite;
    }
  `;
  document.head.appendChild(style);
}