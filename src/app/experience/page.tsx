import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm font-semibold text-[var(--accent)] tracking-wide uppercase mb-4 font-body">
        Experience
      </p>
      <h1 className="font-display text-3xl md:text-4xl leading-tight mb-4">
        Where I&apos;ve worked.
      </h1>
      <p className="text-[var(--text-secondary)] font-body mb-12 max-w-lg">
        More depth than a resume, more context than LinkedIn. Here&apos;s what I
        actually did — and what I learned.
      </p>

      <div className="flex flex-col gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="p-6 md:p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
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
        ))}
      </div>
    </div>
  );
}
