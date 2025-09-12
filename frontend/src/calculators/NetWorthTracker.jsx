import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { AnimatedInput, AnimatedResults, AnimatedChart, CalculatorLayout, AnimatedButton } from '../components/calculator';
import { motion, AnimatePresence } from 'framer-motion';

const COLORS = ['#10b981', '#ef4444'];

const NetWorthTracker = () => {
  const [assets, setAssets] = useState([{ label: '', amount: 0 }]);
  const [liabilities, setLiabilities] = useState([{ label: '', amount: 0 }]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);

  const total = (items) => items.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const totalAssets = total(assets);
  const totalLiabilities = total(liabilities);
  const netWorth = totalAssets - totalLiabilities;

  const updateAsset = async (index, field, value) => {
    setIsCalculating(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 50) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    const updated = [...assets];
    updated[index][field] = field === 'amount' ? Number(value) : value;
    setAssets(updated);
    setIsCalculating(false);
  };

  const updateLiability = async (index, field, value) => {
    setIsCalculating(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 50) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    const updated = [...liabilities];
    updated[index][field] = field === 'amount' ? Number(value) : value;
    setLiabilities(updated);
    setIsCalculating(false);
  };

  const addAsset = () => setAssets([...assets, { label: '', amount: 0 }]);
  const addLiability = () => setLiabilities([...liabilities, { label: '', amount: 0 }]);

  const removeAsset = (index) => {
    if (assets.length > 1) {
      setAssets(assets.filter((_, i) => i !== index));
    }
  };

  const removeLiability = (index) => {
    if (liabilities.length > 1) {
      setLiabilities(liabilities.filter((_, i) => i !== index));
    }
  };

  const data = [
    { name: 'Assets', value: totalAssets, color: '#10b981' },
    { name: 'Liabilities', value: totalLiabilities, color: '#ef4444' }
  ];

  return (
    <CalculatorLayout 
      title="Net Worth Tracker" 
      description="Track your assets and liabilities"
      isCalculating={isCalculating}
      progress={progress}
      result={totalAssets > 0 || totalLiabilities > 0 ? { netWorth } : null}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Assets */}
          <motion.div 
            className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">💼 Assets</h3>
            <div className="space-y-3">
              <AnimatePresence>
                {assets.map((asset, index) => (
                  <motion.div 
                    key={index} 
                    className="flex gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="text"
                      placeholder="Asset Name (e.g., House, Car)"
                      className="input-field flex-1"
                      value={asset.label}
                      onChange={(e) => updateAsset(index, 'label', e.target.value)}
                    />
                    <input
                      type="number" onWheel={(e) => e.target.blur()}
                      placeholder="Amount"
                      className="input-field w-32"
                      value={asset.amount || ''}
                      onChange={(e) => updateAsset(index, 'amount', e.target.value)}
                    />
                    {assets.length > 1 && (
                      <AnimatedButton
                        onClick={() => removeAsset(index)}
                        variant="danger"
                        size="sm"
                      >
                        ✕
                      </AnimatedButton>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              <AnimatedButton
                onClick={addAsset}
                variant="secondary"
                size="sm"
              >
                + Add Asset
              </AnimatedButton>
            </div>
          </motion.div>

          {/* Liabilities */}
          <motion.div 
            className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">💳 Liabilities</h3>
            <div className="space-y-3">
              <AnimatePresence>
                {liabilities.map((liability, index) => (
                  <motion.div 
                    key={index} 
                    className="flex gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      type="text"
                      placeholder="Liability Name (e.g., Home Loan)"
                      className="input-field flex-1"
                      value={liability.label}
                      onChange={(e) => updateLiability(index, 'label', e.target.value)}
                    />
                    <input
                      type="number" onWheel={(e) => e.target.blur()}
                      placeholder="Amount"
                      className="input-field w-32"
                      value={liability.amount || ''}
                      onChange={(e) => updateLiability(index, 'amount', e.target.value)}
                    />
                    {liabilities.length > 1 && (
                      <AnimatedButton
                        onClick={() => removeLiability(index)}
                        variant="danger"
                        size="sm"
                      >
                        ✕
                      </AnimatedButton>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              <AnimatedButton
                onClick={addLiability}
                variant="secondary"
                size="sm"
              >
                + Add Liability
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <AnimatedResults
            title="Net Worth Summary"
            variant={netWorth >= 0 ? 'success' : 'warning'}
            results={[
              { label: 'Total Assets', value: `₹${totalAssets.toLocaleString()}`, color: 'green' },
              { label: 'Total Liabilities', value: `₹${totalLiabilities.toLocaleString()}`, color: 'red' },
              { label: 'Net Worth', value: `₹${netWorth.toLocaleString()}`, color: netWorth >= 0 ? 'green' : 'red', highlight: true }
            ]}
            tip={{
              icon: '💼',
              text: 'Track your net worth monthly. Aim to increase assets and reduce liabilities over time.'
            }}
          />

          {(totalAssets > 0 || totalLiabilities > 0) && (
            <AnimatedChart
              title="Assets vs Liabilities"
              data={data.filter(item => item.value > 0)}
              type="pie"
            />
          )}
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default NetWorthTracker;