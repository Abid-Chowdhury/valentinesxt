import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="heart">❤️</div>

      <h1 className="success-title">Yay!</h1>
      <div className="success-subtitle">I knew you'd say yes!</div>

      <div className="success-text quote">
        "You have my heart, today, tomorrow, and forever
      </div>

      <div className="success-text quote">
        Happy Valentine's Day, my love! 💕"
      </div>

      <a href="/" className="start-over-link">Start Over ✨</a>

      <div className="page-indicator">● ● ● ● <span>●</span></div>

    </div>
  );
}
