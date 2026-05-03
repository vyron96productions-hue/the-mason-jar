import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { TrackedLink } from "@/components/ui/TrackedLink";

export const metadata: Metadata = {
  title: "Downtown Greer Bar & Grill",
  description:
    "The Mason Jar is downtown Greer's favorite bar and grill at 202 Trade St. Craft cocktails, cold drafts, hand-pressed burgers, late-night hours, and karaoke every weekend.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/downtown-greer-bar-and-grill`,
  },
  openGraph: {
    title: "Downtown Greer Bar & Grill | The Mason Jar",
    description:
      "Your downtown Greer bar and grill on Trade Street. Burgers, cocktails, cold beer, late-night kitchen, and karaoke every Friday and Saturday.",
    images: [
      {
        url: "/images/food/burger-and-beer.jpg",
        width: 1200,
        height: 800,
        alt: "Bar and grill food at The Mason Jar — downtown Greer, SC",
      },
    ],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "BarOrPub"],
  name: "The Mason Jar",
  url: `${SITE_CONFIG.url}/downtown-greer-bar-and-grill`,
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

export default function DowntownGreerBarAndGrillPage() {
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
            Trade Street · Downtown Greer, SC
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#F6EFE0",
            }}
          >
            Downtown Greer<br />
            <span style={{ color: "#D89B3C" }}>Bar &amp; Grill</span>
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-8" style={{ color: "#8A7A6A" }}>
            The Mason Jar is Trade Street's neighborhood bar and grill — craft cocktails, cold drafts,
            real food, and a crowd that shows up every weekend for a reason.
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

        {/* Main content */}
        <section className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#F6EFE0" }}
          >
            Greer's Neighborhood Bar, Right on Trade Street
          </h2>
          <div className="space-y-4" style={{ color: "#8A7A6A" }}>
            <p className="text-base leading-relaxed">
              If you're looking for a downtown Greer bar and grill with real food and a full bar, The Mason Jar has been the answer since we opened on Trade Street. We're not a chain, not a theme bar — just a neighborhood spot run by people who actually care about what they serve.
            </p>
            <p className="text-base leading-relaxed">
              The bar stocks everything you'd want: craft cocktails, cold domestic and craft drafts, whiskey, tequila, and a rotating drink special that changes with the week. Pair that with a kitchen that stays open late on weekends and you've got the closest thing to a perfect night out in downtown Greer.
            </p>
            <p className="text-base leading-relaxed">
              As a bar and grill, we take the food as seriously as the drinks. The Mason Jar menu runs from hand-pressed half-pound burgers and slow-smoked baby back ribs to wraps, salads, loaded tater tots, and more. Everything is cooked to order. No frozen patties, no reheated plates. Come hungry.
            </p>
            <p className="text-base leading-relaxed">
              And when the kitchen winds down on Friday and Saturday nights, the energy picks up: karaoke kicks off at 9 PM and runs until close. No cover, no judgment — just downtown Greer being exactly the kind of place it should be.
            </p>
          </div>
        </section>

        {/* Bar highlights */}
        <section className="mb-16">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#F6EFE0" }}
          >
            The Full Bar &amp; Grill Experience
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Full Bar",
                body: "Craft cocktails, whiskey pours, cold drafts, and a rotating drink special. The bar is open every night.",
              },
              {
                title: "Late-Night Kitchen",
                body: "Open until 2 AM on Friday and Saturday — one of the few downtown Greer bars with a real kitchen running late.",
              },
              {
                title: "Burgers & Bar Food Done Right",
                body: "Half-pound hand-pressed burgers, slow-smoked ribs, wings, wraps, and loaded fries. Made fresh every order.",
              },
              {
                title: "Game Day & Events",
                body: "We've got screens for the big game, weekly specials, and karaoke every Friday and Saturday starting at 9 PM.",
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

        {/* Location */}
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
            Find Us in Downtown Greer
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
          <p className="text-sm mb-4" style={{ color: "#8A7A6A" }}>
            Free street parking on Trade St and surrounding blocks. Walk-ins always welcome.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color: "#D89B3C" }}
            >
              Map &amp; full hours →
            </Link>
            <Link
              href="/karaoke-greer-sc"
              className="inline-flex items-center gap-1 text-sm font-semibold"
              style={{ color: "#D89B3C" }}
            >
              Karaoke nights →
            </Link>
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
            Ready for a Great Night Out?
          </h2>
          <p className="text-sm mb-6" style={{ color: "#8A7A6A" }}>
            No reservation needed. 202 Trade St, downtown Greer — right in the middle of it all.
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
              See What&apos;s On
            </TrackedLink>
          </div>
        </div>
      </div>
    </div>
  );
}
