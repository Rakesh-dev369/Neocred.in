import { useEffect } from 'react';
import { useAnalytics } from './useAnalytics';

export const useCalculatorAnalytics = (calculatorName) => {
  const { trackCalculatorUse, trackFeatureUse } = useAnalytics();

  const trackCalculation = (inputs, result) => {
    trackCalculatorUse(calculatorName, {
      inputs: Object.keys(inputs).length,
      hasResult: !!result,
      timestamp: new Date().toISOString()
    });
  };

  const trackFeature = (feature) => {
    trackFeatureUse(`${calculatorName}_${feature}`);
  };

  useEffect(() => {
    // Track calculator page visit
    trackFeatureUse(`calculator_visit_${calculatorName}`);
  }, [calculatorName, trackFeatureUse]);

  return {
    trackCalculation,
    trackFeature
  };
};