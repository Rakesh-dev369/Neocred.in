import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BriefcaseIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function BusinessTools() {
  const navigate = useNavigate();

  const tools = [
    { name: 'Business Loan Calculator', category: 'Loans', description: 'Calculate EMI for business loans' },
    { name: 'GST Calculator', category: 'Tax', description: 'Calculate GST on goods and services' },
    { name: 'MSME Credit Score', category: 'Credit', description: 'Check business credit rating' },
    { name: 'Business Card Comparison', category: 'Cards', description: 'Compare corporate credit cards' },
    { name: 'Working Capital Calculator', category: 'Finance', description: 'Calculate working capital needs' },
    { name: 'Invoice Generator', category: 'Tools', description: 'Generate professional invoices' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back
          </button>
          <div className="text-center">
            <BriefcaseIcon className="h-12 w-12 mx-auto mb-3" />
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Business Tools & Banking</h1>
            <p className="text-base opacity-90">Essential tools for business finance and operations</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{tool.name}</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{tool.category}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{tool.description}</p>
              <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition-colors">
                Use Tool
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}