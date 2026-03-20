import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <p className="text-sm font-semibold text-[var(--accent)] tracking-wide uppercase mb-4 font-body">
        Projects
      </p>
      <h1 className="font-display text-3xl md:text-4xl leading-tight mb-4">
        What I&apos;ve built.
      </h1>
      <p className="text-[var(--text-secondary)] font-body mb-12 max-w-lg">
        Deep dives into the projects I&apos;m most proud of: the problems, the process, and what I took away.
      </p>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group p-6 md:p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors flex flex-col md:flex-row gap-6 items-start"
          >
            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h2 className="font-display text-2xl group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h2>
                {project.featured && (
                  <span className="px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold font-body">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-sm text-[var(--accent)] font-body font-medium mb-1">{project.role}</p>
              <p className="text-sm text-[var(--text-secondary)] font-body mb-4">{project.timeline}</p>
              <p className="text-[var(--text-secondary)] font-body leading-relaxed mb-4">{project.tagline}</p>

              {/* Highlights row */}
              {project.highlights && (
                <div className="flex gap-4 mb-4 flex-wrap">
                  {project.highlights.map((h) => (
                    <div key={h.label}>
                      <span className="font-display text-lg">{h.value}</span>
                      <span className="text-xs text-[var(--text-secondary)] font-body ml-1.5">{h.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-2 flex-wrap">
                {project.skills.slice(0, 5).map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-xs font-medium text-[var(--text-secondary)] font-body">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Thumbnail */}
            {project.images?.[0] && (
              <div className="md:w-52 shrink-0 rounded-xl overflow-hidden border border-[var(--border)]">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-36 object-cover object-top"
                />
              </div>
            )}

            <div className="text-sm font-semibold text-[var(--accent)] font-body self-center shrink-0 group-hover:underline">
              View project →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
