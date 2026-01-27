import React from "react";

export default function HeartSvg({
  size = 20,
  color = "#FF69B4",
  beating = false,
  shake = false,
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        animation: shake ? "shake 0.4s ease-in-out 1" : "none",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transformOrigin: "center",
          animation: beating ? "heartbeat 1.6s ease-in-out infinite" : "none",
        }}
      >
        <path
          fill={color}
          d="M47.5 6
             C41 6 36.5 10 32 14.5
             C27.5 10 23 6 16.5 6
             C9 6 4 12 4 19.5
             C4 33 32 54 32 54
             C32 54 60 33 60 19.5
             C60 12 55 6 47.5 6Z"
        />
      </svg>

      <style>
        {`
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            20% { transform: scale(1.2); }
            40% { transform: scale(1.1); }
            60% { transform: scale(1.2); }
            80% { transform: scale(1); }
          }

          @keyframes shake {
            0%   { transform: translateX(0) rotate(0deg); }
            25%  { transform: translateX(-2px) rotate(-3deg); }
            50%  { transform: translateX(2px) rotate(3deg); }
            75%  { transform: translateX(-1px) rotate(-2deg); }
            100% { transform: translateX(0) rotate(0deg); }
          }
        `}
      </style>
    </div>
  );
}
