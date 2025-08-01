import React from 'react';

const Logo = ({ size = 'md', showText = true, className = '' }) => {
  const sizeMap = {
    sm: { width: 24, height: 28, fontSize: 12 },
    md: { width: 32, height: 36, fontSize: 16 },
    lg: { width: 48, height: 54, fontSize: 24 },
    xl: { width: 64, height: 72, fontSize: 32 }
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const { width, height, fontSize } = sizeMap[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Shield SVG with ₹ symbol */}
      <svg width={width} height={height} viewBox="0 0 32 36" className="drop-shadow-lg">
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
        <path
          d="M16 2 L28 8 L28 20 C28 26 22 32 16 34 C10 32 4 26 4 20 L4 8 Z"
          fill="url(#shieldGradient)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.5"
        />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fill="white"
          fontSize={fontSize}
          fontWeight="bold"
          fontFamily="system-ui"
        >
          ₹
        </text>
      </svg>
      
      {/* Brand name */}
      {showText && (
        <h1 className={`${textSizeClasses[size]} font-bold text-white`}>
          NeoCred
        </h1>
      )}
    </div>
  );
};

export default Logo;