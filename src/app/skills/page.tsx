"use client";

import { useState } from "react";
import { skillCategories, certifications } from "@/data/skills";

type Tab = "skills" | "certifications";

const TAB_LABELS: Record<Tab, string> = {
  skills: "Skills",
  certifications: "Certifications",
};


export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("skills");

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-sm font-semibold text-[var(--accent)] tracking-wide uppercase mb-4 font-body">
        Skills & More
      </p>
      <h1 className="font-display text-3xl md:text-4xl leading-tight mb-4">
        What I bring to the table.
      </h1>
      <p className="text-[var(--text-secondary)] font-body mb-10 max-w-lg">
        Every skill is linked to where I actually used it. Proof over lists.
      </p>

      {/* Tab toggle */}
      <div className="flex gap-2 mb-12 p-1 rounded-xl bg-[var(--bg-secondary)] w-fit">
        {(["skills", "certifications"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold font-body transition-colors ${
              activeTab === tab
                ? "bg-[var(--bg-primary)] text-[var(--text-primary)] shadow-sm"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
          >
            {TAB_LABELS[tab]}
          </button>
        ))}
      </div>

      {/* Skills tab */}
      {activeTab === "skills" && (
        <div className="flex flex-col gap-10">
          {skillCategories.map((cat) => (
            <section key={cat.category}>
              <h2 className="text-sm font-bold text-[var(--text-primary)] tracking-wide uppercase mb-4 font-body">
                {cat.category}
              </h2>
              <div className="flex flex-col gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-start justify-between gap-4 p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors group"
                  >
                    <span className="font-body font-semibold text-sm text-[var(--text-primary)] shrink-0 group-hover:text-[var(--accent)] transition-colors">
                      {skill.name}
                    </span>
                    {skill.proof && (
                      <span className="text-xs text-[var(--text-secondary)] font-body text-right leading-relaxed">
                        {skill.proof}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* Certifications tab */}
      {activeTab === "certifications" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center text-center gap-4 p-7 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/50 bg-[var(--bg-secondary)] transition-colors"
            >
              {cert.logo && (
                <div className="w-16 h-16 rounded-2xl border border-[var(--border)] bg-white flex items-center justify-center shrink-0 overflow-hidden">
                  <img src={cert.logo} alt={cert.issuer} width={44} height={44} className="object-contain" />
                </div>
              )}
              <div>
                <h3 className="font-display text-base leading-snug mb-1">{cert.name}</h3>
                <p className="text-xs text-[var(--text-secondary)] font-body">{cert.issuer}</p>
              </div>
              <span className="mt-auto px-3 py-1 rounded-full text-xs font-semibold font-body bg-[var(--accent)]/10 text-[var(--accent)]">
                Issued {cert.issued}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
