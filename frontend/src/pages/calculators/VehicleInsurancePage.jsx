import React, { useState, useEffect } from 'react';

// Scroll to top when component mounts
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalculatorIcon, ChartBarIcon, ShieldCheckIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { getToolNavigation, getToolDifficulty } from '../../utils/toolsNavigation';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const VehicleInsurancePage = () => {
  useScrollToTop();
  const [vehicleType, setVehicleType] = useState('car');
  const [vehicleValue, setVehicleValue] = useState('');
  const [vehicleAge, setVehicleAge] = useState('');
  const [city, setCity] = useState('metro');
  const [coverageType, setCoverageType] = useState('comprehensive');
  const [addOns, setAddOns] = useState({
    zeroDepreciation: false,
    engineProtection: false,
    roadSideAssistance: false,
    returnToInvoice: false,
    personalAccident: false
  });
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  const quickValues = [300000, 500000, 800000, 1200000, 1800000, 2500000];
  const vehicleAges = [0, 1, 2, 3, 4, 5];

  const validateInputs = () => {
    const newErrors = {};
    
    if (!vehicleValue || vehicleValue < 50000) {
      newErrors.vehicleValue = 'Minimum ₹50,000 required';
    } else if (vehicleValue > 10000000) {
      newErrors.vehicleValue = 'Maximum ₹1 crore allowed';
    }
    
    if (vehicleAge === '' || vehicleAge < 0) {
      newErrors.vehicleAge = 'Vehicle age is required';
    } else if (vehicleAge > 15) {
      newErrors.vehicleAge = 'Maximum 15 years allowed';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateVehicleInsurance = () => {
    // Base premium rates (% of vehicle value)
    const basePremiumRates = {
      car: {
        comprehensive: vehicleAge <= 3 ? 0.035 : vehicleAge <= 5 ? 0.04 : 0.045,
        thirdParty: vehicleAge <= 3 ? 0.008 : vehicleAge <= 5 ? 0.01 : 0.012
      },
      bike: {
        comprehensive: vehicleAge <= 3 ? 0.025 : vehicleAge <= 5 ? 0.03 : 0.035,
        thirdParty: vehicleAge <= 3 ? 0.005 : vehicleAge <= 5 ? 0.007 : 0.009
      },
      commercial: {
        comprehensive: vehicleAge <= 3 ? 0.05 : vehicleAge <= 5 ? 0.055 : 0.06,
        thirdParty: vehicleAge <= 3 ? 0.015 : vehicleAge <= 5 ? 0.018 : 0.02
      }
    };

    // City multipliers
    const cityMultipliers = {
      metro: 1.2,
      tier1: 1.0,
      tier2: 0.9,
      rural: 0.8
    };

    // Age depreciation factor
    const depreciationFactor = vehicleAge <= 1 ? 1.0 : 
                              vehicleAge <= 3 ? 0.95 : 
                              vehicleAge <= 5 ? 0.85 : 0.75;

    const basePremium = vehicleValue * basePremiumRates[vehicleType][coverageType];
    const cityAdjustedPremium = basePremium * cityMultipliers[city];
    const finalBasePremium = cityAdjustedPremium * depreciationFactor;

    // Calculate add-on premiums
    const addOnPremiums = {
      zeroDepreciation: addOns.zeroDepreciation ? vehicleValue * 0.008 : 0,
      engineProtection: addOns.engineProtection ? vehicleValue * 0.003 : 0,
      roadSideAssistance: addOns.roadSideAssistance ? 1500 : 0,
      returnToInvoice: addOns.returnToInvoice ? vehicleValue * 0.005 : 0,
      personalAccident: addOns.personalAccident ? 750 : 0
    };

    const totalAddOnPremium = Object.values(addOnPremiums).reduce((sum, premium) => sum + premium, 0);
    const totalPremium = finalBasePremium + totalAddOnPremium;

    // GST calculation (18%)
    const gst = totalPremium * 0.18;
    const finalPremium = totalPremium + gst;

    // Calculate NCB discount (No Claim Bonus)
    const ncbDiscounts = [0, 0.2, 0.25, 0.35, 0.45, 0.5]; // 0-5 years
    const ncbDiscount = vehicleAge > 0 ? finalBasePremium * ncbDiscounts[Math.min(vehicleAge, 5)] : 0;
    const premiumAfterNCB = finalPremium - ncbDiscount;

    // Calculate comparison with other coverage types
    const thirdPartyPremium = vehicleValue * basePremiumRates[vehicleType]['thirdParty'] * cityMultipliers[city] * depreciationFactor;
    const thirdPartyWithGST = thirdPartyPremium * 1.18;

    return {
      basePremium: Math.round(finalBasePremium),
      addOnPremiums,
      totalAddOnPremium: Math.round(totalAddOnPremium),
      totalPremium: Math.round(totalPremium),
      gst: Math.round(gst),
      finalPremium: Math.round(finalPremium),
      ncbDiscount: Math.round(ncbDiscount),
      premiumAfterNCB: Math.round(premiumAfterNCB),
      thirdPartyPremium: Math.round(thirdPartyWithGST),
      savings: Math.round(finalPremium - thirdPartyWithGST),
      premiumPercentage: ((finalPremium / vehicleValue) * 100).toFixed(2),
      monthlyPremium: Math.round(finalPremium / 12),
      claimAmount: coverageType === 'comprehensive' ? vehicleValue : 500000 // Third party liability
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (vehicleValue > 0 && vehicleAge !== '') {
        if (validateInputs()) {
          setIsCalculating(true);
          setTimeout(() => {
            setResult(calculateVehicleInsurance());
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
  }, [vehicleType, vehicleValue, vehicleAge, city, coverageType, addOns]);

  const pieData = result ? [
    { name: 'Base Premium', value: result.basePremium, color: '#3B82F6' },
    { name: 'Add-ons', value: result.totalAddOnPremium, color: '#10B981' },
    { name: 'GST (18%)', value: result.gst, color: '#F59E0B' }
  ].filter(item => item.value > 0) : [];

  const addOnData = result ? Object.entries(result.addOnPremiums)
    .filter(([_, value]) => value > 0)
    .map(([key, value]) => ({
      name: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
      value: Math.round(value),
      color: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'][Object.keys(result.addOnPremiums).indexOf(key)]
    })) : [];

  const comparisonData = result ? [
    { name: 'Third Party', premium: result.thirdPartyPremium, coverage: '₹15L Liability' },
    { name: 'Comprehensive', premium: result.finalPremium, coverage: `₹${(vehicleValue/100000).toFixed(0)}L Own Damage` }
  ] : [];

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
                  <ShieldCheckIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Vehicle Insurance Estimator</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate premium for car, bike, and commercial vehicle insurance</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            {(() => {
              const navigation = getToolNavigation('vehicle-insurance');
              const difficulty = getToolDifficulty('vehicle-insurance');
              
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

      {/* Insurance Info Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Vehicle Insurance <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Mandatory by Law)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Protect your vehicle with comprehensive coverage including own damage and third-party liability.
              </p>
            </div>
            
            <div className="flex gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">🛡️</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Own Damage</span>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">3-6% of IDV</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">👥</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Third Party</span>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">₹15L Liability</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-lg p-2 mb-1">
                  <span className="text-lg">⭐</span>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Add-ons</span>
                <span className="text-xs font-medium text-purple-600 dark:text-purple-400">Extra Protection</span>
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
                Vehicle Details
              </h2>
              
              <div className="space-y-6">
                {/* Vehicle Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Vehicle Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'car', label: 'Car', icon: '🚗' },
                      { value: 'bike', label: 'Bike', icon: '🏍️' },
                      { value: 'commercial', label: 'Commercial', icon: '🚛' }
                    ].map(type => (
                      <button
                        key={type.value}
                        onClick={() => setVehicleType(type.value)}
                        className={`p-3 rounded-lg border transition-colors ${
                          vehicleType === type.value
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        <div className="text-lg mb-1">{type.icon}</div>
                        <div className="text-xs font-medium">{type.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Vehicle Value (IDV) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Vehicle Value (IDV - Insured Declared Value)
                  </label>
                  
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickValues.map(value => (
                      <button
                        key={value}
                        onClick={() => setVehicleValue(value)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          vehicleValue === value
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-400'
                        }`}
                      >
                        ₹{(value/100000).toFixed(0)}L
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={vehicleValue}
                      onChange={(e) => setVehicleValue(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.vehicleValue ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="800000"
                      min="50000"
                      max="10000000"
                    />
                  </div>
                  {errors.vehicleValue && (
                    <p className="text-red-500 text-xs mt-1">{errors.vehicleValue}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Current market value of your vehicle</p>
                </div>

                {/* Vehicle Age */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Vehicle Age (Years)
                  </label>
                  
                  <div className="grid grid-cols-6 gap-2 mb-3">
                    {vehicleAges.map(age => (
                      <button
                        key={age}
                        onClick={() => setVehicleAge(age)}
                        className={`px-3 py-2 text-xs rounded-lg border transition-colors ${
                          vehicleAge === age
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-green-400'
                        }`}
                      >
                        {age === 0 ? 'New' : `${age}Y`}
                      </button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <input
                      type="number"
                      value={vehicleAge}
                      onChange={(e) => setVehicleAge(e.target.value ? Number(e.target.value) : '')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-colors ${
                        errors.vehicleAge ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="2"
                      min="0"
                      max="15"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">Years</span>
                  </div>
                  {errors.vehicleAge && (
                    <p className="text-red-500 text-xs mt-1">{errors.vehicleAge}</p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Registration City
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'metro', label: 'Metro Cities', desc: 'Mumbai, Delhi, Bangalore' },
                      { value: 'tier1', label: 'Tier 1 Cities', desc: 'Pune, Ahmedabad, Chennai' },
                      { value: 'tier2', label: 'Tier 2 Cities', desc: 'Indore, Bhopal, Jaipur' },
                      { value: 'rural', label: 'Rural Areas', desc: 'Towns & Villages' }
                    ].map(cityType => (
                      <button
                        key={cityType.value}
                        onClick={() => setCity(cityType.value)}
                        className={`p-3 rounded-lg border text-left transition-colors ${
                          city === cityType.value
                            ? 'bg-purple-500 text-white border-purple-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-purple-400'
                        }`}
                      >
                        <div className="font-medium text-sm">{cityType.label}</div>
                        <div className="text-xs opacity-75">{cityType.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Coverage Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Coverage Type
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { value: 'comprehensive', label: 'Comprehensive', desc: 'Own damage + Third party liability' },
                      { value: 'thirdParty', label: 'Third Party Only', desc: 'Mandatory minimum coverage' }
                    ].map(coverage => (
                      <button
                        key={coverage.value}
                        onClick={() => setCoverageType(coverage.value)}
                        className={`p-3 rounded-lg border text-left transition-colors ${
                          coverageType === coverage.value
                            ? 'bg-indigo-500 text-white border-indigo-500'
                            : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-indigo-400'
                        }`}
                      >
                        <div className="font-medium">{coverage.label}</div>
                        <div className="text-sm opacity-75">{coverage.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add-ons (only for comprehensive) */}
                {coverageType === 'comprehensive' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Add-on Covers (Optional)
                    </label>
                    <div className="space-y-3">
                      {[
                        { key: 'zeroDepreciation', label: 'Zero Depreciation', desc: 'No depreciation on claims' },
                        { key: 'engineProtection', label: 'Engine Protection', desc: 'Engine & gearbox cover' },
                        { key: 'roadSideAssistance', label: 'Roadside Assistance', desc: '24x7 emergency support' },
                        { key: 'returnToInvoice', label: 'Return to Invoice', desc: 'Full invoice value on total loss' },
                        { key: 'personalAccident', label: 'Personal Accident', desc: 'Owner-driver coverage' }
                      ].map(addon => (
                        <label key={addon.key} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900/30 transition-colors">
                          <input
                            type="checkbox"
                            checked={addOns[addon.key]}
                            onChange={(e) => setAddOns(prev => ({ ...prev, [addon.key]: e.target.checked }))}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 dark:text-white text-sm">{addon.label}</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">{addon.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Insurance Tips */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-green-600">💡</span>
                Insurance Tips
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-base">🏆</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">No Claim Bonus</div>
                    <div className="text-gray-600 dark:text-gray-300">Up to 50% discount for claim-free years</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-base">📱</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Compare Online</div>
                    <div className="text-gray-600 dark:text-gray-300">Check multiple insurers for best rates</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 text-base">⚡</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Renew Early</div>
                    <div className="text-gray-600 dark:text-gray-300">Avoid policy lapse and maintain NCB</div>
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
                  <p className="text-gray-600 dark:text-gray-400">Processing your insurance premium</p>
                </div>
              </div>
            ) : result ? (
              <>
                {/* Premium Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <ChartBarIcon className="h-5 w-5 text-green-600" />
                    Insurance Premium Estimate
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 col-span-2">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Annual Premium</div>
                      <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                        ₹{result.finalPremium.toLocaleString()}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                        ₹{result.monthlyPremium.toLocaleString()} per month
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Base Premium</div>
                      <div className="text-xl font-bold text-gray-700 dark:text-gray-300">
                        ₹{result.basePremium.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium">Add-ons</div>
                      <div className="text-xl font-bold text-green-700 dark:text-green-300">
                        ₹{result.totalAddOnPremium.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">GST (18%)</div>
                      <div className="text-xl font-bold text-yellow-700 dark:text-yellow-300">
                        ₹{result.gst.toLocaleString()}
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Premium %</div>
                      <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                        {result.premiumPercentage}%
                      </div>
                    </div>
                  </div>

                  {/* NCB Discount */}
                  {result.ncbDiscount > 0 && (
                    <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-sm text-green-600 dark:text-green-400 font-medium">NCB Discount Available</div>
                          <div className="text-xs text-green-600 dark:text-green-400">Premium after NCB: ₹{result.premiumAfterNCB.toLocaleString()}</div>
                        </div>
                        <div className="text-lg font-bold text-green-700 dark:text-green-300">
                          -₹{result.ncbDiscount.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Premium Breakdown Pie Chart */}
                {pieData.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Premium Breakdown</h3>
                    <div className="w-full overflow-hidden">
                      <ResponsiveContainer width="100%" height={250} minWidth={250}>
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {pieData.map((entry, index) => (
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

                {/* Add-on Breakdown */}
                {addOnData.length > 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add-on Premiums</h3>
                    <div className="space-y-3">
                      {addOnData.map((addon, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                          <div className="font-medium text-gray-900 dark:text-white">{addon.name}</div>
                          <div className="text-lg font-bold" style={{ color: addon.color }}>
                            ₹{addon.value.toLocaleString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Coverage Comparison */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Coverage Comparison</h3>
                  <div className="w-full overflow-hidden">
                    <ResponsiveContainer width="100%" height={250} minWidth={250}>
                      <BarChart data={comparisonData}>
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `₹${(value/1000).toFixed(0)}K`} />
                        <Tooltip 
                          formatter={(value) => [`₹${value.toLocaleString()}`, 'Premium']}
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px'
                          }}
                        />
                        <Bar dataKey="premium" fill="#8B5CF6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">Coverage Details</div>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Third Party:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">₹15L Liability</span>
                      </div>
                      <div>
                        <span className="text-gray-600 dark:text-gray-400">Own Damage:</span>
                        <span className="font-medium text-gray-900 dark:text-white ml-2">₹{result.claimAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="text-center py-12">
                  <ShieldCheckIcon className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Calculate Insurance Premium</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter vehicle details to get accurate insurance premium estimate
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

export default VehicleInsurancePage;