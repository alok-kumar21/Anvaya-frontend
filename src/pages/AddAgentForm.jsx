import { useState } from "react";

const AddAgentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function formDataHandler(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function formAgentHandler(event) {
    event.preventDefault();
    try {
      const response = fetch(`http://localhost:5001/v1/agents`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log("Error:", error);
    }

    
  }
  return (
    <>
      <section className="container">
        <div className="p-3">
          <h1 className="text-center text-white">Add New Sales Agent</h1>
          <hr />
        </div>
        <form onSubmit={formAgentHandler}>
          <label className="form-label" htmlFor="agentName">
            Agent Name
          </label>
          <br />
          <input
            id="agentName"
            className="form-control"
            type="text"
            placeholder="Agent Name"
            name="name"
            value={formData.name}
            onChange={formDataHandler}
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
            name="email"
            value={formData.email}
            onChange={formDataHandler}
          />
          <br />
          <button type="submit" className="btn btn-lg btn-bg">
            Create Agent
          </button>
        </form>
      </section>
    </>
  );
};

export default AddAgentForm;
