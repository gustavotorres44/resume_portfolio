import Image from "next/image";
import { personal } from "@/data/personal";
import { CopyEmail } from "@/components/ui/CopyEmail";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex items-center gap-6 mb-8">
        <Image
          src="/images/avatar.jpg"
          alt={personal.name}
          width={96}
          height={96}
          className="rounded-full object-cover shrink-0"
        />
        <div>
          <p className="text-sm font-semibold text-[var(--accent)] tracking-wide uppercase mb-1 font-body">
            About
          </p>
          <h1 className="font-display text-3xl md:text-4xl leading-tight">
            The full story.
          </h1>
        </div>
      </div>

      {/* Bio */}
      <div className="prose prose-stone max-w-none mb-16">
        <p className="text-[var(--text-secondary)] font-body leading-relaxed text-base whitespace-pre-line">
          {personal.bio}
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { value: "$50K+", label: "Cost savings at Toyota" },
          { value: "1.5M+", label: "Customers impacted at Accenture" },
          { value: "6", label: "Locations worked in" },
          { value: "4", label: "Languages spoken" },
        ].map((m) => (
          <div key={m.label} className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] text-center">
            <p className="font-display text-3xl mb-1">{m.value}</p>
            <p className="text-xs text-[var(--text-secondary)] font-body leading-snug">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Education */}
      {personal.education && personal.education.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-6 font-body">
            Education
          </h2>
          <div className="flex flex-col gap-4">
            {personal.education.map((edu) => (
              <div
                key={edu.school}
                className="p-6 rounded-2xl border border-[var(--border)] flex items-start gap-4"
              >
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-12 h-12 rounded-xl object-contain shrink-0 bg-white p-1"
                  />
                )}
                <div className="flex-1 min-w-0 flex items-start justify-between gap-4 flex-wrap">
                <div>
                <h3 className="font-display text-lg">{edu.school}</h3>
                <p className="text-sm text-[var(--text-secondary)] font-body mt-1">
                  {edu.degree} · Class of {edu.graduationYear}
                  {edu.gpa && ` · ${edu.gpa} GPA`}
                </p>
                </div>
                {edu.ranking && (
                  <span className="px-3 py-1.5 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold font-body shrink-0 text-right leading-snug">
                    {edu.ranking}
                  </span>
                )}
                {edu.relevantCourses && (
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {edu.relevantCourses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-xs font-medium text-[var(--text-secondary)] font-body"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* From Puerto Rico */}
      <section className="mb-16">
        <h2 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-6 font-body">
          Where I&apos;m From
        </h2>
        <div className="p-6 rounded-2xl border border-[var(--border)] flex flex-col sm:flex-row items-center gap-6">
          <div className="w-56 shrink-0">
            <img
              src="/images/PR_flag_island.jpg"
              alt="Puerto Rico island filled with flag"
              className="w-full rounded-xl object-contain"
            />
          </div>
          <div>
            <h3 className="font-display text-lg mb-2">Puerto Rico 🇵🇷</h3>
            <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed">
              I was born and raised in Puerto Rico, an island that shaped how I see community, culture, and resilience. It&apos;s a big part of why I co-founded BORI at Georgia Tech and why representing the Puerto Rican diaspora in spaces like finance and engineering matters to me.
            </p>
          </div>
        </div>
      </section>

      {/* Interests */}
      {personal.interests && (
        <section className="mb-16">
          <h2 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-6 font-body">
            Interests
          </h2>
          <div className="flex gap-3 flex-wrap">
            {personal.interests.map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 rounded-full border border-[var(--border)] text-sm font-medium text-[var(--text-secondary)] font-body"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Links */}
      <section>
        <h2 className="text-xs font-bold text-[var(--text-secondary)] tracking-widest uppercase mb-6 font-body">
          Connect
        </h2>
        <div className="flex gap-4 flex-wrap">
          <CopyEmail email={personal.email} />
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-[var(--border)] text-sm font-semibold font-body hover:bg-[var(--bg-secondary)] transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-[var(--border)] text-sm font-semibold font-body hover:bg-[var(--bg-secondary)] transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </section>
    </div>
  );
}
