import type { Metadata } from "next";
import Image from "next/image";
import { WEEKLY_EVENTS, SPECIAL_EVENTS } from "@/lib/events-data";
import { EventCard } from "@/components/events/EventCard";
import { SpecialEventCard } from "@/components/events/SpecialEventCard";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Karaoke & Events in Greer SC",
  description:
    "See what's happening at The Mason Jar in Greer, SC. Weekly karaoke nights, live music, ladies night, wing nights, game day watch parties, and more.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/events`,
  },
  openGraph: {
    title: "Karaoke & Events in Greer SC | The Mason Jar",
    description:
      "Friday and Saturday karaoke, live entertainment, wing nights, ladies nights, and more at The Mason Jar in downtown Greer, SC.",
    images: [
      {
        url: "/images/events/karaoke.jpg",
        width: 1200,
        height: 800,
        alt: "Karaoke night at The Mason Jar — downtown Greer SC events",
      },
    ],
  },
};

export default function EventsPage() {
  return (
    <div style={{ backgroundColor: "#0E0905", minHeight: "100vh" }}>
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
            style={{ color: "#D89B3C" }}
          >
            Live. Every Week.
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#F6EFE0",
            }}
          >
            Karaoke &amp; Events in<br />
            <span style={{ color: "#D89B3C" }}>Greer, SC</span>
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: "#8A7A6A" }}>
            Something's always going on at The Mason Jar. From Friday night karaoke to weekday specials — here's your guide to the week.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Karaoke Feature Banner */}
        <div
          className="mb-16 rounded-3xl overflow-hidden relative"
          style={{ border: "1px solid rgba(216,155,60,0.35)", minHeight: "340px" }}
        >
          {/* Background photo */}
          <Image
            src="/images/events/karaoke.jpg"
            alt="Karaoke night at The Mason Jar in downtown Greer SC"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(8,5,2,0.82) 0%, rgba(20,10,4,0.72) 60%, rgba(8,5,2,0.85) 100%)",
            }}
          />
          {/* Content */}
          <div className="relative z-10 p-8 md:p-14 text-center">
            <p className="eyebrow mb-3">Every Friday &amp; Saturday</p>
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#F6EFE0",
                textShadow: "0 2px 20px rgba(0,0,0,0.6)",
              }}
            >
              🎤 Karaoke Night{" "}
              <span className="text-gold-gradient">— 9 PM to Close</span>
            </h2>
            <p className="text-base max-w-xl mx-auto mb-8" style={{ color: "#D9CCBA" }}>
              The most fun night out in downtown Greer. Pick your song, take the stage, and let The Mason Jar crowd be your biggest fan. No cover, no judgment — just a great time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-0">
              <a
                href="/karaoke-greer-sc"
                className="btn-gold inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm"
              >
                Karaoke Details
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm border-2"
                style={{ borderColor: "rgba(216,155,60,0.4)", color: "#F6EFE0" }}
              >
                Follow on Facebook for Updates
              </a>
            </div>
          </div>
        </div>

        {/* Weekly Events */}
        <div className="mb-16">
          <div className="mb-8">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#D89B3C" }}
            >
              Recurring Events
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#F6EFE0",
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
              style={{ color: "#D89B3C" }}
            >
              Special Events
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#F6EFE0",
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
              color: "#F6EFE0",
            }}
          >
            Never Miss a Night
          </h3>
          <p className="text-sm mb-6" style={{ color: "#8A7A6A" }}>
            Follow us on Facebook for last-minute announcements, event updates, and nightly specials. We post everything there first.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              style={{ backgroundColor: "#D89B3C", color: "#0E0905" }}
            >
              Follow on Facebook
            </a>
            <a
              href={SITE_CONFIG.phone.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-colors"
              style={{
                borderColor: "rgba(193,127,36,0.4)",
                color: "#F6EFE0",
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
