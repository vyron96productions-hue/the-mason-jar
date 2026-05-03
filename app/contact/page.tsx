import type { Metadata } from "next";
import { HoursTable } from "@/components/contact/HoursTable";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { BarGuardBadge } from "@/components/ui/BarGuardBadge";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Hours & Directions in Greer SC",
  description:
    "Visit The Mason Jar at 202 Trade St in downtown Greer, SC. Get directions, see our hours, and find out everything you need to plan your visit.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    title: "Restaurant Hours & Directions in Greer SC | The Mason Jar",
    description:
      "Find The Mason Jar at 202 Trade St in downtown Greer, SC. Hours, directions, phone number, and parking info.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "The Mason Jar — 202 Trade St, Downtown Greer, SC",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "#0E0905", minHeight: "100vh" }}>
      {/* Header */}
      <div
        className="pt-32 pb-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0f0b06 0%, #1a1208 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(193,127,36,0.1) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#D89B3C" }}
          >
            We're Easy to Find
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#F6EFE0",
            }}
          >
            Hours &amp; Directions in<br />
            <span style={{ color: "#D89B3C" }}>Downtown Greer, SC</span>
          </h1>
          <p className="text-base md:text-lg" style={{ color: "#8A7A6A" }}>
            Right on Trade Street — the heart of downtown Greer, SC. No reservation needed. Just show up.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Quick CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <TrackedLink
            href={SITE_CONFIG.phone.href}
            className="flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-base transition-colors"
            style={{ backgroundColor: "#D89B3C", color: "#0E0905" }}
            gtmEvent={{ event: "phone_click", click_source: "contact_cta" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now — {SITE_CONFIG.phone.display}
          </TrackedLink>
          <TrackedLink
            href={SITE_CONFIG.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-base border-2 transition-colors"
            style={{ borderColor: "rgba(193,127,36,0.5)", color: "#F6EFE0" }}
            gtmEvent={{ event: "directions_click", click_source: "contact_cta" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Get Directions
          </TrackedLink>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <div className="space-y-10">
            {/* Address */}
            <div>
              <h2
                className="text-sm font-semibold tracking-widest uppercase mb-4"
                style={{ color: "#D89B3C" }}
              >
                Address
              </h2>
              <address className="not-italic">
                <p className="text-xl font-bold mb-1" style={{ color: "#F6EFE0" }}>
                  The Mason Jar Bar &amp; Grill
                </p>
                <p className="text-base" style={{ color: "#8A7A6A" }}>
                  202 Trade St
                </p>
                <p className="text-base mb-4" style={{ color: "#8A7A6A" }}>
                  Greer, SC 29651
                </p>
                <TrackedLink
                  href={SITE_CONFIG.phone.href}
                  className="text-base font-semibold block mb-1"
                  style={{ color: "#D89B3C" }}
                  gtmEvent={{ event: "phone_click", click_source: "contact_address" }}
                >
                  {SITE_CONFIG.phone.display}
                </TrackedLink>
              </address>
            </div>

            {/* Hours */}
            <HoursTable />
            <div className="mt-3">
              <BarGuardBadge label="Bar operations powered by BarGuard" />
            </div>

            {/* Parking & Visit Info */}
            <div>
              <h2
                className="text-sm font-semibold tracking-widest uppercase mb-4"
                style={{ color: "#D89B3C" }}
              >
                Parking & Getting Here
              </h2>
              <div className="space-y-3">
                <div
                  className="flex gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: "rgba(61,43,31,0.3)" }}
                >
                  <span className="text-xl" aria-hidden="true">🚗</span>
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: "#F6EFE0" }}>Street Parking Available</p>
                    <p className="text-xs" style={{ color: "#8A7A6A" }}>
                      Free street parking available on Trade St and surrounding downtown streets. Usually easy to find, especially on weeknights.
                    </p>
                  </div>
                </div>
                <div
                  className="flex gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: "rgba(61,43,31,0.3)" }}
                >
                  <span className="text-xl" aria-hidden="true">🏙️</span>
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: "#F6EFE0" }}>Heart of Downtown Greer</p>
                    <p className="text-xs" style={{ color: "#8A7A6A" }}>
                      We're located right on Trade Street in Greer's growing downtown district — walkable from nearby shops, bars, and businesses.
                    </p>
                  </div>
                </div>
                <div
                  className="flex gap-3 p-4 rounded-xl"
                  style={{ backgroundColor: "rgba(61,43,31,0.3)" }}
                >
                  <span className="text-xl" aria-hidden="true">📍</span>
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: "#F6EFE0" }}>No Reservation Needed</p>
                    <p className="text-xs" style={{ color: "#8A7A6A" }}>
                      Walk-ins always welcome. For large groups (10+), give us a call so we can get things ready for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h2
                className="text-sm font-semibold tracking-widest uppercase mb-4"
                style={{ color: "#D89B3C" }}
              >
                Follow Us
              </h2>
              <div className="flex gap-3">
                <TrackedLink
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: "rgba(193,127,36,0.1)",
                    color: "#D89B3C",
                    border: "1px solid rgba(193,127,36,0.2)",
                  }}
                  gtmEvent={{ event: "social_click", platform: "facebook", click_source: "contact" }}
                >
                  Facebook @themasonjargreer
                </TrackedLink>
                <TrackedLink
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: "rgba(193,127,36,0.1)",
                    color: "#D89B3C",
                    border: "1px solid rgba(193,127,36,0.2)",
                  }}
                  gtmEvent={{ event: "social_click", platform: "instagram", click_source: "contact" }}
                >
                  Instagram @tmjgreer
                </TrackedLink>
              </div>
            </div>
          </div>

          {/* Right — Map */}
          <div>
            <h2
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#D89B3C" }}
            >
              Find Us on the Map
            </h2>
            <MapEmbed />

            {/* Local area note */}
            <div
              className="mt-6 p-5 rounded-2xl"
              style={{
                backgroundColor: "rgba(61,43,31,0.3)",
                border: "1px solid rgba(193,127,36,0.1)",
              }}
            >
              <h3 className="text-base font-bold mb-2" style={{ color: "#F6EFE0" }}>
                In the Area?
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#8A7A6A" }}>
                The Mason Jar is a short drive from Spartanburg, Greenville, and the entire Upstate South Carolina area. We're the go-to{" "}
                <TrackedLink
                  href="/downtown-greer-bar-and-grill"
                  style={{ color: "#D89B3C" }}
                  gtmEvent={{ event: "internal_link_click", destination: "/downtown-greer-bar-and-grill" }}
                >
                  downtown Greer bar and grill
                </TrackedLink>{" "}
                for locals and first-timers alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
