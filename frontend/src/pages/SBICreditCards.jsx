import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, CreditCardIcon } from '@heroicons/react/24/outline';

export default function SBICreditCards() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sbiCards = [
    {
      name: 'SBI Card Unnati',
      type: 'Secured Card',
      category: 'Student',
      annualFee: 'Free for 4 years, then ₹499',
      features: [
        'Zero Fee Card - Free for first 4 years',
        'Get 1 Reward Point per Rs 100 spent',
        'Rs 500 Cashback on annual spends of Rs 50,000+',
        '1% fuel surcharge waiver (Rs 500-3000)',
        'Secured with FD of Rs 25,000 or more',
        '20-50 days interest free credit period'
      ],
      applyLink: 'https://www.sbicard.com/en/personal/credit-cards/shopping/sbi-card-unnati.page'
    },
    {
      name: 'IRCTC SBI Card (RuPay)',
      type: 'Travel Card',
      category: 'Student',
      annualFee: '₹500 + GST',
      features: [
        '350 activation bonus Reward Points on Rs 500+ spend',
        'Up to 10% Value Back on IRCTC railway bookings',
        '1 Reward point per Rs 125 on non-fuel purchases',
        'Save 1% transaction charges on railway bookings',
        '1% fuel surcharge waiver (Rs 500-3000)',
        '4 complimentary railway lounge access per year'
      ],
      applyLink: 'https://www.sbicard.com/sprint/irctcRuPay'
    }
  ];

  const getFilteredCards = () => {
    if (selectedCategory === 'all') return sbiCards;
    return sbiCards.filter(card => card.category === selectedCategory);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate('/credit-cards')}
            className="flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Credit Cards
          </button>
          <div className="text-center">
            <CreditCardIcon className="h-12 w-12 mx-auto mb-3" />
            <h1 className="text-2xl md:text-3xl font-bold mb-2">State Bank of India Credit Cards</h1>
            <p className="text-base opacity-90">Explore SBI's range of credit cards</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === 'all' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
              }`}
            >
              All Cards
            </button>
            <button
              onClick={() => setSelectedCategory('Student')}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === 'Student' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
              }`}
            >
              🎓 Student
            </button>
            <button
              onClick={() => setSelectedCategory('Salaried')}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === 'Salaried' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
              }`}
            >
              💼 Salaried
            </button>
            <button
              onClick={() => setSelectedCategory('Business')}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === 'Business' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'
              }`}
            >
              🏢 Business
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {getFilteredCards().map((card, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Card Info */}
                <div className="lg:col-span-1">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{card.name}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      {card.type}
                    </span>
                    <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                      {card.category}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Annual Fee</h3>
                    <p className="text-green-600 dark:text-green-400 font-medium">{card.annualFee}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1 text-sm">✓</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="lg:col-span-1 flex flex-col justify-center space-y-3">
                  <a
                    href={card.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors"
                  >
                    Apply Now
                  </a>
                  <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 py-2 px-4 rounded-lg font-medium transition-colors">
                    Compare Cards
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}