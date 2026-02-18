import { useState } from "react";
import { useNavigate } from "react-router";
function SubmitComplaintPage() {
  const navigate = useNavigate()
  const url = "http://localhost:8000/complaints";
  const [complaint, setComplaint] = useState({ category: "", message: "" });

  function handelChange(e) {
    const { name, value } = e.target;
    setComplaint((prev) => ({ ...prev, [name]: value }));
  }

  async function sendComplaint() {
    await fetch(url,  {
      method : 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify(complaint),
    })
    setComplaint({ category: "", message: "" })
    navigate('/complaints/success')
  }

  return (
    <div className="submit-complaint-page">
      <h3>Complaint</h3>
      <div className="form">
        <div className="input-text">
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" onChange={handelChange} value={complaint.category}/>
          <label htmlFor="message">Message:</label>
          <textarea type="text" id="message" name="message" onChange={handelChange} value={complaint.message}/>
        </div>
        <button onClick={sendComplaint}>Submit Complaint</button>
      </div>
    </div>
  );
}

export default SubmitComplaintPage;
