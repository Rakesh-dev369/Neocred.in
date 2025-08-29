import { useEffect } from 'react';
import { generateSEOTags, updateMetaTags } from '../utils/seoUtils';

const SEOHead = ({ page, customTitle, customDescription }) => {
  useEffect(() => {
    const seoData = generateSEOTags(page);
    
    // Override with custom data if provided
    if (customTitle) seoData.title = customTitle;
    if (customDescription) seoData.description = customDescription;
    
    updateMetaTags(seoData);
    
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'NeoCred - AI-Powered Financial Platform';
    };
  }, [page, customTitle, customDescription]);

  return null; // This component doesn't render anything
};

export default SEOHead;