import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="center-container">
      <div className="big-heart">💗</div>

      <div className="subtitle">VALENTINE'S DAY 2026</div>

      <div className="main-name">Abid Chowdhury</div>

      <div className="and-symbol">&</div>

      <div className="main-name">Xian-Ting Lee</div>

      <div className="quote">
        "A love story written in the stars"
      </div>

      <button
        className="valentine-btn"
        onClick={() => navigate("/stats")}
      >
        Explore Our Story →
      </button>
    </div>
  );
}
