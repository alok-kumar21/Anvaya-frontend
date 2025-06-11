import { createContext, useContext, useState, useEffect } from "react";

const LeadContext = createContext();

const useLeadContext = () => useContext(LeadContext);

export default useLeadContext;

import useFetch from "../pages/useFetch";

export function LeadProvider({ children }) {
  const { data, loading, error } = useFetch(`http://localhost:5001/leads`);
  return (
    <LeadContext.Provider value={{ data, loading, error }}>
      {children}
    </LeadContext.Provider>
  );
}
