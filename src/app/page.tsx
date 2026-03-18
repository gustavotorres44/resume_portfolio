import Link from "next/link";
import { personal } from "@/data/personal";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const latestExperience = experiences[0];

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      {/* Hero */}
      <section className="mb-20">
        <p className="text-sm font-semibold text-[var(--accent)] tracking-wide uppercase mb-4 font-body">
          {personal.location}
        </p>
        <h1 className="font-display text-4xl md:text-5xl leading-tight mb-6">
          {personal.name}
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl font-body">
          {personal.headline}
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/about"
            className="px-6 py-3 bg-[var(--text-primary)] text-white rounded-lg text-sm font-semibold font-body hover:opacity-90 transition-opacity"
          >
            About Me
          </Link>
          <Link
            href="/resume"
            className="px-6 py-3 border border-[var(--border)] rounded-lg text-sm font-semibold font-body hover:bg-[var(--bg-secondary)] transition-colors"
          >
            View Resume
          </Link>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[var(--border)] rounded-lg text-sm font-semibold font-body hover:bg-[var(--bg-secondary)] transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* Latest Role */}
      {latestExperience && (
        <section className="mb-20">
          <h2 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-6 font-body">
            Latest Role
          </h2>
          <Link
            href="/experience"
            className="block p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors group"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-display text-xl group-hover:text-[var(--accent)] transition-colors">
                  {latestExperience.role}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] font-body mt-1">
                  {latestExperience.company} · {latestExperience.location}
                </p>
              </div>
              <span className="text-xs text-[var(--text-secondary)] font-body whitespace-nowrap">
                {latestExperience.startDate} – {latestExperience.endDate}
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed">
              {latestExperience.summary}
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {latestExperience.skills.slice(0, 5).map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-xs font-medium text-[var(--text-secondary)] font-body"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Link>
          <Link
            href="/experience"
            className="inline-block mt-4 text-sm font-semibold text-[var(--accent)] font-body hover:underline"
          >
            View all experience →
          </Link>
        </section>
      )}

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section>
          <h2 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-6 font-body">
            Featured Projects
          </h2>
          <div className="flex flex-col gap-4">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href="/projects"
                className="block p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors group"
              >
                <h3 className="font-display text-lg group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] font-body mt-2">
                  {project.tagline}
                </p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {project.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-xs font-medium text-[var(--text-secondary)] font-body"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/projects"
            className="inline-block mt-4 text-sm font-semibold text-[var(--accent)] font-body hover:underline"
          >
            View all projects →
          </Link>
        </section>
      )}
    </div>
  );
}
