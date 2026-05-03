import { MapEmbed } from "@/components/contact/MapEmbed";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { SITE_CONFIG } from "@/lib/site-config";

export function HomeMapStrip() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0E0905 0%, #160C06 50%, #0E0905 100%)",
      }}
      aria-label="Find The Mason Jar"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 400px at 50% 50%, rgba(216,155,60,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — Copy */}
          <div>
            <p className="eyebrow mb-4">Come Find Us</p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#F6EFE0",
              }}
            >
              Right in the Heart of{" "}
              <span className="text-gold-gradient">Downtown Greer</span>
            </h2>

            <div
              className="w-12 h-0.5 mb-6 rounded-full"
              style={{ background: "linear-gradient(90deg, #D89B3C, transparent)" }}
            />

            <address className="not-italic mb-8 space-y-2">
              <p className="text-lg font-semibold" style={{ color: "#F6EFE0" }}>
                The Mason Jar Bar &amp; Grill
              </p>
              <p style={{ color: "#8A7A6A" }}>202 Trade St, Greer, SC 29651</p>
              <TrackedLink
                href={SITE_CONFIG.phone.href}
                className="block font-semibold transition-colors duration-200"
                style={{ color: "#D89B3C" }}
                gtmEvent={{ event: "phone_click", click_source: "home_map_strip" }}
              >
                {SITE_CONFIG.phone.display}
              </TrackedLink>
            </address>

            <div className="space-y-3 mb-8" style={{ color: "#7A6A5A" }}>
              <div className="flex gap-3">
                <span className="shrink-0 font-semibold" style={{ color: "#D89B3C", width: "110px" }}>Mon – Tue</span>
                <span>11 AM – 10 PM</span>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0 font-semibold" style={{ color: "#D89B3C", width: "110px" }}>Wed – Thu</span>
                <span>11 AM – 11 PM</span>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0 font-semibold" style={{ color: "#D89B3C", width: "110px" }}>Fri – Sat</span>
                <span>11 AM – 2 AM</span>
              </div>
              <div className="flex gap-3">
                <span className="shrink-0 font-semibold" style={{ color: "#D89B3C", width: "110px" }}>Sunday</span>
                <span>11 AM – 9 PM</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <TrackedLink
                href={SITE_CONFIG.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm"
                gtmEvent={{ event: "directions_click", click_source: "home_map_strip" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </TrackedLink>
              <TrackedLink
                href={SITE_CONFIG.phone.href}
                className="btn-outline-gold inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm"
                gtmEvent={{ event: "phone_click", click_source: "home_map_strip" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </TrackedLink>
            </div>
          </div>

          {/* Right — Map */}
          <div>
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
