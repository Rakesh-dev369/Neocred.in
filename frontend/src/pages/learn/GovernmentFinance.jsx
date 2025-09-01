import React from 'react';
import { Helmet } from 'react-helmet-async';

const GovernmentFinance = () => {
  return (
    <>
      <Helmet>
        <title>Government Finance - NeoCred</title>
        <meta name="description" content="Learn about government finance and public financial management." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Government Finance</h1>
            <p className="text-lg text-gray-600 mb-8">
              Understand government finance, public policy, and fiscal management.
            </p>
            <div className="prose max-w-none">
              <h2>Coming Soon</h2>
              <p>This section is under development. Check back soon for comprehensive content on government finance.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GovernmentFinance;