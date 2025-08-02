import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrencyRupeeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function PersonalLoans() {
  const navigate = useNavigate();

  const lenders = [
    { name: 'KreditBee', rate: '11.99%', amount: '₹10,000 - ₹5L', features: 'Instant approval, minimal docs' },
    { name: 'CASHe', rate: '12.5%', amount: '₹10,000 - ₹4L', features: 'Social profile scoring, quick disbursal' },
    { name: 'Navi', rate: '10.99%', amount: '₹5,000 - ₹20L', features: 'Low interest rates, flexible tenure' },
    { name: 'MoneyTap', rate: '13%', amount: '₹3,000 - ₹5L', features: 'Credit line facility, pay as you use' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back
          </button>
          <div className="text-center">
            <CurrencyRupeeIcon className="h-12 w-12 mx-auto mb-3" />
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Personal Loans & Credit</h1>
            <p className="text-base opacity-90">Apply via our trusted partners for quick approval</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lenders.map((lender, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{lender.name}</h3>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">Interest Rate: <span className="font-medium text-green-600">{lender.rate}</span></p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Loan Amount: <span className="font-medium">{lender.amount}</span></p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{lender.features}</p>
              </div>
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}