import { useNavigate } from "react-router";

function HomePage() {
  const navigate = useNavigate()
  const login = localStorage.getItem('login')
  const loginButton = <button onClick={()=>navigate('admin/login')}>Login</button>
  const logoutButton = <button onClick={()=>{localStorage.clear() ; location.reload()}}>LogOut</button>
  return (
    <div>
      <div>Home Page</div>
      <button onClick={()=>navigate('complaints/create')}>Filing a complaint</button>
      <button onClick={()=>navigate('complaints')}>All Complaints</button>
      {login ? logoutButton: loginButton}
    </div>
  );
}

export default HomePage;
