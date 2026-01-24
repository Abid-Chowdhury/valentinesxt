import { useNavigate } from "react-router-dom";

export default function Stats() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px 20px" }} className="stats-page">
      
      <a href="/" className="stats-backward-link"> &lt; Home</a>
      <a href="/Pictures" className="stats-forward-link"> Pictures &gt; </a>

      <div className="stats-subtitle">✨ OUR JOURNEY ✨</div>

      <h1 className="page-title">Relationship Stats</h1>

      <div className="page-subtitle">
        A glimpse into the beautiful moments we've shared together
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">365+</div>
          <div className="stat-label">Days Together</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">∞</div>
          <div className="stat-label">Kisses Shared</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">200+</div>
          <div className="stat-label">Coffee Dates</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">50+</div>
          <div className="stat-label">Movies Watched</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">100+</div>
          <div className="stat-label">Dinners Together</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">3</div>
          <div className="stat-label">Trips Taken</div>
        </div>
      </div>

      <button
        className="button"
        onClick={() => navigate("/Pictures")}
      >
        Pictures
      </button>
    
      <div className="page-indicator">● <span>●</span> ● ● ●</div>
      
    </div>
  );
}
