import { useNavigate } from "react-router-dom";

export default function Stats() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1 style={{ textAlign: "center", color: "#b3005e" }}>Stats</h1>

      <p style={{ textAlign: "center", marginTop: "20px" }}>
        (Cute Valentine stats will go here 💖)
      </p>

      <button
        className="valentine-btn"
        style={{ marginTop: "40px" }}
        onClick={() => navigate("/about")}
      >
        Continue
      </button>
    </div>
  );
}
