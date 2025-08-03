import { useEffect } from 'react';

export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Monitor page load performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.fetchStart, 'ms');
      }
    });
  }, []);
};

export const useResourceHints = (resources = []) => {
  useEffect(() => {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });
  }, [resources]);
};