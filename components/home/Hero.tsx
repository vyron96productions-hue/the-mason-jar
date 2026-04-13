import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Welcome to The Mason Jar"
    >
      {/* Background — swap src for real hero photo */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder: replace with <Image> once hero photo is available */}
        {/* Recommended: public/images/hero/hero-bg.jpg — bar interior or crowd shot */}
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(135deg, #0f0b06 0%, #1a1208 40%, #3d2b1f 100%)",
          }}
        />
        {/* Dark overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,7,3,0.5) 0%, rgba(10,7,3,0.3) 50%, rgba(10,7,3,0.8) 100%)",
          }}
        />
      </div>

      {/* Decorative amber glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: "#c17f24" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-6 animate-fade-in-up"
          style={{ color: "#c17f24" }}
        >
          Downtown Greer, South Carolina
        </p>

        {/* Main Heading */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 animate-fade-in-up animate-delay-100"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#f5efe0",
          }}
        >
          The
          <br />
          <span style={{ color: "#c17f24" }}>Mason Jar</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-4 animate-fade-in-up animate-delay-200"
          style={{ color: "#e8dcc8" }}
        >
          Bar &amp; Grill
        </p>

        <p
          className="text-base md:text-lg max-w-xl mx-auto mb-10 animate-fade-in-up animate-delay-300"
          style={{ color: "#8a7a6a" }}
        >
          Great food. Cold drinks. Live events. Greer's neighborhood spot for a
          good time — every night of the week.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-400">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl transition-colors w-full sm:w-auto"
            style={{
              backgroundColor: "#c17f24",
              color: "#1a1208",
            }}
          >
            View Our Menu
          </Link>
          <a
            href={SITE_CONFIG.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border-2 transition-colors w-full sm:w-auto"
            style={{
              borderColor: "rgba(193,127,36,0.6)",
              color: "#f5efe0",
            }}
          >
            Get Directions
          </a>
        </div>

        {/* Quick NAP strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animate-delay-400">
          <a
            href={SITE_CONFIG.phone.href}
            className="flex items-center gap-2 text-sm transition-colors hover:text-amber-light"
            style={{ color: "#8a7a6a" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {SITE_CONFIG.phone.display}
          </a>
          <span style={{ color: "#3d2b1f" }}>·</span>
          <span className="flex items-center gap-2 text-sm" style={{ color: "#8a7a6a" }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            202 Trade St, Greer, SC
          </span>
          <span style={{ color: "#3d2b1f" }}>·</span>
          <span className="flex items-center gap-2 text-sm" style={{ color: "#8a7a6a" }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Open Daily 11 AM
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: "#c17f24", opacity: 0.6 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
