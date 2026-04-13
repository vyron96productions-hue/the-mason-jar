import Link from "next/link";
import { WEEKLY_EVENTS } from "@/lib/events-data";

export function EventsPreview() {
  const preview = WEEKLY_EVENTS.slice(0, 4);

  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "#3d2b1f" }}
      aria-labelledby="events-preview-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "#c17f24" }}
            >
              What's On
            </p>
            <h2
              id="events-preview-heading"
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#f5efe0",
              }}
            >
              Events Every Night<br />
              <span style={{ color: "#c17f24" }}>of the Week</span>
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors shrink-0"
            style={{ color: "#c17f24" }}
          >
            See All Events →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {preview.map((event) => (
            <article
              key={event.id}
              className="p-6 rounded-2xl flex flex-col gap-3"
              style={{
                backgroundColor: "rgba(26,18,8,0.5)",
                border: "1px solid rgba(193,127,36,0.15)",
              }}
            >
              <div className="text-3xl" aria-hidden="true">{event.icon}</div>
              <div>
                <span
                  className="text-xs font-semibold tracking-widest uppercase block mb-1"
                  style={{ color: "#c17f24" }}
                >
                  {event.day}
                </span>
                <h3
                  className="text-lg font-bold"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "#f5efe0",
                  }}
                >
                  {event.title}
                </h3>
              </div>
              <p className="text-xs" style={{ color: "#8a7a6a" }}>
                {event.time}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#8a7a6a" }}>
                {event.description}
              </p>
            </article>
          ))}
        </div>

        {/* Karaoke callout */}
        <div
          className="mt-10 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(193,127,36,0.15) 0%, rgba(193,127,36,0.05) 100%)",
            border: "1px solid rgba(193,127,36,0.3)",
          }}
        >
          <div>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-1"
              style={{ color: "#c17f24" }}
            >
              Every Friday & Saturday Night
            </p>
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#f5efe0",
              }}
            >
              🎤 Karaoke Night — 9 PM to Close
            </h3>
            <p className="mt-2 text-sm" style={{ color: "#8a7a6a" }}>
              Downtown Greer's most popular night out. Pick a song. Take the stage. This crowd is on your side.
            </p>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-colors shrink-0"
            style={{ backgroundColor: "#c17f24", color: "#1a1208" }}
          >
            See All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
