import { useEffect, useState, useRef } from "react";
import "./FloatingEmojis.css";

const EMOJIS = ["🎉", "🎊", "🥳"];

export default function FloatingEmojis() {
  const [emojis, setEmojis] = useState([]);
  const intervalRef = useRef(0);
  const counterRef = useRef(0);

  useEffect(() => {
    const start = () => {
      if (intervalRef.current) return;

      intervalRef.current = setInterval(() => {
        const id = counterRef.current++;

        // Random emoji
        const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

        // Random horizontal position
        const left = Math.random() * 20 + 40; // 40% to 60%

        // Random font size
        const size = Math.random() * 24 + 24; // 24px–48px

        setEmojis((prev) => [...prev, { id, emoji, left, size }]);

        // Remove after 1.2 seconds (fast drop)
        setTimeout(() => {
          setEmojis((prev) => prev.filter((e) => e.id !== id));
        }, 1200);
      }, 50); // new emoji every 0.05s
    };

    const stop = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };

    // Start the effect
    start();

    // Stop it after 2 seconds
    const stopTimeout = setTimeout(() => {
      stop();
    }, 2000);

    // Pause when tab inactive
    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      stop();
      clearTimeout(stopTimeout);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div className="emojis-container">
      {emojis.map((e) => (
        <span
          key={e.id}
          className="emoji"
          style={{
            top: "-50px",
            left: `${e.left}%`,
            fontSize: `${e.size}px`,
          }}
        >
          {e.emoji}
        </span>
      ))}
    </div>
  );
}
