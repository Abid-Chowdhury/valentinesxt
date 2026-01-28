import { useNavigate } from "react-router-dom";
import HeartSvg from "./HeartSvg";
import { useEffect } from "react";
import FloatingHearts from "./FloatingHearts";
import FloatingEmojis from "./FloatingEmojis";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "YAY! 🥳";
  }, []);

  return (
    <div className="success-page">
      {/* <div className="heart">❤️</div> */}
      <HeartSvg size={150} color="#F43F5E" shake beating />

      <h1 className="success-title">Yay! 🎉</h1>
      <div className="success-subtitle">I knew you'd say yes!</div>

      <div className="success-text quote">
        "You have my heart, today, tomorrow, and forever.
      </div>

      <div className="success-text quote">
        Happy Valentine's Day, my love! 💕"
      </div>

      <a href="/valentinesxt" className="start-over-link">Start Over ✨</a>

      <div className="page-indicator">● ● ● ● <span>●</span></div>
      
      <FloatingEmojis />
      <FloatingHearts />

    </div>
  );
}
