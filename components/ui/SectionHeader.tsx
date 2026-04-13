interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
  light?: boolean; // true = cream text on dark bg (default), false = dark text on light bg
}

export function SectionHeader({
  eyebrow,
  heading,
  subtext,
  align = "center",
  light = true,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} mb-12`}>
      {eyebrow && (
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#c17f24" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          color: light ? "#f5efe0" : "#1a1208",
        }}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: light ? "#e8dcc8" : "#5c3d2e" }}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
