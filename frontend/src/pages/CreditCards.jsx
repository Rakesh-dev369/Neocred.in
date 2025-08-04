import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCardIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function CreditCards() {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const publicSectorCards = [
    { name: 'State Bank of India', bank: 'SBI', slug: 'sbi', fee: 'Various', cashback: 'Credit Cards', rating: 4.2 },
    { name: 'Bank of Baroda', bank: 'Bank of Baroda', slug: 'bob', fee: 'Various', cashback: 'Credit Cards', rating: 4.0 },
    { name: 'Punjab National Bank', bank: 'PNB', slug: 'pnb', fee: 'Various', cashback: 'Credit Cards', rating: 3.8 },
    { name: 'Union Bank of India', bank: 'Union Bank', slug: 'union', fee: 'Various', cashback: 'Credit Cards', rating: 3.9 },
    { name: 'Canara Bank', bank: 'Canara Bank', slug: 'canara', fee: 'Various', cashback: 'Credit Cards', rating: 3.9 },
    { name: 'Indian Bank', bank: 'Indian Bank', slug: 'indian', fee: 'Various', cashback: 'Credit Cards', rating: 3.7 },
    { name: 'Bank of India', bank: 'Bank of India', slug: 'boi', fee: 'Various', cashback: 'Credit Cards', rating: 3.8 },
    { name: 'Central Bank of India', bank: 'Central Bank', slug: 'central', fee: 'Various', cashback: 'Credit Cards', rating: 3.6 },
    { name: 'UCO Bank', bank: 'UCO Bank', slug: 'uco', fee: 'Various', cashback: 'Credit Cards', rating: 3.5 },
    { name: 'Indian Overseas Bank', bank: 'IOB', slug: 'iob', fee: 'Various', cashback: 'Credit Cards', rating: 3.6 },
    { name: 'Bank of Maharashtra', bank: 'Bank of Maharashtra', slug: 'bom', fee: 'Various', cashback: 'Credit Cards', rating: 3.7 }
  ];

  const privateSectorCards = [];

  const allCards = [...publicSectorCards, ...privateSectorCards];

  const getCards = () => {
    switch(activeTab) {
      case 'public': return publicSectorCards;
      case 'private': return privateSectorCards;
      default: return allCards;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back
          </button>
          <div className="text-center">
            <CreditCardIcon className="h-12 w-12 mx-auto mb-3" />
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Best Credit Cards</h1>
            <p className="text-base opacity-90">Compare and find the perfect credit card for your needs</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'all' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
              }`}
            >
              All Cards
            </button>
            <button
              onClick={() => setActiveTab('public')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'public' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
              }`}
            >
              🏦 Public Sector
            </button>
            <button
              onClick={() => setActiveTab('private')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'private' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
              }`}
            >
              🏢 Private Sector
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCards().map((card, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.name}</h3>
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">{card.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-2">{card.bank}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Annual Fee: {card.fee}</p>
              <p className="text-sm text-green-600 dark:text-green-400 mb-4">{card.cashback}</p>
              
              <div className="space-y-2">
                <button 
                  onClick={() => navigate(`/credit-cards/${card.slug}`)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  View Cards
                </button>
                <button className="w-full border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 py-2 px-4 rounded-lg transition-colors">
                  Compare
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}