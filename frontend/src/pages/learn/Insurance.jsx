import React from 'react';
import { Helmet } from 'react-helmet-async';

const Insurance = () => {
  return (
    <>
      <Helmet>
        <title>Insurance - NeoCred</title>
        <meta name="description" content="Learn about insurance and risk management strategies." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Insurance & Risk Management</h1>
            <p className="text-lg text-gray-600 mb-8">
              Protect your financial future with comprehensive insurance planning.
            </p>
            <div className="prose max-w-none">
              <h2>Coming Soon</h2>
              <p>This section is under development. Check back soon for comprehensive content on insurance and risk management.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insurance;