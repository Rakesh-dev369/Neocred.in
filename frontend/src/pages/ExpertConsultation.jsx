import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { ROUTES } from '../utils/constants';

export default function ExpertConsultation() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              📞 Expert Financial Consultation
            </h1>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Get personalized financial advice from certified experts and chartered accountants
            </p>
          </div>
        </div>
      </section>
      
      {/* Coming Soon Section */}
      <section className="py-20 bg-white dark:bg-black text-gray-900 dark:text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl">
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We're working on bringing you direct access to certified financial advisors and experts. 
              Stay tuned for personalized consultation services!
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-500 mb-6">
              Expected Launch: Q2 2024
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-2xl mb-2">👨‍💼</div>
                <h3 className="font-semibold mb-2">Certified Advisors</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">SEBI registered investment advisors</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-semibold mb-2">Personalized Plans</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tailored financial strategies</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-2xl mb-2">🔒</div>
                <h3 className="font-semibold mb-2">Secure & Private</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Confidential consultations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}