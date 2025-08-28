import React from 'react';
import { ArrowLeft, ArrowRight, TrendingUp, AlertTriangle, DollarSign, BarChart3, Target, Shield, Clock, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DerivativesTrading = () => {
  const navigate = useNavigate();

  const derivativeTypes = [
    {
      type: "Futures",
      description: "Standardized contracts to buy/sell assets at future date",
      minInvestment: "₹50,000-₹1,00,000",
      riskLevel: "High",
      returns: "Unlimited profit/loss potential",
      liquidity: "High"
    },
    {
      type: "Options",
      description: "Right (not obligation) to buy/sell at specific price",
      minInvestment: "₹5,000-₹25,000",
      riskLevel: "High",
      returns: "Limited loss, unlimited profit",
      liquidity: "High"
    },
    {
      type: "Currency Derivatives",
      description: "Trade on currency pair movements",
      minInvestment: "₹10,000-₹50,000",
      riskLevel: "Medium-High",
      returns: "Based on currency volatility",
      liquidity: "Very High"
    },
    {
      type: "Commodity Derivatives",
      description: "Trade on commodity price movements",
      minInvestment: "₹25,000-₹75,000",
      riskLevel: "High",
      returns: "Based on commodity cycles",
      liquidity: "Medium-High"
    }
  ];

  const tradingPlatforms = [
    {
      platform: "Zerodha Kite",
      brokerage: "₹20 per order",
      features: "Advanced charts, Options chain, Margin calculator",
      rating: "4.8/5",
      speciality: "Low cost, user-friendly"
    },
    {
      platform: "Angel One",
      brokerage: "₹20 per order",
      features: "SmartAPI, Options strategies, Risk management",
      rating: "4.6/5",
      speciality: "Research & advisory"
    },
    {
      platform: "Upstox Pro",
      brokerage: "₹20 per order",
      features: "Real-time data, Advanced orders, Mobile trading",
      rating: "4.5/5",
      speciality: "Technology focus"
    },
    {
      platform: "ICICI Direct",
      brokerage: "0.05% of turnover",
      features: "Research reports, Margin funding, Portfolio tracker",
      rating: "4.4/5",
      speciality: "Full-service broker"
    }
  ];

  const optionsStrategies = [
    {
      strategy: "Long Call",
      market: "Bullish",
      risk: "Limited (Premium paid)",
      reward: "Unlimited",
      breakeven: "Strike + Premium",
      bestFor: "Strong upward movement expected"
    },
    {
      strategy: "Long Put",
      market: "Bearish",
      risk: "Limited (Premium paid)",
      reward: "High (Strike - Premium)",
      breakeven: "Strike - Premium",
      bestFor: "Strong downward movement expected"
    },
    {
      strategy: "Covered Call",
      market: "Neutral to Bullish",
      risk: "Opportunity cost",
      reward: "Premium received",
      breakeven: "Stock price - Premium",
      bestFor: "Generate income from holdings"
    },
    {
      strategy: "Iron Condor",
      market: "Neutral",
      risk: "Limited",
      reward: "Limited (Net premium)",
      breakeven: "Two breakeven points",
      bestFor: "Low volatility expected"
    }
  ];

  const riskManagement = [
    {
      rule: "Position Sizing",
      description: "Never risk more than 2-5% of capital per trade",
      importance: "Critical"
    },
    {
      rule: "Stop Loss",
      description: "Set stop loss at 20-30% of premium for options",
      importance: "Essential"
    },
    {
      rule: "Time Decay",
      description: "Avoid buying options with &lt;30 days to expiry",
      importance: "Important"
    },
    {
      rule: "Volatility Analysis",
      description: "Check implied volatility before entering trades",
      importance: "Important"
    },
    {
      rule: "Margin Management",
      description: "Maintain adequate margin buffer (30-50%)",
      importance: "Critical"
    }
  ];

  const marketData2025 = [
    {
      metric: "Nifty 50 Range",
      value: "24,000 - 26,500",
      change: "+12% YTD"
    },
    {
      metric: "Bank Nifty Range",
      value: "52,000 - 58,000",
      change: "+15% YTD"
    },
    {
      metric: "VIX Average",
      value: "14-18",
      change: "Moderate volatility"
    },
    {
      metric: "Options Volume",
      value: "₹45 lakh crore/day",
      change: "+25% vs 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/learn/market-linked-investments')}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Market-Linked Investments
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Last updated: January 2025</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-12 w-12 text-yellow-500 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Derivatives & Trading</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master advanced trading instruments including futures, options, and currency derivatives with professional strategies and risk management
          </p>
        </div>

        {/* Market Overview 2025 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
            2025 Market Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketData2025.map((data, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{data.metric}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">{data.value}</p>
                <p className="text-sm text-green-600">{data.change}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Derivative Types */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Target className="h-6 w-6 text-green-600 mr-2" />
            Types of Derivatives
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Min Investment</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Risk Level</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Returns</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Liquidity</th>
                </tr>
              </thead>
              <tbody>
                {derivativeTypes.map((derivative, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-blue-600">{derivative.type}</td>
                    <td className="py-3 px-4 text-gray-700">{derivative.description}</td>
                    <td className="py-3 px-4 text-gray-700">{derivative.minInvestment}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        derivative.riskLevel === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {derivative.riskLevel}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-700">{derivative.returns}</td>
                    <td className="py-3 px-4 text-gray-700">{derivative.liquidity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trading Platforms */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <DollarSign className="h-6 w-6 text-purple-600 mr-2" />
            Top Trading Platforms 2025
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Platform</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Brokerage</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Key Features</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Rating</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Speciality</th>
                </tr>
              </thead>
              <tbody>
                {tradingPlatforms.map((platform, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-blue-600">{platform.platform}</td>
                    <td className="py-3 px-4 text-gray-700">{platform.brokerage}</td>
                    <td className="py-3 px-4 text-gray-700">{platform.features}</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {platform.rating}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-700">{platform.speciality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Options Strategies */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 text-indigo-600 mr-2" />
            Popular Options Strategies
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Strategy</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Market View</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Risk</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Reward</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Breakeven</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody>
                {optionsStrategies.map((strategy, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-blue-600">{strategy.strategy}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        strategy.market.includes('Bullish') ? 'bg-green-100 text-green-800' :
                        strategy.market.includes('Bearish') ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {strategy.market}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-700">{strategy.risk}</td>
                    <td className="py-3 px-4 text-gray-700">{strategy.reward}</td>
                    <td className="py-3 px-4 text-gray-700">{strategy.breakeven}</td>
                    <td className="py-3 px-4 text-gray-700">{strategy.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Risk Management */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Shield className="h-6 w-6 text-red-600 mr-2" />
            Risk Management Rules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riskManagement.map((rule, index) => (
              <div key={index} className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{rule.rule}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    rule.importance === 'Critical' ? 'bg-red-100 text-red-800' :
                    rule.importance === 'Essential' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {rule.importance}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Warnings */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-red-900 mb-2">Important Warnings</h3>
              <ul className="text-red-800 space-y-2">
                <li>• Derivatives trading involves high risk and can result in significant losses</li>
                <li>• Options lose value due to time decay - avoid buying near expiry</li>
                <li>• Futures have unlimited loss potential - use strict stop losses</li>
                <li>• Margin trading amplifies both profits and losses</li>
                <li>• Only trade with money you can afford to lose completely</li>
                <li>• Consider paper trading before using real money</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <button
            onClick={() => navigate('/learn/index-funds-etfs')}
            className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Previous: Index Funds & ETFs
          </button>
          
          <button
            onClick={() => navigate('/learn/real-estate-investments')}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next: Real Estate Investments
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DerivativesTrading;