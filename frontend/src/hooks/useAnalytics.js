import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics tracking
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_ID, {
      page_path: path,
    });
  }
};

// Custom analytics API calls
const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const trackCustomEvent = async (eventType, data = {}) => {
  try {
    await fetch(`${API_BASE}/api/analytics/track`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type: eventType,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        url: window.location.href,
        ...data
      })
    });
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

// Generate session ID for anonymous tracking
const getSessionId = () => {
  let sessionId = localStorage.getItem('neocred_session_id');
  if (!sessionId) {
    sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('neocred_session_id', sessionId);
  }
  return sessionId;
};

// Main analytics hook
export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    trackPageView(location.pathname);
    trackCustomEvent('page_view', { path: location.pathname });
  }, [location]);

  return {
    trackEvent,
    trackPageView,
    trackCustomEvent,
    trackCalculatorUse: (calculatorName, inputs = {}) => {
      trackEvent('calculator_use', {
        calculator_name: calculatorName,
        ...inputs
      });
      trackCustomEvent('calculator_use', { 
        calculator: calculatorName, 
        inputs,
        session_id: getSessionId()
      });
    },
    trackLearningProgress: (pillar, progress) => {
      trackEvent('learning_progress', {
        pillar,
        progress_percentage: progress
      });
      trackCustomEvent('learning_progress', { 
        pillar, 
        progress,
        session_id: getSessionId()
      });
    },
    trackFeatureUse: (feature) => {
      trackEvent('feature_use', { feature_name: feature });
      trackCustomEvent('feature_use', { 
        feature,
        session_id: getSessionId()
      });
    }
  };
};