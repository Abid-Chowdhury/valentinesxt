import { useNavigate } from "react-router-dom";

export default function Pictures() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px 20px" }} className="pictures-page">

    <a href="/Stats" className="stats-backward-link"> &lt; Stats</a>
    <a href="/Question" className="stats-forward-link"> Question &gt; </a>

    <div className="stats-subtitle">📸 MEMORIES 📸</div>

    <h1 className="page-title">Our Gallery</h1>
    <div className="pictures-collage-container">

    <div className="pictures-collage">
      <div className="collage-item main">1</div>
      <div className="collage-item">2</div>
      <div className="collage-item">3</div>
      <div className="collage-item">4</div>
      <div className="collage-item">5</div>
      <div className="collage-item">6</div>
    </div>

      <button
        className="valentine-btn bottom-btn"
        onClick={() => navigate("/Question")}
      >
        Question
      </button>
      </div>
      
      <div className="page-indicator">● ● <span>●</span> ● ●</div>

    </div>
  );
}
