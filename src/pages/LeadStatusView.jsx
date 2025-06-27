// import { Link } from "react-router-dom";

// const LeadStatusView = () => {
//   return (
//     <section className="container leadlist p-3">
//       <div className="text-center mb-4">
//         <h1 className="h3">Lead Status View</h1>
//       </div>

//       <hr />

//       <div className="row ">
//         <div className="col-12 col-md-2  ">
//           <Link to="/" className="text-white text-decoration-none">
//             <i className="bi bi-arrow-left "></i> Dashboard
//           </Link>
//         </div>

//         <div className=" lead-content col-12 col-md-10 ">
//           <div className="p-3">
//             <h2 className="text-center">Lead List Status</h2>
//             <hr />
//           </div>
//           <div className="mx-5">
//             <div>
//               <p>Lead 1 - [sales agent: John]</p>
//             </div>
//             <hr />
//             <span>
//               Filter: <p>[Sales Agent] [Priority]</p>
//             </span>
//             <span>
//               Sort By: <p>[Time to Close]</p>
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LeadStatusView;
import { useState } from "react";
import { Link } from "react-router-dom";
import useLeadContext from "../context/LeadContent";

const LeadStatusView = () => {
  const { leads, loading, error } = useLeadContext();

  const [agentFilter, setAgentFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  const statuses = ["New", "Contacted", "Qualified", "Proposal Sent", "Closed"];

  const filteredAndSortedLeads = (status) => {
    let data = leads.filter((lead) => lead.status === status);

    if (agentFilter) {
      data = data.filter((lead) => lead?.salesAgent?.name === agentFilter);
    }

    if (priorityFilter) {
      data = data.filter((lead) => lead.priority === priorityFilter);
    }

    return data;
  };

  const uniqueAgents = [
    ...new Set(leads.map((l) => l?.salesAgent?.name).filter(Boolean)),
  ];

  return (
    <section className="container leadlist p-3">
      <div className="text-center mb-4">
        <h1 className="h3">Lead Status View</h1>
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

            {/* Sales Agent Filter */}
            <label className="form-label  mt-3">Sales Agent</label>
            <select
              onChange={(e) => setAgentFilter(e.target.value)}
              className="form-select mb-3"
            >
              <option value="">All Agents</option>
              {uniqueAgents.map((agent) => (
                <option key={agent} value={agent}>
                  {agent}
                </option>
              ))}
            </select>

            {/* Priority Filter */}
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

        {/* Lead Content */}
        <div className="lead-content col-12 col-md-10">
          <div className="p-3">
            {loading && <div className="alert alert-info">Loading...</div>}
            {error && (
              <div className="alert alert-danger">Failed to load leads.</div>
            )}

            {statuses.map((status) => {
              const leadsInStatus = filteredAndSortedLeads(status);

              return (
                <div key={status} className="mb-5">
                  {/* <h4 className="mb-3">{status}</h4> */}
                  {leadsInStatus.length >= 0 &&
                    // <p className="text-muted">No leads in this status.</p>
                    leadsInStatus.map((lead) => (
                      <div key={lead._id} className="card mb-3">
                        <div className="card-header d-flex justify-content-between">
                          <strong>{lead.name}</strong>
                          <span className="badge bg-secondary">
                            {lead.priority}
                          </span>
                        </div>
                        <div className="card-body">
                          <p>
                            <strong>Sales Agent:</strong>{" "}
                            {lead.salesAgent?.name}
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
                    ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadStatusView;
