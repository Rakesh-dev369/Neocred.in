import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavigationDirection = () => {
  const location = useLocation();
  const prevLocation = useRef(location.pathname);
  const direction = useRef(0);

  useEffect(() => {
    const handlePopState = () => {
      direction.current = -1; // Back navigation
    };

    window.addEventListener('popstate', handlePopState);
    
    // Forward navigation (new route)
    if (prevLocation.current !== location.pathname) {
      if (direction.current !== -1) {
        direction.current = 1;
      }
      prevLocation.current = location.pathname;
      setTimeout(() => { direction.current = 0; }, 300);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, [location.pathname]);

  return direction.current;
};