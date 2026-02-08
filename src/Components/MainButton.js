import React, { useState } from "react";

export default function MainButton({ text, type = "default", onClick }) {
  const [hover, setHover] = useState(false);

  // Base button style
  const baseStyle = {
    display: "block",
    padding: "14px 36px",
    borderRadius: "30px",
    border: "none",
    background: hover
      ? "linear-gradient(to bottom right, var(--light-red), var(--pink))"
      : "linear-gradient(to bottom right, var(--dark-red), var(--pink))",
    color: "var(--white)",
    fontWeight: "bold",
    cursor: "pointer",
    margin: type === "yes" ? "0" : "24px auto",
    fontSize: "1rem",
    width: type === "yes" || type === "no" ? "140px" : "auto",
    transition: "all 0.3s ease",
    transform: hover ? "scale(1.05)" : "scale(1)"
  };

  // Special text replacement for "no" button on hover
  const displayText =
    type === "no" && hover ? "Yes 💜" : type === "no" ? "No" : text;

  return (
    <button
      style={baseStyle}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {displayText}
    </button>
  );
}
