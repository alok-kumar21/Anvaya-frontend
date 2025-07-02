import "../App.css";
import { Link } from "react-router-dom";
import useLeadContext from "../context/LeadContent";

const Dashboard = () => {
  const { leads, loading, error, quickFilter } = useLeadContext();

  const newLeads = leads?.filter((lead) => lead.status === "New");
  const contactedLeads = leads?.filter((lead) => lead.status === "Contacted");
  const qualifiedLeads = leads?.filter((lead) => lead.status === "Qualified");

  return (
    <>
      <section className="container">
        {loading && (
          <div className="alert alert-success text-center">Loading...</div>
        )}
        {error && (
          <div className="alert alert-danger text-center">
            Failed to get Lead Data
          </div>
        )}
        <header>
          <nav className=" brand p-3">
            <h1 className="text-center">Anvaya CRM App</h1>
          </nav>
        </header>
        <main>
          <div className="row ">
            <div className="col-12 col-md-2">
              <ul className="list">
                <li className="list-group-item h5 pt-5 ps-4">
                  <Link
                    to="/leadlist"
                    className="text-decoration-none text-white"
                  >
                    <i className="bi bi-arrow-bar-right"></i> Leads
                  </Link>
                </li>
                <li className="list-group-item h5 pt-3 ps-4">
                  <Link
                    to="/sales-agent-View"
                    className="text-decoration-none text-white"
                  >
                    <i className="bi bi-bar-chart-fill"></i> Sales
                  </Link>
                </li>
                <li className="list-group-item h5 pt-3 ps-4">
                  <Link
                    to="/sales-agent"
                    className="text-decoration-none text-white"
                  >
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
              </ul>
            </div>

            <div className=" lead-content col-12  col-md-10 p-3">
              <div className="mt-4 row">
                {leads?.slice(0, 3).map((lead) => (
                  <div key={lead._id} className="col-12 col-md-4 col-lg-4 ">
                    <div className="card mt-3">
                      <div className="card-header">
                        <h2>{lead.name}</h2>
                      </div>
                      <div className="card-body">
                        {lead.status === "Closed" ? (
                          <button className="btn btn-success">Closed</button>
                        ) : lead.status === "New" ? (
                          <button>New</button>
                        ) : lead.status === "Contacted" ? (
                          <button className="btn btn-info">Contacted</button>
                        ) : lead.status === "Qualified" ? (
                          <button className="btn btn-primary">Qualified</button>
                        ) : (
                          <button className="btn btn-dark">
                            Proposal Sent
                          </button>
                        )}
                        <br />

                        <Link
                          to={`/lead-details/${lead._id}`}
                          className="btn btn-lg btn-bg  mt-3"
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
                  New: [ {newLeads?.length} ] Leads
                </li>
                <li className="list-group-item">
                  Contacted: [ {contactedLeads?.length} ] Leads
                </li>
                <li className="list-group-item">
                  Qualified: [ {qualifiedLeads?.length} ] Leads
                </li>
              </ul>
              <hr className="mt-4 mb-4" />
              <ul className="list text-white">
                <h3 className="mb-4">Quick Filter</h3>
                <li className="list-group-item">
                  <button
                    className=" btn btn-lg btn-primary"
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
