import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "../Components/FloatingHearts";
import HeartSvg from "../Components/HeartSvg";
import MainButton from "../Components/MainButton";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Valentine’s Day 2026 💗";
  }, []);

  return (   

    <div className="center-container">

      <HeartSvg size={125} color="#F43F5E" beating={true} />
      
      <div className="subtitle">VALENTINE'S DAY 2026</div>

      <div className="main-name">NAME</div>

      <div className="and-symbol">&</div>

      <div className="main-name">NAME</div>

      <div className="quote">
        ✨ A Love Story Written In The Stars ✨
      </div>

      <MainButton text="Explore Our Story >" onClick={() => navigate("/stats")}></MainButton>

      <div className="page-indicator"><span>●</span> ● ● ● ●</div>

      <FloatingHearts />
    </div>

  );
}
