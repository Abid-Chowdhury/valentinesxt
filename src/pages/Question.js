import { useNavigate } from "react-router-dom";
import HeartSvg from "./HeartSvg";
import { useEffect } from "react";

export default function Question() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Say Yes! 😁";
  }, []);

  return (
    <div className="question-page">
      <button className="page-backward-link page-link" onClick={() => navigate("/Pictures")}> &lt; Pictures</button>
      
      <HeartSvg size={125} color="#F43F5E" beating={true} />

    <div className="subtitle"> ✨ THE BIG QUESTION ✨</div>
    <div className="question-text">Will you be my</div>
    <div className="valentine-text">Valentine?</div>
    <div className="question-buttons">
      <button className="button yes-btn" onClick={() => navigate("/Success")}>Yes 💜</button>
      <button className="no-btn" onClick={() => navigate("/success")}></button>
    </div>

    <div className="quote">
      💖 My Love For You Is Eternal 💖
      </div>
    
      <div className="page-indicator">● ● ● <span>●</span> ●</div>

  </div>

  );
}
