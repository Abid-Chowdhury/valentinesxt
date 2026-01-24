import { useNavigate } from "react-router-dom";

export default function Stats() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px 20px" }} className="stats-page">
      
      <a href="/" className="page-backward-link page-link"> &lt; Home</a>
      <a href="/Pictures" className="page-forward-link page-link"> Pictures &gt; </a>

      <div className="subtitle">✨ OUR JOURNEY ✨</div>

      <h1 className="page-title">Relationship Stats</h1>

      <div className="page-subtitle quote">
        A glimpse into the beautiful moments we've shared together
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">1318</div>
          <div className="stat-label">Days Since we Met</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">2</div>
          <div className="stat-label">Trips Taken</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">104130+</div>
          <div className="stat-label">Total Messages</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">10950+</div>
          <div className="stat-label">Hours in call</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">1630+</div>
          <div className="stat-label">Love you texts</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">2429+</div>
          <div className="stat-label">Good nights and mornings</div>
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
