import React, { createContext, useContext, useState } from 'react';


export const SelectedCollegeContext = createContext();

export const SelectedCollegeProvider = ({ children }) => {
  const [selectedCollege, setSelectedCollege] = useState("INBOX");
  const [selectedCollegeName, setSelectedCollegeName] = useState("");

  return (
    <SelectedCollegeContext.Provider
      value={{
        selectedCollege,
        setSelectedCollege,
        selectedCollegeName,
        setSelectedCollegeName
      }}
    >
      {children}
    </SelectedCollegeContext.Provider>
  );
};

export const SelectedCollegeProviderValue = () =>
  useContext(SelectedCollegeContext);


