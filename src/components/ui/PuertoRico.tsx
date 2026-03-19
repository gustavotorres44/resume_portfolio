export default function PuertoRico() {
  const silhouette = "M 20,42 L 28,30 L 45,22 L 72,17 L 108,14 L 145,13 L 182,15 L 218,20 L 248,26 L 268,35 L 278,48 L 276,63 L 266,76 L 245,86 L 215,93 L 178,97 L 140,98 L 102,96 L 68,90 L 40,80 L 22,67 L 14,54 Z";

  return (
    <svg
      viewBox="0 0 292 112"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xs drop-shadow-md"
      aria-label="Puerto Rico silhouette with flag"
    >
      <defs>
        <clipPath id="pr-clip">
          <path d={silhouette} />
        </clipPath>
      </defs>

      {/* Flag stripes inside the silhouette */}
      <g clipPath="url(#pr-clip)">
        {/* 5 horizontal stripes: red, white, red, white, red */}
        <rect x="0" y="0"    width="292" height="22.4" fill="#EF3340" />
        <rect x="0" y="22.4" width="292" height="22.4" fill="#FFFFFF" />
        <rect x="0" y="44.8" width="292" height="22.4" fill="#EF3340" />
        <rect x="0" y="67.2" width="292" height="22.4" fill="#FFFFFF" />
        <rect x="0" y="89.6" width="292" height="22.4" fill="#EF3340" />

        {/* Blue triangle */}
        <polygon points="0,0 0,112 97,56" fill="#002868" />

        {/* White star */}
        <polygon
          points="48.5,43.5 51.5,52.5 61,52.5 53.5,58 56.5,67 48.5,61.5 40.5,67 43.5,58 36,52.5 45.5,52.5"
          fill="#FFFFFF"
        />
      </g>

      {/* Silhouette border */}
      <path d={silhouette} fill="none" stroke="#00000022" strokeWidth="1.5" />
    </svg>
  );
}
