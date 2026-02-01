import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "./FloatingHearts";
import HeartSvg from "./HeartSvg";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Valentine’s Day 2026 💗";
  }, []);

  return (   

    <div className="center-container">



      {/* <div className="big-heart">💗</div> */}
      <HeartSvg size={125} color="#F43F5E" beating={true} />

      <div className="subtitle">VALENTINE'S DAY 2026</div>

      <div className="main-name">NAME</div>

      <div className="and-symbol">&</div>

      <div className="main-name">NAME</div>

      <div className="quote">
        ✨ A Love Story Written In The Stars ✨
      </div>

      <button
        className="button"
        onClick={() => navigate("/stats")}
      >
        Explore Our Story {'>'}
      </button>

      <div className="page-indicator"><span>●</span> ● ● ● ●</div>

      <FloatingHearts />
    </div>
  );
}
