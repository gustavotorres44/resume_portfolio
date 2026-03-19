"use client";

import { experiences, ExperienceEntry } from "@/data/experience";

function ExperienceCard({ exp }: { exp: ExperienceEntry }) {
  return (
    <div className="p-6 md:p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors">
      {/* Header */}
      <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
        <div className="flex items-start gap-4">
          {exp.logo && (
            <div className="w-10 h-10 rounded-lg border border-[var(--border)] bg-white flex items-center justify-center shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
          )}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="font-display text-xl">{exp.role}</h2>
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-[var(--bg-secondary)] text-[var(--text-secondary)] font-body capitalize">
                {exp.type}
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] font-body">
              {exp.company} · {exp.location}
            </p>
          </div>
        </div>
        <span className="text-sm text-[var(--text-secondary)] font-body whitespace-nowrap">
          {exp.startDate} – {exp.endDate}
        </span>
      </div>

      {/* Summary */}
      <p className="text-[var(--text-secondary)] font-body leading-relaxed mb-5 text-sm">
        {exp.summary}
      </p>

      {/* Detailed description */}
      <ul className="space-y-2 mb-5">
        {exp.description.map((point, i) => (
          <li
            key={i}
            className="text-sm text-[var(--text-secondary)] font-body leading-relaxed pl-4 border-l-2 border-[var(--border)]"
          >
            {point}
          </li>
        ))}
      </ul>

      {/* Highlights */}
      {exp.highlights && exp.highlights.length > 0 && (
        <div className="mb-5 p-4 rounded-xl bg-[var(--accent)]/5 border border-[var(--accent)]/10">
          <p className="text-xs font-bold text-[var(--accent)] tracking-wide uppercase mb-2 font-body">
            Key Highlights
          </p>
          {exp.highlights.map((h, i) => (
            <p
              key={i}
              className="text-sm text-[var(--text-primary)] font-body leading-relaxed"
            >
              → {h}
            </p>
          ))}
        </div>
      )}

      {/* Skills */}
      <div className="flex gap-2 flex-wrap">
        {exp.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-xs font-medium text-[var(--text-secondary)] font-body"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

const sections = [
  { id: "upcoming", label: "Upcoming" },
  { id: "professional", label: "Professional" },
  { id: "campus", label: "Campus" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ExperiencePage() {
  const upcoming = experiences.filter((e) => e.category === "upcoming");
  const professional = experiences.filter((e) => e.category === "professional");
  const campus = experiences.filter((e) => e.category === "campus");

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm font-semibold text-[var(--accent)] tracking-wide uppercase mb-4 font-body">
        Experience
      </p>
      <h1 className="font-display text-3xl md:text-4xl leading-tight mb-4">
        Where I&apos;ve worked.
      </h1>
      <p className="text-[var(--text-secondary)] font-body mb-8 max-w-lg">
        More depth than a resume, more context than LinkedIn. Here&apos;s what I
        actually did — and what I learned.
      </p>

      {/* Section toggle */}
      <div className="flex gap-2 mb-12 flex-wrap">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="px-4 py-2 rounded-full border border-[var(--border)] text-sm font-semibold font-body text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Upcoming */}
      {upcoming.length > 0 && (
        <section id="upcoming" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[var(--border)]">
            <h2 className="font-display text-xl">Upcoming</h2>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[var(--accent)]/10 text-[var(--accent)] font-body">
              Coming Soon
            </span>
          </div>
          <div className="flex flex-col gap-8">
            {upcoming.map((exp) => (
              <div
                key={exp.id}
                className="p-6 md:p-8 rounded-2xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 opacity-80"
              >
                <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                  <div className="flex items-start gap-4">
                    {exp.logo && (
                      <div className="w-10 h-10 rounded-lg border border-[var(--border)] bg-white flex items-center justify-center shrink-0 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={exp.logo} alt={`${exp.company} logo`} width={32} height={32} className="object-contain" />
                      </div>
                    )}
                    <div>
                      <h2 className="font-display text-xl mb-1">{exp.role}</h2>
                      <p className="text-sm text-[var(--text-secondary)] font-body">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-[var(--text-secondary)] font-body whitespace-nowrap">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] font-body italic">
                  {exp.description[0]}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Experience */}
      <section id="professional" className="mb-16 scroll-mt-24">
        <h2 className="font-display text-xl mb-6 pb-3 border-b border-[var(--border)]">
          Professional Experience
        </h2>
        <div className="flex flex-col gap-8">
          {professional.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </section>

      {/* Campus Involvement */}
      <section id="campus" className="mb-16 scroll-mt-24">
        <h2 className="font-display text-xl mb-6 pb-3 border-b border-[var(--border)]">
          Campus Involvement
        </h2>
        <div className="flex flex-col gap-8">
          {campus.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </section>
    </div>
  );
}
