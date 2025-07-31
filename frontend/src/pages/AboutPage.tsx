import { useChatStore } from '@/store/chatStore'

export const AboutPage = () => {
  const { darkMode } = useChatStore()

  return (
    <div className={`min-h-screen py-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">About FinBot</h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Your AI-powered financial assistant
          </p>
        </div>

        <div className="space-y-8">
          <div className={`card p-8 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <h2 className="text-2xl font-semibold mb-4">What is FinBot?</h2>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              FinBot is an advanced AI-powered financial assistant that helps you make informed financial decisions. 
              Built with cutting-edge GPT-4 technology, it provides personalized advice on investments, budgeting, 
              tax planning, and more.
            </p>
          </div>

          <div className={`card p-8 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>• AI-powered financial advice using GPT-4 Turbo</li>
              <li>• 40+ financial calculators and tools</li>
              <li>• Personalized investment recommendations</li>
              <li>• Budget planning and expense tracking</li>
              <li>• Tax optimization strategies</li>
              <li>• Loan and EMI calculations</li>
            </ul>
          </div>

          <div className={`card p-8 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <li>• React 18 + TypeScript</li>
                  <li>• Vite for build tooling</li>
                  <li>• TailwindCSS for styling</li>
                  <li>• React Query for state management</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <ul className={`text-sm space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <li>• FastAPI with Python</li>
                  <li>• OpenAI GPT-4 Turbo integration</li>
                  <li>• Redis for caching</li>
                  <li>• SQLite/PostgreSQL database</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}