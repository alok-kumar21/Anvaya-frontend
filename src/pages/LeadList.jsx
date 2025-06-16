import { Link } from "react-router-dom";
import useLeadContext from "../context/LeadContent";
const LeadList = () => {
  const { leads, loading, error } = useLeadContext();
  console.log(leads);
  return (
    <section className="container leadlist py-4">
      {loading && (
        <div className="alert alert-success text-center">Loading...</div>
      )}
      {error && (
        <div className="alert alert-danger text-center">
          Failed to get Lead List
        </div>
      )}
      <div className="text-center mb-4">
        <h1 className="h3">Lead List</h1>
      </div>

      <hr />

      <div className="row ">
        <div className=" col-12 col-md-2  ">
          <div className=" navbar-expand-lg">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-arrow-left "></i> Dashboard
            </Link>
            <br />
            <div className="d-grid gap-2 mt-4">
              <button
                className="btn p-3 btn-bg  rounded navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#filter"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="bi bi-funnel"></span>
                Filter
              </button>
            </div>
            <div className="collapse navbar-collapse" id="filter">
              <ul className=" mt-4">
                <li className="list-group-item">
                  <div className="d-grid gapp-2">
                    <Link to="/lead-status-view" className="btn btn-bg">
                      Status
                    </Link>
                  </div>
                  <br />
                  <div className="d-grid gap-2">
                    <Link to="/sales-agent-View" className="btn btn-bg">
                      Sales Agent
                    </Link>
                  </div>
                  <br />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" lead-content col-12 col-md-10 ">
          <div className="mt-4">
            <h3 className="ms-5">Lead Overview</h3>
          </div>
          <ul className=" mt-3">
            {leads?.map((lead) => (
              <li className="list-group-item pt-3">
                <div className="me-4 card">
                  <div className="card-header">{lead.name}</div>
                  <div className="card-body">
                    <p>Status: {lead.status}</p>
                    <p>SalesAgent: {lead?.salesAgent?.name}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <hr className=" mb-5" />
          <ul>
            <li className="list-group-item ">
              <Link to="/addlead" className="btn btn-lg add-btn">
                Add New Lead
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LeadList;
