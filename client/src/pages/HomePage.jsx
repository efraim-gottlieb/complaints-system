import { useNavigate } from "react-router";

function HomePage() {
  const navigate = useNavigate()
  return (
    <div>
      <div>Home Page</div>
      <button onClick={()=>navigate('complaints/create')}>Filing a complaint</button>
      <button onClick={()=>navigate('complaints')}>All Complaints</button>
      <button onClick={()=>navigate('admin/login')}>Admin Login</button>
    </div>
  );
}

export default HomePage;
