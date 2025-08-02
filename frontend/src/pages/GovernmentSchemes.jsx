import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BuildingLibraryIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function GovernmentSchemes() {
  const [selectedState, setSelectedState] = useState('all');
  const navigate = useNavigate();

  const schemes = [
    { name: 'PM Mudra Yojana', category: 'Business', state: 'All India', amount: 'Up to ₹10L', eligibility: 'Micro enterprises' },
    { name: 'Stand-up India', category: 'Startup', state: 'All India', amount: '₹10L - ₹1Cr', eligibility: 'SC/ST/Women' },
    { name: 'PM Kisan Samman Nidhi', category: 'Agriculture', state: 'All India', amount: '₹6,000/year', eligibility: 'Small farmers' },
    { name: 'Startup India', category: 'Startup', state: 'All India', amount: 'Tax benefits', eligibility: 'Innovative startups' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back
          </button>
          <div className="text-center">
            <BuildingLibraryIcon className="h-12 w-12 mx-auto mb-3" />
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Government & Startup Schemes</h1>
            <p className="text-base opacity-90">Explore schemes with benefits and eligibility criteria</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{scheme.name}</h3>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">Category: <span className="font-medium text-blue-600">{scheme.category}</span></p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Coverage: <span className="font-medium">{scheme.state}</span></p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Benefit: <span className="font-medium text-green-600">{scheme.amount}</span></p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Eligibility: {scheme.eligibility}</p>
              </div>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}