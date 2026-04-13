import type { SpecialEvent } from "@/lib/events-data";

interface SpecialEventCardProps {
  event: SpecialEvent;
}

export function SpecialEventCard({ event }: SpecialEventCardProps) {
  return (
    <article
      className="p-6 rounded-2xl"
      style={{
        backgroundColor: "rgba(26,18,8,0.5)",
        border: "1px solid rgba(193,127,36,0.12)",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        {event.tag && (
          <span
            className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              backgroundColor: "rgba(193,127,36,0.1)",
              color: "#D89B3C",
              border: "1px solid rgba(193,127,36,0.25)",
            }}
          >
            {event.tag}
          </span>
        )}
      </div>
      <h3
        className="text-xl font-bold mb-1"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          color: "#F6EFE0",
        }}
      >
        {event.title}
      </h3>
      <div className="flex gap-4 mb-3">
        <p className="text-xs" style={{ color: "#D89B3C" }}>
          {event.date}
        </p>
        <p className="text-xs" style={{ color: "#5c3d2e" }}>
          {event.time}
        </p>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "#8A7A6A" }}>
        {event.description}
      </p>
    </article>
  );
}
