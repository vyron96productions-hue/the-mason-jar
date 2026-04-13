import Image from "next/image";

interface BarGuardBadgeProps {
  label: string;
}

export function BarGuardBadge({ label }: BarGuardBadgeProps) {
  return (
    <a
      href="https://barguard.app"
      target="_blank"
      rel="noopener noreferrer"
      className="barguard-badge"
      aria-label="Powered by BarGuard — bar inventory and operations platform"
    >
      <Image
        src="/images/barguard-logo.png"
        alt="BarGuard logo"
        width={18}
        height={18}
        className="object-contain opacity-60"
      />
      <span>{label}</span>
    </a>
  );
}
