import React from 'react';

const HorizontalLogo = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* Logo */}
      <div className="flex-shrink-0 mr-4">
        <img src="/logo.png" alt="NeoCred Logo" className="w-10 h-10 rounded-lg drop-shadow-lg" />
      </div>

      {/* Brand Name and Tagline */}
      <div className="flex flex-col">
        {/* Brand Name */}
        <div className="flex items-center">
          <span className="text-gray-900 dark:text-white text-2xl font-bold">Neo</span>
          <span className="text-gray-900 dark:text-white text-2xl font-extrabold">C</span>
          <span 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            ₹
          </span>
          <span className="text-gray-900 dark:text-white text-2xl font-bold">ed</span>
        </div>
        
        {/* Tagline */}
        <p className="text-gray-600 dark:text-gray-300 text-sm font-medium mt-1">
          Empowering Your Finances
        </p>
      </div>
    </div>
  );
};

export default HorizontalLogo;