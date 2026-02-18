import { useNavigate } from "react-router";
function SucsessPage() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 3000);
  return (
    <div className="sucsses-page">
      <h2>The complaint was sent successfully.</h2>
      <h3>Thank you very much.</h3>
    </div>
  );
}
export default SucsessPage;
