import { useChatStore } from '@/store/chatStore'

export const ToolsPage = () => {
  const { darkMode } = useChatStore()

  const tools = [
    { name: 'SIP Calculator', description: 'Calculate SIP returns', category: 'Investment' },
    { name: 'Budget Planner', description: 'Plan your monthly budget', category: 'Planning' },
    { name: 'Home Loan EMI', description: 'Calculate home loan EMI', category: 'Loans' },
    { name: 'Tax Saver', description: 'Optimize tax savings', category: 'Tax' },
  ]

  return (
    <div className={`min-h-screen py-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Financial Tools</h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            40+ calculators and tools for your financial planning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`card p-6 hover:shadow-lg transition-shadow ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
              <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {tool.description}
              </p>
              <span className={`inline-block px-2 py-1 text-xs rounded ${
                darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}>
                {tool.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}