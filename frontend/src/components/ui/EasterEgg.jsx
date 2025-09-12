import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EasterEgg = () => {
  const [sequence, setSequence] = useState([]);
  const [showEgg, setShowEgg] = useState(false);
  const targetSequence = ['n', 'e', 'o', 'c', 'r', 'e', 'd'];

  useEffect(() => {
    const handleKeyPress = (e) => {
      const newSequence = [...sequence, e.key.toLowerCase()].slice(-7);
      setSequence(newSequence);
      
      if (newSequence.join('') === targetSequence.join('')) {
        setShowEgg(true);
        setTimeout(() => setShowEgg(false), 3000);
        setSequence([]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [sequence]);

  return (
    <AnimatePresence>
      {showEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-2xl"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 40px rgba(147, 51, 234, 0.5)",
                "0 0 20px rgba(59, 130, 246, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.h2 
              className="text-2xl font-bold text-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              You found the secret!
            </motion.h2>
            <p className="text-center mt-2">Thanks for exploring NeoCred!</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;