import "../App.css";
import { NavLink, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <section className="container">
        <header>
          <nav className=" brand p-3">
            <h1 className="text-center">Anvaya CRM App</h1>
            <hr />
          </nav>
        </header>
        <main>
          <div className="row ">
            <div className="col-12 col-md-2">
              <ul className="list">
                <li className="list-group-item h5 pt-5 ps-4">
                  <Link
                    to="/leadlist"
                    className="text-decoration-none text-white"
                  >
                    <i className="bi bi-arrow-bar-right"></i> Leads
                  </Link>
                </li>
                <li className="list-group-item h5 pt-3 ps-4">
                  <Link
                    to="/salesagent"
                    className="text-decoration-none text-white"
                  >
                    <i className="bi bi-bar-chart-fill"></i> Sales
                  </Link>
                </li>
                <li className="list-group-item h5 pt-3 ps-4">
                  <Link className="text-decoration-none text-white">
                    {" "}
                    <i className="bi bi-person-fill"></i> Agents
                  </Link>
                </li>
                <li className="list-group-item h5 pt-3 ps-4">
                  <Link className="text-decoration-none text-white">
                    <i className="bi bi-file-earmark-bar-graph-fill"></i>{" "}
                    Reports
                  </Link>
                </li>
                <li className="list-group-item h5 pt-3 ps-4">
                  <Link className="text-decoration-none text-white">
                    <i className="bi bi-gear-fill"></i> Setting
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lead-content col-12  col-md-10 ">
              <div className="mt-4 d-flex justify-content-around">
                <div className="btn btn-lg btn-bg">Lead 1</div>
                <div className="btn btn-lg btn-bg">Lead 2</div>
                <div className="btn btn-lg btn-bg">Lead 3</div>
              </div>
              <hr className="mt-4 mb-4" />
              <ul className="list text-white">
                <h3>Lead Status</h3>
                <li className="list-group-item">New: [5] Leads</li>
                <li className="list-group-item">Contacted: [3] Leads</li>
                <li className="list-group-item">Qualified: [2] Leads</li>
              </ul>
              <hr className="mt-4 mb-4" />
              <ul className="list text-white">
                <h3 className="mb-4">Quick Filter</h3>
                <li className=" btn btn-lg btn-bg">New</li>
                <li className="ms-3 btn btn-lg btn-bg">Contacted</li>
                <br />
                <Link to="/addlead" className="mt-5 btn btn-lg add-btn">
                  Add New Lead
                </Link>
              </ul>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Dashboard;
