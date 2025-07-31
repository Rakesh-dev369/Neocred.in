import { useState, useMemo } from 'react';
import { 
  XMarkIcon, 
  ChartBarIcon, 
  ClockIcon, 
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

export default function ChatAnalytics({ messages, userPreferences, darkMode, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  const analytics = useMemo(() => {
    const totalMessages = messages.length;
    const userMessages = messages.filter(m => m.sender === 'user').length;
    const botMessages = messages.filter(m => m.sender === 'bot').length;
    const apiResponses = messages.filter(m => m.isApiResponse).length;
    const mockResponses = botMessages - apiResponses;

    // Calculate average response time
    const responseTimes = messages.filter(m => m.responseTime).map(m => m.responseTime);
    const avgResponseTime = responseTimes.length > 0 
      ? (responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length).toFixed(2)
      : 0;

    // Topic analysis
    const topics = {
      sip: messages.filter(m => m.text.toLowerCase().includes('sip')).length,
      budget: messages.filter(m => m.text.toLowerCase().includes('budget')).length,
      loan: messages.filter(m => m.text.toLowerCase().includes('loan') || m.text.toLowerCase().includes('emi')).length,
      tax: messages.filter(m => m.text.toLowerCase().includes('tax')).length,
      insurance: messages.filter(m => m.text.toLowerCase().includes('insurance')).length,
    };

    // Usage patterns
    const messagesByHour = messages.reduce((acc, message) => {
      const hour = new Date(message.timestamp).getHours();
      acc[hour] = (acc[hour] || 0) + 1;
      return acc;
    }, {});

    const peakHour = Object.entries(messagesByHour).reduce((a, b) => 
      messagesByHour[a[0]] > messagesByHour[b[0]] ? a : b
    )?.[0] || 0;

    return {
      totalMessages,
      userMessages,
      botMessages,
      apiResponses,
      mockResponses,
      avgResponseTime,
      topics,
      peakHour,
      messagesByHour
    };
  }, [messages]);

  if (!isOpen) return null;

  const StatCard = ({ icon: Icon, title, value, subtitle, color = 'blue' }) => (
    <div className={`p-4 rounded-lg border ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{title}</p>
          <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{value}</p>
          {subtitle && (
            <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{subtitle}</p>
          )}
        </div>
        <Icon className={`h-8 w-8 text-${color}-500`} />
      </div>
    </div>
  );

  return (
    <div className={`absolute top-0 left-0 right-0 bottom-0 ${darkMode ? 'bg-gray-900' : 'bg-white'} z-20 flex flex-col`}>
      {/* Header */}
      <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ChartBarIcon className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
            <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Chat Analytics
            </h2>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg hover:bg-gray-100 ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'text-gray-600'}`}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mt-4">
          {['overview', 'topics', 'patterns'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeTab === tab
                  ? 'bg-blue-500 text-white'
                  : `${darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <StatCard
                icon={ChatBubbleLeftRightIcon}
                title="Total Messages"
                value={analytics.totalMessages}
                subtitle={`${analytics.userMessages} from you, ${analytics.botMessages} from FinBot`}
              />
              <StatCard
                icon={ClockIcon}
                title="Avg Response Time"
                value={`${analytics.avgResponseTime}s`}
                subtitle="Average FinBot response time"
                color="green"
              />
              <StatCard
                icon={SparklesIcon}
                title="API Usage"
                value={`${analytics.apiResponses}/${analytics.botMessages}`}
                subtitle={`${analytics.mockResponses} mock responses`}
                color="purple"
              />
            </div>

            <div className={`p-4 rounded-lg border ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-200'
            }`}>
              <h3 className={`font-medium mb-2 ${darkMode ? 'text-white' : 'text-blue-900'}`}>
                Your Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(userPreferences).map(([key, value]) => 
                  value && (
                    <span
                      key={key}
                      className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full"
                    >
                      {key.replace('interestedIn', '').replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'topics' && (
          <div className="space-y-4">
            <h3 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Discussion Topics
            </h3>
            <div className="space-y-3">
              {Object.entries(analytics.topics).map(([topic, count]) => (
                <div key={topic} className={`p-3 rounded-lg border ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`font-medium capitalize ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {topic}
                    </span>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {count} mentions
                    </span>
                  </div>
                  <div className={`mt-2 h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${Math.max((count / Math.max(...Object.values(analytics.topics))) * 100, 5)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'patterns' && (
          <div className="space-y-6">
            <div>
              <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Usage Patterns
              </h3>
              <div className={`p-4 rounded-lg border ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-center space-x-2 mb-3">
                  <ArrowTrendingUpIcon className="h-5 w-5 text-blue-500" />
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Peak Activity Hour: {analytics.peakHour}:00
                  </span>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  You're most active at {analytics.peakHour}:00 with {analytics.messagesByHour[analytics.peakHour]} messages.
                </p>
              </div>
            </div>

            <div>
              <h4 className={`font-medium mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Hourly Activity
              </h4>
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 24 }, (_, hour) => (
                  <div key={hour} className="text-center">
                    <div
                      className={`h-8 rounded ${
                        analytics.messagesByHour[hour] 
                          ? 'bg-blue-500' 
                          : darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}
                      style={{
                        opacity: analytics.messagesByHour[hour] 
                          ? Math.max(analytics.messagesByHour[hour] / Math.max(...Object.values(analytics.messagesByHour)), 0.3)
                          : 0.3
                      }}
                    />
                    <span className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {hour}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}