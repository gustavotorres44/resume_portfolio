interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "bg-[var(--accent)]/10 text-[var(--accent)]"
      : "bg-[var(--bg-secondary)] text-[var(--text-secondary)]";

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium font-body ${styles}`}
    >
      {children}
    </span>
  );
}
