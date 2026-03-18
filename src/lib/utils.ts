import { type ClassValue, clsx } from "clsx";

// Simple class name merger (install clsx if you want, or use this basic version)
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}
