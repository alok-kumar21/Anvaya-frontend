import { Link } from "react-router-dom";

const LeadStatusView = () => {
  return (
    <section className="container leadlist py-4">
      <div className="text-center mb-4">
        <h1 className="h3">Lead Status View</h1>
      </div>

      <hr />

      <div className="row ">
        <div className="col-12 col-md-2  ">
          <Link to="/" className="text-white text-decoration-none">
            <i className="bi bi-arrow-left "></i> Dashboard
          </Link>
        </div>

        <div className=" lead-content col-12 col-md-10 ">
          <div className="p-3">
            <h2 className="text-center">Lead List Status</h2>
            <hr />
          </div>
          <div className="mx-5">
            <div>
              <p>Lead 1 - [sales agent: John]</p>
            </div>
            <hr />
            <span>
              Filter: <p>[Sales Agent] [Priority]</p>
            </span>
            <span>
              Sort By: <p>[Time to Close]</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadStatusView;
