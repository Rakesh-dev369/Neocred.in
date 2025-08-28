import React, { useState, useEffect } from 'react';

// Scroll to top when component mounts
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, DocumentTextIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const Form16BreakdownPage = () => {
  useScrollToTop();
  const [grossSalary, setGrossSalary] = useState('');
  const [hra, setHra] = useState('');
  const [otherAllowances, setOtherAllowances] = useState('');
  const [pfDeduction, setPfDeduction] = useState('');
  const [professionalTax, setProfessionalTax] = useState('');
  const [otherDeductions, setOtherDeductions] = useState('');
  const [section80C, setSection80C] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  const quickSalaries = [300000, 500000, 800000, 1200000, 1800000, 2500000];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!grossSalary || grossSalary < 100000) {
      newErrors.grossSalary = 'Minimum ₹1,00,000 required';
    } else if (grossSalary > 10000000) {
      newErrors.grossSalary = 'Maximum ₹1,00,00,000 allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateForm16Breakdown = () => {
    const annual = {
      gross: grossSalary,
      hra: hra || 0,
      otherAllowances: otherAllowances || 0,
      pfDeduction: pfDeduction || 0,
      professionalTax: professionalTax || 0,
      otherDeductions: otherDeductions || 0,
      section80C: section80C || 0
    };

    // Calculate basic salary (assuming 40% of gross if not specified)
    const basicSalary = annual.gross * 0.4;
    
    // Calculate total income
    const totalIncome = annual.gross + annual.hra + annual.otherAllowances;
    
    // Calculate total deductions
    const totalDeductions = annual.pfDeduction + annual.professionalTax + annual.otherDeductions;
    
    // Calculate taxable income before 80C
    const incomeBeforeDeductions = totalIncome - totalDeductions;
    
    // Calculate taxable income after 80C
    const taxableIncome = Math.max(0, incomeBeforeDeductions - annual.section80C);
    
    // Calculate income tax (New Tax Regime 2023-24)
    let incomeTax = 0;
    let taxBreakdown = [];
    
    if (taxableIncome > 300000) {
      // 5% on income from 3L to 6L
      const slab1 = Math.min(taxableIncome - 300000, 300000);
      if (slab1 > 0) {
        incomeTax += slab1 * 0.05;
        taxBreakdown.push({ slab: '₹3L - ₹6L', rate: '5%', amount: slab1 * 0.05, taxableAmount: slab1 });
      }
    }
    
    if (taxableIncome > 600000) {
      // 10% on income from 6L to 9L
      const slab2 = Math.min(taxableIncome - 600000, 300000);
      if (slab2 > 0) {
        incomeTax += slab2 * 0.10;
        taxBreakdown.push({ slab: '₹6L - ₹9L', rate: '10%', amount: slab2 * 0.10, taxableAmount: slab2 });
      }
    }
    
    if (taxableIncome > 900000) {
      // 15% on income from 9L to 12L
      const slab3 = Math.min(taxableIncome - 900000, 300000);
      if (slab3 > 0) {
        incomeTax += slab3 * 0.15;
        taxBreakdown.push({ slab: '₹9L - ₹12L', rate: '15%', amount: slab3 * 0.15, taxableAmount: slab3 });
      }
    }
    
    if (taxableIncome > 1200000) {
      // 20% on income from 12L to 15L
      const slab4 = Math.min(taxableIncome - 1200000, 300000);
      if (slab4 > 0) {
        incomeTax += slab4 * 0.20;
        taxBreakdown.push({ slab: '₹12L - ₹15L', rate: '20%', amount: slab4 * 0.20, taxableAmount: slab4 });
      }
    }
    
    if (taxableIncome > 1500000) {
      // 30% on income above 15L
      const slab5 = taxableIncome - 1500000;
      if (slab5 > 0) {
        incomeTax += slab5 * 0.30;
        taxBreakdown.push({ slab: 'Above ₹15L', rate: '30%', amount: slab5 * 0.30, taxableAmount: slab5 });
      }
    }
    
    // Calculate cess (4% on income tax)
    const cess = incomeTax * 0.04;
    const totalTax = incomeTax + cess;
    
    // Calculate net salary
    const netAnnualSalary = totalIncome - totalDeductions - totalTax;
    const netMonthlySalary = netAnnualSalary / 12;
    
    // Calculate monthly breakdown
    const monthly = {
      gross: annual.gross / 12,
      hra: annual.hra / 12,
      otherAllowances: annual.otherAllowances / 12,
      pfDeduction: annual.pfDeduction / 12,
      professionalTax: annual.professionalTax / 12,
      otherDeductions: annual.otherDeductions / 12,
      incomeTax: totalTax / 12,
      netSalary: netMonthlySalary
    };
    
    return {
      annual,
      monthly,
      basicSalary: Math.round(basicSalary),
      totalIncome: Math.round(totalIncome),
      totalDeductions: Math.round(totalDeductions),
      taxableIncome: Math.round(taxableIncome),
      incomeTax: Math.round(incomeTax),
      cess: Math.round(cess),
      totalTax: Math.round(totalTax),
      netAnnualSalary: Math.round(netAnnualSalary),
      netMonthlySalary: Math.round(netMonthlySalary),
      taxBreakdown,
      effectiveTaxRate: totalIncome > 0 ? ((totalTax / totalIncome) * 100).toFixed(2) : 0
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (grossSalary > 0) {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateForm16Breakdown());
            setIsCalculating(false);
          }, 300);
        } else {
          setResult(null);
        }
      } else {
        setResult(null);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [grossSalary, hra, otherAllowances, pfDeduction, professionalTax, otherDeductions, section80C]);

  const pieDataIncome = result ? [
    { name: 'Basic Salary', value: result.basicSalary, color: '#3B82F6' },
    { name: 'HRA', value: result.annual.hra, color: '#10B981' },
    { name: 'Other Allowances', value: result.annual.otherAllowances, color: '#F59E0B' }
  ].filter(item => item.value > 0) : [];

  const pieDataDeductions = result ? [
    { name: 'Income Tax', value: result.totalTax, color: '#EF4444' },
    { name: 'PF Deduction', value: result.annual.pfDeduction, color: '#8B5CF6' },
    { name: 'Professional Tax', value: result.annual.professionalTax, color: '#EC4899' },
    { name: 'Other Deductions', value: result.annual.otherDeductions, color: '#06B6D4' },
    { name: 'Net Salary', value: result.netAnnualSalary, color: '#22C55E' }
  ].filter(item => item.value > 0) : [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-4">
              <Link 
                to="/tools" 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                Back to Tools
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <DocumentTextIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Form 16 Breakdown Tool</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Understand your salary components and tax calculation</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('form16-breakdown');
              const difficulty = getToolDifficulty('form16-breakdown');
              
              return navigation ? (
                <div className="hidden md:flex items-center gap-3">
                  <div className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-2 py-1 rounded-md text-xs font-medium">
                    Beginner
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {navigation.previous && (
                      <Link
                        to={navigation.previous.path}
                        className="flex items-center gap-1 px-2 py-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                        title={navigation.previous.name}
                      >
                        <ChevronLeftIcon className="h-3 w-3" />
                        <span className="hidden lg:inline">Prev</span>
                      </Link>
                    )}
                    
                    <div className="text-xs text-gray-500 dark:text-gray-400 px-2">
                      {navigation.progress.current}/{navigation.progress.total}
                    </div>
                    
                    {navigation.next && (
                      <Link
                        to={navigation.next.path}
                        className="flex items-center gap-1 px-2 py-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                        title={navigation.next.name}
                      >
                        <span className="hidden lg:inline">Next</span>
                        <ChevronRightIcon className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ) : null;
            })()}
          </div>
        </div>
      </div>

      {/* What is Form 16 Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                What is Form 16? <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Tax Certificate)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Official document showing salary breakdown, tax deductions, and TDS details for the financial year.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">💼</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Salary Details</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">📊</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Tax Calculation</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">📋</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Official Record</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side - Input */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <CalculatorIcon className="h-5 w-5 text-blue-600" />
                Form 16 Breakdown
              </h2>
              
              <div className="space-y-6">
                {/* Annual Gross Salary */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Annual Gross Salary (CTC)
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickSalaries.map(salary => (
                      <button
                        key={salary}
                        onClick={() => setGrossSalary(salary)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          grossSalary === salary
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        ₹{(salary/100000).toFixed(0)}L
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={grossSalary}
                      onChange={(e) => setGrossSalary(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.grossSalary ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="800000"
                      min="100000"
                      max="10000000"
                    />
                  </div>
                  {errors.grossSalary && (
                    <p className="text-red-500 text-xs mt-1">{errors.grossSalary}</p>
                  )}
                </div>

                {/* Allowances */}
                <div className="border-t pt-4">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                    Allowances (Optional)
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                        HRA (House Rent Allowance)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="number"
                          value={hra}
                          onChange={(e) => setHra(e.target.value ? Number(e.target.value) : '')}
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                        Other Allowances (Transport, Medical, etc.)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="number"
                          value={otherAllowances}
                          onChange={(e) => setOtherAllowances(e.target.value ? Number(e.target.value) : '')}
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deductions */}
                <div className="border-t pt-4">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                    Deductions (Optional)
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                        PF Deduction (Employee Contribution)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="number"
                          value={pfDeduction}
                          onChange={(e) => setPfDeduction(e.target.value ? Number(e.target.value) : '')}
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                        Professional Tax
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="number"
                          value={professionalTax}
                          onChange={(e) => setProfessionalTax(e.target.value ? Number(e.target.value) : '')}
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                        Section 80C Deductions (PF, ELSS, PPF, etc.)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="number"
                          value={section80C}
                          onChange={(e) => setSection80C(e.target.value ? Number(e.target.value) : '')}
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="0"
                          min="0"
                          max="150000"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Maximum ₹1,50,000 under Section 80C</p>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-600 dark:text-gray-400 mb-1">
                        Other Deductions
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="number"
                          value={otherDeductions}
                          onChange={(e) => setOtherDeductions(e.target.value ? Number(e.target.value) : '')}
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form 16 Guide */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">📋</span>
                Form 16 Components
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-base">💼</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Part A</div>
                    <div className="text-gray-600 dark:text-gray-300">Employee & employer details, TDS summary</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-base">📊</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Part B</div>
                    <div className="text-gray-600 dark:text-gray-300">Salary details, allowances, deductions, tax calculation</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 text-base">🔢</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Annexure</div>
                    <div className="text-gray-600 dark:text-gray-300">Monthly salary breakup and tax deducted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Results */}
          <div className="space-y-6">
            {isCalculating ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculating...</h3>
                  <p className="text-gray-600 dark:text-gray-400">Processing your Form 16 breakdown</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Salary Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Salary Breakdown Summary
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Annual CTC</div>
                      <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.totalIncome.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                      <div className="text-sm text-red-600 dark:text-red-400 font-medium">Total Tax</div>
                      <div className="text-xl font-bold text-red-700 dark:text-red-300">
                        ₹{result.totalTax.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Net Annual Salary</div>
                      <div className="text-3xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.netAnnualSalary.toLocaleString()}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                        ₹{result.netMonthlySalary.toLocaleString()} per month
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Effective Tax Rate</div>
                      <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                        {result.effectiveTaxRate}%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tax Slab Breakdown */}
                {result.taxBreakdown.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tax Slab Breakdown</h3>
                    <div className="space-y-3">
                      {result.taxBreakdown.map((slab, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{slab.slab}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {slab.rate} on ₹{slab.taxableAmount.toLocaleString()}
                            </div>
                          </div>
                          <div className="text-lg font-bold text-red-600 dark:text-red-400">
                            ₹{slab.amount.toLocaleString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Income Breakdown Pie Chart */}
                {pieDataIncome.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Income Components</h3>
                    <div className="w-full overflow-hidden">
                      <ResponsiveContainer width="100%" height={250} minWidth={250}>
                        <PieChart>
                          <Pie
                            data={pieDataIncome}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={90}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {pieDataIncome.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip 
                            formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']}
                            contentStyle={{
                              backgroundColor: 'rgba(255, 255, 255, 0.95)',
                              border: '1px solid rgba(0, 0, 0, 0.1)',
                              borderRadius: '8px'
                            }}
                          />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}

                {/* Deductions Breakdown */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Salary Distribution</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <PieChart>
                        <Pie
                          data={pieDataDeductions}
                          cx="50%"
                          cy="50%"
                          innerRadius={50}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                        >
                          {pieDataDeductions.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <DocumentTextIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Analyze Your Form 16</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter your salary details to understand your Form 16 breakdown and tax calculation
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form16BreakdownPage;