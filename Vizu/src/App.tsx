
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./Layout/Admin/AminLayout";
import Login from "./pages/Admin/Login";
import Signup from "./pages/Admin/Signup";
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Login />} />
          <Route path="SignUp" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App