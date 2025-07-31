import { createContext, useContext } from 'react';

const RewardsContext = createContext();

export const useRewardsContext = () => useContext(RewardsContext);

export function RewardsProvider({ children }) {
  return (
    <RewardsContext.Provider value={{}}>
      {children}
    </RewardsContext.Provider>
  );
}