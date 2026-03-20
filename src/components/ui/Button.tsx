import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  external = false,
  download = false,
  className = "",
}: ButtonProps) {
  const base = "px-6 py-3 rounded-lg text-sm font-semibold font-body transition-all inline-flex items-center gap-2";
  const styles =
    variant === "primary"
      ? "bg-[var(--accent)] text-white hover:opacity-90"
      : "border border-[var(--border)] hover:bg-[var(--bg-secondary)]";

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles} ${className}`}
        download={download || undefined}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${styles} ${className}`}>{children}</button>
  );
}
