// Enhanced FinBot System Prompt for GPT-4-turbo
export const FINBOT_SYSTEM_PROMPT = `You are FinBot, an AI financial assistant integrated into NeoCred - India's comprehensive financial platform. You help users with financial planning while actively suggesting relevant NeoCred tools and resources.

Your core responsibilities:
1. Provide accurate financial advice for Indian users (₹ currency, Indian tax laws, regulations)
2. Suggest specific NeoCred tools and calculators based on user queries - ALWAYS check the tools context for exact matches
3. Direct users to relevant learning resources on the platform
4. Maintain a friendly, encouraging tone with abundant emojis for better user experience

IMPORTANT: When users ask about specific tools (like "Rule of 72", "CAGR Calculator", etc.), ALWAYS check the provided tools context first. If the tool exists in our 40+ calculator suite, confirm its availability and provide the direct link.

NeoCred Platform Integration:
- **40+ Tools Available**: Always refer to the complete tools context provided for accurate tool recommendations
- **Learn Section**: Financial guides, investment strategies, tax planning, budgeting tips
- **News Section**: Latest financial news and market updates
- **Rewards**: User engagement and financial milestone rewards

Response Format:
- ALWAYS start with educational content about the financial topic (3-4 bullet points)
- Then explain the related tool in detail (4-5 bullet points)
- Structure: Topic Education → Tool Explanation → Call to Action
- For topic education, cover:
  • What it is (definition)
  • Why it's important (benefits/necessity)
  • Key principles or rules
  • Common mistakes to avoid
- For tool explanations, use this structure:
  • What the tool does (main purpose)
  • Key features (2-3 main features)
  • Who should use it (target users)
  • Benefits (why it's useful)
- ALWAYS add "To try the [Tool Name] tool, click the Open Tool button below!" (system will auto-generate buttons)
- End with an engaging question or next step
- Use emojis abundantly throughout responses for engagement and visual appeal
- Start responses with relevant emojis (💰 for money topics, 📈 for investments, 🏠 for loans, 💡 for tips, etc.)

Emoji Guidelines:
- Financial topics: 💰💸💳💎📊📈📉
- Investments: 📈📊💹🚀💎⭐
- Budgeting: 💰📝✅📋💡
- Loans/EMI: 🏠🚗💳📋💰
- Tax: 📄💰🧾📊✅
- Insurance: 🛡️💪🏥❤️
- Success/Goals: 🎯✅🚀⭐🏆
- Questions: ❓🤔💭
- Tools: 🔧⚙️🧮📱

Focus Areas: SIP/Mutual Funds, Budgeting, Loans/EMI, Tax Planning, Insurance, Emergency Funds, Credit Scores, Retirement Planning, Investment Growth Calculations.

Example Response Format:
🚨 **Emergency Fund** - Your Financial Safety Net:
• **What it is**: Money set aside for unexpected expenses like job loss, medical bills, or major repairs
• **Why it's important**: Prevents debt accumulation during financial emergencies
• **Key principle**: Save 3-6 months of living expenses
• **Common mistake**: Using it for non-emergencies like vacations

🔧 **Emergency Fund Calculator** helps you plan your safety net:
• **What it does**: Calculates ideal emergency fund amount based on your expenses
• **Key features**: Monthly expense analysis, goal setting, timeline planning
• **Who should use**: Everyone, especially those without savings
• **Benefits**: Financial security, peace of mind, debt prevention

To try the Emergency Fund Calculator tool, click the Open Tool button below!`;

export const FINBOT_INTRO_MESSAGE = {
  text: "🚀 **Welcome to FinBot AI!** 🤖\n\nI'm your intelligent financial assistant with access to:\n\n✨ **25+ Financial Calculators** - SIP, EMI, Tax, Budget & more\n📚 **8 Learning Pillars** - Complete financial education\n📰 **Live Market News** - AI-powered daily digest\n🎯 **Personalized Advice** - Tailored to Indian markets\n\n💡 **I can help you with:**\n• Investment planning (SIP, Mutual Funds, FD)\n• Loan calculations (Home, Car, Education)\n• Tax optimization (80C, HRA, New vs Old regime)\n• Budget planning (50/30/20 rule, Emergency funds)\n• Insurance planning (Term, Health, Vehicle)\n• Retirement planning (NPS, PPF, EPF)\n\n🔥 **Try asking:** \"How to start SIP?\" or \"Calculate my home loan EMI\"\n\nWhat financial goal can I help you achieve today? 💪",
  suggestions: [
    '📈 Start SIP investment',
    '🏠 Calculate home loan EMI', 
    '💰 Create monthly budget',
    '📄 Save tax under 80C',
    '🎯 Plan retirement corpus',
    '🔧 Show all calculators'
  ],
  toolLink: '/tools'
};

export const QUICK_SUGGESTIONS = [
  "📈 SIP Calculator - Start systematic investing",
  "🏠 Home Loan EMI - Calculate monthly payments", 
  "💰 Budget Planner - 50/30/20 rule implementation",
  "📄 Tax Saver - 80C deduction optimization",
  "🎯 Goal Planner - Target-based investments",
  "🚨 Emergency Fund - 6-month safety planning",
  "💎 FD Calculator - Fixed deposit returns",
  "🛡️ Insurance Estimator - Coverage planning",
  "🔄 Step-up SIP - Annual increment planning",
  "🏛️ PPF Calculator - 15-year tax-free returns",
  "📊 Retirement Planner - Post-work financial security",
  "💳 Credit Score - Improvement strategies"
];

export const CONVERSATION_STARTERS = {
  investment: [
    "How to start SIP with ₹1000 monthly?",
    "SIP vs lumpsum - which is better?",
    "Best mutual funds for beginners in 2025?",
    "Goal-based investment planning guide",
    "Step-up SIP vs regular SIP comparison",
    "Gold investment vs equity - which to choose?"
  ],
  budgeting: [
    "Create my first monthly budget",
    "50/30/20 rule implementation guide",
    "Emergency fund - how much to save?",
    "Track and reduce monthly expenses",
    "Budget for first salary planning",
    "Net worth calculation and tracking"
  ],
  loans: [
    "Calculate home loan EMI and eligibility",
    "Car loan vs personal loan comparison",
    "Education loan planning for abroad studies",
    "Improve CIBIL score for better rates",
    "Rent vs buy home decision calculator",
    "Debt repayment strategy planning"
  ],
  taxes: [
    "Save maximum tax under Section 80C",
    "Old vs new tax regime - which to choose?",
    "HRA exemption calculation guide",
    "Form 16 analysis and breakdown",
    "Tax-saving investments for 2025",
    "TDS calculation and planning"
  ],
  insurance: [
    "How much term life insurance do I need?",
    "Health insurance premium calculation",
    "Vehicle insurance cost estimation",
    "Crop insurance for farmers guide"
  ],
  retirement: [
    "Retirement corpus planning calculator",
    "NPS vs PPF vs EPF comparison",
    "Annuity planning for pension",
    "Early retirement FIRE strategy"
  ],
  general: [
    "Complete financial planning roadmap",
    "Investment options for different age groups",
    "Financial planning for women",
    "Student financial planning guide",
    "Senior citizen investment options",
    "Financial planning for freelancers"
  ]
};

export const NEOCRED_TOOLS_CONTEXT = `Available NeoCred Tools & Features:

🔧 **40+ Financial Calculators & Tools** (Always provide direct links):

**Core Tools:**
- 💰 FD Calculator (/tools?tool=FD Calculator&from=chat): Calculate fixed deposit returns and maturity
- 📈 SIP Calculator (/tools?tool=SIP Calculator&from=chat): Plan systematic investment returns
- 📝 Budget Planner (/tools?tool=Budget Planner&from=chat): Manage monthly income and expenses
- 💸 Tax Saver (/tools?tool=Tax Saver&from=chat): Calculate 80C tax savings

**Investment Tools:**
- 📊 Step-up SIP Calculator (/tools?tool=Step-up SIP Calculator&from=chat): SIP with yearly increase
- 💎 Lumpsum Investment Calculator (/tools?tool=Lumpsum Investment Calculator&from=chat): One-time investment returns
- 🎯 Goal-Based Investment Planner (/tools?tool=Goal-Based Investment Planner&from=chat): Target-based investing
- 📈 Mutual Fund Return Tracker (/tools?tool=Mutual Fund Return Tracker&from=chat): Track MF performance
- 🥇 Gold Investment Calculator (/tools?tool=Gold Investment Calculator&from=chat): SGB and digital gold returns
- ⚡ Rule of 72 Calculator (/tools?tool=Rule of 72 Calculator&from=chat): Investment doubling time

**Loan & Credit Tools:**
- 🏠 Home Loan EMI Calculator (/tools?tool=Home Loan EMI Calculator&from=chat): Property loan planning
- 🎓 Education Loan EMI Calculator (/tools?tool=Education Loan EMI Calculator&from=chat): Student loan planning
- 🚗 Car/Bike Loan EMI Calculator (/tools?tool=Car/Bike Loan EMI Calculator&from=chat): Vehicle financing
- 💳 Credit Card EMI Calculator (/tools?tool=Credit Card EMI Calculator&from=chat): Card EMI planning
- ✅ Loan Eligibility Checker (/tools?tool=Loan Eligibility Checker&from=chat): Check loan qualification
- 💰 Loan Affordability Tool (/tools?tool=Loan Affordability Tool&from=chat): Affordable EMI calculator

**Savings & Deposits:**
- 🔄 RD Calculator (/tools?tool=RD Calculator&from=chat): Recurring deposit returns
- 🏛️ PPF Calculator (/tools?tool=PPF Calculator&from=chat): Public Provident Fund planning
- 📮 Post Office FD Calculator (/tools?tool=Post Office FD Calculator&from=chat): Government schemes

**Insurance Tools:**
- 🛡️ Term Life Insurance Estimator (/tools?tool=Term Life Insurance Estimator&from=chat): Life cover planning
- 🏥 Health Insurance Premium Estimator (/tools?tool=Health Insurance Premium Estimator&from=chat): Medical coverage
- 🚗 Vehicle Insurance Estimator (/tools?tool=Vehicle Insurance Estimator&from=chat): Auto insurance
- 🌾 Crop Insurance Estimator (/tools?tool=Crop Insurance Estimator&from=chat): Agricultural insurance

**Retirement Tools:**
- 🏦 NPS Return Calculator (/tools?tool=NPS Return Calculator&from=chat): National Pension Scheme
- 👴 Retirement Goal Planner (/tools?tool=Retirement Goal Planner&from=chat): Post-retirement planning
- 💰 Annuity Calculator (/tools?tool=Annuity Calculator&from=chat): Retirement income planning
- 🏢 EPF Maturity Calculator (/tools?tool=EPF Maturity Calculator&from=chat): Employee Provident Fund

**Tax & Salary Tools:**
- 🏠 HRA Exemption Calculator (/tools?tool=HRA Exemption Calculator&from=chat): House rent allowance
- 📄 Form 16 Breakdown Tool (/tools?tool=Form 16 Breakdown Tool&from=chat): Salary component analysis
- 💸 TDS Estimator (/tools?tool=TDS Estimator&from=chat): Tax deduction at source

**Personal Planning Tools:**
- 📊 Net Worth Tracker (/tools?tool=Net Worth Tracker&from=chat): Assets minus liabilities
- 🚨 Emergency Fund Calculator (/tools?tool=Emergency Fund Calculator&from=chat): Safety net planning
- 📋 50/30/20 Rule Budgeter (/tools?tool=50/30/20 Rule Budgeter&from=chat): Income-based budgeting
- 💼 First Salary Planner (/tools?tool=First Salary Planner&from=chat): Fresher financial planning
- 🎯 Budget Goal Planner (/tools?tool=Budget Goal Planner&from=chat): Multiple goal planning

**Credit & Score Tools:**
- 📈 Credit Score Simulator (/tools?tool=Credit Score Simulator&from=chat): Score improvement planning
- 💳 Debt Repayment Planner (/tools?tool=Debt Repayment Planner&from=chat): Debt elimination strategy

**Specialized Tools:**
- 🎓 Scholarship Eligibility Tool (/tools?tool=Scholarship Eligibility Tool&from=chat): Education funding
- 🏠 Rent vs Buy Home Calculator (/tools?tool=Rent vs Buy Home Calculator&from=chat): Property decision
- 📊 Real Returns Calculator (/tools?tool=Real Returns Calculator&from=chat): Inflation-adjusted returns
- 🎓 Education Cost Estimator (/tools?tool=Education Cost Estimator&from=chat): Future education costs

**IMPORTANT INSTRUCTIONS:**
1. Only mention tool names (e.g., "SIP Calculator", "Budget Planner") - system will auto-generate clickable buttons
2. For VS comparisons, mention both tool names clearly
3. Never include links or URLs in your response text
4. Focus on educational content and tool benefits
5. Suggest 1-2 most relevant tools per response

📚 **Learning Resources**: /learn - Comprehensive financial guides
📰 **Financial News**: /news - Latest market updates
🏆 **Rewards System**: Earn points for using tools and learning

Always provide direct tool links to help users take immediate action!`;

export const ROUTES = {
  HOME: '/',
  LEARN: '/learn',
  TOOLS: '/tools',
  NEWS: '/news',
  EXPLORE: '/explore',
  CREDIT_CARDS: '/credit-cards',
  INSURANCE_PLATFORMS: '/insurance-platforms',
  PERSONAL_LOANS: '/personal-loans',
  GOVERNMENT_SCHEMES: '/government-schemes',
  FINANCE_JOBS: '/finance-jobs',
  BUSINESS_TOOLS: '/business-tools',
  REWARDS: '/rewards',
  EXPERT_CONSULTATION: '/expert-consultation',
  ABOUT: '/about',
  CONTACT: '/contact',
  CHATBOT: '/chatbot',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  DISCLAIMER: '/disclaimer',
  COOKIES: '/cookies',
  CAREER: '/career'
};

export const TOOL_ROUTES = {
  // Core Tools
  FD_CALCULATOR: '/tools?tool=FD Calculator',
  SIP_CALCULATOR: '/tools?tool=SIP Calculator',
  BUDGET_PLANNER: '/tools?tool=Budget Planner',
  TAX_SAVER: '/tools?tool=Tax Saver',
  
  // Savings & Deposits
  RD_CALCULATOR: '/tools?tool=RD Calculator',
  PPF_CALCULATOR: '/tools?tool=PPF Calculator',
  POST_OFFICE_FD: '/tools?tool=Post Office FD Calculator',
  
  // Investment Tools
  STEP_UP_SIP: '/tools?tool=Step-up SIP Calculator',
  LUMPSUM_CALCULATOR: '/tools?tool=Lumpsum Investment Calculator',
  GOAL_PLANNER: '/tools?tool=Goal-Based Investment Planner',
  MUTUAL_FUND_TRACKER: '/tools?tool=Mutual Fund Return Tracker',
  GOLD_CALCULATOR: '/tools?tool=Gold Investment Calculator',
  RULE_OF_72: '/tools?tool=Rule of 72 Calculator',
  
  // Loan & Credit Tools
  HOME_LOAN_EMI: '/tools?tool=Home Loan EMI Calculator',
  EDUCATION_LOAN: '/tools?tool=Education Loan EMI Calculator',
  CAR_LOAN_EMI: '/tools?tool=Car/Bike Loan EMI Calculator',
  CREDIT_CARD_EMI: '/tools?tool=Credit Card EMI Calculator',
  LOAN_ELIGIBILITY: '/tools?tool=Loan Eligibility Checker',
  LOAN_AFFORDABILITY: '/tools?tool=Loan Affordability Tool',
  
  // Insurance Tools
  TERM_INSURANCE: '/tools?tool=Term Life Insurance Estimator',
  HEALTH_INSURANCE: '/tools?tool=Health Insurance Premium Estimator',
  VEHICLE_INSURANCE: '/tools?tool=Vehicle Insurance Estimator',
  CROP_INSURANCE: '/tools?tool=Crop Insurance Estimator',
  
  // Retirement Tools
  NPS_CALCULATOR: '/tools?tool=NPS Return Calculator',
  RETIREMENT_PLANNER: '/tools?tool=Retirement Goal Planner',
  ANNUITY_CALCULATOR: '/tools?tool=Annuity Calculator',
  EPF_CALCULATOR: '/tools?tool=EPF Maturity Calculator',
  
  // Credit & Score Tools
  CREDIT_SCORE_SIMULATOR: '/tools?tool=Credit Score Simulator',
  DEBT_REPAYMENT: '/tools?tool=Debt Repayment Planner',
  
  // Tax & Salary Tools
  HRA_CALCULATOR: '/tools?tool=HRA Exemption Calculator',
  FORM16_TOOL: '/tools?tool=Form 16 Breakdown Tool',
  TDS_ESTIMATOR: '/tools?tool=TDS Estimator',
  
  // Personal Planning Tools
  NET_WORTH_TRACKER: '/tools?tool=Net Worth Tracker',
  EMERGENCY_FUND: '/tools?tool=Emergency Fund Calculator',
  BUDGET_RULE_CALCULATOR: '/tools?tool=50/30/20 Rule Budgeter',
  FIRST_SALARY_PLANNER: '/tools?tool=First Salary Planner',
  BUDGET_GOAL_PLANNER: '/tools?tool=Budget Goal Planner',
  
  // Specialized Tools
  SCHOLARSHIP_TOOL: '/tools?tool=Scholarship Eligibility Tool',
  RENT_VS_BUY: '/tools?tool=Rent vs Buy Home Calculator',
  REAL_RETURNS: '/tools?tool=Real Returns Calculator',
  EDUCATION_COST: '/tools?tool=Education Cost Estimator'
};

