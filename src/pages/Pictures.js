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
        <div className="collage-item main">
            <img src="https://github.com/Abid-Chowdhury/valentinesxt/blob/3825bab6dea29761736de8cac5dc8b3bf2e2e103/src/Pictures/1.png?raw=true" alt="Picture 1"></img>
      </div>
      <div className="collage-item">
            <img src="https://github.com/Abid-Chowdhury/valentinesxt/blob/3825bab6dea29761736de8cac5dc8b3bf2e2e103/src/Pictures/2.png?raw=true" alt="Picture 2"></img>
      </div>
      <div className="collage-item">
            <img src="https://github.com/Abid-Chowdhury/valentinesxt/blob/3825bab6dea29761736de8cac5dc8b3bf2e2e103/src/Pictures/3.png?raw=true" alt="Picture 3"></img>
      </div>
      <div className="collage-item">
            <img src="https://github.com/Abid-Chowdhury/valentinesxt/blob/3825bab6dea29761736de8cac5dc8b3bf2e2e103/src/Pictures/4.png?raw=true" alt="Picture 4"></img>
      </div>
      <div className="collage-item">
            <img src="https://github.com/Abid-Chowdhury/valentinesxt/blob/3825bab6dea29761736de8cac5dc8b3bf2e2e103/src/Pictures/5.png?raw=true" alt="Picture 5"></img>
      </div>
      <div className="collage-item">
            <img src="https://github.com/Abid-Chowdhury/valentinesxt/blob/3825bab6dea29761736de8cac5dc8b3bf2e2e103/src/Pictures/6.png?raw=true" alt="Picture 6"></img>
      </div>
    </div>

      <button className="button" onClick={() => navigate("/Question")}>
        Question
      </button>
      </div>
      
      <div className="page-indicator">● ● <span>●</span> ● ●</div>

    </div>
  );
}
