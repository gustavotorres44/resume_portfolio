"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { getBotResponse, newId, type Message } from "@/lib/chatbot";

const BASE_ROUTES = ["/experience", "/projects", "/skills", "/journey", "/about", "/resume"];

function renderText(text: string, onNav: () => void) {
  const clean = text.replace(/\*\*(.*?)\*\*/g, "$1");
  const regex = /(\/(?:experience|projects|skills|journey|about|resume)(?:#[a-z-]+)?)/g;
  const parts = clean.split(regex);
  return parts.map((part, i) => {
    const isRoute = BASE_ROUTES.some((r) => part === r || part.startsWith(r + "#"));
    if (!isRoute) return part;
    const [path, hash] = part.split("#");
    const label = hash ? `${path.slice(1)} › ${hash}` : path.slice(1);
    return (
      <Link key={i} href={part} onClick={onNav} className="font-semibold text-[var(--accent)] hover:underline">
        {label}
      </Link>
    );
  });
}

const WELCOME: Message = {
  id: "welcome",
  role: "bot",
  text: "Hey! I'm Gus's portfolio assistant. Ask me anything about his experience, projects, or how to navigate the site.",
  suggestions: ["Experience", "Projects", "About Gus", "Contact"],
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [tooltipFading, setTooltipFading] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setShowTooltip(true), 1500);
    const fade = setTimeout(() => setTooltipFading(true), 5500);
    const hide = setTimeout(() => setShowTooltip(false), 6000);
    return () => { clearTimeout(show); clearTimeout(fade); clearTimeout(hide); };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    if (!text.trim() || loading) return;
    const userMsg: Message = { id: newId(), role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const response = await getBotResponse(text.trim(), messages);
    const botMsg: Message = { id: newId(), role: "bot", ...response };
    setMessages((prev) => [...prev, botMsg]);
    setLoading(false);
  }

  return (
    <>
      {/* Tooltip */}
      {showTooltip && !open && (
        <div
          className="fixed bottom-20 right-6 z-50 bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] text-xs font-semibold font-body px-3 py-2 rounded-xl shadow-lg whitespace-nowrap animate-bounce"
          style={{ transition: "opacity 0.5s ease", opacity: tooltipFading ? 0 : 1 }}
        >
          Ask me anything about Gus!
          <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-[var(--bg-primary)] border-r border-b border-[var(--border)] rotate-45" />
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => { setOpen((o) => !o); setShowTooltip(false); }}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[var(--accent)] text-white shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
        aria-label="Open chat"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-[5rem] right-6 z-50 w-80 max-h-[70vh] flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)] shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 border-b border-[var(--border)] flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[var(--accent)] flex items-center justify-center text-white text-xs font-bold font-body">
              G
            </div>
            <div>
              <p className="text-sm font-semibold font-body text-[var(--text-primary)]">Portfolio Assistant</p>
              <p className="text-xs text-[var(--text-secondary)] font-body">Ask me anything</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3 min-h-0">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                <div
                  className={`px-3 py-2 rounded-2xl text-sm font-body max-w-[85%] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[var(--accent)] text-white rounded-br-sm"
                      : "bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-bl-sm"
                  }`}
                >
                  {renderText(msg.text, () => setOpen(false))}
                </div>

                {/* Link button */}
                {msg.link && (
                  <Link
                    href={msg.link.href}
                    onClick={() => setOpen(false)}
                    className="text-xs font-semibold font-body text-[var(--accent)] hover:underline px-1"
                  >
                    {msg.link.label}
                  </Link>
                )}

                {/* Suggestion chips */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-0.5">
                    {msg.suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="px-2.5 py-1 rounded-full border border-[var(--border)] text-xs font-body text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-start">
                <div className="px-3 py-2 rounded-2xl rounded-bl-sm bg-[var(--bg-secondary)] text-sm font-body text-[var(--text-secondary)]">
                  <span className="inline-flex gap-1">
                    <span className="animate-bounce [animation-delay:0ms]">·</span>
                    <span className="animate-bounce [animation-delay:150ms]">·</span>
                    <span className="animate-bounce [animation-delay:300ms]">·</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t border-[var(--border)] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Ask something..."
              className="flex-1 text-sm font-body bg-[var(--bg-secondary)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] rounded-lg px-3 py-2 outline-none border border-transparent focus:border-[var(--border)]"
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim() || loading}
              className="px-3 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-body disabled:opacity-40 hover:opacity-90 transition-opacity"
            >
              ↑
            </button>
          </div>
        </div>
      )}
    </>
  );
}
