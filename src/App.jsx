import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Dashboard from "./pages/Dashboard";
import AddLead from "./pages/AddLead";
import LeadDetails from "./pages/LeadDetails";
import LeadList from "./pages/LeadList";
import SalesAgentManagement from "./pages/SalesAgentManagement";
import AddAgetnForm from "./pages/AddAgentForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addlead" element={<AddLead />} />
          <Route path="/leaddetails" element={<LeadDetails />} />
          <Route path="/leadlist" element={<LeadList />} />
          <Route path="/salesagent" element={<SalesAgentManagement />} />
          <Route path="/addsalesagent" element={<AddAgetnForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
