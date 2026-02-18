import { useState } from "react";
import { useNavigate } from "react-router";

function AdminLoginsPage() {
        localStorage.setItem("access_token", '000');
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  function handelChange(e) {
    const { name, value } = e.target;
    setPassword((prev) => ({ ...prev, [name]: value }));
  }
  async function login() {
    try {
      const url = "http://localhost:8000/api/admin/login";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(password),
      });
      const token = await res.text();
      if (!res.ok) throw new Error(token);
      localStorage.setItem("access_token", token);
      console.log(localStorage.getItem("access_token"));
    } catch (err) {
      navigate("/admin/unauthorized");
      console.log(localStorage.getItem("access_token"));
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <input
        type="password"
        id="password"
        name="password"
        onChange={handelChange}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default AdminLoginsPage;
