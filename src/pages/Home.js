import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="home-content">
        <h1>Happy Valentine's Day</h1>
        <h2>- Abid Chowdhury</h2>

        <button
          className="valentine-btn"
          onClick={() => navigate("/pictures")}
        >
          Pictures
        </button>
      </div>
    </div>
  );
}
