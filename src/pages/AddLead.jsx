import "../App.css";

const AddLead = () => {
  return (
    <>
      <section className=" container">
        <div className=" p-3">
          <h1 className="text-center text-white">Add New Lead</h1>
        </div>
        <hr />
        <form className="mb-5">
          <label className="form-label" htmlFor="leadname">
            Name
          </label>

          <input
            id="leadname"
            className="form-control "
            type="text"
            placeholder="Name"
          />
          <br />
          <label className="form-label" htmlFor="selectSource">
            Select Source
          </label>
          <select id="selectSource" className="form-select" name="">
            <option value="#">Select lead Source</option>
            <option value="Website">Website</option>
            <option value="Referral">Referral</option>
            <option value="Cold Call">Cold Call</option>
          </select>
          <br />
          <label className="form-label" htmlFor="selectStatus">
            Select Lead Status
          </label>
          <select id="selectStatus" className="form-select" name="">
            <option value="#">Select Lead Status</option>
            <option value="New">New</option>
            <option value="Qualified">Qualified</option>
            <option value="Proposal Sent">Proposal Sent</option>
            <option value="Closed">Closed</option>
          </select>
          <br />
          <label className="form-label" htmlFor="selectTags">
            Select Tags
          </label>
          <select id="selectTags" className="form-select" name="" multiple>
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
          />
          <br />
          <label className="form-label" htmlFor="selectPriority">
            Priority
          </label>
          <select id="selectPriority" className="form-select" name="">
            <option value="#">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <br />
          <button className="btn btn-lg btn-bg">Create New Lead</button>
        </form>
      </section>
    </>
  );
};

export default AddLead;
