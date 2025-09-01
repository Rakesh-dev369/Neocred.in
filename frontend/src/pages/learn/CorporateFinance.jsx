import React from 'react';
import { Helmet } from 'react-helmet-async';

const CorporateFinance = () => {
  return (
    <>
      <Helmet>
        <title>Corporate Finance - NeoCred</title>
        <meta name="description" content="Learn about corporate finance and business financial management." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Corporate Finance</h1>
            <p className="text-lg text-gray-600 mb-8">
              Master corporate finance principles and business financial strategies.
            </p>
            <div className="prose max-w-none">
              <h2>Coming Soon</h2>
              <p>This section is under development. Check back soon for comprehensive content on corporate finance.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CorporateFinance;