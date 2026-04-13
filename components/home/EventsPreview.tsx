import Link from "next/link";
import { WEEKLY_EVENTS } from "@/lib/events-data";

export function EventsPreview() {
  const preview = WEEKLY_EVENTS.slice(0, 4);

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #1A0D06 0%, #261508 40%, #2E1A0A 70%, #221208 100%)",
      }}
      aria-labelledby="events-preview-heading"
    >
      {/* Ambient left glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "400px",
          height: "600px",
          background:
            "radial-gradient(ellipse at left, rgba(216,155,60,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-3">What's On</p>
            <h2
              id="events-preview-heading"
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#F6EFE0",
              }}
            >
              Events Every Night<br />
              <span className="text-gold-gradient">of the Week</span>
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200 shrink-0 group"
            style={{ color: "#D89B3C" }}
          >
            See All Events
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {preview.map((event) => (
            <article
              key={event.id}
              className="card-lift p-6 rounded-2xl flex flex-col gap-3"
              style={{
                background:
                  "linear-gradient(145deg, rgba(216,155,60,0.06) 0%, rgba(14,9,5,0.8) 100%)",
                border: "1px solid rgba(216,155,60,0.16)",
                boxShadow:
                  "0 6px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(216,155,60,0.07)",
              }}
            >
              <div className="text-3xl" aria-hidden="true">{event.icon}</div>
              <div>
                <span className="eyebrow block mb-1" style={{ fontSize: "0.65rem" }}>
                  {event.day}
                </span>
                <h3
                  className="text-lg font-bold"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "#F6EFE0",
                  }}
                >
                  {event.title}
                </h3>
              </div>
              <p className="text-xs font-medium" style={{ color: "rgba(216,155,60,0.55)" }}>
                {event.time}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#7A6A5A" }}>
                {event.description}
              </p>
            </article>
          ))}
        </div>

        {/* Karaoke callout banner */}
        <div
          className="p-7 md:p-9 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(216,155,60,0.16) 0%, rgba(20,12,5,0.95) 60%, rgba(216,155,60,0.08) 100%)",
            border: "1px solid rgba(216,155,60,0.35)",
            boxShadow:
              "0 0 40px rgba(216,155,60,0.08), inset 0 1px 0 rgba(216,155,60,0.15)",
          }}
        >
          {/* Glow behind text */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at left, rgba(216,155,60,0.10) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <p className="eyebrow mb-1">Every Friday &amp; Saturday Night</p>
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#F6EFE0",
              }}
            >
              🎤 Karaoke Night — 9 PM to Close
            </h3>
            <p className="mt-2 text-sm" style={{ color: "#7A6A5A" }}>
              Downtown Greer's most popular night out. Pick a song. Take the stage.
              This crowd is on your side.
            </p>
          </div>
          <Link
            href="/events"
            className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm whitespace-nowrap shrink-0 relative z-10"
          >
            See All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
