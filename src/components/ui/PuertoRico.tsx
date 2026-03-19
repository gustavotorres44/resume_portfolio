// Island outline derived from actual geographic coordinates (GeoJSON barrios data)
// ViewBox: 500×178, matching real lon/lat proportions of Puerto Rico
const ISLAND_PATH =
  "M 26,7 L 63,4 L 105,4 L 161,7 L 184,7 L 246,10 L 303,13 " +
  "L 337,7 L 348,24 L 373,13 L 393,13 L 430,16 L 464,16 " +
  "L 472,33 L 472,89 L 467,131 L 458,151 " +
  "L 396,151 L 331,154 L 274,162 L 241,165 L 184,157 " +
  "L 133,160 L 99,160 L 54,154 L 26,157 L 23,162 " +
  "L 0,123 L 0,75 L 9,33 Z";

// Equilateral triangle with base = full height (178)
const TRIANGLE = "0,0 0,178 154,89";

// 5-pointed star centred at (52, 89), outer r=22, inner r=9
const STAR =
  "52,67 57.3,81.7 72.9,82.2 60.6,91.8 64.9,106.8 " +
  "52,98 39.1,106.8 43.4,91.8 31.1,82.2 46.7,81.7";

export default function PuertoRico() {
  const stripeH = 178 / 5; // 35.6 px per stripe

  return (
    <svg
      viewBox="0 0 500 178"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xs drop-shadow-md"
      aria-label="Puerto Rico silhouette filled with flag"
    >
      <defs>
        <clipPath id="pr-clip">
          <path d={ISLAND_PATH} />
        </clipPath>
      </defs>

      {/* Flag stripes clipped to island shape */}
      <g clipPath="url(#pr-clip)">
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={0}
            y={i * stripeH}
            width={500}
            height={stripeH}
            fill={i % 2 === 0 ? "#EF3340" : "#FFFFFF"}
          />
        ))}

        {/* Blue triangle */}
        <polygon points={TRIANGLE} fill="#002868" />

        {/* White star */}
        <polygon points={STAR} fill="#FFFFFF" />
      </g>

      {/* Island border */}
      <path d={ISLAND_PATH} fill="none" stroke="#00000020" strokeWidth="1.5" />
    </svg>
  );
}
