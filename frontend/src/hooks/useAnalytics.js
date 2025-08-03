import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-XXXXXXXXXX', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export const trackEvent = (action, category, label, value) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackCalculatorUse = (calculatorName) => {
  trackEvent('calculator_use', 'Tools', calculatorName);
};

export const trackNewsClick = (articleTitle) => {
  trackEvent('news_click', 'News', articleTitle);
};

export const trackChatInteraction = (messageType) => {
  trackEvent('chat_interaction', 'FinBot', messageType);
};