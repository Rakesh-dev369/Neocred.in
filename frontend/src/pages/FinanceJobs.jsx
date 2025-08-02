import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AcademicCapIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function FinanceJobs() {
  const navigate = useNavigate();

  const jobs = [
    { title: 'Financial Analyst', company: 'Zerodha', type: 'Full-time', location: 'Bangalore', salary: '₹8-12L' },
    { title: 'Product Manager - Fintech', company: 'Razorpay', type: 'Full-time', location: 'Remote', salary: '₹15-25L' },
    { title: 'Finance Intern', company: 'Paytm', type: 'Internship', location: 'Noida', salary: '₹25K/month' },
    { title: 'Risk Analyst', company: 'CRED', type: 'Full-time', location: 'Bangalore', salary: '₹10-15L' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back
          </button>
          <div className="text-center">
            <AcademicCapIcon className="h-12 w-12 mx-auto mb-3" />
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Finance Jobs & Internships</h1>
            <p className="text-base opacity-90">Fintech openings, remote roles, and campus opportunities</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{job.title}</h3>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">Company: <span className="font-medium text-blue-600">{job.company}</span></p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Type: <span className="font-medium">{job.type}</span></p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Location: <span className="font-medium">{job.location}</span></p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Salary: <span className="font-medium text-green-600">{job.salary}</span></p>
              </div>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}