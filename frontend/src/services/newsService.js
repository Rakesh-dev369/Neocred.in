const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://neocred-backend.fly.dev';

class NewsService {
  async fetchNews(query = '') {
    try {
      const url = query 
        ? `${API_BASE_URL}/api/news?q=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/api/news`;
      
      console.log('Fetching news from:', url);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('News data received:', data);
      return data;
    } catch (error) {
      console.error('Error fetching news:', error);
      console.error('API URL attempted:', API_BASE_URL);
      
      // Return fallback data instead of throwing error
      return {
        success: false,
        data: [],
        error: `Unable to connect to news service. Backend may be starting up. Error: ${error.message}`,
        pagination: {
          page: 1,
          limit: 20,
          total_items: 0,
          total_pages: 0,
          has_next: false,
          has_prev: false
        }
      };
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