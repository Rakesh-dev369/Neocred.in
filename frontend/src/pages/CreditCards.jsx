import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCardIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function CreditCards() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const navigate = useNavigate();

  const publicSectorCards = [
    // Student Cards
    { name: 'SBI Card Unnati', bank: 'SBI', slug: 'sbi', fee: 'Free for 4 years', cashback: '1 RP per ₹100', rating: 4.2, categories: ['Student'], applyLink: 'https://www.sbicard.com/en/personal/credit-cards/shopping/sbi-card-unnati.page' },
    
    // Salaried Cards
    { name: 'SBI SimplyCLICK', bank: 'SBI', slug: 'sbi', fee: '₹499', cashback: '10x on online', rating: 4.1, categories: ['Salaried'] },
    { name: 'BOB Premier', bank: 'Bank of Baroda', slug: 'bob', fee: '₹999', cashback: '5% on dining', rating: 4.0, categories: ['Salaried'] },
    { name: 'PNB RuPay Platinum', bank: 'PNB', slug: 'pnb', fee: '₹299', cashback: '2% on spends', rating: 3.8, categories: ['Salaried'] },
    { name: 'Canara Platinum', bank: 'Canara Bank', slug: 'canara', fee: '₹750', cashback: '1% cashback', rating: 3.9, categories: ['Salaried'] },
    
    // Business Cards
    { name: 'SBI Business Card', bank: 'SBI', slug: 'sbi', fee: '₹1,999', cashback: 'Business rewards', rating: 4.0, categories: ['Business'] },
    { name: 'BOB Business Plus', bank: 'Bank of Baroda', slug: 'bob', fee: '₹1,500', cashback: 'Fuel & travel', rating: 3.9, categories: ['Business'] }
  ];

  const privateSectorCards = [];

  const allCards = [...publicSectorCards, ...privateSectorCards];

  const getCards = () => {
    let cards;
    switch(activeTab) {
      case 'public': cards = publicSectorCards; break;
      case 'private': cards = privateSectorCards; break;
      default: cards = allCards;
    }
    
    console.log('Category Filter:', categoryFilter);
    console.log('Cards before filter:', cards.length);
    
    const filtered = cards.filter(card => {
      const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           card.bank.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || 
                             (card.categories && card.categories.includes(categoryFilter));
      console.log(`Card: ${card.name}, Categories: ${card.categories}, Matches: ${matchesCategory}`);
      return matchesSearch && matchesCategory;
    });
    
    console.log('Cards after filter:', filtered.length);
    return filtered;
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
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search banks or cards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md mx-auto block px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-6">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="Student">Student</option>
            <option value="Salaried">Salaried/Jobbers</option>
            <option value="Business">Self-Employed/Business</option>
          </select>
        </div>

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

        {/* Debug Info */}
        <div className="text-center mb-4 text-gray-600 dark:text-gray-400">
          Showing {getCards().length} cards {categoryFilter !== 'all' && `for ${categoryFilter}`}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCards().length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No cards found for the selected criteria.</p>
            </div>
          ) : (
            getCards().map((card, index) => (
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
              <p className="text-sm text-green-600 dark:text-green-400 mb-2">{card.cashback}</p>
              {card.categories && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {card.categories.map((category, idx) => (
                    <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="space-y-2">
                {card.applyLink ? (
                  <a
                    href={card.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors text-center"
                  >
                    Apply Now
                  </a>
                ) : (
                  <button 
                    onClick={() => navigate(`/credit-cards/${card.slug}`)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
                  >
                    View Cards
                  </button>
                )}
                <button className="w-full border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 py-2 px-4 rounded-lg transition-colors">
                  Compare
                </button>
              </div>
            </div>
          ))
          )}
        </div>
      </div>
    </div>
  );
}