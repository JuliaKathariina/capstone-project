import { createContext, useState } from "react";
import { dataStones } from "../Data/DataStones";
export const CardContext = createContext(null);
export const CardProvider = ({ children }) => {
  const [stones, setStones] = useState(dataStones);
  return (
    <CardContext.Provider value={{ stones, setStones }}>
      {children}
    </CardContext.Provider>
  );
};
