import { Link } from "react-router-dom";
import useLeadContext from "../context/LeadContent";
const LeadList = () => {
  const { leads, loading, error } = useLeadContext();

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
        <div className="col-12 col-md-2  ">
          <Link to="/" className="text-white text-decoration-none">
            <i className="bi bi-arrow-left "></i> Dashboard
          </Link>
          <ul className="list mt-4">
            <div>
              <h2>Filters</h2>
            </div>
            <li className="list-group-item">
              <select className="form-select" name="" id="">
                <option value="#">Select Status</option>
                <option value="New">New</option>
                <option value="Qualified">Qualified</option>
                <option value="Contacted">Contacted</option>
              </select>
              <br />
              <select className="form-select" name="" id="">
                <option value="#">Select Priority</option>
                <option value="Hight">Hight</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <br />
              <button className="btn  btn-bg btn-lg mt-3">Priority</button>
              <br />

              <button className="btn  btn-bg btn-lg mt-3">Time to Close</button>
            </li>
          </ul>
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
