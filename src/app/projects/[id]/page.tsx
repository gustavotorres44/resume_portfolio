import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  const paragraphs = project.description.split(/\n\n+/).filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-semibold font-body text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-10"
      >
        ← Back to Projects
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
          <h1 className="font-display text-3xl md:text-4xl leading-tight">{project.title}</h1>
          {project.featured && (
            <span className="px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold font-body shrink-0">
              Featured
            </span>
          )}
        </div>
        <p className="text-sm font-semibold text-[var(--accent)] font-body mb-1">{project.role}</p>
        <p className="text-sm text-[var(--text-secondary)] font-body">{project.timeline}</p>
      </div>

      {/* Tagline */}
      <p className="font-display text-xl italic text-[var(--text-secondary)] mb-10 leading-relaxed border-l-4 border-[var(--accent)]/30 pl-5">
        {project.tagline}
      </p>

      {/* External links */}
      {(project.links || project.caseStudyPdf) && (
        <div className="flex gap-3 flex-wrap mb-12">
          {project.links?.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white text-sm font-semibold font-body hover:opacity-90 transition-opacity">
              Live Site ↗
            </a>
          )}
          {project.links?.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg border border-[var(--border)] text-sm font-semibold font-body hover:bg-[var(--bg-secondary)] transition-colors">
              GitHub ↗
            </a>
          )}
          {project.caseStudyPdf && (
            <a href={project.caseStudyPdf} download
              className="px-5 py-2.5 rounded-lg border border-[var(--border)] text-sm font-semibold font-body hover:bg-[var(--bg-secondary)] transition-colors flex items-center gap-2">
              ↓ Download Case Study
            </a>
          )}
        </div>
      )}

      {/* Description + image */}
      <div className={`mb-12 ${project.images?.[0] ? "flex flex-col md:flex-row gap-8 items-start" : ""}`}>
        <div className="flex-1 space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[var(--text-secondary)] font-body leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        {project.images?.[0] && (
          <div className="md:w-72 shrink-0">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full rounded-2xl border border-[var(--border)] object-cover object-top shadow-sm"
            />
          </div>
        )}
      </div>

      {/* Approach steps */}
      {project.approach && project.approach.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-6 font-body">
            My Approach
          </h2>
          <div className="flex flex-col gap-4">
            {project.approach.map((step, i) => (
              <div key={step.title} className="flex gap-5 p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]">
                <div className="w-8 h-8 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-display text-sm flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold font-body text-[var(--text-primary)] mb-1">{step.title}</p>
                  <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Highlights / metrics */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-6 font-body">
            Results
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.highlights.map((h) => (
              <div key={h.label} className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] text-center">
                <p className="font-display text-3xl mb-1">{h.value}</p>
                <p className="text-xs text-[var(--text-secondary)] font-body leading-snug">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      <div className="mb-12">
        <h2 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-4 font-body">
          Skills & Tools
        </h2>
        <div className="flex gap-2 flex-wrap">
          {project.skills.map((skill) => (
            <span key={skill} className="px-3 py-1.5 rounded-full border border-[var(--border)] text-sm font-medium text-[var(--text-secondary)] font-body">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Embedded PDF */}
      {project.caseStudyPdf && (
        <div>
          <h2 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-4 font-body">
            Full Case Study
          </h2>
          <div className="rounded-2xl border border-[var(--border)] overflow-hidden bg-[var(--bg-secondary)]">
            <div className="px-5 py-3 border-b border-[var(--border)] flex items-center justify-between">
              <p className="text-sm font-semibold font-body text-[var(--text-secondary)]">Sideraceros at a Crossroads — WHU Case Study</p>
              <a
                href={project.caseStudyPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold font-body text-[var(--accent)] hover:underline"
              >
                Open in new tab ↗
              </a>
            </div>
            <iframe
              src={project.caseStudyPdf}
              className="w-full"
              style={{ height: "900px" }}
              title="Sideraceros Case Study"
            />
          </div>
        </div>
      )}
    </div>
  );
}
