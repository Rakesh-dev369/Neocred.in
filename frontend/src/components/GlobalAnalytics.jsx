import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';

const GlobalAnalytics = () => {
  const location = useLocation();
  const { trackFeatureUse } = useAnalytics();

  useEffect(() => {
    // Track page-specific features
    const path = location.pathname;
    
    if (path.includes('/calculators/')) {
      trackFeatureUse('calculator_page_visit');
    } else if (path.includes('/learn/')) {
      trackFeatureUse('learning_page_visit');
    } else if (path === '/chatbot') {
      trackFeatureUse('chatbot_page_visit');
    } else if (path === '/news') {
      trackFeatureUse('news_page_visit');
    }
  }, [location, trackFeatureUse]);

  return null; // This component doesn't render anything
};

export default GlobalAnalytics;