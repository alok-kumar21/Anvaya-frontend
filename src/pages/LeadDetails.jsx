import { Link, useParams } from "react-router-dom";
import { useLeadContext } from "../context/LeadContent";
import { useState } from "react";
import useFetch from "../pages/useFetch";
const LeadDetails = () => {
  const { leads, loading, error, updateLeadHandler } = useLeadContext();
  const leadId = useParams();

  const leaddetails = leads?.find((lead) => lead._id === leadId.leadId);

  const [formData, setFormData] = useState({
    lead: `${leadId.leadId}`,
    commentText: "",
  });

  function commentHandler(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function formDataHandler(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5001/leads/${leadId.leadId}/comments`,
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add comment");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <section className="mx-5 leadDetails py-4">
      {loading && <div className="alert alert-success">Loading...</div>}
      {error && (
        <div className="alert alert-danger">Failed to Get Lead Details</div>
      )}
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
                  Sales Agent: {leaddetails?.salesAgent?.name}
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
                <Link
                  to="/addlead"
                  onClick={() => updateLeadHandler(leaddetails)}
                  className="btn btn-lg btn-bg mt-5"
                >
                  Edit Lead
                </Link>
              </ul>
              <hr />
              {/* comment */}
              <ul className="list mt-5">
                <li className="list-group-item">Author:</li>
                <li className="list-group-item">Comment:</li>
              </ul>
              <div className="mt-5 mb-5">
                <form onSubmit={formDataHandler}>
                  <label className="form-label" htmlFor="">
                    Comment
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Write Comment"
                    value={formData.comment}
                    name="commentText"
                    onChange={commentHandler}
                  />
                  <br />
                  <button type="submit" className="btn btn-lg btn-bg">
                    Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LeadDetails;
