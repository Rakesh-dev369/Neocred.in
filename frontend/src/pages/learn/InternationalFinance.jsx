import React from 'react';
import { Helmet } from 'react-helmet-async';

const InternationalFinance = () => {
  return (
    <>
      <Helmet>
        <title>International Finance - NeoCred</title>
        <meta name="description" content="Learn about international finance and global financial markets." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">International Finance</h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore global financial markets, international trade, and cross-border investment opportunities.
            </p>
            <div className="prose max-w-none">
              <h2>Coming Soon</h2>
              <p>This section is under development. Check back soon for comprehensive content on international finance.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternationalFinance;