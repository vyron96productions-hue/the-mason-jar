import type { Metadata } from "next";
import { WEEKLY_EVENTS, SPECIAL_EVENTS } from "@/lib/events-data";
import { EventCard } from "@/components/events/EventCard";
import { SpecialEventCard } from "@/components/events/SpecialEventCard";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Events — Karaoke, Live Music & Weekly Specials",
  description:
    "See what's happening at The Mason Jar in Greer, SC. Weekly karaoke nights, live music, ladies night, wing nights, game day watch parties, and more.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/events`,
  },
  openGraph: {
    title: "Events | The Mason Jar Bar & Grill – Greer, SC",
    description:
      "Friday and Saturday karaoke, live entertainment, wing nights, ladies nights, and more at The Mason Jar in downtown Greer, SC.",
  },
};

export default function EventsPage() {
  return (
    <div style={{ backgroundColor: "#1a1208", minHeight: "100vh" }}>
      {/* Page Header */}
      <div
        className="pt-32 pb-16 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0f0b06 0%, #1a1208 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(193,127,36,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#c17f24" }}
          >
            Live. Every Week.
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#f5efe0",
            }}
          >
            Events at<br />
            <span style={{ color: "#c17f24" }}>The Mason Jar</span>
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: "#8a7a6a" }}>
            Something's always going on at The Mason Jar. From Friday night karaoke to weekday specials — here's your guide to the week.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Karaoke Feature Banner */}
        <div
          className="mb-16 p-8 md:p-12 rounded-3xl text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(193,127,36,0.2) 0%, rgba(193,127,36,0.05) 100%)",
            border: "1px solid rgba(193,127,36,0.35)",
          }}
        >
          <div className="text-6xl mb-4" aria-hidden="true">🎤</div>
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#c17f24" }}
          >
            Every Friday & Saturday
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#f5efe0",
            }}
          >
            Karaoke Night — 9 PM to Close
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#8a7a6a" }}>
            The most fun night out in downtown Greer. Pick your song, take the stage, and let The Mason Jar crowd be your biggest fan. No cover, no judgment — just a great time.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              style={{ backgroundColor: "#c17f24", color: "#1a1208" }}
            >
              Follow on Facebook for Updates
            </a>
          </div>
        </div>

        {/* Weekly Events */}
        <div className="mb-16">
          <div className="mb-8">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#c17f24" }}
            >
              Recurring Events
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#f5efe0",
              }}
            >
              Weekly Schedule
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WEEKLY_EVENTS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Special Events */}
        <div className="mb-16">
          <div className="mb-8">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#c17f24" }}
            >
              Special Events
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#f5efe0",
              }}
            >
              Live Music, Sports & More
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPECIAL_EVENTS.map((event) => (
              <SpecialEventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Stay Updated CTA */}
        <div
          className="p-8 rounded-2xl text-center"
          style={{
            backgroundColor: "rgba(61,43,31,0.3)",
            border: "1px solid rgba(193,127,36,0.12)",
          }}
        >
          <h3
            className="text-2xl font-bold mb-3"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#f5efe0",
            }}
          >
            Never Miss a Night
          </h3>
          <p className="text-sm mb-6" style={{ color: "#8a7a6a" }}>
            Follow us on Facebook for last-minute announcements, event updates, and nightly specials. We post everything there first.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              style={{ backgroundColor: "#c17f24", color: "#1a1208" }}
            >
              Follow on Facebook
            </a>
            <a
              href={SITE_CONFIG.phone.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-colors"
              style={{
                borderColor: "rgba(193,127,36,0.4)",
                color: "#f5efe0",
              }}
            >
              Call {SITE_CONFIG.phone.display}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
