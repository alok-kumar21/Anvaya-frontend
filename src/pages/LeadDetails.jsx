import { Link } from "react-router-dom";
const LeadDetails = () => {
  return (
    <section className="mx-5 leadDetails py-4">
      <div className="text-center mb-4">
        <h1 className="h1 ">
          Lead Management <span className="text-muted">[Lead Name]</span>
        </h1>
      </div>

      <div className="row ">
        <div className="lead-side-content col-12 col-md-2 mt-5">
          <Link to="/" className="back-btn text-decoration-none text-white ms-4 ">
            <i class="bi bi-arrow-left"></i> Dashboard
          </Link>
        </div>
        <div className="lead-content p-5  col-md-10 ">
          <ul className="list mb-5">
            <li className="list-group-item ">Lead Name:</li>
            <li className="list-group-item pt-3">Sales Agent</li>
            <li className="list-group-item pt-3">Lead Source:</li>
            <li className="list-group-item pt-3"> Lead Status:</li>
            <li className="list-group-item pt-3">Priority:</li>
            <li className="list-group-item pt-3">Time to Close:</li>
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

      <section>{/* Additional lead details content goes here */}</section>
    </section>
  );
};

export default LeadDetails;
