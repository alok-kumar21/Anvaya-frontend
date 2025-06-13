import { Link, useParams } from "react-router-dom";
import { useLeadContext } from "../context/LeadContent";
const LeadDetails = () => {
  const { leads, loading, error } = useLeadContext();
  const leadId = useParams();

  const leaddetails = leads?.find((lead) => lead._id === leadId.leadId);

  return (
    <section className="mx-5 leadDetails py-4">
      {leaddetails && (
        <div>
          <div className="text-center mb-4">
            <h1 className="h1 ">
              Lead Management{" "}
              <span className="text-secondary">{leaddetails.name}</span>
            </h1>
          </div>

          <div className="row ">
            <div className="lead-side-content col-12 col-md-2 mt-5">
              <Link
                to="/"
                className="back-btn text-decoration-none text-white ms-4 "
              >
                <i className="bi bi-arrow-left"></i> Dashboard
              </Link>
            </div>
            <div className="lead-content p-5  col-md-10 ">
              <ul className="list mb-5">
                <li className="list-group-item ">
                  Lead Name: {leaddetails.name}
                </li>
                <li className="list-group-item pt-3">
                  Sales Agent: {leaddetails.salesAgent.name}
                </li>
                <li className="list-group-item pt-3">
                  Lead Source: {leaddetails.source}
                </li>
                <li className="list-group-item pt-3">
                  {" "}
                  Lead Status: {leaddetails.status}
                </li>
                <li className="list-group-item pt-3">
                  Priority: {leaddetails.priority}
                </li>
                <li className="list-group-item pt-3">
                  Time to Close: {leaddetails.timeToClose}
                </li>
                <button className="btn btn-lg btn-bg mt-5">Edit Lead</button>
              </ul>
              <hr />
              {/* comment */}
              <ul className="list mt-5">
                <li className="list-group-item">Author:</li>
                <li className="list-group-item">Comment:</li>
              </ul>
              <div className="mt-5 mb-5">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Write Comment"
                />
                <br />
                <button className="btn btn-lg btn-bg">Comment</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LeadDetails;
