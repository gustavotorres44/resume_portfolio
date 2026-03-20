import Link from "next/link";
import { personal } from "@/data/personal";
import { experiences } from "@/data/experience";
import { skillCategories, certifications } from "@/data/skills";

export default function ResumePage() {
  const professional = experiences.filter((e) => e.category === "professional");
  const campus = experiences.filter((e) => e.category === "campus");
  const languages = skillCategories.find((c) => c.category === "Languages");
  const softwareSkills = skillCategories.find((c) => c.category === "Engineering Tools");
  const programmingSkills = skillCategories.find((c) => c.category === "Programming & Data");

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="flex justify-between items-start mb-10 flex-wrap gap-4">
        <div>
          <p className="text-sm font-semibold text-[var(--accent)] tracking-wide uppercase mb-4 font-body">
            Resume
          </p>
          <h1 className="font-display text-3xl md:text-4xl leading-tight">
            The one-pager.
          </h1>
        </div>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-[var(--accent)] text-white rounded-lg text-sm font-semibold font-body hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          ↓ Download PDF
        </a>
      </div>

      {/* Embedded PDF */}
      <div className="rounded-2xl border border-[var(--border)] overflow-hidden mb-16 bg-[var(--bg-secondary)]">
        <div className="px-5 py-3 border-b border-[var(--border)] flex items-center justify-between">
          <p className="text-sm font-semibold font-body text-[var(--text-secondary)]">resume.pdf</p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold font-body text-[var(--accent)] hover:underline"
          >
            Open in new tab ↗
          </a>
        </div>
        <iframe
          src="/resume.pdf"
          className="w-full"
          style={{ height: "900px" }}
          title="Gustavo Torres Resume"
        />
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-12">
        <div className="flex-1 h-px bg-[var(--border)]" />
        <p className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase font-body shrink-0">
          Or browse below
        </p>
        <div className="flex-1 h-px bg-[var(--border)]" />
      </div>

      {/* Styled resume view */}
      <div className="space-y-10">

        {/* Contact */}
        <div className="text-center border-b border-[var(--border)] pb-8">
          <h2 className="font-display text-3xl mb-2">{personal.name}</h2>
          <p className="text-sm text-[var(--text-secondary)] font-body">
            {personal.location} · {personal.email}
          </p>
          <div className="flex gap-4 justify-center mt-3">
            <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--accent)] font-body hover:underline">LinkedIn</a>
            <a href={personal.links.github} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--accent)] font-body hover:underline">GitHub</a>
          </div>
        </div>

        {/* Education */}
        {personal.education && (
          <section>
            <h3 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-4 font-body border-b border-[var(--border)] pb-2">
              Education
            </h3>
            <div className="space-y-4">
              {personal.education.map((edu) => (
                <div key={edu.school} className="flex justify-between items-start gap-4 flex-wrap">
                  <div>
                    <p className="font-display text-base font-bold">{edu.school}</p>
                    <p className="text-sm text-[var(--text-secondary)] font-body">{edu.degree}{edu.gpa && ` · ${edu.gpa} GPA`}</p>
                  </div>
                  <span className="text-sm text-[var(--text-secondary)] font-body whitespace-nowrap">{edu.graduationYear}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Professional Experience */}
        <section>
          <h3 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-4 font-body border-b border-[var(--border)] pb-2">
            Experience
          </h3>
          <div className="space-y-6">
            {professional.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start flex-wrap gap-1 mb-1">
                  <div>
                    <p className="font-display text-base font-bold">{exp.role}</p>
                    <p className="text-sm text-[var(--text-secondary)] font-body">{exp.company} · {exp.location}</p>
                  </div>
                  <span className="text-sm text-[var(--text-secondary)] font-body whitespace-nowrap">{exp.startDate} – {exp.endDate}</span>
                </div>
                <ul className="mt-2 space-y-1">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-sm text-[var(--text-secondary)] font-body leading-relaxed flex gap-2">
                      <span className="shrink-0 mt-0.5">•</span><span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/experience#professional" className="inline-block mt-4 text-sm font-semibold text-[var(--accent)] font-body hover:underline">
            See full experience →
          </Link>
        </section>

        {/* Campus / Leadership */}
        <section>
          <h3 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-4 font-body border-b border-[var(--border)] pb-2">
            Leadership & Campus Involvement
          </h3>
          <div className="space-y-5">
            {campus.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start flex-wrap gap-1 mb-1">
                  <div>
                    <p className="font-display text-base font-bold">{exp.role}</p>
                    <p className="text-sm text-[var(--text-secondary)] font-body">{exp.company}</p>
                  </div>
                  <span className="text-sm text-[var(--text-secondary)] font-body whitespace-nowrap">{exp.startDate} – {exp.endDate}</span>
                </div>
                <ul className="mt-1 space-y-1">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-sm text-[var(--text-secondary)] font-body leading-relaxed flex gap-2">
                      <span className="shrink-0 mt-0.5">•</span><span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link href="/experience#campus" className="inline-block mt-4 text-sm font-semibold text-[var(--accent)] font-body hover:underline">
            See full campus involvement →
          </Link>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-4 font-body border-b border-[var(--border)] pb-2">
            Skills
          </h3>
          <div className="space-y-3 text-sm font-body">
            {languages && (
              <div className="flex gap-2 flex-wrap items-center">
                <span className="font-semibold text-[var(--text-primary)] shrink-0">Languages:</span>
                <span className="text-[var(--text-secondary)]">{languages.skills.map((s) => `${s.name} (${s.proof})`).join(" · ")}</span>
              </div>
            )}
            {programmingSkills && (
              <div className="flex gap-2 flex-wrap items-center">
                <span className="font-semibold text-[var(--text-primary)] shrink-0">Programming:</span>
                <span className="text-[var(--text-secondary)]">{programmingSkills.skills.map((s) => s.name).join(", ")}</span>
              </div>
            )}
            {softwareSkills && (
              <div className="flex gap-2 flex-wrap items-center">
                <span className="font-semibold text-[var(--text-primary)] shrink-0">Software:</span>
                <span className="text-[var(--text-secondary)]">{softwareSkills.skills.map((s) => s.name).join(", ")}</span>
              </div>
            )}
            <div className="flex gap-2 flex-wrap items-center">
              <span className="font-semibold text-[var(--text-primary)] shrink-0">Certifications:</span>
              <span className="text-[var(--text-secondary)]">{certifications.map((c) => c.name).join(" · ")}</span>
            </div>
          </div>
          <Link href="/skills" className="inline-block mt-4 text-sm font-semibold text-[var(--accent)] font-body hover:underline">
            See full skills →
          </Link>
        </section>

      </div>
    </div>
  );
}
