import { useState } from 'react';
import { 
  MagnifyingGlassIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Explore NeoCred
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              Discover 40+ Financial Tools, Learning Resources & More
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tools, calculators, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg rounded-2xl border-0 focus:ring-4 focus:ring-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Credit Cards */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 p-3 rounded-xl mr-4">
                <CreditCardIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Best Credit Cards
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Students | Salaried | Business
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Annual fee, benefits, links to apply (via affiliate)
            </p>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
              Compare Cards
            </button>
          </div>

          {/* Insurance Platforms */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 p-3 rounded-xl mr-4">
                <ShieldCheckIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Insurance Platforms
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Health | Life | Motor | Crop
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              PolicyBazaar, Ditto, ACKO, Digit — compare or redirect
            </p>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors">
              View Platforms
            </button>
          </div>

          {/* Personal Loans */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-purple-500 p-3 rounded-xl mr-4">
                <CurrencyRupeeIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Personal Loans & Credit
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Partner with KreditBee, CASHe, Navi, etc.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              "Apply via our trusted partners" CTA
            </p>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors">
              Apply Now
            </button>
          </div>

          {/* Government Schemes */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-red-500 p-3 rounded-xl mr-4">
                <BuildingLibraryIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Government & Startup Schemes
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Filter by state, age, category
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Show schemes with benefits, eligibility, apply button/link
            </p>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors">
              Browse Schemes
            </button>
          </div>

          {/* Finance Jobs */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 p-3 rounded-xl mr-4">
                <AcademicCapIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Finance Jobs & Internships
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Fintech openings, remote roles, campus jobs
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Email submission form or redirect to Notion/LinkedIn board
            </p>
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transition-colors">
              Find Jobs
            </button>
          </div>

          {/* Business Tools */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-500 p-3 rounded-xl mr-4">
                <BriefcaseIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Business Tools & Banking
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Business loan calculators, GST tools, MSME credit info
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Business card comparisons
            </p>
            <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors">
              Business Tools
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}