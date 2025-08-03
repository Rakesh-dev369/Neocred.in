import { useEffect } from 'react';

const AccessibilityFixes = () => {
  useEffect(() => {
    // Add focus-visible polyfill for better keyboard navigation
    const style = document.createElement('style');
    style.textContent = `
      .focus-visible:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
      
      .focus-visible:focus:not(.focus-visible) {
        outline: none;
      }
      
      /* High contrast mode support */
      @media (prefers-contrast: high) {
        .text-gray-600 { color: #000 !important; }
        .text-gray-400 { color: #333 !important; }
        .bg-gray-100 { background-color: #fff !important; }
        .border-gray-200 { border-color: #000 !important; }
      }
      
      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Add skip link for keyboard users
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      document.head.removeChild(style);
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  return null;
};

export default AccessibilityFixes;