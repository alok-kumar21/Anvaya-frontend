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
import Report from "./pages/Report";
import LeadStatusView from "./pages/LeadStatusView";
import SalesAgentView from "./pages/SalesAgentView";

import { LeadProvider } from "./context/LeadContent";

function App() {
  return (
    <>
      <LeadProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/addlead" element={<AddLead />} />
            <Route path="/lead-details/:leadId" element={<LeadDetails />} />
            <Route path="/leadlist" element={<LeadList />} />
            <Route path="/sales-agent" element={<SalesAgentManagement />} />
            <Route path="/add-sales-agent" element={<AddAgetnForm />} />
            <Route path="/report" element={<Report />} />
            <Route path="/lead-status-view" element={<LeadStatusView />} />
            <Route path="/sales-agent-View" element={<SalesAgentView />} />
          </Routes>
        </Router>
      </LeadProvider>
    </>
  );
}

export default App;
