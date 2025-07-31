import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#10b981', '#ef4444'];

const NetWorthTracker = () => {
  const [assets, setAssets] = useState([{ label: '', amount: 0 }]);
  const [liabilities, setLiabilities] = useState([{ label: '', amount: 0 }]);

  const total = (items) => items.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const totalAssets = total(assets);
  const totalLiabilities = total(liabilities);
  const netWorth = totalAssets - totalLiabilities;

  const updateAsset = (index, field, value) => {
    const updated = [...assets];
    updated[index][field] = field === 'amount' ? Number(value) : value;
    setAssets(updated);
  };

  const updateLiability = (index, field, value) => {
    const updated = [...liabilities];
    updated[index][field] = field === 'amount' ? Number(value) : value;
    setLiabilities(updated);
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
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Net Worth Tracker</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Assets */}
          <div className="glass-card">
            <h3 className="text-xl font-semibold mb-4 text-white">💼 Assets</h3>
            <div className="space-y-3">
              {assets.map((asset, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Asset Name (e.g., House, Car)"
                    className="input-field flex-1"
                    value={asset.label}
                    onChange={(e) => updateAsset(index, 'label', e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Amount"
                    className="input-field w-32"
                    value={asset.amount || ''}
                    onChange={(e) => updateAsset(index, 'amount', e.target.value)}
                  />
                  {assets.length > 1 && (
                    <button
                      onClick={() => removeAsset(index)}
                      className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={addAsset}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                + Add Asset
              </button>
            </div>
          </div>

          {/* Liabilities */}
          <div className="glass-card">
            <h3 className="text-xl font-semibold mb-4 text-white">💳 Liabilities</h3>
            <div className="space-y-3">
              {liabilities.map((liability, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Liability Name (e.g., Home Loan)"
                    className="input-field flex-1"
                    value={liability.label}
                    onChange={(e) => updateLiability(index, 'label', e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Amount"
                    className="input-field w-32"
                    value={liability.amount || ''}
                    onChange={(e) => updateLiability(index, 'amount', e.target.value)}
                  />
                  {liabilities.length > 1 && (
                    <button
                      onClick={() => removeLiability(index)}
                      className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded text-white text-sm"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={addLiability}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                + Add Liability
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <div className="glass-card">
            <h3 className="text-lg font-semibold text-white mb-4">Net Worth Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="text-white/80">Total Assets:</span>
                <span className="text-green-400 font-semibold">₹{totalAssets.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="text-white/80">Total Liabilities:</span>
                <span className="text-red-400 font-semibold">₹{totalLiabilities.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-white/80">Net Worth:</span>
                <span className={`font-bold text-xl ${netWorth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  ₹{netWorth.toLocaleString()}
                </span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <p className="text-blue-100 text-sm">
                💼 <strong>Net Worth Tip:</strong> Track your net worth monthly. Aim to increase assets and reduce liabilities over time.
              </p>
            </div>
          </div>

          {(totalAssets > 0 || totalLiabilities > 0) && (
            <div className="glass-card">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Assets vs Liabilities</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={data.filter(item => item.value > 0)}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={30}
                    stroke="#ffffff"
                    strokeWidth={2}
                  >
                    {data.filter(item => item.value > 0).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(val) => [`₹${Number(val).toLocaleString()}`, 'Amount']}
                    contentStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                  />
                  <Legend 
                    wrapperStyle={{ paddingTop: '10px', color: '#ffffff' }}
                    iconType="circle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NetWorthTracker;