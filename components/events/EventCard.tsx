import type { Event } from "@/lib/events-data";

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article
      className="p-6 md:p-8 rounded-2xl flex flex-col gap-4"
      style={{
        backgroundColor: "rgba(61,43,31,0.35)",
        border: "1px solid rgba(193,127,36,0.15)",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="text-4xl" aria-hidden="true">{event.icon}</div>
        {event.badge && (
          <span
            className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              backgroundColor: "rgba(193,127,36,0.15)",
              color: "#c17f24",
              border: "1px solid rgba(193,127,36,0.3)",
            }}
          >
            {event.badge}
          </span>
        )}
      </div>
      <div>
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-1"
          style={{ color: "#c17f24" }}
        >
          {event.day}
        </p>
        <h3
          className="text-2xl font-bold mb-1"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#f5efe0",
          }}
        >
          {event.title}
        </h3>
        <p className="text-sm" style={{ color: "#8a7a6a" }}>
          {event.time}
        </p>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: "#8a7a6a" }}>
        {event.description}
      </p>
    </article>
  );
}
