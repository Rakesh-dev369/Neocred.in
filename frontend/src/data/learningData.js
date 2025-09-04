// Static learning data - moved out of component for better performance

// Navigation helper function to get next pillar
export const getNextPillar = (currentPillarId) => {
  const currentIndex = PILLAR_DATA.findIndex(pillar => pillar.id === currentPillarId);
  if (currentIndex !== -1 && currentIndex < PILLAR_DATA.length - 1) {
    return PILLAR_DATA[currentIndex + 1];
  }
  return null;
};

// Navigation helper function to get previous pillar
export const getPreviousPillar = (currentPillarId) => {
  const currentIndex = PILLAR_DATA.findIndex(pillar => pillar.id === currentPillarId);
  if (currentIndex > 0) {
    return PILLAR_DATA[currentIndex - 1];
  }
  return null;
};

export const PILLAR_DATA = [
  // BEGINNER LEVEL (Difficulty 1)
  {
    id: 1,
    title: "Personal Finance Mastery",
    description: "Master budgeting, emergency funds, debt elimination & financial goal setting.",
    icon: "💰",
    path: "/learn/personal-finance",
    gradient: "from-blue-400 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    darkBgGradient: "from-blue-900/20 to-indigo-900/20",
    sections: 12,
    duration: "2h 45m",
    difficulty: 1,
    difficultyLabel: "Beginner",
    prerequisite: null,
    completionRate: 94,
    popular: true,
    testimonial: "Saved ₹45K in first 6 months!",
    nextPillar: 2
  },
  {
    id: 2,
    title: "Digital Banking & Payments",
    description: "Master UPI, digital wallets, online banking & payment security.",
    icon: "🏦",
    path: "/learn/banking-payments",
    gradient: "from-blue-400 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    darkBgGradient: "from-blue-900/20 to-indigo-900/20",
    sections: 10,
    duration: "2h 20m",
    difficulty: 1,
    difficultyLabel: "Beginner",
    prerequisite: null,
    completionRate: 89,
    popular: false,
    testimonial: "No more banking fees!",
    nextPillar: 3
  },
  // INTERMEDIATE LEVEL (Difficulty 2)
  {
    id: 3,
    title: "Insurance & Risk Shield",
    description: "Build comprehensive protection with life, health & general insurance.",
    icon: "🛡️",
    path: "/learn/insurance",
    gradient: "from-red-400 to-pink-600",
    bgGradient: "from-red-50 to-pink-50",
    darkBgGradient: "from-red-900/20 to-pink-900/20",
    sections: 11,
    duration: "2h 35m",
    difficulty: 2,
    difficultyLabel: "Intermediate",
    prerequisite: 1,
    completionRate: 87,
    popular: true,
    testimonial: "Saved ₹60K on premiums!",
    nextPillar: 4
  },
  {
    id: 4,
    title: "Investment & Wealth Building",
    description: "Build wealth through mutual funds, SIP, stocks, bonds & ETFs.",
    icon: "📈",
    path: "/learn/investments",
    gradient: "from-purple-400 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50",
    darkBgGradient: "from-purple-900/20 to-violet-900/20",
    sections: 13,
    duration: "3h 10m",
    difficulty: 2,
    difficultyLabel: "Intermediate",
    prerequisite: 1,
    completionRate: 91,
    popular: true,
    testimonial: "Built ₹10L portfolio!",
    nextPillar: 5
  },
  {
    id: 5,
    title: "Tax & Government Finance",
    description: "Master tax planning, government schemes, subsidies & fiscal policy.",
    icon: "🏛️",
    path: "/learn/government-finance",
    gradient: "from-indigo-600 to-purple-700",
    bgGradient: "from-indigo-50 to-purple-50",
    darkBgGradient: "from-indigo-900/20 to-purple-900/20",
    sections: 12,
    duration: "2h 45m",
    difficulty: 2,
    difficultyLabel: "Intermediate",
    prerequisite: 1,
    completionRate: 85,
    popular: true,
    testimonial: "Saved ₹85K in taxes!",
    nextPillar: 6
  },
  // ADVANCED LEVEL (Difficulty 3)
  {
    id: 6,
    title: "Business & Corporate Finance",
    description: "Master business funding, valuations, financial statements & growth.",
    icon: "🏢",
    path: "/learn/corporate-finance",
    gradient: "from-orange-400 to-amber-600",
    bgGradient: "from-orange-50 to-amber-50",
    darkBgGradient: "from-orange-900/20 to-amber-900/20",
    sections: 12,
    duration: "2h 50m",
    difficulty: 3,
    difficultyLabel: "Advanced",
    prerequisite: 4,
    completionRate: 78,
    popular: false,
    testimonial: "Increased business ROI by 40%!",
    nextPillar: 7
  },
  {
    id: 7,
    title: "Alternative & Emerging Finance",
    description: "Explore crypto, blockchain, P2P lending & crowdfunding opportunities.",
    icon: "🚀",
    path: "/learn/alternative-finance",
    gradient: "from-purple-600 to-pink-700",
    bgGradient: "from-purple-50 to-pink-50",
    darkBgGradient: "from-purple-900/20 to-pink-900/20",
    sections: 12,
    duration: "2h 55m",
    difficulty: 3,
    difficultyLabel: "Advanced",
    prerequisite: 4,
    completionRate: 72,
    popular: false,
    testimonial: "Diversified beyond traditional assets!",
    nextPillar: 8
  },
  {
    id: 8,
    title: "Global Finance & Trade",
    description: "Master forex, international investing, trade finance & remittances.",
    icon: "🌍",
    path: "/learn/international-finance",
    gradient: "from-green-400 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50",
    darkBgGradient: "from-green-900/20 to-emerald-900/20",
    sections: 12,
    duration: "2h 50m",
    difficulty: 3,
    difficultyLabel: "Advanced",
    prerequisite: 4,
    completionRate: 68,
    popular: false,
    testimonial: "Expanded globally with confidence!",
    nextPillar: null
  }
];

export const POPULAR_TOPICS = [
  {
    id: 'emergency-fund',
    title: "Emergency Fund Planning by Age & Life Stage",
    icon: "🛡️",
    difficulty: "Beginner",
    time: "12 min read",
    trending: true,
    badge: "New",
    path: "/learn/emergency-fund-plan",
    author: "NeoCred Team",
    views: "15.2K",
    category: "Planning"
  },
  {
    id: 'tax-saving-2025',
    title: "Tax Saving Investments 2025: Complete Guide",
    icon: "💸",
    difficulty: "Intermediate",
    time: "18 min read",
    trending: true,
    badge: "Updated",
    path: "/learn/tax-optimization",
    author: "Tax Expert",
    views: "23.8K",
    category: "Tax Planning"
  },
  {
    id: 'investment-ladder',
    title: "7-Step Investment Ladder: FD to Mutual Funds",
    icon: "📈",
    difficulty: "Intermediate",
    time: "15 min read",
    trending: true,
    badge: "Popular",
    path: "/learn/investment-portfolio-guide",
    author: "Investment Team",
    views: "31.5K",
    category: "Investing"
  },
  {
    id: 'credit-score-guide',
    title: "Credit Score Improvement: 9-Step Action Plan",
    icon: "📊",
    difficulty: "Beginner",
    time: "14 min read",
    trending: true,
    badge: "Trending",
    path: "/learn/credit-score-debt-management",
    author: "Credit Expert",
    views: "19.7K",
    category: "Credit"
  }
];