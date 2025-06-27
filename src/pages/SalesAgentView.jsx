// import { Link } from "react-router-dom";

// const SalesAgentView = () => {
//   return (
//     <section className="container leadlist py-4">
//       <div className="text-center mb-4">
//         <h1 className="h3">Sales Agent View</h1>
//       </div>

//       <hr />

//       <div className="row ">
//         <div className="col-12 col-md-2  ">
//           <Link to="/" className="text-white text-decoration-none">
//             <i className="bi bi-arrow-left "></i> Dashboard
//           </Link>
//         </div>

//         <div className=" lead-content col-12 col-md-10 ">
//           <div>
//             <h2 className="text-center">Lead List By Agent</h2>
//             <hr />
//           </div>
//           <div>
//             <p>Sales Agent : John Doe</p>
//             <hr />
//             <p>Lead 1 - status: New</p>
//             <p>Lead 1 - status: Qualified</p>
//             <hr />
//             <p>Filter: [status] [priortiy]</p>
//             <p>sort by: [time to close]</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SalesAgentView;

import { useState } from "react";
import { Link } from "react-router-dom";
import useLeadContext from "../context/LeadContent";

const SalesAgentView = () => {
  const { leads, loading, error } = useLeadContext();

  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  // const [sortBy, setSortBy] = useState("");

  // Get list of unique agents
  const uniqueAgents = [
    ...new Set(leads.map((lead) => lead?.salesAgent?.name).filter(Boolean)),
  ];

  // Filter and sort leads for a given agent
  const filteredLeadsByAgent = (agentName) => {
    let data = leads.filter((lead) => lead?.salesAgent?.name === agentName);

    if (statusFilter) {
      data = data.filter((lead) => lead.status === statusFilter);
    }

    if (priorityFilter) {
      data = data.filter((lead) => lead.priority === priorityFilter);
    }

    // if (sortBy === "timeToClose") {
    //   data = data.sort((a, b) => a.timeToClose - b.timeToClose);
    // }

    return data;
  };

  return (
    <section className="container leadlist py-4">
      <div className="text-center mb-4">
        <h1 className="h3">Sales Agent View</h1>
      </div>

      <hr />

      <div className="row">
        {/* Sidebar */}
        <div className="col-12 col-md-2">
          <Link to="/" className="text-white text-decoration-none">
            <i className="bi bi-arrow-left"></i> Dashboard
          </Link>

          <div className="mt-4 me-3">
            <h5 className="text-white">Filter Options</h5>

            <label className="form-label  mt-3">Lead Status</label>
            <select
              onChange={(e) => setStatusFilter(e.target.value)}
              className="form-select mb-3"
            >
              <option value="">All Status</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal Sent">Proposal Sent</option>
              <option value="Closed">Closed</option>
            </select>

            <label className="form-label ">Priority</label>
            <select
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="form-select mb-3"
            >
              <option value="">All Priorities</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        {/* Lead List Grouped by Agent */}
        <div className="lead-content col-12 col-md-10 p-3">
          <h2 className=" ">Lead List by Sales Agent</h2>
          <hr />

          {loading && <div className="alert alert-info">Loading...</div>}
          {error && (
            <div className="alert alert-danger">Failed to load leads.</div>
          )}

          {uniqueAgents.map((agent) => {
            const agentLeads = filteredLeadsByAgent(agent);

            return (
              <div key={agent} className="mb-5">
                <h4 className="mb-3">{agent}</h4>
                {agentLeads.length === 0 ? (
                  <p className="text-white">No leads for this agent.</p>
                ) : (
                  agentLeads.map((lead) => (
                    <div key={lead._id} className="card mb-3">
                      <div className="card-header d-flex justify-content-between">
                        <strong>{lead.name}</strong>
                        <span className="badge bg-secondary">
                          {lead.priority}
                        </span>
                      </div>
                      <div className="card-body">
                        <p>
                          <strong>Status:</strong> {lead.status}
                        </p>
                        <p>
                          <strong>Time to Close:</strong> {lead.timeToClose}{" "}
                          days
                        </p>
                        <p>
                          <strong>Source:</strong> {lead.source}
                        </p>
                        <p>
                          <strong>Tags:</strong> {lead.tags.join(", ")}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SalesAgentView;
