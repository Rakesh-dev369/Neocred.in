import { Link } from 'react-router-dom';

export default function HomeSimple() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master Your <span className="text-blue-400">Financial Future</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Learn, plan, and grow your wealth with our comprehensive financial tools and AI-powered guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/learn"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Start Learning
            </Link>
            <Link
              to="/tools"
              className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg border border-white/20 transition-colors"
            >
              Try Our Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Financial Education</h3>
              <p className="text-gray-400">Learn the fundamentals of personal finance and investing.</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="text-xl font-semibold mb-2">Smart Calculators</h3>
              <p className="text-gray-400">Access 40+ financial calculators for all your needs.</p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
              <p className="text-gray-400">Get personalized financial advice from our AI chatbot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who have transformed their financial lives.
          </p>
          <Link
            to="/chatbot"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Ask AI Assistant
          </Link>
        </div>
      </section>
    </div>
  );
}