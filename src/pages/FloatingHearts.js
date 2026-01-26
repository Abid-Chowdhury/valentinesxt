import { useEffect, useState } from "react";
import "./FloatingHearts.css";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    let counter = 0;

    const interval = setInterval(() => {
      const duration = 7; // fixed for safety
      const id = counter++; // ✅ no crypto, no Date.now

      setHearts((prev) => [
        ...prev,
        {
          id,
          left: Math.random() * 100,
          size: Math.random() * 25 + 8
        }
      ]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, duration * 1000);
    }, 600); // fewer hearts

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hearts-container">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
