import React from 'react';

const HorizontalLogo = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* Shield Icon with ₹ symbol */}
      <div className="flex-shrink-0 mr-4">
        <svg width="40" height="45" viewBox="0 0 40 45" className="drop-shadow-lg">
          <defs>
            <linearGradient id="horizontalShieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <path
            d="M20 3 L35 10 L35 25 C35 32 28 40 20 42 C12 40 5 32 5 25 L5 10 Z"
            fill="url(#horizontalShieldGradient)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.5"
          />
          <text
            x="20"
            y="28"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="bold"
            fontFamily="system-ui"
          >
            ₹
          </text>
        </svg>
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