import React, { createContext, useContext } from 'react';
import { useColleges } from '../Hooks';

export const CollegesContext = createContext();

export const CollegesProvider = ({ children }) => {
  const { colleges, setColleges } = useColleges();

  return (
    <CollegesContext.Provider value={{ colleges, setColleges }}>
      {children}
    </CollegesContext.Provider>
  );
};

export const CollegesProviderValue = () => useContext(CollegesContext);

