import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdvancedGestures } from '../../hooks/useAdvancedGestures';

const AdvancedGestureArea = ({ children, onGesture, className = "" }) => {
  const [feedback, setFeedback] = useState(null);

  const handleGesture = (gesture) => {
    setFeedback(gesture);
    setTimeout(() => setFeedback(null), 1000);
    onGesture?.(gesture);
  };

  const gestureRef = useAdvancedGestures(handleGesture);

  return (
    <div ref={gestureRef} className={`relative ${className}`}>
      {children}
      
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm pointer-events-none"
          >
            {feedback.type === 'swipe' && `Swipe ${feedback.direction}`}
            {feedback.type === 'pinch' && 'Pinch gesture'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedGestureArea;