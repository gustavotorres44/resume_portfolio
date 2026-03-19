"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const stops = [
  {
    id: "pr",
    city: "Puerto Rico",
    label: "Hometown",
    coordinates: [-66.5, 18.2] as [number, number],
    year: "2004 – 2022",
    role: "Where it all began",
    description: "Born and raised on the island. Puerto Rico shaped my values, my drive, and my identity — it's the reason community always comes first.",
    color: "#EF3340",
    emoji: "🇵🇷",
  },
  {
    id: "atl",
    city: "Atlanta, GA",
    label: "Georgia Tech",
    coordinates: [-84.4, 33.7] as [number, number],
    year: "Aug 2022 – Present",
    role: "B.S. Industrial Engineering · Minor in Computing & Intelligence",
    description: "Home base. Founded BORI, led events for BRASA, chaired SHPE's academic development, and mentored students through their first career steps. As well as conducting research with Georgia Tech's Medical AI group and co-founding InternNest.",
    color: "#B3A369",
    emoji: "🐝",
  },
  {
    id: "ky",
    city: "Georgetown, KY",
    label: "Toyota TMMK",
    coordinates: [-84.6, 38.2] as [number, number],
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
    coordinates: [-98.5, 29.4] as [number, number],
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
    coordinates: [7.6, 50.4] as [number, number],
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
    coordinates: [-71.1, 42.4] as [number, number],
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
    coordinates: [-111.9, 40.8] as [number, number],
    year: "Jun – Aug 2026",
    role: "Operations Intern — Global Banking & Markets",
    description: "Coming soon.",
    color: "#6CB0FF",
    emoji: "🏦",
    upcoming: true,
  },
];

const journeyLines: [[number, number], [number, number]][] = [
  [[-66.5, 18.2], [-84.4, 33.7]],
  [[-84.4, 33.7], [-84.6, 38.2]],
  [[-84.6, 38.2], [-84.4, 33.7]],
  [[-84.4, 33.7], [-98.5, 29.4]],
  [[-98.5, 29.4], [-84.4, 33.7]],
  [[-84.4, 33.7], [7.6, 50.4]],
  [[7.6, 50.4], [-84.4, 33.7]],
  [[-84.4, 33.7], [-71.1, 42.4]],
  [[-71.1, 42.4], [-84.4, 33.7]],
  [[-84.4, 33.7], [-111.9, 40.8]],
];

export default function JourneyPage() {
  const [active, setActive] = useState<string | null>("pr");
  const activeStop = stops.find((s) => s.id === active);

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-sm font-semibold text-[var(--accent)] tracking-wide uppercase mb-4 font-body">
        Journey
      </p>
      <h1 className="font-display text-3xl md:text-4xl leading-tight mb-4">
        From the island to the world.
      </h1>
      <p className="text-[var(--text-secondary)] font-body mb-10 max-w-lg">
        Every stop shaped how I work and who I am. Click a marker or a stop to explore.
      </p>

      {/* Three-column layout */}
      <div className="flex gap-6 flex-col lg:flex-row items-start">

        {/* Left: info card */}
        <div className="w-full lg:w-44 shrink-0">
          {activeStop ? (
            <div
              key={activeStop.id}
              className="p-5 rounded-2xl border"
              style={{ borderColor: `${activeStop.color}40`, background: `${activeStop.color}08` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{activeStop.emoji}</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-display text-base">{activeStop.city}</h2>
                    {activeStop.upcoming && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold font-body"
                        style={{ background: `${activeStop.color}20`, color: activeStop.color }}>
                        Upcoming
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-body font-semibold mt-0.5" style={{ color: activeStop.color }}>
                    {activeStop.year}
                  </p>
                </div>
              </div>
              <p className="text-xs font-body font-semibold text-[var(--text-primary)] mb-2">
                {activeStop.role}
              </p>
              <p className="text-xs text-[var(--text-secondary)] font-body leading-relaxed">
                {activeStop.description}
              </p>
            </div>
          ) : (
            <div className="p-5 rounded-2xl border border-[var(--border)] border-dashed flex items-center justify-center h-32">
              <p className="text-xs text-[var(--text-secondary)] font-body text-center">
                Click a marker or stop to see details
              </p>
            </div>
          )}
        </div>

        {/* Center: map */}
        <div className="flex-1 min-w-0">
          <div className="rounded-2xl overflow-hidden border border-[var(--border)]" style={{ background: "var(--bg-primary)" }}>
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ center: [-52, 36], scale: 290 }}
              style={{ width: "100%", height: "auto", background: "var(--bg-primary)" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }: { geographies: { rsmKey: string; [key: string]: unknown }[] }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#c8cdd5"
                      stroke="#a0a8b4"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {journeyLines.map((line, i) => (
                <Line
                  key={i}
                  from={line[0]}
                  to={line[1]}
                  stroke="rgba(0,0,0,0.15)"
                  strokeWidth={1}
                  strokeDasharray="5 4"
                  strokeLinecap="round"
                />
              ))}

              {stops.map((stop) => {
                const isActive = active === stop.id;
                return (
                  <Marker
                    key={stop.id}
                    coordinates={stop.coordinates}
                    onClick={() => setActive(isActive ? null : stop.id)}
                  >
                    <circle
                      r={isActive ? 14 : 9}
                      fill="transparent"
                      stroke={stop.color}
                      strokeWidth={1}
                      opacity={0.4}
                      style={{ cursor: "pointer" }}
                    />
                    <circle
                      r={isActive ? 6 : 4}
                      fill={stop.upcoming ? `${stop.color}50` : stop.color}
                      stroke={stop.color}
                      strokeWidth={1.5}
                      style={{
                        cursor: "pointer",
                        filter: isActive ? `drop-shadow(0 0 5px ${stop.color})` : "none",
                      }}
                    />
                    <text
                      textAnchor={stop.id === "atl" ? "start" : "middle"}
                      x={stop.id === "atl" ? 12 : 0}
                      y={stop.id === "atl" ? 4 : -20}
                      style={{
                        fontSize: 10,
                        fill: "var(--text-secondary)",
                        fontFamily: "sans-serif",
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    >
                      {stop.label}
                    </text>
                    <text
                      textAnchor={stop.id === "atl" ? "start" : "middle"}
                      x={stop.id === "atl" ? 12 : 0}
                      y={stop.id === "atl" ? -6 : -30}
                      style={{
                        fontSize: 12,
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    >
                      {stop.emoji}
                    </text>
                  </Marker>
                );
              })}
            </ComposableMap>
          </div>

        </div>

        {/* Sidebar timeline */}
        <div className="w-full lg:w-48 shrink-0 flex flex-col gap-1">
          <p className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-3 font-body">
            Timeline
          </p>
          {stops.map((stop) => (
            <button
              key={stop.id}
              onClick={() => setActive(active === stop.id ? null : stop.id)}
              className="flex items-start gap-3 p-3 rounded-xl text-left transition-colors hover:bg-[var(--bg-secondary)] w-full"
              style={{ border: active === stop.id ? `1px solid ${stop.color}50` : "1px solid transparent",
                background: active === stop.id ? `${stop.color}08` : "transparent" }}
            >
              <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: stop.color }} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold font-body text-[var(--text-primary)] truncate">{stop.city}</p>
                <p className="text-xs font-body text-[var(--text-secondary)] truncate">{stop.label}</p>
                <p className="text-xs font-body mt-0.5" style={{ color: `${stop.color}99` }}>{stop.year}</p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
