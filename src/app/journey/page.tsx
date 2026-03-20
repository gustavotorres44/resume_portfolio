"use client";

import { useState, useRef, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";
const US_STATES_URL = "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json";
const OVERVIEW = { center: [-52, 36] as [number, number], scale: 290 };

const stops = [
  {
    id: "pr",
    city: "Puerto Rico",
    label: "Hometown",
    countryId: "630",
    coordinates: [-66.5, 18.2] as [number, number],
    zoom: { center: [-66.5, 18.2] as [number, number], scale: 1800 },
    year: "2004 – 2022",
    role: "Where it all began",
    description: "Born and raised on the island. Puerto Rico shaped my values, my drive, and my identity. It's the reason community always comes first.",
    color: "#EF3340",
    emoji: "🇵🇷",
    image: "/images/oldsju.jpg",
  },
  {
    id: "atl",
    city: "Atlanta, GA",
    label: "Georgia Tech",
    stateName: "Georgia",
    coordinates: [-84.4, 33.7] as [number, number],
    zoom: { center: [-84.4, 33.7] as [number, number], scale: 1200 },
    year: "Aug 2022 – Present",
    role: "B.S. Industrial Engineering · Minor in Computing & Intelligence",
    description: "Home base. Founded BORI, led events for BRASA, chaired SHPE's academic development, and mentored students through their first career steps. As well as conducting research with Georgia Tech's Medical AI group and co-founding InternNest.",
    color: "#B3A369",
    emoji: "🐝",
    image: "/images/gatech.jpg",
  },
  {
    id: "ky",
    city: "Georgetown, KY",
    label: "Toyota TMMK",
    stateName: "Kentucky",
    coordinates: [-84.6, 38.2] as [number, number],
    zoom: { center: [-84.6, 38.2] as [number, number], scale: 1200 },
    year: "May – Aug 2023",
    role: "Production Engineer Co-op",
    description: "Final Assembly Engineering Logistics. Saved $50K+ through cost reduction projects and authored the safety protocol for AMR certification.",
    color: "#EB0A1E",
    emoji: "🚗",
    image: "/images/tmmk.jpg",
  },
  {
    id: "tx",
    city: "San Antonio, TX",
    label: "Toyota TMMTX",
    stateName: "Texas",
    coordinates: [-98.5, 29.4] as [number, number],
    zoom: { center: [-98.5, 29.4] as [number, number], scale: 1200 },
    year: "Jan – Apr 2024",
    role: "Production Engineer Co-op",
    description: "Dejima Laser Welding Equipment Group. Freed 96 sq. ft. of production space and cut shift prep times by 160 minutes across 4 production lines.",
    color: "#EB0A1E",
    emoji: "🔧",
    image: "/images/tmmtx.jpg",
  },
  {
    id: "de",
    city: "Vallendar, Germany",
    label: "WHU Exchange",
    countryId: "276",
    coordinates: [7.6, 50.4] as [number, number],
    zoom: { center: [7.6, 50.4] as [number, number], scale: 1400 },
    year: "Jan – Apr 2025",
    role: "WHU – Otto Beisheim School of Management",
    description: "Exchange semester in Germany. Led the Sideraceros logistics modernization project, applying VRP modeling and Dijkstra's algorithm to cut delivery delays by 25%.",
    color: "#FFCC00",
    emoji: "🇩🇪",
    image: "/images/whulocation.jpg",
  },
  {
    id: "bos",
    city: "Boston, MA",
    label: "Accenture",
    stateName: "Massachusetts",
    coordinates: [-71.1, 42.4] as [number, number],
    zoom: { center: [-71.1, 42.4] as [number, number], scale: 1400 },
    year: "Jun – Aug 2025",
    role: "Technology Architecture Analyst",
    description: "Testing Team. Supported AMI deployment for a major New England utilities provider, improving service for 1.5M+ customers.",
    color: "#A100FF",
    emoji: "⚡",
    image: "/images/acc.jpg",
  },
  {
    id: "slc",
    city: "Salt Lake City, UT",
    label: "Goldman Sachs",
    stateName: "Utah",
    coordinates: [-111.9, 40.8] as [number, number],
    zoom: { center: [-111.9, 40.8] as [number, number], scale: 1200 },
    year: "Jun – Aug 2026",
    role: "Operations Intern, Global Banking & Markets",
    description: "Coming soon.",
    color: "#6CB0FF",
    emoji: "🏦",
    upcoming: true,
    image: "/images/goldman.jpg",
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

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function JourneyPage() {
  const [active, setActive] = useState<string | null>("pr");
  const [zoomed, setZoomed] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Animated projection state
  const [projCenter, setProjCenter] = useState<[number, number]>(OVERVIEW.center);
  const [projScale, setProjScale] = useState(OVERVIEW.scale);
  const centerRef = useRef<[number, number]>(OVERVIEW.center);
  const scaleRef = useRef(OVERVIEW.scale);
  const animRef = useRef<number | null>(null);

  const activeStop = stops.find((s) => s.id === active);

  useEffect(() => {
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  function animateTo(targetCenter: [number, number], targetScale: number) {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    const startCenter = centerRef.current;
    const startScale = scaleRef.current;
    const startTime = performance.now();
    const duration = 900;

    function frame(now: number) {
      const t = Math.min((now - startTime) / duration, 1);
      const e = easeInOutCubic(t);
      const newCenter: [number, number] = [
        startCenter[0] + (targetCenter[0] - startCenter[0]) * e,
        startCenter[1] + (targetCenter[1] - startCenter[1]) * e,
      ];
      const newScale = startScale + (targetScale - startScale) * e;
      centerRef.current = newCenter;
      scaleRef.current = newScale;
      setProjCenter([...newCenter]);
      setProjScale(newScale);
      if (t < 1) animRef.current = requestAnimationFrame(frame);
    }
    animRef.current = requestAnimationFrame(frame);
  }

  function handleSelect(id: string) {
    const stop = stops.find((s) => s.id === id)!;
    setActive(id);
    setZoomed(true);
    animateTo(stop.zoom.center, stop.zoom.scale);
  }

  function zoomOut() {
    setZoomed(false);
    animateTo(OVERVIEW.center, OVERVIEW.scale);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-sm font-semibold text-[var(--accent)] tracking-wide uppercase mb-4 font-body">
        Journey
      </p>
      <h1 className="font-display text-3xl md:text-4xl leading-tight mb-4">
        From the island to the world.
      </h1>
      <p className="text-[var(--text-secondary)] font-body mb-10 max-w-lg">
        Every stop shaped how I work and who I am. Click a marker or stop to zoom in.
      </p>

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
                    {"upcoming" in activeStop && activeStop.upcoming && (
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-semibold font-body"
                        style={{ background: `${activeStop.color}20`, color: activeStop.color }}
                      >
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
          <div
            className="rounded-2xl overflow-hidden border border-[var(--border)] relative"
            style={{ background: "var(--bg-primary)" }}
          >
            {zoomed && (
              <button
                onClick={zoomOut}
                className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-lg text-xs font-semibold font-body bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors shadow-sm"
              >
                ← Full map
              </button>
            )}

            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ center: projCenter, scale: projScale }}
              style={{ width: "100%", height: "auto", background: "var(--bg-primary)" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }: { geographies: { rsmKey: string; id?: string | number; [key: string]: unknown }[] }) =>
                  geographies.map((geo) => {
                    const isHighlighted = "countryId" in (activeStop ?? {}) && (activeStop as { countryId?: string }).countryId === String(geo.id);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isHighlighted ? `${activeStop!.color}30` : (isDark ? "#2a2a2a" : "#c8cdd5")}
                        stroke={isHighlighted ? activeStop!.color : (isDark ? "#3a3a3a" : "#a0a8b4")}
                        strokeWidth={isHighlighted ? 1.5 : 0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              <Geographies geography={US_STATES_URL}>
                {({ geographies }: { geographies: { rsmKey: string; properties: { name: string }; [key: string]: unknown }[] }) =>
                  geographies.map((geo) => {
                    const isHighlighted = "stateName" in (activeStop ?? {}) && (activeStop as { stateName?: string }).stateName === geo.properties.name;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isHighlighted ? `${activeStop!.color}25` : "transparent"}
                        stroke={isHighlighted ? activeStop!.color : (isDark ? "#3a3a3a" : "#a0a8b4")}
                        strokeWidth={isHighlighted ? 1.5 : 0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {!zoomed && journeyLines.map((line, i) => (
                <Line
                  key={i}
                  from={line[0]}
                  to={line[1]}
                  stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"}
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
                    onClick={() => handleSelect(stop.id)}
                  >
                    {/* Image popup on map */}
                    {isActive && zoomed && stop.image && (
                      <foreignObject x={16} y={-135} width={170} height={118} style={{ overflow: "visible" }}>
                        <img
                          src={stop.image}
                          alt={stop.city}
                          style={{
                            width: "165px",
                            height: "112px",
                            objectFit: "cover",
                            borderRadius: "10px",
                            border: "2.5px solid white",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                            display: "block",
                            pointerEvents: "none",
                          }}
                        />
                      </foreignObject>
                    )}

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
                      fill={"upcoming" in stop && stop.upcoming ? `${stop.color}50` : stop.color}
                      stroke={stop.color}
                      strokeWidth={1.5}
                      style={{
                        cursor: "pointer",
                        filter: isActive ? `drop-shadow(0 0 5px ${stop.color})` : "none",
                      }}
                    />

                    {!zoomed && (
                      <>
                        <text
                          textAnchor={stop.id === "atl" ? "start" : "middle"}
                          x={stop.id === "atl" ? 12 : 0}
                          y={stop.id === "atl" ? 4 : -20}
                          style={{ fontSize: 10, fill: "var(--text-secondary)", fontFamily: "sans-serif", userSelect: "none", pointerEvents: "none" }}
                        >
                          {stop.label}
                        </text>
                        <text
                          textAnchor={stop.id === "atl" ? "start" : "middle"}
                          x={stop.id === "atl" ? 12 : 0}
                          y={stop.id === "atl" ? -6 : -30}
                          style={{ fontSize: 12, userSelect: "none", pointerEvents: "none" }}
                        >
                          {stop.emoji}
                        </text>
                      </>
                    )}

                    {zoomed && isActive && (
                      <>
                        <text
                          textAnchor="middle"
                          x={0}
                          y={22}
                          style={{ fontSize: 13, fontWeight: "bold", fill: "var(--text-primary)", fontFamily: "sans-serif", userSelect: "none", pointerEvents: "none" }}
                        >
                          {stop.city}
                        </text>
                        <text
                          textAnchor="middle"
                          x={0}
                          y={36}
                          style={{ fontSize: 11, fill: "var(--text-secondary)", fontFamily: "sans-serif", userSelect: "none", pointerEvents: "none" }}
                        >
                          {stop.label}
                        </text>
                      </>
                    )}
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
              onClick={() => handleSelect(stop.id)}
              className="flex items-start gap-3 p-3 rounded-xl text-left transition-colors hover:bg-[var(--bg-secondary)] w-full"
              style={{
                border: active === stop.id ? `1px solid ${stop.color}50` : "1px solid transparent",
                background: active === stop.id ? `${stop.color}08` : "transparent",
              }}
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
