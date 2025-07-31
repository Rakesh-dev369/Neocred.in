import { useState } from "react";
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function BudgetGoalPlanner() {
  const [goals, setGoals] = useState([
    { id: 1, name: "", amount: "", months: "", saved: "", type: "short", monthly: 0, adjusted: 0, progress: 0 },
  ]);
  const [inflationRate, setInflationRate] = useState(6); // default 6% annual

  const handleChange = (id, field, value) => {
    setGoals(prev =>
      prev.map(goal =>
        goal.id === id ? { ...goal, [field]: value } : goal
      )
    );
  };

  const addGoal = () => {
    const newId = Math.max(...goals.map(g => g.id)) + 1;
    setGoals([...goals, { id: newId, name: "", amount: "", months: "", saved: "", type: "short", monthly: 0, adjusted: 0, progress: 0 }]);
  };

  const removeGoal = (id) => {
    if (goals.length > 1) {
      setGoals(goals.filter(goal => goal.id !== id));
    }
  };

  const calculateSavings = () => {
    const updatedGoals = goals.map(goal => {
      const amount = parseFloat(goal.amount);
      const months = parseInt(goal.months);
      const saved = parseFloat(goal.saved) || 0;
      const years = months / 12;
      const inflation = parseFloat(inflationRate) / 100;

      const adjusted = !isNaN(amount) && years > 0
        ? amount * Math.pow(1 + inflation, years)
        : 0;

      const monthly = adjusted > 0 && months > 0
        ? (adjusted - saved) / months
        : 0;

      const progress = adjusted > 0 ? (saved / adjusted) * 100 : 0;

      return {
        ...goal,
        adjusted: adjusted.toFixed(2),
        monthly: Math.max(monthly, 0).toFixed(2),
        progress: Math.min(progress.toFixed(1), 100)
      };
    });

    setGoals(updatedGoals);
  };

  const totalMonthly = goals.reduce((sum, goal) => sum + parseFloat(goal.monthly || 0), 0);
  const totalTarget = goals.reduce((sum, goal) => sum + parseFloat(goal.adjusted || 0), 0);
  const totalSaved = goals.reduce((sum, goal) => sum + parseFloat(goal.saved || 0), 0);

  const getTypeColor = (type) => {
    switch(type) {
      case 'short': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'long': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    if (progress >= 25) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="max-w-6xl mx-auto glass-card mt-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Budget Goal Planner</h2>
      
      <div className="space-y-6">
        {/* Inflation Rate Setting */}
        <div className="glass-card">
          <div className="flex items-center gap-4">
            <label className="text-white font-semibold">📈 Inflation Rate (annual %):</label>
            <input
              className="input-field w-24 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              value={inflationRate}
              onChange={e => setInflationRate(e.target.value)}
            />
            <span className="text-white/70 text-sm">Used to adjust future goal values</span>
          </div>
        </div>

        {/* Goals List */}
        <div className="space-y-4">
          {goals.map((goal, index) => (
            <div key={goal.id} className="glass-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">🎯 Goal #{index + 1}</h3>
                {goals.length > 1 && (
                  <button
                    onClick={() => removeGoal(goal.id)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Goal Name</label>
                  <input
                    className="input-field"
                    placeholder="e.g., New Car, Vacation"
                    value={goal.name}
                    onChange={e => handleChange(goal.id, "name", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Goal Type</label>
                  <select
                    className="input-field"
                    value={goal.type}
                    onChange={e => handleChange(goal.id, "type", e.target.value)}
                  >
                    <option value="short">Short-Term (&lt; 2 years)</option>
                    <option value="medium">Medium-Term (2-5 years)</option>
                    <option value="long">Long-Term (&gt; 5 years)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Target Amount (₹)</label>
                  <input
                    className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    placeholder="100000"
                    value={goal.amount}
                    onChange={e => handleChange(goal.id, "amount", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Months to Save</label>
                  <input
                    className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    placeholder="24"
                    value={goal.months}
                    onChange={e => handleChange(goal.id, "months", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Already Saved (₹)</label>
                  <input
                    className="input-field [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    type="number"
                    placeholder="10000"
                    value={goal.saved}
                    onChange={e => handleChange(goal.id, "saved", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Monthly Required</label>
                  <div className="input-field bg-white/5 text-green-400 font-semibold">
                    ₹ {goal.monthly}
                  </div>
                </div>
              </div>

              {/* Goal Details */}
              {goal.adjusted > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(goal.type)}`}>
                      {goal.type.charAt(0).toUpperCase() + goal.type.slice(1)}-Term Goal
                    </span>
                    <span className="text-white/70 text-sm">
                      Inflation-adjusted: ₹ {parseFloat(goal.adjusted).toLocaleString()}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">Progress: {goal.progress}%</span>
                      <span className="text-white/80">
                        ₹ {parseFloat(goal.saved || 0).toLocaleString()} / ₹ {parseFloat(goal.adjusted).toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(parseFloat(goal.progress))}`}
                        style={{ width: `${Math.min(parseFloat(goal.progress), 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={addGoal}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <PlusIcon className="h-4 w-4" />
            Add Another Goal
          </button>

          <button
            onClick={calculateSavings}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            📊 Calculate Savings Plan
          </button>
        </div>

        {/* Summary */}
        {totalMonthly > 0 && (
          <div className="glass-card">
            <h3 className="text-xl font-semibold text-white mb-4">📊 Savings Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">₹ {totalTarget.toLocaleString()}</div>
                <div className="text-white/70 text-sm">Total Target (Inflation-Adjusted)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">₹ {totalSaved.toLocaleString()}</div>
                <div className="text-white/70 text-sm">Total Already Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">₹ {totalMonthly.toLocaleString()}</div>
                <div className="text-white/70 text-sm">Total Monthly Required</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <p className="text-blue-100 text-sm">
                💡 <strong>Tip:</strong> Review and adjust your goals quarterly. Consider increasing savings when you get salary increments or bonuses.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}