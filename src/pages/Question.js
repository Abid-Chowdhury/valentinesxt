import { useNavigate } from "react-router-dom";

export default function Question() {
  const navigate = useNavigate();

  return (
    <div className="question-page">
      
    <a href="/Pictures" className="page-backward-link page-link"> &lt; Pictures</a>
      
    <div className="heart">❤️</div>

    <h1 className="question-title">The big question</h1>
    <div className="question-text">Will you be my</div>
    <div className="question-highlight">Valentine?</div>
    <div className="question-buttons">
      <button className="button yes-btn" onClick={() => navigate("/Success")}>Yes 💕</button>
      <button className="shy-btn" onClick={() => navigate("/success")}>Just say yes!</button>
    </div>

    <div className="shy-text quote">
      The no button is a bit shy... just like my love for you isnt
      </div>
    
      <div className="page-indicator">● ● ● <span>●</span> ●</div>

  </div>

  );
}
