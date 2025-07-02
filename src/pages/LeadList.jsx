import { Link } from "react-router-dom";
import useLeadContext from "../context/LeadContent";
import { useEffect, useState } from "react";
const LeadList = () => {
  const { leads, loading, error } = useLeadContext();
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState();
  const [priority, setPriority] = useState();

  let filteredData = [...leads];

  function tagsHandler(event) {
    const { checked, value } = event.target;
    if (checked) {
      setTags((prev) => [...prev, value]);
    } else {
      setTags((prev) => prev.filter((tag) => tag != value));
    }
  }

  if (tags.length > 0) {
    filteredData = filteredData.filter((lead) => {
      let hasAllTags = true;
      for (let i = 0; i < tags.length; i++) {
        if (!lead.tags.includes(tags[i])) {
          hasAllTags = false;
          break;
        }
      }
      return hasAllTags;
    });
  }

  if (status) {
    filteredData = filteredData?.filter((lead) => lead.status === status);
  }
  if (priority) {
    filteredData = filteredData?.filter((lead) => lead.priority === priority);
  }

  // delete leads

  function deleteLeadHandler(leadId) {
    console.log(leadId);
    try {
      const response = fetch(`http://localhost:5001/v2/leads/${leadId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to Delete Leads");
      } else {
        filteredData = filteredData?.filter((lead) => lead._id != leadId);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

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
                  <div className="d-grid gap-2">
                    <label className="form-label" name="" id="">
                      Select Tags
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="High Value"
                        value="High Value"
                        onChange={tagsHandler}
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="checkDefault"
                      >
                        High Value
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="Follow up"
                        value="Follow up"
                        onChange={tagsHandler}
                      />
                      <label
                        className="form-check-label text-white"
                        htmlFor="checkDefault"
                      >
                        Follow up
                      </label>
                    </div>
                  </div>
                  <br />
                  <div className="d-grid gap-2">
                    <select
                      onChange={(event) => setStatus(event.target.value)}
                      className="form-select"
                    >
                      <option value="#">Select Status</option>
                      <option value="New">New</option>
                      <option value="COntacted">Contacted</option>
                      <option value="Qualified">Qualified</option>
                      <option value="Proposal Sent">Proposal Sent</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>

                  <br />

                  <div className="d-grid gap-2">
                    <select
                      onChange={(event) => setPriority(event.target.value)}
                      className="form-select"
                    >
                      <option value="#">Select Priority</option>
                      <option value="High">High</option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                    </select>
                  </div>
                </li>
                <br />
                <li className="list-group-item">
                  <Link
                    to="/lead-status-view"
                    className="btn btn-bg text-white"
                  >
                    <strong> Lead Status view</strong>
                  </Link>
                </li>
                <br />
              </ul>
            </div>
          </div>
        </div>

        <div className=" lead-content col-12 col-md-10 ">
          <div className="mt-4">
            <h3 className="ms-5">Lead Overview</h3>
          </div>
          <ul className=" mt-3">
            {filteredData?.map((lead) => (
              <li key={lead._id} className="list-group-item pt-3">
                <div className="me-4 card">
                  <div className="card-header d-flex justify-content-between">
                    <p>
                      <strong>{lead.name}</strong>
                    </p>
                    <p>
                      {lead.status === "Closed" ? (
                        <button className="btn btn-success">Closed</button>
                      ) : lead.status === "New" ? (
                        <button className="btn btn-warning">New</button>
                      ) : lead.status === "Contacted" ? (
                        <button className="btn btn-info">Contacted</button>
                      ) : lead.status === "Qualified" ? (
                        <button className="btn btn-primary">Qualified</button>
                      ) : (
                        <button className="btn btn-dark">Proposal Sent</button>
                      )}
                    </p>
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>SalesAgent:</strong> {lead?.salesAgent?.name}
                    </p>

                    <p>
                      <strong>Tags:</strong> {lead.tags.join(", ")}
                    </p>
                    <p>
                      <strong>Priority:</strong> {lead.priority}
                    </p>
                    <Link
                      to={`/lead-details/${lead._id}`}
                      className="btn btn-bg"
                    >
                      View Detail
                    </Link>
                    <button
                      onClick={() => deleteLeadHandler(lead._id)}
                      className="btn btn-danger ms-3"
                    >
                      Delete Lead
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <ul>
            <li className="list-group-item mt-4">
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
