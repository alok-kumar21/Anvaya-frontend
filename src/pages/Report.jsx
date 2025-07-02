// import { Link } from "react-router-dom";
// import { Bar, Pie } from "react-chartjs-2";
// import "chart.js/auto";
// import useLeadContext from "../context/LeadContent";
// import useFetch from "../pages/useFetch";

// const Report = () => {
//   const { data: agentsData } = useFetch(`http://localhost:5001/v2/agents`);
//   const { leads, loading, error } = useLeadContext();
//   const closedLeads = leads?.filter((lead) => lead.status === "Closed");
//   const notClosedLeads = leads?.filter((lead) => lead.status != "Closed");

//   const newStatus = leads?.filter((lead) => lead.status === "New");
//   const qualifiedStatus = leads?.filter((lead) => lead.status === "Qualified");
//   const contactedStatus = leads?.filter((lead) => lead.status === "Contacted");

//   const agents = agentsData?.map((agent) => agent.name);

//   const agent1 = leads?.filter(
//     (lead) =>
//       lead.status === "Closed" &&
//       lead.salesAgent?._id === "6835549a9d33af306abfd646"
//   );
//   const agent2 = leads?.filter(
//     (lead) =>
//       lead.status === "Closed" &&
//       lead.salesAgent?._id === "684aae438ec831473947e613"
//   );
//   const agent3 = leads?.filter(
//     (lead) =>
//       lead.status === "Closed" &&
//       lead.salesAgent?._id === "684d20513e5b243d296640c7"
//   );

//   return (
//     <>
//       {loading && (
//         <div className="alert alert-success text-center">Loading...</div>
//       )}
//       {error && (
//         <div className="alert alert-danger text-center">
//           Failed to get report
//         </div>
//       )}
//       <section className="container leadlist py-4">
//         <div className="text-center mb-4">
//           <h1 className="h3">Anvaya CRM Reports</h1>
//         </div>

//         <hr />

//         <div className="row ">
//           <div className="col-12 col-md-2  ">
//             <Link to="/" className="text-white text-decoration-none">
//               <i className="bi bi-arrow-left "></i> Dashboard
//             </Link>
//           </div>

//           <div className=" lead-content col-12 col-md-10 ">
//             <div className="p-3">
//               <h3>Report Overview</h3>
//               <hr />
//             </div>
//             <div className="row p-3">
//               <div className=" col-md-6 mb-3">
//                 <div className="card p-3 ">
//                   <p className="text-center">Total Leads closed</p>

//                   <Bar
//                     data={{
//                       labels: ["New", "Contacted", "Qualified", "Closed"],
//                       datasets: [
//                         {
//                           label: "Status",
//                           data: [
//                             newStatus?.length,
//                             contactedStatus?.length,
//                             qualifiedStatus?.length,
//                             closedLeads?.length,
//                           ],
//                           backgroundColor: [
//                             "#9c27b0",
//                             "#3f51b5",
//                             "#03a9f4",
//                             "#8bc34a",
//                           ],
//                         },
//                       ],
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className=" col-md-6">
//                 <div className="card p-3">
//                   <p className="text-center">Leads Closed by Sales Agent</p>

//                   <Bar
//                     data={{
//                       labels: agents,
//                       datasets: [
//                         {
//                           label: "Leads Closed",
//                           data: [
//                             agent1?.length,
//                             agent2?.length,
//                             agent3?.length,
//                           ],
//                           backgroundColor: "#2196f3",
//                         },
//                       ],
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className=" col-md-6 mt-3">
//                 <div className="card p-3">
//                   <p className="text-center">Lead status Distribuation</p>

//                   <Pie
//                     data={{
//                       labels: ["Closed Leads", "Pipeline Leads"],
//                       datasets: [
//                         {
//                           data: [closedLeads?.length, notClosedLeads?.length],
//                           backgroundColor: ["lightpink", "lightblue"],
//                         },
//                       ],
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Report;

import { Link } from "react-router-dom";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import useLeadContext from "../context/LeadContent";
import useFetch from "../pages/useFetch";

const Report = () => {
  const { data: agentsData } = useFetch(`http://localhost:5001/v2/agents`);
  const { leads, loading, error } = useLeadContext();

  const closedLeads = leads?.filter((lead) => lead.status === "Closed");
  const notClosedLeads = leads?.filter((lead) => lead.status !== "Closed");

  const { data: lastWeekData } = useFetch(
    `http://localhost:5001/report/last-week`
  );
  console.log(lastWeekData);

  const statusCounts = {};
  leads?.forEach((lead) => {
    statusCounts[lead.status] = (statusCounts[lead.status] || 0) + 1;
  });

  //  Agent-wise lead close
  const agentClosedLeadMap = {};
  agentsData?.forEach((agent) => {
    const count = closedLeads?.filter(
      (lead) => lead.salesAgent?._id === agent._id
    ).length;
    agentClosedLeadMap[agent.name] = count;
  });

  return (
    <section className="container leadlist py-4">
      <div className="text-center mb-4">
        <h1 className="h3">Anvaya CRM Reports</h1>
      </div>

      <hr />

      <div className="row">
        {/* Sidebar */}
        <div className="col-12 col-md-2">
          <Link to="/" className="text-white text-decoration-none">
            <i className="bi bi-arrow-left"></i> Dashboard
          </Link>
        </div>

        {/* Charts */}
        <div className="lead-content col-12 col-md-10">
          <div className="p-3">
            <h3>Report Overview</h3>
            <hr />
          </div>

          <div className="row p-3">
            {/* Total leads by status (Bar) */}
            <div className="col-md-6 mb-3">
              <div className="card p-3">
                <p className="text-center fw-bold">Total Leads by Status</p>
                <Bar
                  data={{
                    labels: Object.keys(statusCounts),
                    datasets: [
                      {
                        label: "Leads",
                        data: Object.values(statusCounts),
                        backgroundColor: [
                          "#9c27b0",
                          "#3f51b5",
                          "#03a9f4",
                          "#ffc107",
                          "#4caf50",
                        ],
                      },
                    ],
                  }}
                />
              </div>
            </div>

            {/* Leads closed by sales agent (Bar) */}
            <div className="col-md-6 mb-3">
              <div className="card p-3">
                <p className="text-center fw-bold">
                  Leads Closed by Sales Agent
                </p>
                <Bar
                  data={{
                    labels: Object.keys(agentClosedLeadMap),
                    datasets: [
                      {
                        label: "Closed Leads",
                        data: Object.values(agentClosedLeadMap),
                        backgroundColor: "#2196f3",
                      },
                    ],
                  }}
                />
              </div>
            </div>

            {/* Leads Closed Last Week (Bar) */}
            <div className="col-md-6 mb-3">
              <div className="card p-3">
                <p className="text-center fw-bold">Leads Closed Last 7 Days</p>
                <Bar
                  data={{
                    labels: lastWeekData?.map((lead) => lead.name),
                    datasets: [
                      {
                        label: "Closed Leads",
                        data: lastWeekData?.map((lead) => lead.closedAt),
                        backgroundColor: "#ff7043",
                      },
                    ],
                  }}
                />
              </div>
            </div>

            {/* Pipeline vs Closed (Pie) */}
            <div className="col-md-6 mb-3">
              <div className="card p-3">
                <p className="text-center fw-bold">Pipeline vs Closed</p>
                <Pie
                  data={{
                    labels: ["Closed Leads", "Pipeline Leads"],
                    datasets: [
                      {
                        data: [closedLeads?.length, notClosedLeads?.length],
                        backgroundColor: ["#4caf50", "#f44336"],
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Report;
