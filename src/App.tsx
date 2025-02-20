import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import ManageResources from "./pages/ManageResources"
import ManageInfluencers from "./pages/ManageInfluencers"
import ActivityLogs from "./pages/ActivityLogs"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="resources" element={<ManageResources />} />
          <Route path="influencers" element={<ManageInfluencers />} />
          <Route path="logs" element={<ActivityLogs />} />
        </Route>
      </Routes>
    </Router>
  )
}

