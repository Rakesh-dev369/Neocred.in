import { useState } from 'react';

export function useRewards() {
  const [points, setPoints] = useState(0);
  
  return { points, setPoints };
}