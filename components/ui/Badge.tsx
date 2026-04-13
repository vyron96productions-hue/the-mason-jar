interface BadgeProps {
  label: string;
  variant?: "amber" | "green" | "red" | "dark";
}

const BADGE_STYLES: Record<NonNullable<BadgeProps["variant"]>, string> = {
  amber: "bg-amber-500/20 text-amber-light border border-amber-500/40",
  green: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",
  red: "bg-red-500/20 text-red-300 border border-red-500/40",
  dark: "bg-white/10 text-cream-dark border border-white/20",
};

export function Badge({ label, variant = "amber" }: BadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full ${BADGE_STYLES[variant]}`}
    >
      {label}
    </span>
  );
}
