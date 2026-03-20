"use client";

import { useState, useEffect } from "react";

export function PhotoGallery({ images, title }: { images: string[]; title: string }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const open = (i: number) => { setActiveIndex(i); setModalOpen(true); };
  const close = () => setModalOpen(false);
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  const [a, b, c] = images;
  const extra = images.length - 3;

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

      {modalOpen && (
        <div className="fixed inset-0 z-[200] bg-black/90 flex flex-col" onClick={close}>
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 shrink-0">
            <p className="text-white font-body font-semibold" onClick={(e) => e.stopPropagation()}>{title}</p>
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm font-body">{activeIndex + 1} / {images.length}</span>
              <button
                onClick={(e) => { e.stopPropagation(); close(); }}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white text-xl flex items-center justify-center transition-colors"
              >
                ×
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex items-center justify-center px-4 min-h-0">
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="text-white/60 hover:text-white text-3xl px-4 shrink-0">‹</button>
            <img
              src={images[activeIndex]}
              alt={`Photo ${activeIndex + 1}`}
              className="max-h-full max-w-full object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="text-white/60 hover:text-white text-3xl px-4 shrink-0">›</button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto px-6 py-4 shrink-0">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Thumb ${i + 1}`}
                onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
                className={`w-16 h-12 object-cover rounded-lg shrink-0 cursor-pointer transition-opacity ${
                  i === activeIndex ? "opacity-100 ring-2 ring-white" : "opacity-50 hover:opacity-80"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
