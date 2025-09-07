import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import { usePerformanceMonitoring } from './hooks/usePerformance';
import { useAnalytics } from './hooks/useAnalytics';


// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Learn = lazy(() => import('./pages/Learn'));
const Tools = lazy(() => import('./pages/Tools'));
const Chatbot = lazy(() => import('./pages/LockedChatbot'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const News = lazy(() => import('./pages/LockedNews'));
const Explore = lazy(() => import('./pages/LockedExplore'));
const CreditCards = lazy(() => import('./pages/CreditCards'));
const SBICreditCards = lazy(() => import('./pages/SBICreditCards'));
const BOBCreditCards = lazy(() => import('./pages/BOBCreditCards'));
const PNBCreditCards = lazy(() => import('./pages/PNBCreditCards'));
const UnionBankCreditCards = lazy(() => import('./pages/UnionBankCreditCards'));
const CanaraBankCreditCards = lazy(() => import('./pages/CanaraBankCreditCards'));
const IndianBankCreditCards = lazy(() => import('./pages/IndianBankCreditCards'));
const BankOfIndiaCreditCards = lazy(() => import('./pages/BankOfIndiaCreditCards'));
const CentralBankCreditCards = lazy(() => import('./pages/CentralBankCreditCards'));
const UCOBankCreditCards = lazy(() => import('./pages/UCOBankCreditCards'));
const IOBCreditCards = lazy(() => import('./pages/IOBCreditCards'));
const BankOfMaharashtraCreditCards = lazy(() => import('./pages/BankOfMaharashtraCreditCards'));
const ExpertConsultation = lazy(() => import('./pages/ExpertConsultation'));

const PersonalFinance = lazy(() => import('./pages/learn/PersonalFinance'));
const EmergencyFundPlan = lazy(() => import('./pages/learn/EmergencyFundPlan'));
const BondsCompleteGuide = lazy(() => import('./pages/learn/BondsCompleteGuide'));
const InvestmentPortfolioGuide = lazy(() => import('./pages/learn/InvestmentPortfolioGuide'));
const CreditScoreDebtManagement = lazy(() => import('./pages/learn/CreditScoreDebtManagement'));
const RetirementPlanning = lazy(() => import('./pages/learn/RetirementPlanning'));
const InsuranceStrategy = lazy(() => import('./pages/learn/InsuranceStrategy'));
const TaxOptimization = lazy(() => import('./pages/learn/TaxOptimization'));
const WealthTracking = lazy(() => import('./pages/learn/WealthTracking'));
const EstatePlanning = lazy(() => import('./pages/learn/EstatePlanning'));
const BankingPayments = lazy(() => import('./pages/learn/BankingPayments'));
const Insurance = lazy(() => import('./pages/learn/Insurance'));
const Investments = lazy(() => import('./pages/learn/Investments'));
const CorporateFinance = lazy(() => import('./pages/learn/CorporateFinance'));
const GovernmentFinance = lazy(() => import('./pages/learn/GovernmentFinance'));
const AlternativeFinance = lazy(() => import('./pages/learn/AlternativeFinance'));
const InternationalFinance = lazy(() => import('./pages/learn/InternationalFinance'));
const TraditionalInvestments = lazy(() => import('./pages/learn/TraditionalInvestments'));
const MarketLinkedInvestments = lazy(() => import('./pages/learn/MarketLinkedInvestments'));
const RetirementInvestments = lazy(() => import('./pages/learn/RetirementInvestments'));
const AlternativeInvestments = lazy(() => import('./pages/learn/AlternativeInvestments'));
const GoalBasedInvesting = lazy(() => import('./pages/learn/GoalBasedInvesting'));
const TaxSavingInvestments = lazy(() => import('./pages/learn/TaxSavingInvestments'));

const InsurancePlatforms = lazy(() => import('./pages/InsurancePlatforms'));
const PersonalLoans = lazy(() => import('./pages/PersonalLoans'));
const GovernmentSchemes = lazy(() => import('./pages/GovernmentSchemes'));
const FinanceJobs = lazy(() => import('./pages/FinanceJobs'));
const BusinessTools = lazy(() => import('./pages/BusinessTools'));
const Rewards = lazy(() => import('./pages/Rewards'));
const PanCheck = lazy(() => import('./pages/PanCheck'));
const LoanCheck = lazy(() => import('./pages/LoanCheck'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Career = lazy(() => import('./pages/Career'));
const NotFound = lazy(() => import('./pages/NotFound'));
const FontDemo = lazy(() => import('./components/FontDemo'));
const SIPCalculatorPage = lazy(() => import('./pages/calculators/SIPCalculatorPage'));
const HomeLoanEMICalculatorPage = lazy(() => import('./pages/calculators/HomeLoanEMICalculatorPage'));
const FDCalculatorPage = lazy(() => import('./pages/calculators/FDCalculatorPage'));
const BudgetPlannerPage = lazy(() => import('./pages/calculators/BudgetPlannerPage'));
const HealthInsurancePage = lazy(() => import('./pages/calculators/HealthInsurancePage'));
const EmergencyFundPage = lazy(() => import('./pages/calculators/EmergencyFundPage'));
const RuleOf72Page = lazy(() => import('./pages/calculators/RuleOf72Page'));
const FirstSalaryPlannerPage = lazy(() => import('./pages/calculators/FirstSalaryPlannerPage'));
const CreditCardEMIPage = lazy(() => import('./pages/calculators/CreditCardEMIPage'));
const BudgetRulePage = lazy(() => import('./pages/calculators/BudgetRulePage'));
const RDCalculatorPage = lazy(() => import('./pages/calculators/RDCalculatorPage'));
const Form16BreakdownPage = lazy(() => import('./pages/calculators/Form16BreakdownPage'));
const CarLoanEMIPage = lazy(() => import('./pages/calculators/CarLoanEMIPage'));
const VehicleInsurancePage = lazy(() => import('./pages/calculators/VehicleInsurancePage'));
const NetWorthTrackerPage = lazy(() => import('./pages/calculators/NetWorthTrackerPage'));
const PostOfficeFDPage = lazy(() => import('./pages/calculators/PostOfficeFDPage'));
const PPFCalculatorPage = lazy(() => import('./pages/calculators/PPFCalculatorPage'));
const StepUpSIPPage = lazy(() => import('./pages/calculators/StepUpSIPPage'));
const LumpsumCalculatorPage = lazy(() => import('./pages/calculators/LumpsumCalculatorPage'));
const MutualFundTrackerPage = lazy(() => import('./pages/calculators/MutualFundTrackerPage'));
const GoldInvestmentPage = lazy(() => import('./pages/calculators/GoldInvestmentPage'));
const EducationLoanEMIPage = lazy(() => import('./pages/calculators/EducationLoanEMIPage'));
const LoanEligibilityPage = lazy(() => import('./pages/calculators/LoanEligibilityPage'));
const LoanAffordabilityPage = lazy(() => import('./pages/calculators/LoanAffordabilityPage'));
const TermLifeInsurancePage = lazy(() => import('./pages/calculators/TermLifeInsurancePage'));
const EPFMaturityPage = lazy(() => import('./pages/calculators/EPFMaturityPage'));
const HRAExemptionPage = lazy(() => import('./pages/calculators/HRAExemptionPage'));
const BudgetGoalPlannerPage = lazy(() => import('./pages/calculators/BudgetGoalPlannerPage'));
const GoalBasedInvestmentPage = lazy(() => import('./pages/calculators/GoalBasedInvestmentPage'));
const NPSReturnPage = lazy(() => import('./pages/calculators/NPSReturnPage'));
const RentVsBuyPage = lazy(() => import('./pages/calculators/RentVsBuyPage'));
const RetirementGoalPage = lazy(() => import('./pages/calculators/RetirementGoalPage'));
const AnnuityCalculatorPage = lazy(() => import('./pages/calculators/AnnuityCalculatorPage'));
const DebtRepaymentPage = lazy(() => import('./pages/calculators/DebtRepaymentPage'));
const RealReturnsPage = lazy(() => import('./pages/calculators/RealReturnsPage'));
const CreditScoreSimulatorPage = lazy(() => import('./pages/calculators/CreditScoreSimulatorPage'));



import './App.css';

function App() {
  usePerformanceMonitoring();
  useAnalytics();
  
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingSpinner size="lg" text="Loading page..." /></div>}>
          <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/learn" element={<MainLayout><Learn /></MainLayout>} />
          <Route path="/tools" element={<MainLayout><Tools /></MainLayout>} />
          <Route path="/chatbot" element={<MainLayout><Chatbot /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
          <Route path="/news" element={<MainLayout><News /></MainLayout>} />
          <Route path="/explore" element={<MainLayout><Explore /></MainLayout>} />
          <Route path="/credit-cards" element={<MainLayout><CreditCards /></MainLayout>} />
          <Route path="/credit-cards/sbi" element={<MainLayout><SBICreditCards /></MainLayout>} />
          <Route path="/credit-cards/bob" element={<MainLayout><BOBCreditCards /></MainLayout>} />
          <Route path="/credit-cards/pnb" element={<MainLayout><PNBCreditCards /></MainLayout>} />
          <Route path="/credit-cards/union" element={<MainLayout><UnionBankCreditCards /></MainLayout>} />
          <Route path="/credit-cards/canara" element={<MainLayout><CanaraBankCreditCards /></MainLayout>} />
          <Route path="/credit-cards/indian" element={<MainLayout><IndianBankCreditCards /></MainLayout>} />
          <Route path="/credit-cards/boi" element={<MainLayout><BankOfIndiaCreditCards /></MainLayout>} />
          <Route path="/credit-cards/central" element={<MainLayout><CentralBankCreditCards /></MainLayout>} />
          <Route path="/credit-cards/uco" element={<MainLayout><UCOBankCreditCards /></MainLayout>} />
          <Route path="/credit-cards/iob" element={<MainLayout><IOBCreditCards /></MainLayout>} />
          <Route path="/credit-cards/bom" element={<MainLayout><BankOfMaharashtraCreditCards /></MainLayout>} />
          <Route path="/insurance-platforms" element={<MainLayout><InsurancePlatforms /></MainLayout>} />
          <Route path="/personal-loans" element={<MainLayout><PersonalLoans /></MainLayout>} />
          <Route path="/government-schemes" element={<MainLayout><GovernmentSchemes /></MainLayout>} />
          <Route path="/finance-jobs" element={<MainLayout><FinanceJobs /></MainLayout>} />
          <Route path="/business-tools" element={<MainLayout><BusinessTools /></MainLayout>} />
          <Route path="/rewards" element={<MainLayout><Rewards /></MainLayout>} />
          <Route path="/expert-consultation" element={<MainLayout><ExpertConsultation /></MainLayout>} />

          <Route path="/learn/personal-finance" element={<MainLayout><PersonalFinance /></MainLayout>} />
          <Route path="/learn/emergency-fund-plan" element={<MainLayout><EmergencyFundPlan /></MainLayout>} />
          <Route path="/learn/bonds-complete-guide" element={<MainLayout><BondsCompleteGuide /></MainLayout>} />
          <Route path="/learn/investment-portfolio-guide" element={<MainLayout><InvestmentPortfolioGuide /></MainLayout>} />
          <Route path="/learn/credit-score-debt-management" element={<MainLayout><CreditScoreDebtManagement /></MainLayout>} />
          <Route path="/learn/retirement-planning" element={<MainLayout><RetirementPlanning /></MainLayout>} />
          <Route path="/learn/insurance-strategy" element={<MainLayout><InsuranceStrategy /></MainLayout>} />
          <Route path="/learn/tax-optimization" element={<MainLayout><TaxOptimization /></MainLayout>} />
          <Route path="/learn/wealth-tracking" element={<MainLayout><WealthTracking /></MainLayout>} />
          <Route path="/learn/estate-planning" element={<MainLayout><EstatePlanning /></MainLayout>} />
          <Route path="/learn/banking-payments" element={<MainLayout><BankingPayments /></MainLayout>} />
          <Route path="/learn/insurance" element={<MainLayout><Insurance /></MainLayout>} />
          <Route path="/learn/investments" element={<MainLayout><Investments /></MainLayout>} />
          <Route path="/learn/corporate-finance" element={<MainLayout><CorporateFinance /></MainLayout>} />
          <Route path="/learn/government-finance" element={<MainLayout><GovernmentFinance /></MainLayout>} />
          <Route path="/learn/alternative-finance" element={<MainLayout><AlternativeFinance /></MainLayout>} />
          <Route path="/learn/international-finance" element={<MainLayout><InternationalFinance /></MainLayout>} />
          <Route path="/learn/traditional-investments" element={<MainLayout><TraditionalInvestments /></MainLayout>} />
          <Route path="/learn/market-linked-investments" element={<MainLayout><MarketLinkedInvestments /></MainLayout>} />
          <Route path="/learn/retirement-investments" element={<MainLayout><RetirementInvestments /></MainLayout>} />
          <Route path="/learn/alternative-investments" element={<MainLayout><AlternativeInvestments /></MainLayout>} />
          <Route path="/learn/goal-based-investing" element={<MainLayout><GoalBasedInvesting /></MainLayout>} />
          <Route path="/learn/tax-saving-investments" element={<MainLayout><TaxSavingInvestments /></MainLayout>} />

          

          <Route path="/pan-check" element={<MainLayout><PanCheck /></MainLayout>} />
          <Route path="/loan-check" element={<MainLayout><LoanCheck /></MainLayout>} />
          <Route path="/privacy" element={<MainLayout><Privacy /></MainLayout>} />
          <Route path="/terms" element={<MainLayout><Terms /></MainLayout>} />
          <Route path="/disclaimer" element={<MainLayout><Disclaimer /></MainLayout>} />
          <Route path="/cookies" element={<MainLayout><Cookies /></MainLayout>} />
          <Route path="/career" element={<MainLayout><Career /></MainLayout>} />
          <Route path="/fonts" element={<MainLayout><FontDemo /></MainLayout>} />
          <Route path="/calculators/sip" element={<MainLayout><SIPCalculatorPage /></MainLayout>} />
          <Route path="/calculators/home-loan-emi" element={<MainLayout><HomeLoanEMICalculatorPage /></MainLayout>} />
          <Route path="/calculators/fd" element={<MainLayout><FDCalculatorPage /></MainLayout>} />
          <Route path="/calculators/budget-planner" element={<MainLayout><BudgetPlannerPage /></MainLayout>} />
          <Route path="/calculators/health-insurance" element={<MainLayout><HealthInsurancePage /></MainLayout>} />
          <Route path="/calculators/emergency-fund" element={<MainLayout><EmergencyFundPage /></MainLayout>} />
          <Route path="/calculators/rule-of-72" element={<MainLayout><RuleOf72Page /></MainLayout>} />
          <Route path="/calculators/first-salary-planner" element={<MainLayout><FirstSalaryPlannerPage /></MainLayout>} />
          <Route path="/calculators/credit-card-emi" element={<MainLayout><CreditCardEMIPage /></MainLayout>} />
          <Route path="/calculators/budget-rule" element={<MainLayout><BudgetRulePage /></MainLayout>} />
          <Route path="/calculators/rd" element={<MainLayout><RDCalculatorPage /></MainLayout>} />
          <Route path="/calculators/form16-breakdown" element={<MainLayout><Form16BreakdownPage /></MainLayout>} />
          <Route path="/calculators/car-loan-emi" element={<MainLayout><CarLoanEMIPage /></MainLayout>} />
          <Route path="/calculators/vehicle-insurance" element={<MainLayout><VehicleInsurancePage /></MainLayout>} />
          <Route path="/calculators/net-worth-tracker" element={<MainLayout><NetWorthTrackerPage /></MainLayout>} />
          <Route path="/calculators/post-office-fd" element={<MainLayout><PostOfficeFDPage /></MainLayout>} />
          <Route path="/calculators/ppf" element={<MainLayout><PPFCalculatorPage /></MainLayout>} />
          <Route path="/calculators/step-up-sip" element={<MainLayout><StepUpSIPPage /></MainLayout>} />
          <Route path="/calculators/lumpsum" element={<MainLayout><LumpsumCalculatorPage /></MainLayout>} />
          <Route path="/calculators/mutual-fund-tracker" element={<MainLayout><MutualFundTrackerPage /></MainLayout>} />
          <Route path="/calculators/gold-investment" element={<MainLayout><GoldInvestmentPage /></MainLayout>} />
          <Route path="/calculators/education-loan-emi" element={<MainLayout><EducationLoanEMIPage /></MainLayout>} />
          <Route path="/calculators/loan-eligibility" element={<MainLayout><LoanEligibilityPage /></MainLayout>} />
          <Route path="/calculators/loan-affordability" element={<MainLayout><LoanAffordabilityPage /></MainLayout>} />
          <Route path="/calculators/term-life-insurance" element={<MainLayout><TermLifeInsurancePage /></MainLayout>} />
          <Route path="/calculators/epf-maturity" element={<MainLayout><EPFMaturityPage /></MainLayout>} />
          <Route path="/calculators/hra-exemption" element={<MainLayout><HRAExemptionPage /></MainLayout>} />
          <Route path="/calculators/budget-goal-planner" element={<MainLayout><BudgetGoalPlannerPage /></MainLayout>} />
          <Route path="/calculators/goal-based-investment" element={<MainLayout><GoalBasedInvestmentPage /></MainLayout>} />
          <Route path="/calculators/nps-return" element={<MainLayout><NPSReturnPage /></MainLayout>} />
          <Route path="/calculators/rent-vs-buy" element={<MainLayout><RentVsBuyPage /></MainLayout>} />
          <Route path="/calculators/retirement-goal" element={<MainLayout><RetirementGoalPage /></MainLayout>} />
          <Route path="/calculators/annuity" element={<MainLayout><AnnuityCalculatorPage /></MainLayout>} />
          <Route path="/calculators/debt-repayment" element={<MainLayout><DebtRepaymentPage /></MainLayout>} />
          <Route path="/calculators/real-returns" element={<MainLayout><RealReturnsPage /></MainLayout>} />
          <Route path="/calculators/credit-score-simulator" element={<MainLayout><CreditScoreSimulatorPage /></MainLayout>} />
          <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
          </Routes>
        </Suspense>


      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;