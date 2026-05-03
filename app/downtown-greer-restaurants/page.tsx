import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { TrackedLink } from "@/components/ui/TrackedLink";

export const metadata: Metadata = {
  title: "Downtown Greer Restaurants",
  description:
    "Looking for restaurants in downtown Greer, SC? The Mason Jar on Trade Street serves burgers, ribs, cocktails, and karaoke nights right in the heart of downtown.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/downtown-greer-restaurants`,
  },
  openGraph: {
    title: "Downtown Greer Restaurants | The Mason Jar",
    description:
      "Hungry in downtown Greer? The Mason Jar at 202 Trade St is your go-to bar and grill — great food, cold drinks, and live events every week.",
    images: [
      {
        url: "/images/food/burger-and-beer.jpg",
        width: 1200,
        height: 800,
        alt: "Food at The Mason Jar — downtown Greer restaurant on Trade Street",
      },
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "The Mason Jar",
  url: `${SITE_CONFIG.url}/downtown-greer-restaurants`,
  telephone: "+1-864-879-4454",
  address: {
    "@type": "PostalAddress",
    streetAddress: "202 Trade St",
    addressLocality: "Greer",
    addressRegion: "SC",
    postalCode: "29651",
    addressCountry: "US",
  },
  areaServed: "Downtown Greer, SC",
  servesCuisine: ["American", "Bar Food", "Burgers", "BBQ"],
  priceRange: "$$",
  menu: `${SITE_CONFIG.url}/menu`,
};

const FAQ = [
  {
    q: "What are the best restaurants in downtown Greer, SC?",
    a: "The Mason Jar at 202 Trade St is one of downtown Greer's most popular spots — known for hand-pressed burgers, slow-smoked ribs, craft cocktails, and a lively atmosphere on weekends.",
  },
  {
    q: "Where can I eat late in downtown Greer?",
    a: "The Mason Jar is open Friday and Saturday until 2 AM, making it one of the few downtown Greer restaurants with late-night kitchen hours.",
  },
  {
    q: "Do I need a reservation at downtown Greer restaurants?",
    a: "No reservation needed at The Mason Jar — walk-ins are always welcome. For groups of 10 or more, give us a call at (864) 879-4454.",
  },
  {
    q: "Is there parking near downtown Greer restaurants?",
    a: "Yes — free street parking is available on Trade Street and surrounding downtown streets. It's usually easy to find, especially on weeknights.",
  },
];

export default function DowntownGreerRestaurantsPage() {
  return (
    <div style={{ backgroundColor: "#0E0905", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
              "radial-gradient(ellipse at 50% 0%, rgba(193,127,36,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#D89B3C" }}
          >
            202 Trade St · Greer, SC 29651
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#F6EFE0",
            }}
          >
            Best Restaurant in<br />
            <span style={{ color: "#D89B3C" }}>Downtown Greer, SC</span>
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-8" style={{ color: "#8A7A6A" }}>
            The Mason Jar is Trade Street's go-to bar and grill — great food, cold drinks,
            live karaoke, and a crowd that keeps coming back every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-colors"
              style={{ backgroundColor: "#D89B3C", color: "#0E0905" }}
              gtmEvent={{ event: "cta_click", cta_label: "View Menu", destination: "/menu" }}
            >
              View Our Menu
            </TrackedLink>
            <TrackedLink
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base border-2 transition-colors"
              style={{ borderColor: "rgba(193,127,36,0.5)", color: "#F6EFE0" }}
              gtmEvent={{ event: "cta_click", cta_label: "Hours & Directions", destination: "/contact" }}
            >
              Hours &amp; Directions
            </TrackedLink>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        {/* Why The Mason Jar */}
        <section className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#F6EFE0" }}
          >
            A Downtown Greer Restaurant Worth Finding
          </h2>
          <div className="space-y-4" style={{ color: "#8A7A6A" }}>
            <p className="text-base leading-relaxed">
              Tucked in the heart of Greer's growing downtown on Trade Street, The Mason Jar is the kind of place that becomes a regular spot the first time you walk in. Whether you're a local looking for weeknight dinner or driving in from Greenville or Spartanburg for a night out — The Mason Jar delivers every time.
            </p>
            <p className="text-base leading-relaxed">
              We're one of downtown Greer's most popular restaurants because we keep it simple: real food made fresh, a full bar with craft cocktails and cold drafts, and a vibe that suits everything from a casual lunch to a late Friday night out. The kitchen is open until close on weekends, which makes us a rare find among restaurants in downtown Greer, SC.
            </p>
            <p className="text-base leading-relaxed">
              Our menu covers hand-pressed burgers, slow-smoked ribs, wraps, salads, loaded fries, tater tots, and daily specials. Every order is made to order — no shortcuts, no reheated plates. When the kitchen closes, the karaoke mic goes live, making The Mason Jar one of downtown Greer's favorite late-night restaurants and bars.
            </p>
          </div>
        </section>

        {/* Highlights grid */}
        <section className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#F6EFE0" }}
          >
            What Makes Us Stand Out
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Real Food, Every Order",
                body: "Hand-pressed burgers, slow-smoked ribs, and scratch-made sides. No shortcuts.",
              },
              {
                title: "Full Bar & Craft Cocktails",
                body: "Cold drafts, whiskey, cocktails, and a bar menu built for a night out.",
              },
              {
                title: "Open Late on Weekends",
                body: "Open until 2 AM on Friday and Saturday — one of the few late-night options in downtown Greer.",
              },
              {
                title: "Live Karaoke",
                body: "Every Friday and Saturday starting at 9 PM. No cover, no judgment, just fun.",
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

        {/* Location & Hours */}
        <section
          className="mb-16 p-8 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(193,127,36,0.10) 0%, rgba(193,127,36,0.03) 100%)",
            border: "1px solid rgba(193,127,36,0.2)",
          }}
        >
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#F6EFE0" }}
          >
            Location &amp; Hours
          </h2>
          <p className="text-base mb-1" style={{ color: "#8A7A6A" }}>
            <strong style={{ color: "#F6EFE0" }}>Address:</strong> 202 Trade St, Greer, SC 29651
          </p>
          <p className="text-base mb-1" style={{ color: "#8A7A6A" }}>
            <strong style={{ color: "#F6EFE0" }}>Phone:</strong>{" "}
            <a href={SITE_CONFIG.phone.href} style={{ color: "#D89B3C" }}>
              {SITE_CONFIG.phone.display}
            </a>
          </p>
          <p className="text-base mb-4" style={{ color: "#8A7A6A" }}>
            <strong style={{ color: "#F6EFE0" }}>Hours:</strong> Mon–Thu 11 AM–11 PM · Fri–Sat 11 AM–2 AM · Sun 11 AM–9 PM
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-sm font-semibold"
            style={{ color: "#D89B3C" }}
          >
            Full hours, map &amp; parking →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#F6EFE0" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
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
            Come See For Yourself
          </h2>
          <p className="text-sm mb-6" style={{ color: "#8A7A6A" }}>
            No reservation needed. Just show up to 202 Trade St in downtown Greer and we'll take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <TrackedLink
              href="/menu"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              style={{ backgroundColor: "#D89B3C", color: "#0E0905" }}
              gtmEvent={{ event: "cta_click", cta_label: "View Menu", destination: "/menu" }}
            >
              Browse the Menu
            </TrackedLink>
            <TrackedLink
              href="/events"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-colors"
              style={{ borderColor: "rgba(193,127,36,0.4)", color: "#F6EFE0" }}
              gtmEvent={{ event: "cta_click", cta_label: "See Events", destination: "/events" }}
            >
              See Upcoming Events
            </TrackedLink>
          </div>
        </div>
      </div>
    </div>
  );
}
