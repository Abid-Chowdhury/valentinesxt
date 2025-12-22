import { useNavigate } from "react-router-dom";

export default function Pictures() {
  const navigate = useNavigate();

  return (
    <div className="page pictures-page">
      <h1 className="pictures-title">Pictures</h1>

      <div className="grid-collage">
        {Array.from({ length: 16 }).map((_, index) => (
          <img
            key={index}
            src="https://via.placeholder.com/400"
            alt={`memory ${index + 1}`}
            className={`grid-img img-${index + 1}`}
          />
        ))}
      </div>

      <button
        className="valentine-btn bottom-btn"
        onClick={() => navigate("/stats")}
      >
        Stats
      </button>
    </div>
  );
}
