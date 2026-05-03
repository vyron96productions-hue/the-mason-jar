import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { TrackedLink } from "@/components/ui/TrackedLink";

export const metadata: Metadata = {
  title: "Karaoke Bar in Greer SC",
  description:
    "Karaoke every Friday and Saturday at The Mason Jar in downtown Greer, SC. Starting at 9 PM, no cover charge. 202 Trade St — Greer's favorite karaoke bar.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/karaoke-greer-sc`,
  },
  openGraph: {
    title: "Karaoke Bar in Greer SC | The Mason Jar",
    description:
      "Friday and Saturday karaoke nights at The Mason Jar — 9 PM to close, no cover, downtown Greer SC. Pick a song, take the stage.",
    images: [
      {
        url: "/images/events/karaoke.jpg",
        width: 1200,
        height: 800,
        alt: "Karaoke night at The Mason Jar — Greer SC karaoke bar on Trade Street",
      },
    ],
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Karaoke Night at The Mason Jar",
  description:
    "Friday and Saturday karaoke nights at The Mason Jar in downtown Greer, SC. Starts at 9 PM, runs until close. No cover charge.",
  eventSchedule: {
    "@type": "Schedule",
    repeatFrequency: "P1W",
    byDay: ["https://schema.org/Friday", "https://schema.org/Saturday"],
    startTime: "21:00",
  },
  location: {
    "@type": "Place",
    name: "The Mason Jar",
    address: {
      "@type": "PostalAddress",
      streetAddress: "202 Trade St",
      addressLocality: "Greer",
      addressRegion: "SC",
      postalCode: "29651",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Restaurant",
    name: "The Mason Jar",
    url: SITE_CONFIG.url,
    telephone: "+1-864-879-4454",
  },
  isAccessibleForFree: true,
};

const FAQ = [
  {
    q: "When is karaoke at The Mason Jar in Greer?",
    a: "Karaoke runs every Friday and Saturday night starting at 9 PM and goes until close (2 AM). No cover charge.",
  },
  {
    q: "Is there a cover charge for karaoke?",
    a: "No — karaoke at The Mason Jar is free. Walk in, grab a drink, put your name in, and get ready to perform.",
  },
  {
    q: "Can I reserve a spot for karaoke?",
    a: "No reservation needed. Show up to 202 Trade St any Friday or Saturday after 9 PM and you can sign up on the spot.",
  },
  {
    q: "Is there food available during karaoke?",
    a: "Yes — the kitchen is open late on Friday and Saturday. Order burgers, wings, fries, and more while you wait for your turn.",
  },
  {
    q: "Is karaoke at The Mason Jar open to all ages?",
    a: "The Mason Jar is a bar environment. Please check with us if you have questions about age restrictions for late-night events.",
  },
];

export default function KaraokeGreerScPage() {
  return (
    <div style={{ backgroundColor: "#0E0905", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      {/* Header */}
      <div
        className="pt-32 pb-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0f0b06 0%, #1a1208 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(193,127,36,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#D89B3C" }}
          >
            Every Friday &amp; Saturday · 9 PM to Close
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#F6EFE0",
            }}
          >
            Karaoke Bar in<br />
            <span style={{ color: "#D89B3C" }}>Greer, SC</span>
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-8" style={{ color: "#8A7A6A" }}>
            The Mason Jar on Trade Street is downtown Greer's go-to karaoke night.
            No cover, no judgment — just a great crowd, great drinks, and your moment in the spotlight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href={SITE_CONFIG.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-colors"
              style={{ backgroundColor: "#D89B3C", color: "#0E0905" }}
              gtmEvent={{ event: "directions_click", click_source: "karaoke_page_hero" }}
            >
              Get Directions
            </TrackedLink>
            <TrackedLink
              href="/events"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base border-2 transition-colors"
              style={{ borderColor: "rgba(193,127,36,0.5)", color: "#F6EFE0" }}
              gtmEvent={{ event: "cta_click", cta_label: "All Events", destination: "/events" }}
            >
              All Events
            </TrackedLink>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        {/* Schedule card */}
        <section className="mb-16">
          <div
            className="p-8 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(193,127,36,0.14) 0%, rgba(20,12,5,0.95) 60%)",
              border: "1px solid rgba(216,155,60,0.35)",
            }}
          >
            <h2
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#F6EFE0" }}
            >
              🎤 Karaoke Schedule
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Days", value: "Every Friday & Saturday" },
                { label: "Start Time", value: "9 PM" },
                { label: "Cover Charge", value: "Free" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl text-center"
                  style={{ backgroundColor: "rgba(61,43,31,0.4)" }}
                >
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#D89B3C" }}>
                    {label}
                  </p>
                  <p className="text-lg font-bold" style={{ color: "#F6EFE0" }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#F6EFE0" }}
          >
            Downtown Greer's Favorite Karaoke Night
          </h2>
          <div className="space-y-4" style={{ color: "#8A7A6A" }}>
            <p className="text-base leading-relaxed">
              Every Friday and Saturday starting at 9 PM, The Mason Jar transforms into the best karaoke bar in Greer, SC. The stage is yours — from classic rock to country, pop hits to throwbacks. Our karaoke library covers thousands of songs so there's always something for every singer in the room.
            </p>
            <p className="text-base leading-relaxed">
              No cover charge. No minimum. Just walk in, put your name in, and wait for your turn while you enjoy a round from the bar and some food from the kitchen. The crowd at The Mason Jar is welcoming — whether you're a first-timer or a karaoke regular, this room is on your side.
            </p>
            <p className="text-base leading-relaxed">
              The kitchen stays open late on karaoke nights so you can fuel up between songs. Hand-pressed burgers, loaded tater tots, wings, and more — all made fresh while the mic keeps going until last call at 2 AM. There's no better Friday or Saturday night in Greer.
            </p>
            <p className="text-base leading-relaxed">
              The Mason Jar is at 202 Trade St in the heart of{" "}
              <Link href="/downtown-greer-restaurants" style={{ color: "#D89B3C" }}>
                downtown Greer
              </Link>
              {" "}— easy to find, easy to park, and impossible to forget once you've been.
            </p>
          </div>
        </section>

        {/* What to expect */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#F6EFE0" }}
          >
            What to Expect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Huge Song Library",
                body: "Thousands of songs across all genres. Rock, country, pop, hip-hop, classics — if it's a karaoke hit, we've got it.",
              },
              {
                title: "No Cover, Ever",
                body: "Karaoke at The Mason Jar is always free to attend. Just show up and sign up.",
              },
              {
                title: "Late-Night Food",
                body: "Full kitchen open until close on Fridays and Saturdays. Order burgers, wings, and more while you sing.",
              },
              {
                title: "Great Bar",
                body: "Full bar with craft cocktails, cold drafts, and drink specials. The perfect backdrop for a big performance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: "rgba(61,43,31,0.3)",
                  border: "1px solid rgba(193,127,36,0.1)",
                }}
              >
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#F6EFE0" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8A7A6A" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#F6EFE0" }}
          >
            Karaoke FAQ
          </h2>
          <div className="space-y-5">
            {FAQ.map(({ q, a }) => (
              <div
                key={q}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "rgba(61,43,31,0.2)", border: "1px solid rgba(193,127,36,0.08)" }}
              >
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#F6EFE0" }}
                >
                  {q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8A7A6A" }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div
          className="p-8 rounded-2xl text-center"
          style={{ backgroundColor: "rgba(61,43,31,0.3)", border: "1px solid rgba(193,127,36,0.12)" }}
        >
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#F6EFE0" }}
          >
            We&apos;ll See You Friday Night
          </h2>
          <p className="text-sm mb-2" style={{ color: "#8A7A6A" }}>
            202 Trade St, downtown Greer · Karaoke starts at 9 PM · No cover charge
          </p>
          <p className="text-sm mb-6" style={{ color: "#8A7A6A" }}>
            Follow us on Facebook for special events and announcements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={SITE_CONFIG.phone.href}
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              style={{ backgroundColor: "#D89B3C", color: "#0E0905" }}
            >
              Call {SITE_CONFIG.phone.display}
            </a>
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-colors"
              style={{ borderColor: "rgba(193,127,36,0.4)", color: "#F6EFE0" }}
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
