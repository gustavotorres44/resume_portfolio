import { personal } from "@/data/personal";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center flex-wrap gap-4">
        <p className="text-sm text-[var(--text-secondary)] font-body">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <div className="flex gap-4">
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--text-secondary)] font-body hover:text-[var(--text-primary)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--text-secondary)] font-body hover:text-[var(--text-primary)] transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-sm text-[var(--text-secondary)] font-body hover:text-[var(--text-primary)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
