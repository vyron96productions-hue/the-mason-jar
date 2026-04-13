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
        width={22}
        height={22}
        className="object-contain opacity-75"
      />
      <span>{label}</span>
    </a>
  );
}
