import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedChart, ProgressBar, CountingNumber, ComparisonTable, StatCard } from './index';

// Demo component showcasing all data visualization components
const DataVisualizationDemo = () => {
  const chartData = [
    { label: 'Jan', value: 4000 },
    { label: 'Feb', value: 3000 },
    { label: 'Mar', value: 5000 },
    { label: 'Apr', value: 4500 },
    { label: 'May', value: 6000 }
  ];

  const comparisonData = [
    { name: 'SIP Plan A', returns: '12.5%', risk: 'Medium', amount: '₹50,000' },
    { name: 'SIP Plan B', returns: '15.2%', risk: 'High', amount: '₹75,000' },
    { name: 'SIP Plan C', returns: '8.9%', risk: 'Low', amount: '₹30,000' }
  ];

  const comparisonColumns = [
    { key: 'name', label: 'Plan Name' },
    { key: 'returns', label: 'Expected Returns', higherBetter: true },
    { key: 'risk', label: 'Risk Level' },
    { key: 'amount', label: 'Investment Amount' }
  ];

  return (
    <div className="p-8 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <motion.h1 
        className="text-3xl font-bold text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Data Visualization Components
      </motion.h1>

      {/* Charts Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Charts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatedChart data={chartData} type="line" />
          <AnimatedChart data={chartData} type="bar" />
          <AnimatedChart data={chartData} type="area" />
          <AnimatedChart data={chartData} type="pie" />
        </div>
      </section>

      {/* Progress Bars Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Progress Bars</h2>
        <div className="space-y-4">
          <ProgressBar value={75} label="Investment Goal Progress" color="blue" />
          <ProgressBar value={45} label="Emergency Fund" color="green" />
          <ProgressBar value={90} label="Retirement Savings" color="purple" />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Investment"
            value={125000}
            prefix="₹"
            decimals={0}
            trend={{ value: 12, direction: 'up' }}
            icon="💰"
            color="blue"
          />
          <StatCard
            title="Monthly Returns"
            value={8.5}
            suffix="%"
            decimals={1}
            trend={{ value: 2.3, direction: 'up' }}
            icon="📈"
            color="green"
          />
          <StatCard
            title="Portfolio Value"
            value={245000}
            prefix="₹"
            decimals={0}
            trend={{ value: 5.7, direction: 'down' }}
            icon="📊"
            color="purple"
          />
          <StatCard
            title="Active SIPs"
            value={8}
            decimals={0}
            icon="🔄"
            color="orange"
          />
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Comparison Tables</h2>
        <ComparisonTable 
          data={comparisonData}
          columns={comparisonColumns}
          highlightBest={true}
        />
      </section>

      {/* Counting Numbers Demo */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Counting Effects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg">
            <CountingNumber 
              value={1250000} 
              prefix="₹" 
              className="text-4xl font-bold text-blue-600"
            />
            <p className="text-gray-600 dark:text-gray-400 mt-2">Total Savings</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg">
            <CountingNumber 
              value={15.75} 
              suffix="%" 
              decimals={2}
              className="text-4xl font-bold text-green-600"
            />
            <p className="text-gray-600 dark:text-gray-400 mt-2">Annual Returns</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg">
            <CountingNumber 
              value={42} 
              className="text-4xl font-bold text-purple-600"
            />
            <p className="text-gray-600 dark:text-gray-400 mt-2">Active Investments</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataVisualizationDemo;