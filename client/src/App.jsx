import "./App.css";
import { Route, Routes, NavLink } from "react-router";
import HomePage from "./pages/HomePage";
import SubmitComplaintPage from "./pages/SubmitComplaintPage";
import SucsessPage from "./pages/SucsessPage";
import AdminLoginsPage from "./pages/AdminLoginPage";
import ErrorPage from "./pages/ErrorPage";
import ComplaintsPage from "./pages/ComplaintsPage";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/" className="link">
          Home
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/complaints">
          <Route index element={<ComplaintsPage />} />
          <Route path="create" element={<SubmitComplaintPage />} />
          <Route path="success" element={<SucsessPage />} />
        </Route>
        <Route path="/admin">
          <Route path="login" element={<AdminLoginsPage />} />
          <Route path="unauthorized" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
