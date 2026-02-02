import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import pic1 from "../Pictures/1.png";
import pic2 from "../Pictures/2.png";
import pic3 from "../Pictures/3.png";
import pic4 from "../Pictures/4.png";
import pic5 from "../Pictures/5.png";
import pic6 from "../Pictures/6.png";

export default function Pictures() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Pictures 📸";
  }, []);

  return (
    <div style={{ padding: "40px 20px" }} className="pictures-page">

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
            <img src={pic1} alt="Picture 1" ></img>
      </div>
      <div className="collage-item">
            <img src={pic2} alt="Picture 2" style={{ transform: "scale(1.25)", marginRight: "25px" }}></img>
      </div>
      <div className="collage-item">
            <img src={pic3} alt="Picture 3" style={{ transform: "scale(1.1)", marginBottom: "12px"}}></img>
      </div>
      <div className="collage-item">
            <img src={pic4} alt="Picture 4" style={{ transform: "scale(1.5)", marginTop: "35px"}}></img>
      </div>
      <div className="collage-item">
            <img src={pic5} alt="Picture 5" style={{ transform: "scale(1.1)"}}></img>
      </div>
      <div className="collage-item">
            <img src={pic6} alt="Picture 6" style={{ transform: "scale(1)" }}></img>
      </div>
    </div>

      <button className="question-btn button" onClick={() => navigate("/Question")}>
        Question
      </button>
      </div>
      
      <div className="page-indicator">● ● <span>●</span> ● ●</div>

    </div>
  );
}
