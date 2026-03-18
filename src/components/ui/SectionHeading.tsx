interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="text-sm font-semibold text-[var(--accent)] tracking-wide uppercase mb-4 font-body">
        {label}
      </p>
      <h1 className="font-display text-3xl md:text-4xl leading-tight mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-[var(--text-secondary)] font-body max-w-lg">
          {description}
        </p>
      )}
    </div>
  );
}
