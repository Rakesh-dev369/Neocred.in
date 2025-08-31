import React, { useState, useEffect } from 'react';

const ConnectionTest = () => {
  const [status, setStatus] = useState('testing');
  const [message, setMessage] = useState('Testing connection...');

  useEffect(() => {
    const testConnection = async () => {
      try {
        const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001';
        const response = await fetch(`${API_BASE}/api/test`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setStatus('success');
          setMessage(data.message || 'Connection successful!');
        } else {
          setStatus('error');
          setMessage(`Server responded with status: ${response.status}`);
        }
      } catch (error) {
        setStatus('error');
        setMessage(`Connection failed: ${error.message}`);
      }
    };

    testConnection();
  }, []);

  const getStatusColor = () => {
    switch (status) {
      case 'success': return 'text-green-600';
      case 'error': return 'text-red-600';
      default: return 'text-yellow-600';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'success': return '✅';
      case 'error': return '❌';
      default: return '⏳';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 mb-4">
      <div className="flex items-center gap-2">
        <span className="text-lg">{getStatusIcon()}</span>
        <span className={`font-medium ${getStatusColor()}`}>
          Backend Connection: {message}
        </span>
      </div>
    </div>
  );
};

export default ConnectionTest;