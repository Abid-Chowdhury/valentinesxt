import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import FloatingHearts from "../Components/FloatingHearts";

import pic1 from "../Pictures/1.png";
import pic2 from "../Pictures/2.png";
import pic3 from "../Pictures/3.png";
import pic4 from "../Pictures/4.png";
import pic5 from "../Pictures/5.png";
import pic6 from "../Pictures/6.png";

export default function Pictures() {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(null);
  
  const images = [
    { src: pic1, caption: "Mini Golf ⛳ — Oct 28, 2025" },
    { src: pic2, caption: "Photo Booth 📸 — Oct 26, 2025" },
    { src: pic3, caption: "New Shoe 👟 — Oct 24, 2025" },
    { src: pic4, caption: "Birmingham Bar Night 🍹 — Oct 20, 2025" },
    { src: pic5, caption: "Walk at the park ⛲ — Oct 16, 2025" },
    { src: pic6, caption: "Niagara Falls 🌊 — Oct 25, 2025" },

  ];

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
          {images.map((img, index) => (
            <div
              key={index}
              className={`collage-item ${index === 0 ? "main" : ""}`}
              onClick={() => setActiveImage(img)}
            >
              <img src={img.src} alt={`Picture ${index + 1}`} />
            </div>
          ))}

      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeImage.src} alt="" />
            <p className="lightbox-caption">{activeImage.caption}</p>
          </div>
        </div>
      )}
    </div>

      <button className="question-btn button" onClick={() => navigate("/Question")}>
        Question
      </button>
      </div>
      
      <div className="page-indicator">● ● <span>●</span> ● ●</div>
      <FloatingHearts />
    </div>
  );
}
