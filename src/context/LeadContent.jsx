import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../pages/useFetch";

const LeadContext = createContext();

export const useLeadContext = () => useContext(LeadContext);

export default useLeadContext;

export function LeadProvider({ children }) {
  const { data, loading, error } = useFetch(`http://localhost:5001/leads`);
  const {
    data: salesData,
    loading: salesLoading,
    error: salesError,
  } = useFetch(`http://localhost:5001/v2/agents`);

  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);

  useEffect(() => {
    if (data) {
      setLeads(data);
      setFilteredLeads(data);
    }
  }, [data]);

  function quickFilter(status) {
    const filtered = leads.filter((lead) => lead.status === status);
    setFilteredLeads(filtered);
  }

  return (
    <LeadContext.Provider
      value={{
        leads: filteredLeads,
        loading,
        error,
        quickFilter,
        salesData,
        salesLoading,
        salesError,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
}
