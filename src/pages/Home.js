import { useNavigate } from "react-router-dom";
import FloatingHearts from "./FloatingHearts";

export default function Home() {
  const navigate = useNavigate();

  return (   

    <div className="center-container">



      <div className="big-heart">💗</div>

      <div className="subtitle">VALENTINE'S DAY 2026</div>

      <div className="main-name">NAME</div>

      <div className="and-symbol">&</div>

      <div className="main-name">NAME</div>

      <div className="quote">
        "A love story written in the stars"
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
