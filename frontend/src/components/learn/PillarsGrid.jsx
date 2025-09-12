import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, ClockIcon, BookOpenIcon, TrophyIcon, StarIcon, ShareIcon, LinkIcon } from '@heroicons/react/24/outline';
import { HeartButton, ShareButton, CopyButton } from '../ui';

const PillarsGrid = ({ pillars, onPillarStart, hoveredPillar, setHoveredPillar }) => {
  const [celebratingPillar, setCelebratingPillar] = useState(null);
  const [progressAnimations, setProgressAnimations] = useState({});
  
  useEffect(() => {
    // Trigger progress bar animations when component mounts
    const timer = setTimeout(() => {
      const animations = {};
      pillars.forEach(pillar => {
        animations[pillar.id] = pillar.progress;
      });
      setProgressAnimations(animations);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [pillars]);
  
  const handlePillarComplete = (pillar) => {
    if (pillar.progress === 100) {
      setCelebratingPillar(pillar.id);
      setTimeout(() => setCelebratingPillar(null), 3000);
    }
  };
  const getDifficultyBg = (difficulty) => {
    switch(difficulty) {
      case 1: return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200';
      case 2: return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200';
      case 3: return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200';
      default: return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {pillars.map((pillar, index) => {
        const isCompleted = pillar.progress === 100;
        const isInProgress = pillar.progress > 0 && pillar.progress < 100;
        
        return (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
            onMouseEnter={() => setHoveredPillar(pillar.id)}
            onMouseLeave={() => setHoveredPillar(null)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              to={pillar.path}
              onClick={() => {
                onPillarStart(pillar);
                handlePillarComplete(pillar);
              }}
              className={`block relative overflow-hidden bg-gradient-to-br ${pillar.bgGradient} dark:${pillar.darkBgGradient} rounded-2xl p-6 transition-all duration-500 border border-gray-200 dark:border-gray-700 h-full hover:shadow-2xl group-hover:border-transparent group-hover:-translate-y-2`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Enhanced Achievement Badges with Animations */}
              <div className="absolute top-3 right-3">
                <AnimatePresence>
                  {isCompleted ? (
                    <motion.div 
                      className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    >
                      <TrophyIcon className="w-3 h-3" />
                      Complete
                    </motion.div>
                  ) : isInProgress ? (
                    <motion.div 
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0.4)', '0 0 0 4px rgba(59, 130, 246, 0)', '0 0 0 0 rgba(59, 130, 246, 0)']
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {pillar.progress}%
                    </motion.div>
                  ) : pillar.popular ? (
                    <motion.div 
                      className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    >
                      🔥 Popular
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
              
              {/* Completion Celebration Animation */}
              <AnimatePresence>
                {celebratingPillar === pillar.id && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="text-6xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 1, repeat: 2 }}
                    >
                      🎉
                    </motion.div>
                    {/* Confetti particles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                        initial={{ 
                          x: 0, 
                          y: 0, 
                          scale: 0,
                          rotate: 0
                        }}
                        animate={{
                          x: (Math.random() - 0.5) * 200,
                          y: (Math.random() - 0.5) * 200,
                          scale: [0, 1, 0],
                          rotate: 360
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="relative z-10 pt-2">
                <motion.div 
                  className="text-4xl mb-4 relative"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {pillar.icon}
                  {/* Achievement glow effect for completed pillars */}
                  {isCompleted && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full blur-lg"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 leading-tight">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {pillar.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <ClockIcon className="w-3 h-3 mr-1" />
                    {pillar.duration}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <BookOpenIcon className="w-3 h-3 mr-1" />
                    {pillar.sections} sections
                  </div>
                </div>
                
                {/* Enhanced Progress Bar with Animation */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4 overflow-hidden relative">
                  <motion.div 
                    className={`h-3 rounded-full bg-gradient-to-r ${pillar.gradient} relative overflow-hidden`}
                    initial={{ width: 0 }}
                    animate={{ width: `${progressAnimations[pillar.id] || 0}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                  >
                    {/* Shimmer effect for progress bar */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  {/* Progress percentage indicator */}
                  {pillar.progress > 0 && (
                    <motion.div
                      className="absolute -top-6 text-xs font-medium text-gray-600 dark:text-gray-400"
                      style={{ left: `${Math.min(pillar.progress, 90)}%` }}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 1 }}
                    >
                      {pillar.progress}%
                    </motion.div>
                  )}
                </div>
                
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyBg(pillar.difficulty)} mb-4 inline-block`}>
                  {pillar.difficultyLabel}
                </span>
                
                <div className="flex items-center justify-between">
                  <div className={`flex items-center font-medium transition-colors ${
                    isCompleted ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400'
                  }`}>
                    {isCompleted ? '✓ Completed • Review' : isInProgress ? 'Continue Learning' : 'Start Learning'}
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  {/* Micro-interactions */}
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.preventDefault()}>
                    <ShareButton
                      onShare={(e) => {
                        e?.preventDefault();
                        e?.stopPropagation();
                        navigator.share({ title: pillar.title, url: `${window.location.origin}${pillar.path}` });
                      }}
                      icon={<ShareIcon className="w-3 h-3" />}
                      className="p-1 text-xs rounded"
                    />
                    <CopyButton
                      textToCopy={`${window.location.origin}${pillar.path}`}
                      className="p-1 text-xs rounded"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      <LinkIcon className="w-3 h-3" />
                    </CopyButton>
                  </div>
                </div>
                
                {pillar.testimonial && hoveredPillar === pillar.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 p-2 bg-white/50 dark:bg-gray-800/50 rounded-lg text-xs text-gray-600 dark:text-gray-400 italic"
                  >
                    "{pillar.testimonial}"
                  </motion.div>
                )}
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PillarsGrid;