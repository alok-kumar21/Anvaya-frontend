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
                  <div className="card pt-5 pb-5 pe-5 ps-3">
                    <div className="d-flex">
                      <img
                        src="https://icons.veryicon.com/png/o/system/crm-android-app-icon/app-icon-person.png"
                        alt="agent-img"
                        className="img-fluid"
                        style={{ width: "10%" }}
                      />
                      <div className="mt-2 ms-2">
                        <p className="card-text">
                          {" "}
                          <strong>Name:</strong> {agent.name}
                        </p>
                        <p className="card-text">
                          <strong>Email:</strong> {agent.email}
                        </p>
                      </div>
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
