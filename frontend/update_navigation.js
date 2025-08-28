// Script to update all remaining calculator pages with navigation
const fs = require('fs');
const path = require('path');

const toolMappings = {
  'PostOfficeFDPage.jsx': 'post-office-fd',
  'GoldInvestmentPage.jsx': 'gold-investment', 
  'RealReturnsPage.jsx': 'real-returns',
  'StepUpSIPPage.jsx': 'step-up-sip',
  'GoalBasedInvestmentPage.jsx': 'goal-based-investment',
  'BudgetGoalPlannerPage.jsx': 'budget-goal-planner',
  'RetirementGoalPage.jsx': 'retirement-goal',
  'HomeLoanEMICalculatorPage.jsx': 'home-loan-emi',
  'CarLoanEMIPage.jsx': 'car-loan-emi',
  'EducationLoanEMIPage.jsx': 'education-loan-emi',
  'CreditCardEMIPage.jsx': 'credit-card-emi',
  'EPFMaturityPage.jsx': 'epf-maturity',
  'NPSReturnPage.jsx': 'nps-return',
  'HRAExemptionPage.jsx': 'hra-exemption',
  'Form16BreakdownPage.jsx': 'form16-breakdown',
  'NetWorthTrackerPage.jsx': 'net-worth-tracker',
  'DebtRepaymentPage.jsx': 'debt-repayment',
  'LoanEligibilityPage.jsx': 'loan-eligibility',
  'LoanAffordabilityPage.jsx': 'loan-affordability',
  'RentVsBuyPage.jsx': 'rent-vs-buy',
  'CreditScoreSimulatorPage.jsx': 'credit-score-simulator',
  'TermLifeInsurancePage.jsx': 'term-life-insurance',
  'HealthInsurancePage.jsx': 'health-insurance',
  'VehicleInsurancePage.jsx': 'vehicle-insurance',
  'AnnuityCalculatorPage.jsx': 'annuity-calculator'
};

const getDifficultyBadge = (toolId) => {
  const beginner = ['post-office-fd', 'gold-investment', 'real-returns'];
  const intermediate = ['step-up-sip', 'goal-based-investment', 'budget-goal-planner', 'retirement-goal', 'home-loan-emi', 'car-loan-emi', 'education-loan-emi', 'credit-card-emi', 'epf-maturity', 'nps-return', 'hra-exemption', 'form16-breakdown', 'net-worth-tracker'];
  const advanced = ['debt-repayment', 'loan-eligibility', 'loan-affordability', 'rent-vs-buy', 'credit-score-simulator', 'term-life-insurance', 'health-insurance', 'vehicle-insurance', 'annuity-calculator'];
  
  if (beginner.includes(toolId)) return 'Beginner';
  if (intermediate.includes(toolId)) return 'Intermediate';
  if (advanced.includes(toolId)) return 'Advanced';
  return 'Beginner';
};

const getBadgeColor = (difficulty) => {
  switch(difficulty) {
    case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
    case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
    case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
    default: return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
  }
};

const updateFile = (filePath, toolId) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add import if not present
    if (!content.includes('getToolNavigation')) {
      content = content.replace(
        /import { ([^}]+) } from '@heroicons\/react\/24\/outline';/,
        `import { $1 } from '@heroicons/react/24/outline';\nimport { getToolNavigation } from '../../utils/toolsNavigation';`
      );
    }
    
    // Update header navigation
    const headerPattern = /(<div className="flex items-center justify-between">\s*<div className="flex items-center gap-4">\s*)<Link\s+to="\/tools"\s+className="[^"]*"\s*>\s*<ArrowLeftIcon[^>]*\/>\s*Back to Tools\s*<\/Link>/s;
    
    const difficulty = getDifficultyBadge(toolId);
    const badgeColor = getBadgeColor(difficulty);
    
    const newNavigation = `$1{(() => {
                const navigation = getToolNavigation('${toolId}');
                return navigation?.previous ? (
                  <Link 
                    to={navigation.previous.path}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <ArrowLeftIcon className="h-5 w-5" />
                    Previous: {navigation.previous.name}
                  </Link>
                ) : (
                  <Link 
                    to="/tools" 
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <ArrowLeftIcon className="h-5 w-5" />
                    Back to Tools
                  </Link>
                );
              })()}`;
    
    content = content.replace(headerPattern, newNavigation);
    
    // Add next button and progress indicator
    const endHeaderPattern = /(.*<\/div>\s*<\/div>\s*)\s*<\/div>\s*<\/div>\s*<\/div>/s;
    
    const nextButtonAndProgress = `$1
            {(() => {
              const navigation = getToolNavigation('${toolId}');
              return navigation?.next && (
                <Link 
                  to={navigation.next.path}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next: {navigation.next.name}
                  <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
                </Link>
              );
            })()}
          </div>
          {(() => {
            const navigation = getToolNavigation('${toolId}');
            return navigation && (
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="${badgeColor} px-2 py-1 rounded text-xs font-medium">${difficulty}</span>
                <span>•</span>
                <span>Tool {navigation.progress.current} of {navigation.progress.total}</span>
              </div>
            );
          })()}
        </div>
      </div>`;
    
    content = content.replace(endHeaderPattern, nextButtonAndProgress);
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated ${path.basename(filePath)}`);
    
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
};

// Update all files
const calculatorsDir = path.join(__dirname, 'src', 'pages', 'calculators');

Object.entries(toolMappings).forEach(([fileName, toolId]) => {
  const filePath = path.join(calculatorsDir, fileName);
  if (fs.existsSync(filePath)) {
    updateFile(filePath, toolId);
  } else {
    console.log(`⚠️  File not found: ${fileName}`);
  }
});

console.log('\n🎉 Navigation update complete!');