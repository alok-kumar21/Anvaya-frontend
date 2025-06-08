import { Link } from "react-router-dom";

const SalesAgentManagement = () => {
  return (
    <>
      <section className="container leadlist py-4">
        <div className="text-center mb-4">
          <h1 className="h3">Sales Agent Management</h1>
        </div>

        <hr />

        <div className="row ">
          <div className="col-12 col-md-2  ">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-arrow-left "></i> Dashboard
            </Link>
          </div>

          <div className=" lead-content col-12 col-md-10">
            <div className="p-3 ms-3">
              <h3>Sales Agent List</h3>
            </div>
            <ul className="list">
              <li className="list-group-item">Agent: [John Doe] - [Emaild]</li>
              <hr className="mt-4 mb-4" />
              <li className="list-group-item">
                <Link to="/addsalesagent" className="btn btn-lg add-btn">
                  Add New Agent
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SalesAgentManagement;
