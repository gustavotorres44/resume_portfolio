"use client";

import { useState } from "react";

export function PhotoGallery({ images, title }: { images: string[]; title: string }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const open = (i: number) => { setActiveIndex(i); setModalOpen(true); };
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

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
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col" onClick={() => setModalOpen(false)}>
          <div className="flex items-center justify-between px-6 py-4 shrink-0" onClick={(e) => e.stopPropagation()}>
            <p className="text-white font-body font-semibold">{title}</p>
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm font-body">{activeIndex + 1} / {images.length}</span>
              <button onClick={() => setModalOpen(false)} className="text-white/70 hover:text-white text-2xl leading-none">×</button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center px-4 min-h-0" onClick={(e) => e.stopPropagation()}>
            <button onClick={prev} className="text-white/60 hover:text-white text-3xl px-4 shrink-0">‹</button>
            <img src={images[activeIndex]} alt={`Photo ${activeIndex + 1}`} className="max-h-full max-w-full object-contain rounded-xl" />
            <button onClick={next} className="text-white/60 hover:text-white text-3xl px-4 shrink-0">›</button>
          </div>
          <div className="flex gap-2 overflow-x-auto px-6 py-4 shrink-0" onClick={(e) => e.stopPropagation()}>
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Thumb ${i + 1}`}
                onClick={() => setActiveIndex(i)}
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
