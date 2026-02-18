import "./App.css";
import { Route, Routes } from "react-router";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import SubmitComplaintPage from "./pages/SubmitComplaintPage";
import SucsessPage from "./pages/SucsessPage";
import AdminLoginsPage from "./pages/AdminLoginPage";
import ErrorPage from "./pages/ErrorPage";
import ComplaintsPage from "./pages/ComplaintsPage";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
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
