import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Pictures() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Pictures 📸";
  }, []);

  return (
    <div style={{ padding: "40px 20px" }} className="pictures-page">

    {/* <a href="/stats" className="page-backward-link page-link"> &lt; Stats</a> */}
    {/* <a href="/Question" className="page-forward-link page-link"> Question &gt; </a> */}
    <button className="page-backward-link page-link" onClick={() => navigate("/stats")}> &lt; Stats</button>
    <button className="page-forward-link page-link" onClick={() => navigate("/Question")}> Question &gt; </button>

    <div className="subtitle">📸 MEMORIES 📸</div>

      <h1 className="page-title">Our Gallery</h1>
      
    <div className="quote">
        🖼️ A Glimpse Into The Beautiful Moments We've Shared Together 🖼️
      </div>
    <div className="pictures-collage-container">

    <div className="pictures-collage">
      <div className="collage-item main">1</div>
      <div className="collage-item">2</div>
      <div className="collage-item">3</div>
      <div className="collage-item">4</div>
      <div className="collage-item">5</div>
      <div className="collage-item">6</div>
    </div>

      <button className="button" onClick={() => navigate("/Question")}>
        Question
      </button>
      </div>
      
      <div className="page-indicator">● ● <span>●</span> ● ●</div>

    </div>
  );
}
