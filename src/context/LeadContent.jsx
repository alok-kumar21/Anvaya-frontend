import { createContext, useContext, useState } from "react";

const LeadContext = createContext();

const useLeadContext = () => useContext(LeadContext);

export default useLeadContext;

import useFetch from "../pages/useFetch";

export function LeadProvider({ children }) {
  const { data, loading, error } = useFetch(`http://localhost:5001/leads`);

  const [leads, setLeads] = useState();

  let filterLead;
  if (data) {
    filterLead = [...data];
  }

  function quickFilter(status) {
    filterLead = filterLead?.filter((lead) => lead.status === status);
    setLeads(filterLead);
  }

  return (
    <LeadContext.Provider value={{ leads, loading, error, quickFilter }}>
      {children}
    </LeadContext.Provider>
  );
}
