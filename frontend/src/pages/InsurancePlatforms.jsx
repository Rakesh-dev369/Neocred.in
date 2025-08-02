import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function InsurancePlatforms() {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const platforms = [
    { name: 'PolicyBazaar', type: 'All Insurance', rating: 4.3, features: 'Compare 40+ insurers, instant quotes' },
    { name: 'Ditto Insurance', type: 'Advisory', rating: 4.5, features: 'Expert advice, unbiased recommendations' },
    { name: 'ACKO', type: 'Digital First', rating: 4.2, features: 'Quick claims, paperless process' },
    { name: 'Digit Insurance', type: 'General Insurance', rating: 4.1, features: 'AI-powered, instant settlements' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back
          </button>
          <div className="text-center">
            <ShieldCheckIcon className="h-12 w-12 mx-auto mb-3" />
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Insurance Platforms</h1>
            <p className="text-base opacity-90">Compare insurance providers and get the best coverage</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{platform.name}</h3>
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">{platform.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{platform.type}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{platform.features}</p>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors">
                Visit Platform
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}