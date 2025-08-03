import React, { useState, useEffect } from 'react';

export default function NewsMinimal() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://neocred-backend.fly.dev/api/news');
        const data = await response.json();
        
        if (data.success) {
          setArticles(data.data);
        } else {
          setError('Failed to fetch news');
        }
      } catch (err) {
        setError('Network error');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className="p-8">Loading news...</div>;
  if (error) return <div className="p-8 text-red-600">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Financial News</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-lg mb-2">{String(article.title || 'No Title')}</h3>
            <p className="text-gray-600 text-sm mb-3">{String(article.summary || 'No summary').substring(0, 150)}...</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-blue-600">{String(article.source || 'Unknown')}</span>
              <a 
                href={String(article.link || '#')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}