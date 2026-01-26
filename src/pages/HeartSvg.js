export default function HeartSvg({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FB7B8E"
        d="M47.5 6
           C41 6 36.5 10 32 14.5
           C27.5 10 23 6 16.5 6
           C9 6 4 12 4 19.5
           C4 33 32 54 32 54
           C32 54 60 33 60 19.5
           C60 12 55 6 47.5 6Z"
      />
    </svg>
  );
}
