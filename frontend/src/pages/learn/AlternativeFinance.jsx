import React from 'react';
import { Helmet } from 'react-helmet-async';

const AlternativeFinance = () => {
  return (
    <>
      <Helmet>
        <title>Alternative Finance - NeoCred</title>
        <meta name="description" content="Explore alternative finance options and emerging financial technologies." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Alternative Finance</h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover innovative financing solutions and emerging financial technologies.
            </p>
            <div className="prose max-w-none">
              <h2>Coming Soon</h2>
              <p>This section is under development. Check back soon for comprehensive content on alternative finance.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlternativeFinance;