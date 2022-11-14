import { createContext, useEffect, useState } from "react";
import { dataStones } from "../Data/DataStones";
import useLocalStorage from "../components/hook/useLocalStorage";
export const CardContext = createContext(null);
export const CardProvider = ({ children }) => {
  const [stones, setStones] = useLocalStorage("favoriten", dataStones);

  return (
    <CardContext.Provider value={{ stones, setStones }}>
      {children}
    </CardContext.Provider>
  );
};
