import { Link } from "react-router-dom";
import useFetch from "../pages/useFetch";
import { useState, useEffect } from "react";
const SalesAgentManagement = () => {
  const {
    data: salesData,
    loading: salesLoading,
    error: salesError,
  } = useFetch(`http://localhost:5001/v2/agents`);

  const [agents, setAgents] = useState();

  useEffect(() => {
    if (salesData) {
      setAgents(salesData);
    }
  }, [salesData]);

  return (
    <>
      <section className="container leadlist py-4">
        {salesLoading && (
          <div className="alert alert-success text-center"> Loading...</div>
        )}
        {salesError && (
          <div className="alert alert-danger text-center">
            Sales Agent not Found
          </div>
        )}
        <div className="text-center mb-4">
          <h1 className="h3">Sales Agent Management</h1>
        </div>

        <hr />

        <div className="row ">
          <div className="col-12 col-md-2  ">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-arrow-left "></i> Dashboard
            </Link>
          </div>

          <div className=" lead-content col-12 col-md-10">
            <div className="p-3 ms-3">
              <h3>Sales Agent List</h3>
              <hr />
            </div>
            <ul className="list">
              {agents?.map((agent) => (
                <li key={agent._id} className="me-5 p-3 list-group-item ">
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text"> Agent Name: {agent.name}</p>
                      <p className="card-text"> Agent Email: {agent.email}</p>
                    </div>
                  </div>
                </li>
              ))}

              <li className="list-group-item mt-4">
                <Link to="/add-sales-agent" className="btn btn-lg add-btn">
                  Add New Agent
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SalesAgentManagement;
