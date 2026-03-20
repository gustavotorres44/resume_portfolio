import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-sm font-semibold text-[var(--accent)] tracking-wide uppercase mb-4 font-body">
        Projects
      </p>
      <h1 className="font-display text-3xl md:text-4xl leading-tight mb-4">
        What I&apos;ve built.
      </h1>
      <p className="text-[var(--text-secondary)] font-body mb-12 max-w-lg">
        Deep dives into the projects I&apos;m most proud of: the problems, the
        process, and what I took away.
      </p>

      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 md:p-8 rounded-2xl border border-[var(--border)]"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
              <h2 className="font-display text-2xl">{project.title}</h2>
              {project.featured && (
                <span className="px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold font-body">
                  Featured
                </span>
              )}
            </div>
            <p className="text-sm text-[var(--accent)] font-body font-medium mb-1">
              {project.role}
            </p>
            <p className="text-sm text-[var(--text-secondary)] font-body mb-4">
              {project.timeline}
            </p>

            {/* Tagline */}
            <p className="font-display text-lg italic text-[var(--text-secondary)] mb-4">
              {project.tagline}
            </p>

            {/* Full description */}
            <div className="text-sm text-[var(--text-secondary)] font-body leading-relaxed mb-6 whitespace-pre-line">
              {project.description}
            </div>

            {/* Skills */}
            <div className="flex gap-2 flex-wrap mb-5">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-xs font-medium text-[var(--text-secondary)] font-body"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Links */}
            {project.links && (
              <div className="flex gap-3 flex-wrap pt-4 border-t border-[var(--border)]">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[var(--text-primary)] text-white text-sm font-semibold font-body hover:opacity-90 transition-opacity"
                  >
                    Live Site ↗
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-[var(--border)] text-sm font-semibold font-body hover:bg-[var(--bg-secondary)] transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-[var(--border)] text-sm font-semibold font-body hover:bg-[var(--bg-secondary)] transition-colors"
                  >
                    Demo ↗
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
