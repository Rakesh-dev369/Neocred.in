import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { AnimatedInput, AnimatedResults, AnimatedChart, CalculatorLayout, AnimatedButton } from '../components/calculator';
import { motion, AnimatePresence } from 'framer-motion';

const validationSchema = Yup.object({
  income: Yup.number()
    .required('Monthly income is required')
    .min(10000, 'Minimum income is ₹10,000')
    .max(1000000, 'Maximum income is ₹10 lakhs')
});

const BudgetGoalPlanner = () => {
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [goals, setGoals] = useState([
    { name: 'Emergency Fund', target: 0, priority: 'High', timeframe: '6 months' },
    { name: 'Vacation', target: 0, priority: 'Medium', timeframe: '12 months' }
  ]);

  const calculateBudgetGoals = async (values) => {
    setIsCalculating(true);
    setProgress(0);
    
    for (let i = 0; i <= 100; i += 20) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const { income } = values;
    
    // 50/30/20 base allocation
    const needs = income * 0.5;
    const wants = income * 0.3;
    const savings = income * 0.2;
    
    // Calculate goal allocations
    const totalGoalTarget = goals.reduce((sum, goal) => sum + Number(goal.target || 0), 0);
    const goalsWithAllocation = goals.map(goal => {
      const monthsToTarget = goal.timeframe === '6 months' ? 6 : 
                           goal.timeframe === '12 months' ? 12 : 
                           goal.timeframe === '24 months' ? 24 : 12;
      const monthlyRequired = Number(goal.target || 0) / monthsToTarget;
      const percentage = totalGoalTarget > 0 ? (Number(goal.target || 0) / totalGoalTarget) * 100 : 0;
      
      return {
        ...goal,
        monthlyRequired: Math.round(monthlyRequired),
        percentage: Math.round(percentage * 10) / 10,
        monthsToTarget
      };
    });
    
    const totalMonthlyGoals = goalsWithAllocation.reduce((sum, goal) => sum + goal.monthlyRequired, 0);
    const remainingSavings = savings - totalMonthlyGoals;
    
    const data = [
      { name: 'Needs (50%)', value: needs, color: '#ef4444' },
      { name: 'Wants (30%)', value: wants, color: '#f59e0b' },
      { name: 'Goals', value: totalMonthlyGoals, color: '#8b5cf6' },
      { name: 'Other Savings', value: Math.max(remainingSavings, 0), color: '#10b981' }
    ].filter(item => item.value > 0);

    setResult({
      income,
      needs: Math.round(needs),
      wants: Math.round(wants),
      savings: Math.round(savings),
      totalMonthlyGoals: Math.round(totalMonthlyGoals),
      remainingSavings: Math.round(remainingSavings),
      goalsWithAllocation,
      data,
      feasible: remainingSavings >= 0
    });
    
    setIsCalculating(false);
  };

  const addGoal = () => {
    setGoals([...goals, { name: '', target: 0, priority: 'Medium', timeframe: '12 months' }]);
  };

  const removeGoal = (index) => {
    if (goals.length > 1) {
      setGoals(goals.filter((_, i) => i !== index));
    }
  };

  const updateGoal = (index, field, value) => {
    const updated = [...goals];
    updated[index][field] = value;
    setGoals(updated);
  };

  return (
    <CalculatorLayout 
      title="Budget Goal Planner" 
      description="Plan multiple financial goals systematically"
      isCalculating={isCalculating}
      progress={progress}
      result={result}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">🎯 Budget Goal Planner</h3>
            
            <Formik
              initialValues={{ income: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                calculateBudgetGoals(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <AnimatedInput
                    name="income"
                    label="Monthly Income (₹)"
                    type="number"
                    placeholder="50000"
                    helpText="Enter your monthly take-home income"
                    icon="💰"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting || isCalculating}
                    className="btn-primary w-full"
                  >
                    {isCalculating ? 'Planning...' : 'Plan Budget Goals'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* Goals Section */}
          <motion.div 
            className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">🎯 Your Goals</h3>
            <div className="space-y-4">
              <AnimatePresence>
                {goals.map((goal, index) => (
                  <motion.div 
                    key={index}
                    className="p-4 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 gap-3">
                      <input
                        type="text"
                        placeholder="Goal name (e.g., Emergency Fund)"
                        className="input-field"
                        value={goal.name}
                        onChange={(e) => updateGoal(index, 'name', e.target.value)}
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="number"
                          placeholder="Target amount"
                          className="input-field"
                          value={goal.target || ''}
                          onChange={(e) => updateGoal(index, 'target', e.target.value)}
                        />
                        <select
                          className="input-field"
                          value={goal.timeframe}
                          onChange={(e) => updateGoal(index, 'timeframe', e.target.value)}
                        >
                          <option value="6 months">6 months</option>
                          <option value="12 months">12 months</option>
                          <option value="24 months">24 months</option>
                        </select>
                      </div>
                      <div className="flex justify-between items-center">
                        <select
                          className="input-field flex-1 mr-2"
                          value={goal.priority}
                          onChange={(e) => updateGoal(index, 'priority', e.target.value)}
                        >
                          <option value="High">High Priority</option>
                          <option value="Medium">Medium Priority</option>
                          <option value="Low">Low Priority</option>
                        </select>
                        {goals.length > 1 && (
                          <AnimatedButton
                            onClick={() => removeGoal(index)}
                            variant="danger"
                            size="sm"
                          >
                            ✕
                          </AnimatedButton>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              <AnimatedButton
                onClick={addGoal}
                variant="secondary"
                className="w-full"
              >
                + Add Goal
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            <AnimatedResults
              title="Budget Allocation"
              variant={result.feasible ? 'success' : 'warning'}
              results={[
                { label: 'Monthly Income', value: `₹${result.income.toLocaleString()}`, color: 'blue' },
                { label: 'Needs (50%)', value: `₹${result.needs.toLocaleString()}`, color: 'red' },
                { label: 'Wants (30%)', value: `₹${result.wants.toLocaleString()}`, color: 'yellow' },
                { label: 'Goal Savings', value: `₹${result.totalMonthlyGoals.toLocaleString()}`, color: 'purple', highlight: true },
                { label: 'Other Savings', value: `₹${result.remainingSavings.toLocaleString()}`, color: result.remainingSavings >= 0 ? 'green' : 'red' }
              ]}
              tip={{
                icon: result.feasible ? '✅' : '⚠️',
                text: result.feasible 
                  ? 'Your goals are achievable with current income allocation!'
                  : 'Goals exceed available savings. Consider extending timeframes or reducing targets.'
              }}
            />

            {/* Goals Breakdown */}
            <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Goal Breakdown</h3>
              <div className="space-y-3">
                {result.goalsWithAllocation.map((goal, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
                    <div>
                      <span className="font-medium text-gray-900 dark:text-white">{goal.name}</span>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {goal.priority} • {goal.timeframe}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900 dark:text-white">₹{goal.monthlyRequired.toLocaleString()}/month</div>
                      <div className="text-sm text-purple-600 dark:text-purple-400">Target: ₹{Number(goal.target).toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <AnimatedChart
              title="Budget Distribution"
              data={result.data}
              type="pie"
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
};

export default BudgetGoalPlanner;