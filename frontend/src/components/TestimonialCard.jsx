import { StarIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TestimonialCard({ 
  name, 
  role, 
  content, 
  rating = 5, 
  avatar, 
  index = 0,
  isActive = false,
  direction = 1
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ 
        opacity: 0, 
        x: direction > 0 ? 100 : -100,
        scale: 0.8
      }}
      animate={{ 
        opacity: isActive ? 1 : 0.7,
        x: 0,
        scale: isActive ? 1 : 0.95,
        y: isActive ? 0 : 10
      }}
      exit={{ 
        opacity: 0, 
        x: direction > 0 ? -100 : 100,
        scale: 0.8
      }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass-card relative overflow-hidden cursor-pointer"
    >
      {/* Hover gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.05 : 0 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg"
      />
      
      {/* Stars with staggered animation */}
      <div className="flex items-center mb-4 relative z-10">
        {[...Array(rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0
            }}
            transition={{ 
              delay: index * 0.1 + i * 0.1,
              duration: 0.3,
              type: "spring"
            }}
            whileHover={{ 
              scale: 1.2,
              rotate: 10
            }}
          >
            <StarIcon className="h-5 w-5 text-yellow-400" />
          </motion.div>
        ))}
      </div>
      
      {/* Quote with typewriter effect */}
      <motion.blockquote 
        className="text-gray-700 dark:text-white/80 mb-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ 
            delay: index * 0.1 + 0.5,
            duration: 1.5,
            ease: "easeInOut"
          }}
          className="inline-block overflow-hidden whitespace-nowrap"
        >
          "{content}"
        </motion.span>
      </motion.blockquote>
      
      {/* Author info with slide animation */}
      <motion.div 
        className="flex items-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.7 }}
      >
        <div className="flex-shrink-0">
          <motion.div 
            className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              backgroundColor: "rgba(59, 130, 246, 0.2)"
            }}
            animate={isHovered ? {
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
            } : {}}
          >
            <motion.span 
              className="text-gray-900 dark:text-white font-medium text-sm"
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            >
              {name.charAt(0)}
            </motion.span>
          </motion.div>
        </div>
        <motion.div 
          className="ml-3"
          animate={isHovered ? { x: 2 } : { x: 0 }}
        >
          <motion.p 
            className="text-sm font-medium text-gray-900 dark:text-white"
            animate={isHovered ? { color: "rgb(59 130 246)" } : {}}
          >
            {name}
          </motion.p>
          <p className="text-sm text-gray-600 dark:text-white/60">{role}</p>
        </motion.div>
      </motion.div>
      
      {/* Active indicator */}
      {isActive && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
          style={{ width: '100%' }}
        />
      )}
    </motion.div>
  );
}