import { useNavigate } from "react-router-dom";

export default function Pictures() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px 20px" }}>

    <a href="/Stats" className="stats-backward-link"> &lt; Stats</a>
    <a href="/About" className="stats-forward-link"> Question &gt; </a>

    <div className="stats-subtitle">✨ OUR JOURNEY ✨</div>

      <h1 className="page-title">Pictures</h1>
    <div className="page pictures-page">

      <div className="grid-collage">
        {Array.from({ length: 16 }).map((_, index) => (
          <img
            key={index}
            src="https://via.placeholder.com/400"
            alt={`memory ${index + 1}`}
            className={`grid-img img-${index + 1}`}
          />
        ))}
      </div>

      <button
        className="valentine-btn bottom-btn"
        onClick={() => navigate("/About")}
      >
        Question
      </button>
      </div>
    </div>
  );
}
