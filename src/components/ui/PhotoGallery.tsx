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
          See all {images.length} photos &rarr;
        </button>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/40 flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="bg-[var(--bg-primary)] rounded-2xl border border-[var(--border)] shadow-2xl w-full max-w-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)]">
              <span className="text-sm font-semibold font-body text-[var(--text-secondary)]">
                {activeIndex + 1} / {images.length}
              </span>
              <button
                onClick={close}
                className="w-8 h-8 rounded-full hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xl flex items-center justify-center transition-colors"
              >
                &times;
              </button>
            </div>

            {/* Image */}
            <div className="bg-[var(--bg-secondary)] flex items-center justify-between px-3 py-4 gap-3">
              <button
                onClick={prev}
                className="shrink-0 w-8 h-8 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] flex items-center justify-center text-lg transition-colors hover:bg-[var(--bg-secondary)]"
              >
                &#8249;
              </button>
              <img
                src={images[activeIndex]}
                alt={`Photo ${activeIndex + 1}`}
                className="w-full rounded-lg object-contain"
                style={{ maxHeight: "70vh" }}
              />
              <button
                onClick={next}
                className="shrink-0 w-8 h-8 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] flex items-center justify-center text-lg transition-colors hover:bg-[var(--bg-secondary)]"
              >
                &#8250;
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto px-4 py-3 border-t border-[var(--border)]">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Thumb ${i + 1}`}
                  onClick={() => setActiveIndex(i)}
                  className={`w-14 h-10 object-cover rounded-lg shrink-0 cursor-pointer transition-opacity ${
                    i === activeIndex ? "opacity-100 ring-2 ring-[var(--accent)]" : "opacity-40 hover:opacity-70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
