import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { systemApi } from '@/api/client'
import { useChatStore } from '@/store/chatStore'
import { 
  ChatBubbleLeftRightIcon, 
  CalculatorIcon, 
  ShieldCheckIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

export const HomePage = () => {
  const { darkMode } = useChatStore()
  
  const { data: stats } = useQuery({
    queryKey: ['stats'],
    queryFn: systemApi.getStats,
  })

  const features = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'AI-Powered Chat',
      description: 'Get personalized financial advice from our GPT-4 powered assistant'
    },
    {
      icon: CalculatorIcon,
      title: '40+ Financial Tools',
      description: 'Access comprehensive calculators for investments, loans, and planning'
    },
    {
      icon: BoltIcon,
      title: 'Lightning Fast',
      description: 'Cached responses and optimized performance for instant answers'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Private',
      description: 'Your financial data is protected with enterprise-grade security'
    }
  ]

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              Your AI-Powered
              <span className="text-primary-600"> Financial Assistant</span>
            </h1>
            <p className={`text-xl mb-8 max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Get personalized financial advice, calculate investments, plan your budget, 
              and make smarter money decisions with FinBot's advanced AI technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/chat"
                className="btn-primary px-8 py-3 text-lg"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                Start Chatting
              </Link>
              <Link
                to="/tools"
                className="btn-secondary px-8 py-3 text-lg"
              >
                <CalculatorIcon className="w-5 h-5 mr-2" />
                Explore Tools
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {stats && (
        <div className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stats.total_requests.toLocaleString()}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Questions Answered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stats.active_users}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Active Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  40+
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Financial Tools
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stats.cache_hit_rate ? `${stats.cache_hit_rate.toFixed(0)}%` : '75%'}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Cache Hit Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose FinBot?</h2>
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Powered by cutting-edge AI technology and comprehensive financial tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`card p-6 text-center hover:shadow-lg transition-shadow ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  }`}
                >
                  <Icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}