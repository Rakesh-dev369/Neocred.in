import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, CreditCardIcon } from '@heroicons/react/24/outline';

export default function UnionBankCreditCards() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const unionCards = [
    {
      name: 'Union Bank RuPay Card',
      type: 'Standard Card',
      category: 'Salaried',
      annualFee: '₹500',
      features: [
        'Cashback on utility payments',
        'Fuel surcharge waiver',
        'EMI conversion facility',
        'Online shopping benefits',
        'Insurance coverage',
        'Reward points on spends'
      ]
    }
  ];

  const getFilteredCards = () => {
    if (selectedCategory === 'all') return unionCards;
    return unionCards.filter(card => card.category === selectedCategory);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button onClick={() => navigate('/credit-cards')} className="flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />Back to Credit Cards
          </button>
          <div className="text-center">
            <CreditCardIcon className="h-12 w-12 mx-auto mb-3" />
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Union Bank of India Credit Cards</h1>
            <p className="text-base opacity-90">Explore Union Bank's range of credit cards</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
            <button onClick={() => setSelectedCategory('all')} className={`px-4 py-2 rounded-md transition-colors ${selectedCategory === 'all' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'}`}>All Cards</button>
            <button onClick={() => setSelectedCategory('Student')} className={`px-4 py-2 rounded-md transition-colors ${selectedCategory === 'Student' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'}`}>🎓 Student</button>
            <button onClick={() => setSelectedCategory('Salaried')} className={`px-4 py-2 rounded-md transition-colors ${selectedCategory === 'Salaried' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'}`}>💼 Salaried</button>
            <button onClick={() => setSelectedCategory('Business')} className={`px-4 py-2 rounded-md transition-colors ${selectedCategory === 'Business' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'}`}>🏢 Business</button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {getFilteredCards().map((card, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{card.name}</h2>
                <div className="flex gap-2">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">{card.type}</span>
                  <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">{card.category}</span>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Annual Fee</h3>
                <p className="text-green-600 dark:text-green-400 font-medium">{card.annualFee}</p>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">Apply Now</button>
                <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 py-3 px-6 rounded-lg font-medium transition-colors">Compare Cards</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}