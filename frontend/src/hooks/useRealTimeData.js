import { useState, useEffect } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const useRealTimeData = () => {
  const [data, setData] = useState({
    totalUsers: 0,
    calculatorUses: 0,
    pageViews: 0,
    activeUsers: 0,
    popularCalculators: [],
    loading: true
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/analytics/stats`);
        const result = await response.json();
        
        if (result.success) {
          setData({
            totalUsers: result.data.monthly_active_users,
            calculatorUses: result.data.calculator_uses,
            pageViews: result.data.total_page_views,
            activeUsers: result.data.weekly_active_users,
            popularCalculators: result.data.popular_calculators,
            loading: false
          });
        }
      } catch (error) {
        // Fallback data
        setData({
          totalUsers: 2500,
          calculatorUses: 8500,
          pageViews: 15000,
          activeUsers: 800,
          popularCalculators: [
            { name: "SIP Calculator", uses: 1200 },
            { name: "Home Loan EMI", uses: 950 },
            { name: "Budget Planner", uses: 800 }
          ],
          loading: false
        });
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5 * 60 * 1000); // 5 minutes
    return () => clearInterval(interval);
  }, []);

  return data;
};