import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const url = "http://localhost:8000/complaints";

function ComplaintsPage() {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();

  async function fetchComplaints() {
    const token = localStorage.getItem("access_token");
    console.log(token);
    if (!token) {
      navigate("/admin/login");
    }
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        cache: "no-store",
      });
      const data = await res.json();
      setComplaints(data);
    } catch {
      navigate("/admin/login");
    }
  }
  useEffect(() => {
    fetchComplaints();
  }, []);
  return (
    <div>
      {complaints.map((c)=>{
        return (
          <div className="complaint">
              Category:
              <div className="category">{c.category}</div>
              Message:
              <div className="message">{c.message}</div>
          </div>
        )
      })}
    </div>
  );
}

export default ComplaintsPage;
