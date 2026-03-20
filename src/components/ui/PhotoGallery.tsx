"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export function PhotoGallery({ images, title }: { images: string[]; title: string }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const open = (i: number) => { setActiveIndex(i); setModalOpen(true); };
  const close = () => setModalOpen(false);
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    if (!modalOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modalOpen]);

  const [a, b, c] = images;
  const extra = images.length - 3;

  const modal = (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999, backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
      onClick={close}
    >
      <div
        style={{ backgroundColor: "var(--bg-primary)", borderRadius: "1rem", border: "1px solid var(--border)", boxShadow: "0 25px 50px rgba(0,0,0,0.3)", width: "100%", maxWidth: "640px", overflow: "hidden" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.75rem 1.25rem", borderBottom: "1px solid var(--border)" }}>
          <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-secondary)" }}>
            {activeIndex + 1} / {images.length}
          </span>
          <button
            onClick={close}
            style={{ width: "2rem", height: "2rem", borderRadius: "9999px", background: "none", border: "none", cursor: "pointer", fontSize: "1.25rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            ✕
          </button>
        </div>

        {/* Image */}
        <div style={{ backgroundColor: "var(--bg-secondary)", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", padding: "1rem" }}>
          <button
            onClick={prev}
            style={{ flexShrink: 0, width: "2rem", height: "2rem", borderRadius: "9999px", background: "var(--bg-primary)", border: "1px solid var(--border)", cursor: "pointer", fontSize: "1.25rem", color: "var(--text-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            ‹
          </button>
          <img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`Photo ${activeIndex + 1}`}
            style={{ maxWidth: "calc(100% - 6rem)", maxHeight: "60vh", objectFit: "contain", borderRadius: "0.5rem", display: "block" }}
          />
          <button
            onClick={next}
            style={{ flexShrink: 0, width: "2rem", height: "2rem", borderRadius: "9999px", background: "var(--bg-primary)", border: "1px solid var(--border)", cursor: "pointer", fontSize: "1.25rem", color: "var(--text-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            ›
          </button>
        </div>

        {/* Thumbnails */}
        <div style={{ display: "flex", gap: "0.5rem", overflowX: "auto", padding: "0.75rem 1rem", borderTop: "1px solid var(--border)" }}>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Thumb ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              style={{
                width: "3.5rem",
                height: "2.5rem",
                objectFit: "cover",
                borderRadius: "0.5rem",
                flexShrink: 0,
                cursor: "pointer",
                opacity: i === activeIndex ? 1 : 0.4,
                outline: i === activeIndex ? "2px solid var(--accent)" : "none",
                outlineOffset: "2px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex gap-0.5 h-56 rounded-2xl overflow-hidden cursor-pointer">
        <div className="flex-1 h-full" onClick={() => open(0)}>
          <img src={a} alt={title} className="w-full h-full object-cover hover:opacity-95 transition-opacity" />
        </div>
        {b && (
          <div className="w-1/3 flex flex-col gap-0.5 h-full">
            <div className="flex-1 overflow-hidden" onClick={() => open(1)}>
              <img src={b} alt={title} className="w-full h-full object-cover hover:opacity-95 transition-opacity" />
            </div>
            {c && (
              <div className="flex-1 overflow-hidden relative" onClick={() => open(2)}>
                <img src={c} alt={title} className="w-full h-full object-cover hover:opacity-95 transition-opacity" />
                {extra > 0 && (
                  <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                    <span className="text-white font-bold text-lg font-body">+{extra}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="pt-3 flex justify-end">
        <button
          onClick={() => open(0)}
          className="text-xs font-semibold font-body text-[var(--accent)] hover:underline"
        >
          See all {images.length} photos →
        </button>
      </div>

      {mounted && modalOpen && createPortal(modal, document.body)}
    </>
  );
}
