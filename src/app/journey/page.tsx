"use client";

import { useState } from "react";

// ViewBox: 0 0 900 500
// lon: -125 to +25 (150° range), lat: 65 to 10 (55° range)
const toX = (lon: number) => ((lon + 125) / 150) * 900;
const toY = (lat: number) => ((65 - lat) / 55) * 500;

const stops = [
  {
    id: "pr",
    city: "Puerto Rico",
    label: "Hometown",
    lat: 18.2, lon: -66.5,
    year: "2002 – 2022",
    role: "Where it all began",
    description: "Born and raised on the island. Puerto Rico shaped my values, my drive, and my identity — it's the reason community always comes first.",
    color: "#EF3340",
    emoji: "🇵🇷",
  },
  {
    id: "atl",
    city: "Atlanta, GA",
    label: "Georgia Tech",
    lat: 33.7, lon: -84.4,
    year: "Aug 2022 – Present",
    role: "B.S. Industrial Engineering · Minor in Computing & Intelligence",
    description: "Home base. Founded BORI, led events for BRASA, chaired SHPE's academic development, and mentored students through their first career steps.",
    color: "#B3A369",
    emoji: "🐝",
  },
  {
    id: "ky",
    city: "Georgetown, KY",
    label: "Toyota TMMK",
    lat: 38.2, lon: -84.6,
    year: "May – Aug 2023",
    role: "Production Engineer Co-op",
    description: "Final Assembly Engineering Logistics. Saved $50K+ through cost reduction projects and authored the safety protocol for AMR certification.",
    color: "#EB0A1E",
    emoji: "🚗",
  },
  {
    id: "tx",
    city: "San Antonio, TX",
    label: "Toyota TMMTX",
    lat: 29.4, lon: -98.5,
    year: "Jan – Apr 2024",
    role: "Production Engineer Co-op",
    description: "Dejima Laser Welding Equipment Group. Freed 96 sq. ft. of production space and cut shift prep times by 160 minutes across 4 production lines.",
    color: "#EB0A1E",
    emoji: "🔧",
  },
  {
    id: "de",
    city: "Vallendar, Germany",
    label: "WHU Exchange",
    lat: 50.4, lon: 7.6,
    year: "Jan – Apr 2025",
    role: "WHU – Otto Beisheim School of Management",
    description: "Exchange semester in Germany. Led the Sideraceros logistics modernization project — applied VRP modeling and Dijkstra's algorithm to cut delivery delays by 25%.",
    color: "#FFCC00",
    emoji: "🇩🇪",
  },
  {
    id: "bos",
    city: "Boston, MA",
    label: "Accenture",
    lat: 42.4, lon: -71.1,
    year: "Jun – Aug 2025",
    role: "Technology Architecture Analyst",
    description: "Testing Team. Supported AMI deployment for a major New England utilities provider — improving service for 1.5M+ customers.",
    color: "#A100FF",
    emoji: "⚡",
  },
  {
    id: "slc",
    city: "Salt Lake City, UT",
    label: "Goldman Sachs",
    lat: 40.8, lon: -111.9,
    year: "Jun – Aug 2026",
    role: "Operations Intern — Global Banking & Markets",
    description: "Coming soon.",
    color: "#6CB0FF",
    emoji: "🏦",
    upcoming: true,
  },
];

// Simplified land masses as SVG polygon point strings
const NORTH_AMERICA = `
  M 0,148 L 20,142 L 52,148 L 60,200 L 48,295 L 80,340 L 158,350
  L 162,358 L 210,328 L 248,338 L 265,362 L 272,358 L 262,318
  L 295,272 L 295,248 L 308,225 L 332,208 L 350,182 L 375,178
  L 390,148 L 370,118 L 340,118 L 310,132 L 285,128 L 268,148
  L 240,145 L 210,148 L 175,142 L 138,142 L 95,142 L 52,148
  L 20,142 Z
`;

const EUROPE = `
  M 680,92 L 695,85 L 720,88 L 740,82 L 762,88 L 780,85
  L 810,90 L 825,100 L 840,98 L 855,108 L 850,118 L 830,122
  L 820,135 L 808,142 L 798,138 L 785,148 L 775,145 L 765,155
  L 750,158 L 738,150 L 725,155 L 715,148 L 705,152 L 692,145
  L 685,132 L 675,125 L 672,115 L 678,105 Z
`;

const CARIBBEAN = `M 340,400 L 348,398 L 355,402 L 360,408 L 352,412 L 344,410 Z`;

// Journey path order
const pathOrder = ["pr", "atl", "ky", "atl", "tx", "atl", "de", "atl", "bos", "atl", "slc"];

function buildPath() {
  return pathOrder.map((id) => {
    const s = stops.find((x) => x.id === id) ?? stops.find((x) => x.id === "atl")!;
    return { x: toX(s.lon), y: toY(s.lat) };
  });
}

function curvePath(points: { x: number; y: number }[]) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x},${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const mx = (prev.x + curr.x) / 2;
    const dist = Math.sqrt((curr.x - prev.x) ** 2 + (curr.y - prev.y) ** 2);
    const curve = dist * 0.25;
    d += ` C ${mx},${prev.y - curve} ${mx},${curr.y - curve} ${curr.x},${curr.y}`;
  }
  return d;
}

const pathPoints = buildPath();
const svgPath = curvePath(pathPoints);

export default function JourneyPage() {
  const [active, setActive] = useState<string | null>(null);
  const activeStop = stops.find((s) => s.id === active);

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <p className="text-sm font-semibold text-[var(--accent)] tracking-wide uppercase mb-4 font-body">
        Journey
      </p>
      <h1 className="font-display text-3xl md:text-4xl leading-tight mb-4">
        From the island to the world.
      </h1>
      <p className="text-[var(--text-secondary)] font-body mb-10 max-w-lg">
        Every stop shaped how I work and who I am. Click a marker to explore.
      </p>

      {/* Map */}
      <div className="relative rounded-2xl overflow-hidden border border-[var(--border)]" style={{ background: "#080e1a" }}>
        <svg
          viewBox="0 0 900 500"
          className="w-full"
          style={{ display: "block" }}
        >
          {/* Grid lines */}
          {[-10, 0, 10, 20, 30, 40, 50, 60].map((lat) => (
            <line key={`lat-${lat}`} x1={0} y1={toY(lat)} x2={900} y2={toY(lat)}
              stroke="rgba(255,255,255,0.04)" strokeWidth={1} />
          ))}
          {[-120, -100, -80, -60, -40, -20, 0, 20].map((lon) => (
            <line key={`lon-${lon}`} x1={toX(lon)} y1={0} x2={toX(lon)} y2={500}
              stroke="rgba(255,255,255,0.04)" strokeWidth={1} />
          ))}

          {/* Land masses */}
          <path d={NORTH_AMERICA} fill="#1a2438" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
          <path d={EUROPE} fill="#1a2438" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
          <path d={CARIBBEAN} fill="#1a2438" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />

          {/* Journey path */}
          <path
            d={svgPath}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={1.5}
            strokeDasharray="6 4"
          />
          {/* Animated path overlay */}
          <path
            d={svgPath}
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth={1.5}
            strokeDasharray="6 4"
            style={{
              strokeDashoffset: 0,
              animation: "dash 6s linear infinite",
            }}
          />

          {/* Markers */}
          {stops.map((stop) => {
            const x = toX(stop.lon);
            const y = toY(stop.lat);
            const isActive = active === stop.id;
            return (
              <g key={stop.id} style={{ cursor: "pointer" }} onClick={() => setActive(isActive ? null : stop.id)}>
                {/* Pulse ring */}
                <circle cx={x} cy={y} r={isActive ? 22 : 14}
                  fill="transparent"
                  stroke={stop.color}
                  strokeWidth={1}
                  opacity={0.3}
                  style={{ transition: "r 0.2s ease" }}
                />
                {/* Dot */}
                <circle cx={x} cy={y} r={isActive ? 8 : 6}
                  fill={stop.upcoming ? "transparent" : stop.color}
                  stroke={stop.color}
                  strokeWidth={2}
                  style={{ transition: "r 0.2s ease", filter: isActive ? `drop-shadow(0 0 6px ${stop.color})` : "none" }}
                />
                {/* Emoji label */}
                <text x={x} y={y - 18} textAnchor="middle"
                  fontSize={isActive ? 18 : 14}
                  style={{ transition: "font-size 0.2s ease", userSelect: "none" }}>
                  {stop.emoji}
                </text>
                {/* City label */}
                <text x={x} y={y + 22} textAnchor="middle"
                  fill="rgba(255,255,255,0.6)"
                  fontSize={9}
                  fontFamily="sans-serif"
                  style={{ userSelect: "none" }}>
                  {stop.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Animated dash keyframe */}
        <style>{`
          @keyframes dash {
            from { stroke-dashoffset: 100; }
            to { stroke-dashoffset: 0; }
          }
        `}</style>
      </div>

      {/* Info card */}
      {activeStop && (
        <div
          key={activeStop.id}
          className="mt-6 p-6 rounded-2xl border"
          style={{
            borderColor: `${activeStop.color}40`,
            background: `${activeStop.color}08`,
          }}
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-2xl">{activeStop.emoji}</span>
                <h2 className="font-display text-xl">{activeStop.city}</h2>
                {activeStop.upcoming && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold font-body"
                    style={{ background: `${activeStop.color}20`, color: activeStop.color }}>
                    Upcoming
                  </span>
                )}
              </div>
              <p className="text-sm font-body font-semibold" style={{ color: activeStop.color }}>
                {activeStop.role}
              </p>
            </div>
            <span className="text-sm text-[var(--text-secondary)] font-body whitespace-nowrap">
              {activeStop.year}
            </span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed mt-4">
            {activeStop.description}
          </p>
        </div>
      )}

      {/* Timeline strip */}
      <div className="mt-10 flex flex-col gap-2">
        <p className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-3 font-body">
          Full Timeline
        </p>
        {stops.map((stop) => (
          <button
            key={stop.id}
            onClick={() => setActive(active === stop.id ? null : stop.id)}
            className="flex items-center gap-4 p-3 rounded-xl text-left transition-colors hover:bg-[var(--bg-secondary)]"
            style={{ border: active === stop.id ? `1px solid ${stop.color}40` : "1px solid transparent" }}
          >
            <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: stop.color }} />
            <span className="text-sm font-semibold font-body text-[var(--text-primary)] w-36 shrink-0">
              {stop.city}
            </span>
            <span className="text-sm font-body text-[var(--text-secondary)] flex-1">{stop.role}</span>
            <span className="text-xs font-body text-[var(--text-secondary)] whitespace-nowrap">{stop.year}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
