import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const PullToRefresh = ({ 
  children, 
  onRefresh, 
  threshold = 80,
  className = ""
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [canRefresh, setCanRefresh] = useState(false);
  const y = useMotionValue(0);
  const containerRef = useRef(null);

  const pullProgress = useTransform(y, [0, threshold], [0, 1]);
  const iconRotate = useTransform(y, [0, threshold], [0, 180]);

  const handleDrag = (event, info) => {
    if (containerRef.current?.scrollTop > 0) return;
    
    const pullDistance = Math.max(0, info.offset.y);
    y.set(pullDistance);
    setCanRefresh(pullDistance >= threshold);
  };

  const handleDragEnd = async (event, info) => {
    if (info.offset.y >= threshold && !isRefreshing) {
      setIsRefreshing(true);
      try {
        await onRefresh?.();
      } finally {
        setIsRefreshing(false);
        setCanRefresh(false);
        y.set(0);
      }
    } else {
      y.set(0);
      setCanRefresh(false);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`} ref={containerRef}>
      {/* Pull indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 z-10"
        style={{ 
          height: useTransform(y, [0, threshold], [0, threshold]),
          opacity: useTransform(y, [0, 20], [0, 1])
        }}
      >
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
          {isRefreshing ? (
            <>
              <motion.div
                className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span className="text-sm font-medium">Refreshing...</span>
            </>
          ) : (
            <>
              <motion.div
                style={{ rotate: iconRotate }}
                className="text-xl"
              >
                ↓
              </motion.div>
              <span className="text-sm font-medium">
                {canRefresh ? 'Release to refresh' : 'Pull to refresh'}
              </span>
            </>
          )}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0.3, bottom: 0 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        className="min-h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PullToRefresh;