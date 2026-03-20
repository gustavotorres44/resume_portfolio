import Link from "next/link";
import { personal } from "@/data/personal";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

export default function ResumePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex justify-between items-start mb-12 flex-wrap gap-4">
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

      {/* Contact header */}
      <div className="p-6 rounded-2xl border border-[var(--border)] mb-8">
        <h2 className="font-display text-2xl mb-2">{personal.name}</h2>
        <p className="text-sm text-[var(--text-secondary)] font-body">
          {personal.location} · {personal.email}
        </p>
        <div className="flex gap-3 mt-3">
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--accent)] font-body hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--accent)] font-body hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Education */}
      {personal.education && (
        <section className="mb-8">
          <h3 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-4 font-body">
            Education
          </h3>
          {personal.education.map((edu) => (
            <div key={edu.school} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-display text-base font-bold">
                    {edu.school}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] font-body">
                    {edu.degree}
                    {edu.gpa && ` · ${edu.gpa} GPA`}
                  </p>
                </div>
                <span className="text-sm text-[var(--text-secondary)] font-body">
                  {edu.graduationYear}
                </span>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      <section className="mb-8">
        <h3 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-4 font-body">
          Experience
        </h3>
        <div className="flex flex-col gap-5">
          {experiences.map((exp) => (
            <div key={exp.id} className="pb-5 border-b border-[var(--border)] last:border-0">
              <div className="flex justify-between items-start mb-1 flex-wrap gap-1">
                <div>
                  <p className="font-display text-base font-bold">
                    {exp.role}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] font-body">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="text-sm text-[var(--text-secondary)] font-body whitespace-nowrap">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>
              <ul className="mt-2 space-y-1">
                {exp.description.slice(0, 3).map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-[var(--text-secondary)] font-body leading-relaxed"
                  >
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link
          href="/experience"
          className="inline-block mt-3 text-sm font-semibold text-[var(--accent)] font-body hover:underline"
        >
          See detailed experience →
        </Link>
      </section>

      {/* Projects */}
      <section>
        <h3 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-4 font-body">
          Projects
        </h3>
        <div className="flex flex-col gap-4">
          {projects.slice(0, 3).map((project) => (
            <div key={project.id}>
              <p className="font-display text-base font-bold">
                {project.title}
              </p>
              <p className="text-sm text-[var(--text-secondary)] font-body">
                {project.tagline}
              </p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-xs text-[var(--text-secondary)] font-body"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/projects"
          className="inline-block mt-3 text-sm font-semibold text-[var(--accent)] font-body hover:underline"
        >
          See all projects →
        </Link>
      </section>
    </div>
  );
}
