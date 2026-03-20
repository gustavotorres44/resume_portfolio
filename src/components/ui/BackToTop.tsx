"use client";

import { useEffect, useRef, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const labelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevVisible = useRef(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (visible && !prevVisible.current) {
      setShowLabel(true);
      if (labelTimer.current) clearTimeout(labelTimer.current);
      labelTimer.current = setTimeout(() => setShowLabel(false), 3000);
    }
    prevVisible.current = visible;
    return () => { if (labelTimer.current) clearTimeout(labelTimer.current); };
  }, [visible]);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed top-20 right-6 z-50 flex items-center gap-2 pl-3 pr-3 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors shadow-sm"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12V4M4 8l4-4 4 4" />
      </svg>
      <span
        className="text-xs font-semibold font-body overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap"
        style={{ maxWidth: showLabel ? "80px" : "0px", opacity: showLabel ? 1 : 0 }}
      >
        Back to top
      </span>
    </button>
  );
}
