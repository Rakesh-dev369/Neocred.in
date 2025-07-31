import { useState, useEffect } from 'react';

export function useFinanceNews() {
  const [news, setNews] = useState([]);
  
  return { news };
}