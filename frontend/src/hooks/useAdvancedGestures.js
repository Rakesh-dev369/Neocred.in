import { useEffect, useRef } from 'react';

export const useAdvancedGestures = (onGesture) => {
  const elementRef = useRef(null);
  const touchStart = useRef({ x: 0, y: 0, time: 0 });
  const touchCount = useRef(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleTouchStart = (e) => {
      touchCount.current = e.touches.length;
      if (e.touches.length === 1) {
        touchStart.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          time: Date.now()
        };
      }
    };

    const handleTouchEnd = (e) => {
      if (touchCount.current === 1 && e.changedTouches.length === 1) {
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - touchStart.current.x;
        const deltaY = touch.clientY - touchStart.current.y;
        const deltaTime = Date.now() - touchStart.current.time;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const velocity = distance / deltaTime;

        if (velocity > 0.5 && distance > 50) {
          const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
          let direction;
          
          if (angle > -45 && angle <= 45) direction = 'right';
          else if (angle > 45 && angle <= 135) direction = 'down';
          else if (angle > 135 || angle <= -135) direction = 'left';
          else direction = 'up';

          onGesture?.({ type: 'swipe', direction, velocity, distance });
        }
      }
      
      if (touchCount.current === 2) {
        onGesture?.({ type: 'pinch', touches: touchCount.current });
      }
    };

    element.addEventListener('touchstart', handleTouchStart);
    element.addEventListener('touchend', handleTouchEnd);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onGesture]);

  return elementRef;
};