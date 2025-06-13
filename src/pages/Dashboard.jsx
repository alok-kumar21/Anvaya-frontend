import "../App.css";
import { Link } from "react-router-dom";
import useLeadContext from "../context/LeadContent";
import { useState } from "react";

const Dashboard = () => {
  const { leads, loading, error, quickFilter } = useLeadContext();

  const newLeads = leads?.filter((lead) => lead.status === "New");
  const contactedLeads = leads?.filter((lead) => lead.status === "Contacted");
  const qualifiedLeads = leads?.filter((lead) => lead.status === "Qualified");

  return (
    <>
      <section className="container">
        <header>
          <nav className=" brand p-3">
            <h1 className="text-center">Anvaya CRM App</h1>
            <hr />
          </nav>
        </header>
        <main>
          <div className="row ">
            <div className="col-12 col-md-2">
              <ul className="list">
                <li className="list-group-item h5 pt-5 ps-4">
                  <Link
                    to="/leadstatusview"
                    className="text-decoration-none text-white"
                  >
                    <i className="bi bi-arrow-bar-right"></i> Leads
                  </Link>
                </li>
                <li className="list-group-item h5 pt-3 ps-4">
                  <Link
                    to="/salesagent"
                    className="text-decoration-none text-white"
                  >
                    <i className="bi bi-bar-chart-fill"></i> Sales
                  </Link>
                </li>
                <li className="list-group-item h5 pt-3 ps-4">
                  <Link className="text-decoration-none text-white">
                    {" "}
                    <i className="bi bi-person-fill"></i> Agents
                  </Link>
                </li>
                <li className="list-group-item h5 pt-3 ps-4">
                  <Link
                    to="/report"
                    className="text-decoration-none text-white"
                  >
                    <i className="bi bi-file-earmark-bar-graph-fill"></i>{" "}
                    Reports
                  </Link>
                </li>
                <li className="list-group-item h5 pt-3 ps-4">
                  <Link className="text-decoration-none text-white">
                    <i className="bi bi-gear-fill"></i> Setting
                  </Link>
                </li>
              </ul>
            </div>

            <div className=" lead-content col-12  col-md-10 ">
              <div className="mt-4 row">
                {leads?.map((lead) => (
                  <div key={lead._id} className="col-12 col-md-4 col-lg-4 ">
                    <div className="card">
                      <div className="card-header">
                        <h2>{lead.name}</h2>
                      </div>
                      <div className="card-body">
                        <p>Status: {lead.status}</p>
                        <Link
                          to={`/leaddetails/${lead._id}`}
                          className="btn btn-bg"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="mt-4 mb-4" />
              <ul className="list text-white">
                <h3>Lead Status</h3>
                <li className="list-group-item">
                  New: [{newLeads?.length}] Leads
                </li>
                <li className="list-group-item">
                  Contacted: [{contactedLeads?.length}] Leads
                </li>
                <li className="list-group-item">
                  Qualified: [{qualifiedLeads?.length}] Leads
                </li>
              </ul>
              <hr className="mt-4 mb-4" />
              <ul className="list text-white">
                <h3 className="mb-4">Quick Filter</h3>
                <li className="list-group-item">
                  <button
                    className=" btn btn-lg btn-bg"
                    onClick={() => quickFilter("New")}
                  >
                    New
                  </button>
                  <button
                    className=" btn btn-lg btn-bg ms-3"
                    onClick={() => quickFilter("Contacted")}
                  >
                    Contacted
                  </button>
                </li>

                <br />
                <Link to="/addlead" className="mt-5 btn btn-lg add-btn">
                  Add New Lead
                </Link>
              </ul>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Dashboard;
