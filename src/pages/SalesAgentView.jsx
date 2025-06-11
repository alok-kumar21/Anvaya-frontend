import { Link } from "react-router-dom";

const SalesAgentView = () => {
  return (
    <section className="container leadlist py-4">
      <div className="text-center mb-4">
        <h1 className="h3">Sales Agent View</h1>
      </div>

      <hr />

      <div className="row ">
        <div className="col-12 col-md-2  ">
          <Link to="/" className="text-white text-decoration-none">
            <i className="bi bi-arrow-left "></i> Dashboard
          </Link>
        </div>

        <div className=" lead-content col-12 col-md-10 ">
          <div>
            <h2 className="text-center">Lead List By Agent</h2>
            <hr />
          </div>
          <div>
            <p>Sales Agent : John Doe</p>
            <hr />
            <p>Lead 1 - status: New</p>
            <p>Lead 1 - status: Qualified</p>
            <hr />
            <p>Filter: [status] [priortiy]</p>
            <p>sort by: [time to close]</p>
          </div>
        </div>
      </div>
    </section>
  );
};
