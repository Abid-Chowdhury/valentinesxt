import { useNavigate } from "react-router-dom";
import HeartSvg from "../Components/HeartSvg";
import { useEffect } from "react";
import FloatingHearts from "../Components/FloatingHearts";
import FloatingEmojis from "../Components/FloatingEmojis";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "YAY! 🥳";
  }, []);

  return (
    <div className="success-page">
      <HeartSvg size={150} color="#F43F5E" shake beating />

      <h1 className="success-title">Yay! 🎉</h1>
      <div className="success-subtitle">I knew you'd say yes!</div>

      <div className="quote">
        💕 You Have My Heart, Today, Tomorrow, And Forever.
      </div>

      <div className="quote">
        Happy Valentine's Day, my love! 💕
      </div>

      <a href="/valentinesxt" className="start-over-link">Start Over ✨</a>

      <div className="page-indicator">● ● ● ● <span>●</span></div>
      
      <FloatingEmojis />
      <FloatingHearts />

    </div>
  );
}
