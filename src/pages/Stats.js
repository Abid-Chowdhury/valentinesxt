import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Stats() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Our Stats 😊";
  }, []);

  return (
    <div style={{ padding: "40px 20px" }} className="stats-page">
      
      {/* <a href="/valentinesxt" className="page-backward-link page-link"> &lt; Home</a> */}
      {/* <a href="/Pictures" className="page-forward-link page-link"> Pictures &gt; </a> */}
      <button className="page-backward-link page-link" onClick={() => navigate("/valentinesxt")}> &lt; Home</button>
      <button className="page-forward-link page-link" onClick={() => navigate("/Pictures")}> Pictures &gt; </button>


      <div className="subtitle">✨ OUR JOURNEY ✨</div>

      <h1 className="page-title">Relationship Stats</h1>



      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">1318</div>
          <div className="stat-label">Days Since We Met</div>
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
          <div className="stat-label">Hours In Call</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">1630+</div>
          <div className="stat-label">I Love You Texts</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">2429+</div>
          <div className="stat-label">Good Nights And Mornings</div>
        </div>
      </div>

      <div className="milestones-container">
        <div className="milestone-title">⭐ Our Milestones</div>
        <div className="milestones-grid">
          <div className="left-side">
            <div className="vertical-line">

            </div>
          </div>

          <div className="right-side">
            <div className="milestone-item">
              <div className="milestone-description">The Day We Met</div>
              <div className="milestone-date">July 18, 2022</div>
            </div>
            <div className="milestone-item">
              <div className="milestone-description">First "I Love You"</div>
              <div className="milestone-date">November 22, 2022</div>
            </div>
            <div className="milestone-item">
              <div className="milestone-description">Met In Person</div>
              <div className="milestone-date">October 28, 2024</div>
            </div>
            <div className="milestone-item">
              <div className="milestone-description">First Kiss</div>
              <div className="milestone-date">October 29, 2024</div>
            </div>
            <div className="milestone-item">
              <div className="milestone-description">First Date</div>
              <div className="milestone-date">November 3, 2024</div>
            </div>
            
          </div>
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
