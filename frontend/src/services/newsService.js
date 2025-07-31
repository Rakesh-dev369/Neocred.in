const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8001';

class NewsService {
  async fetchNews(query = '') {
    try {
      const url = query 
        ? `${API_BASE_URL}/api/news?q=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/api/news`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  }

  async generateSummary(title, content = '') {
    try {
      const response = await fetch(`${API_BASE_URL}/api/news/summary?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error generating summary:', error);
      throw error;
    }
  }

  async fetchDailyDigest() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/news/daily-digest`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching daily digest:', error);
      throw error;
    }
  }

  async fetchNewsSources() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/news/sources`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching news sources:', error);
      throw error;
    }
  }

  async fetchAvailableTags() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/news/tags`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching tags:', error);
      throw error;
    }
  }
}

export const newsService = new NewsService();
export default newsService;