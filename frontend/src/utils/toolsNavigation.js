// Tools Navigation Configuration
export const toolsNavigation = {
  beginner: [
    { id: 'sip-calculator', name: 'SIP Calculator', path: '/calculators/sip' },
    { id: 'fd-calculator', name: 'FD Calculator', path: '/calculators/fd' },
    { id: 'budget-planner', name: 'Budget Planner', path: '/calculators/budget-planner' },
    { id: 'rd-calculator', name: 'RD Calculator', path: '/calculators/rd' },
    { id: 'rule-of-72', name: 'Rule of 72 Calculator', path: '/calculators/rule-of-72' },
    { id: 'car-loan-emi', name: 'Car/Bike Loan EMI Calculator', path: '/calculators/car-loan-emi' },
    { id: 'health-insurance', name: 'Health Insurance Premium Estimator', path: '/calculators/health-insurance' },
    { id: 'net-worth-tracker', name: 'Net Worth Tracker', path: '/calculators/net-worth-tracker' },
    { id: 'emergency-fund', name: 'Emergency Fund Calculator', path: '/calculators/emergency-fund' },
    { id: 'budget-rule', name: '50/30/20 Rule Budgeter', path: '/calculators/budget-rule' },
    { id: 'first-salary-planner', name: 'First Salary Planner', path: '/calculators/first-salary-planner' }
  ],
  intermediate: [
    { id: 'ppf-calculator', name: 'PPF Calculator', path: '/calculators/ppf' },
    { id: 'step-up-sip', name: 'Step-up SIP Calculator', path: '/calculators/step-up-sip' },
    { id: 'lumpsum-calculator', name: 'Lumpsum Investment Calculator', path: '/calculators/lumpsum' },
    { id: 'mutual-fund-tracker', name: 'Mutual Fund Return Tracker', path: '/calculators/mutual-fund-tracker' },
    { id: 'gold-investment', name: 'Gold Investment Calculator', path: '/calculators/gold-investment' },
    { id: 'home-loan-emi', name: 'Home Loan EMI Calculator', path: '/calculators/home-loan-emi' },
    { id: 'education-loan-emi', name: 'Education Loan EMI Calculator', path: '/calculators/education-loan-emi' },
    { id: 'loan-eligibility', name: 'Loan Eligibility Checker', path: '/calculators/loan-eligibility' },
    { id: 'term-life-insurance', name: 'Term Life Insurance Estimator', path: '/calculators/term-life-insurance' },
    { id: 'epf-maturity', name: 'EPF Maturity Calculator', path: '/calculators/epf-maturity' },
    { id: 'hra-exemption', name: 'HRA Exemption Calculator', path: '/calculators/hra-exemption' }
  ],
  advanced: [
    { id: 'goal-based-investment', name: 'Goal-Based Investment Planner', path: '/calculators/goal-based-investment' },
    { id: 'nps-return', name: 'NPS Return Calculator', path: '/calculators/nps-return' },
    { id: 'retirement-goal', name: 'Retirement Goal Planner', path: '/calculators/retirement-goal' },
    { id: 'credit-score-simulator', name: 'Credit Score Simulator', path: '/calculators/credit-score-simulator' },
    { id: 'debt-repayment', name: 'Debt Repayment Planner', path: '/calculators/debt-repayment' },
    { id: 'rent-vs-buy', name: 'Rent vs Buy Home Calculator', path: '/calculators/rent-vs-buy' },
    { id: 'real-returns', name: 'Real Returns Calculator', path: '/calculators/real-returns' }
  ]
};

// Get all tools in order
export const getAllTools = () => {
  return [
    ...toolsNavigation.beginner,
    ...toolsNavigation.intermediate,
    ...toolsNavigation.advanced
  ];
};

// Get navigation for a specific tool
export const getToolNavigation = (currentToolId) => {
  const allTools = getAllTools();
  const currentIndex = allTools.findIndex(tool => tool.id === currentToolId);
  
  if (currentIndex === -1) return null;
  
  const previousTool = currentIndex > 0 ? allTools[currentIndex - 1] : null;
  const nextTool = currentIndex < allTools.length - 1 ? allTools[currentIndex + 1] : null;
  
  return {
    current: allTools[currentIndex],
    previous: previousTool,
    next: nextTool,
    progress: {
      current: currentIndex + 1,
      total: allTools.length
    }
  };
};

// Get difficulty level for a tool
export const getToolDifficulty = (toolId) => {
  if (toolsNavigation.beginner.find(tool => tool.id === toolId)) return 'beginner';
  if (toolsNavigation.intermediate.find(tool => tool.id === toolId)) return 'intermediate';
  if (toolsNavigation.advanced.find(tool => tool.id === toolId)) return 'advanced';
  return null;
};