import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';
import { ROUTES } from '../utils/constants';

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState('');

  const allCards = [
    {
      title: 'Best Credit Cards',
      description: 'Students | Salaried | Business',
      details: 'Annual fee, benefits, links to apply (via affiliate)',
      icon: CreditCardIcon,
      color: 'bg-blue-500',
      link: ROUTES.CREDIT_CARDS,
      buttonText: 'Compare Cards',
      keywords: ['credit', 'cards', 'students', 'salaried', 'business', 'annual fee', 'benefits']
    },
    {
      title: 'Insurance Platforms',
      description: 'Health | Life | Motor | Crop',
      details: 'PolicyBazaar, Ditto, ACKO, Digit — compare or redirect',
      icon: ShieldCheckIcon,
      color: 'bg-green-500',
      link: ROUTES.INSURANCE_PLATFORMS,
      buttonText: 'View Platforms',
      keywords: ['insurance', 'health', 'life', 'motor', 'crop', 'policybazaar', 'ditto', 'acko', 'digit']
    },
    {
      title: 'Personal Loans & Credit',
      description: 'Partner with KreditBee, CASHe, Navi, etc.',
      details: '"Apply via our trusted partners" CTA',
      icon: CurrencyRupeeIcon,
      color: 'bg-purple-500',
      link: ROUTES.PERSONAL_LOANS,
      buttonText: 'Apply Now',
      keywords: ['personal', 'loans', 'credit', 'kreditbee', 'cashe', 'navi', 'partners']
    },
    {
      title: 'Government & Startup Schemes',
      description: 'Filter by state, age, category',
      details: 'Show schemes with benefits, eligibility, apply button/link',
      icon: BuildingLibraryIcon,
      color: 'bg-red-500',
      link: ROUTES.GOVERNMENT_SCHEMES,
      buttonText: 'Browse Schemes',
      keywords: ['government', 'startup', 'schemes', 'state', 'age', 'category', 'benefits', 'eligibility']
    },
    {
      title: 'Finance Jobs & Internships',
      description: 'Fintech openings, remote roles, campus jobs',
      details: 'Email submission form or redirect to Notion/LinkedIn board',
      icon: AcademicCapIcon,
      color: 'bg-yellow-500',
      link: ROUTES.FINANCE_JOBS,
      buttonText: 'Find Jobs',
      keywords: ['finance', 'jobs', 'internships', 'fintech', 'remote', 'campus', 'careers']
    },
    {
      title: 'Business Tools & Banking',
      description: 'Business loan calculators, GST tools, MSME credit info',
      details: 'Business card comparisons',
      icon: BriefcaseIcon,
      color: 'bg-indigo-500',
      link: ROUTES.BUSINESS_TOOLS,
      buttonText: 'Business Tools',
      keywords: ['business', 'tools', 'banking', 'loan', 'calculators', 'gst', 'msme', 'credit']
    }
  ];

  const filteredCards = allCards.filter(card =>
    searchTerm === '' || 
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
              Credit Cards, Insurance, Personal Loans, Government Schemes, Finance Jobs & Business Tools
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search credit cards, insurance, loans, jobs, business tools..."
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
          {filteredCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`${card.color} p-3 rounded-xl mr-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {card.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {card.details}
                </p>
                <Link to={card.link} className={`block w-full ${card.color} hover:opacity-90 text-white py-2 px-4 rounded-lg transition-colors text-center`}>
                  {card.buttonText}
                </Link>
              </div>
            );
          })}
        </div>
        
        {filteredCards.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No results found for "{searchTerm}"</p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">Try searching for credit cards, insurance, loans, jobs, or business tools</p>
          </div>
        )}
      </div>
    </div>
  );
}