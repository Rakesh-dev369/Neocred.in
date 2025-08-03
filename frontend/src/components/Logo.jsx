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
      {/* Logo */}
      <img 
        src="/logo.png" 
        alt="NeoCred Logo" 
        width={width} 
        height={height} 
        className="drop-shadow-lg rounded-lg" 
      />
      
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