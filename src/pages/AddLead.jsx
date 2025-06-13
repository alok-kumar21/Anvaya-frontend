import "../App.css";
import { useState } from "react";

const AddLead = () => {
  const [formData, setFormData] = useState({
    name: "",
    source: "",
    status: "",
    tags: [],
    timeToClose: "",
    priority: "",
  });

  function formDataHandler(event) {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function formSubmitHandler(event) {
    event.preventDefault();
    // try {
    //   const response = await fetch(`http://localhost:5001/leads`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   if (!response.ok) {
    //     throw new Error("Failed to add Data ");
    //   }
    // } catch (error) {
    //   console.log("Error:", error);
    // }
    console.log(formData);
  }

  return (
    <>
      <section className=" container">
        <div className=" p-3">
          <h1 className="text-center text-white">Add New Lead</h1>
        </div>
        <hr />
        <form onSubmit={formSubmitHandler} className="mb-5">
          <label className="form-label" htmlFor="leadname">
            Name
          </label>

          <input
            id="leadname"
            className="form-control "
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={formDataHandler}
          />
          <br />
          <label className="form-label" htmlFor="selectSource">
            Select Source
          </label>
          <select
            value={formData.source}
            onChange={formDataHandler}
            name="source"
            id="selectSource"
            className="form-select"
          >
            <option value="#">Select lead Source</option>
            <option value="Website">Website</option>
            <option value="Referral">Referral</option>
            <option value="Cold Call">Cold Call</option>
          </select>
          <br />
          <label className="form-label" htmlFor="selectStatus">
            Select Lead Status
          </label>
          <select
            value={formData.status}
            onChange={formDataHandler}
            id="selectStatus"
            className="form-select"
            name="status"
          >
            <option value="#">Select Lead Status</option>
            <option value="New">New</option>
            <option value="Qualified">Qualified</option>
            <option value="Proposal Sent">Proposal Sent</option>
            <option value="Closed">Closed</option>
          </select>
          <br />
          <label className="form-label" htmlFor="multiple">
            Select Tags
          </label>
          <select
            value={formData.tags}
            onChange={formDataHandler}
            id="multiple"
            className="form-select"
            aria-label="Multiple select example"
            name="tags"
            multiple
          >
            <option value="#">Select Tags</option>
            <option value="High Value">High Value</option>
            <option value="Follow-up">Follow-up</option>
          </select>
          <br />
          <label className="form-label" htmlFor="timeToClose">
            Time To Close
          </label>
          <input
            id="timeToClose"
            className="form-control"
            type="number"
            placeholder="Time to Close"
            name="timeToClose"
            value={formData.timeToClose}
            onChange={formDataHandler}
          />
          <br />
          <label className="form-label" htmlFor="selectPriority">
            Priority
          </label>
          <select
            value={formData.priority}
            onChange={formDataHandler}
            id="selectPriority"
            className="form-select"
            name="priority"
          >
            <option value="#">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <br />
          <button type="submit" className="btn btn-lg btn-bg">
            Create New Lead
          </button>
        </form>
      </section>
    </>
  );
};

export default AddLead;
