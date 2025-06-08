const AddAgentForm = () => {
  return (
    <>
      <section className="container">
        <div className="p-3">
          <h1 className="text-center text-white">Add New Sales Agent</h1>
          <hr />
        </div>
        <form action="">
          <label className="form-label" htmlFor="agentName">
            Agent Name
          </label>
          <br />
          <input
            id="agentName"
            className="form-control"
            type="text"
            placeholder="Agent Name"
            required={true}
          />
          <br />
          <label className="form-label" htmlFor="agentEmail">
            Email
          </label>
          <br />
          <input
            id="agentEmail"
            className="form-control"
            type="email"
            required={true}
            placeholder="Email"
          />
          <br />
          <button className="btn btn-lg btn-bg">Create Agent</button>
        </form>
      </section>
    </>
  );
};

export default AddAgentForm;
