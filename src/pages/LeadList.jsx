import { Link } from "react-router-dom";

const LeadList = () => {
  return (
    <section className="container leadlist py-4">
      <div className="text-center mb-4">
        <h1 className="h3">Lead List</h1>
      </div>

      <hr />

      <div className="row ">
        <div className="col-12 col-md-2  ">
          <Link to="/" className="text-white text-decoration-none">
            <i className="bi bi-arrow-left "></i> Dashboard
          </Link>
        </div>

        <div className=" lead-content col-12 col-md-10 ">
          <div className="mt-4">
            <h3 className="ms-5">Lead Overview</h3>
          </div>
          <ul className="list mt-3">
            <li className="list-group-item pt-3">
              Lead 1 - [New] - [John Doe]
            </li>
            <li className="list-group-item pt-3">
              Lead 2 - [Qualified] - [Jane]
            </li>
            <li className="list-group-item pt-3">
              Lead 3 - [Proposal sent] - [Mark]
            </li>
          </ul>
          <hr className="mt-5 mb-5" />
          <ul>
            <li className="list-group-item">
              <span>Filter:</span>
              <button className="ms-2 btn btn-lg btn-bg">Status</button>
              <button className="ms-3 btn btn-lg btn-bg">Sales Agent</button>
            </li>
            <li className="list-group-item mt-3">
              <span>Sort By:</span>
              <button className="ms-2 btn btn-lg btn-bg">Priority</button>
              <button className="ms-3 btn btn-lg btn-bg">Time to Close</button>
            </li>
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
