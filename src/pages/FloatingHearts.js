import { useEffect, useState, useRef } from "react";
import HeartSvg from "./HeartSvg";
import "./FloatingHearts.css";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);
  const intervalRef = useRef(null);
  const counterRef = useRef(0);

  useEffect(() => {
    const start = () => {
      if (intervalRef.current) return;

      intervalRef.current = setInterval(() => {
        const id = counterRef.current++;

        const duration = 7;

        setHearts((prev) => [
          ...prev,
          {
            id,
            left: Math.random() * 100,
            size: Math.random() * 10 + 25,
          }
        ]);

        setTimeout(() => {
          setHearts((prev) => prev.filter((h) => h.id !== id));
        }, duration * 1000);
      }, 1000);
    };

    const stop = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };

    // Start initially
    start();

    // Pause when tab is inactive
    const handleVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div className="hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`
          }}
        >
          <HeartSvg size={heart.size} color="#FB7B8E" />
        </div>
      ))}
    </div>
  );
}
