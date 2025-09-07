import { useState, useEffect } from 'react';
import { BookOpen, TrendingUp, Award, Clock } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

const LearningProgressTracker = ({ pillarId, pillarName }) => {
  const [progress, setProgress] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const { trackLearningProgress } = useAnalytics();

  useEffect(() => {
    // Load saved progress
    const savedProgress = localStorage.getItem(`pillar_progress_${pillarId}`);
    if (savedProgress) {
      setProgress(parseInt(savedProgress));
    }

    // Track time spent
    const start = Date.now();
    setStartTime(start);

    return () => {
      if (startTime) {
        const timeSpentMinutes = Math.floor((Date.now() - start) / 60000);
        setTimeSpent(prev => prev + timeSpentMinutes);
        
        // Update progress based on time spent
        const newProgress = Math.min(progress + Math.floor(timeSpentMinutes / 2), 100);
        if (newProgress > progress) {
          setProgress(newProgress);
          localStorage.setItem(`pillar_progress_${pillarId}`, newProgress.toString());
          trackLearningProgress(pillarName, newProgress);
        }
      }
    };
  }, [pillarId, pillarName, progress, startTime, trackLearningProgress]);

  const getProgressColor = (progress) => {
    if (progress < 25) return 'bg-red-500';
    if (progress < 50) return 'bg-yellow-500';
    if (progress < 75) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const getProgressText = (progress) => {
    if (progress === 0) return 'Not Started';
    if (progress < 25) return 'Getting Started';
    if (progress < 50) return 'Making Progress';
    if (progress < 75) return 'Good Progress';
    if (progress < 100) return 'Almost Complete';
    return 'Completed';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <BookOpen className="w-4 h-4 text-blue-500 mr-2" />
          <span className="font-medium text-gray-900 dark:text-white">Learning Progress</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-3 h-3 mr-1" />
          {timeSpent}m
        </div>
      </div>

      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-gray-600 dark:text-gray-400">{getProgressText(progress)}</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(progress)}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {progress >= 100 && (
        <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
          <Award className="w-4 h-4 mr-1" />
          Pillar Completed!
        </div>
      )}
    </div>
  );
};

export default LearningProgressTracker;