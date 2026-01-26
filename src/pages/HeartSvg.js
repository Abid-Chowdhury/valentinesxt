import React from "react";

export default function HeartSvg({ size = 20, color = "#FF69B4", beating = false }) {
  return (
    <svg
      width={size}
      height={size}
          viewBox="0 0 64 64"
    // viewBox={`0 0 ${64 + 5 * 2} ${64 + 5 * 2}`} // increase viewBox for padding

      xmlns="http://www.w3.org/2000/svg"
      style={{
        transformOrigin: "center",
          animation: beating ? "heartbeat 1.6s infinite" : "none",
        //   margin: "25px 0",
      }}
    >
      <path
        fill={color}
        style={{
          filter: beating ? "drop-shadow(0 0 3px #FF69B4)" : "none",
          transition: "filter 0.3s ease-in-out",
        }}
        d="M47.5 6
           C41 6 36.5 10 32 14.5
           C27.5 10 23 6 16.5 6
           C9 6 4 12 4 19.5
           C4 33 32 54 32 54
           C32 54 60 33 60 19.5
           C60 12 55 6 47.5 6Z"
      />
          <style>
        {`
          @keyframes heartbeat {
            0%, 100% {
              transform: scale(1);
              filter: drop-shadow(0 0 3px #FB7B8E);
            }
            20% {
              transform: scale(1.2);
              filter: drop-shadow(0 0 3px #fff);
            }
            40% {
              transform: scale(1.1);
              filter: drop-shadow(0 0 3px #FB7B8E);
            }
            60% {
              transform: scale(1.2);
              filter: drop-shadow(0 0 3px #fff);
            }
            80% {
              transform: scale(1);
              filter: drop-shadow(0 0 3px #FB7B8E);
            }
          }
        `}
      </style>
    </svg>
  );
}
