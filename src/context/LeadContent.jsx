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

  const [editingId, setEditingId] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    source: "",
    status: "",
    tags: [],
    timeToClose: "",
    priority: "",
  });

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

  function formDataHandler(event) {
    const { value, name, selectedOptions } = event.target;
    if (name === "tags") {
      const values = Array.from(selectedOptions, (option) => option.value);
      setFormData((prev) => ({
        ...prev,
        [name]: values,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  async function formSubmitHandler(event) {
    event.preventDefault();
    setEditingId(false);
    try {
      const response = await fetch(
        editingId
          ? `http://localhost:5001/v1/leads/${editingId}`
          : `http://localhost:5001/leads`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add Data ");
      } else {
        setFormData({
          name: "",
          source: "",
          status: "",
          tags: [],
          timeToClose: "",
          priority: "",
        });
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  function updateLeadHandler(leaddetail) {
    setEditingId(true);
    setFormData(() => ({
      name: leaddetail.name,
      source: leaddetail.source,
      status: leaddetail.status,
      tags: leaddetail.tags,
      timeToClose: leaddetail.timeToClose,
      priority: leaddetail.priority,
    }));
    setEditingId(leaddetail._id);
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
        formDataHandler,
        formData,
        setFormData,
        formSubmitHandler,
        updateLeadHandler,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
}
