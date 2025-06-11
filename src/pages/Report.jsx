import { Link } from "react-router-dom";

import { Chart as ChartJs } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";

const Report = () => {
  return (
    <section className="container leadlist py-4">
      <div className="text-center mb-4">
        <h1 className="h3">Anvaya CRM Reports</h1>
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
            <h3 className="text-center">Report Overview</h3>
            <hr />
          </div>
          <div className="text-center ">
            <p>Total Leads closed and in Pipeline:</p>
            <div className="container w-25 h-25 ">
              <Doughnut
                data={{
                  labels: ["Pipeline"],
                  datasets: [
                    {
                      label: ["Closed", "Not Closed"],
                      data: [45, 55],
                      backgroundColor: ["lightblue", "lightpink"],
                    },
                  ],
                }}
              />
            </div>
            <hr />
          </div>
          <div className="text-center ">
            <p>Lead status Distribution</p>
            <div className="container w-50 h-50">
              <Bar
                data={{
                  labels: ["Leads"],
                  datasets: [
                    {
                      label: ["Closed"],
                      data: [35],
                      backgroundColor: ["lightblue"],
                    },
                  ],
                }}
              />
            </div>
            <hr />
          </div>
          <div className="text-center ">
            <p>Lead status Distribuation: [pie chart or bar chart]</p>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Report;
