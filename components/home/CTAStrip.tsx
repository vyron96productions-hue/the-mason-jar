import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export function CTAStrip() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #3d2b1f 0%, #1a1208 100%)",
      }}
      aria-labelledby="cta-heading"
    >
      {/* Amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(193,127,36,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-4"
          style={{ color: "#c17f24" }}
        >
          Come On In
        </p>
        <h2
          id="cta-heading"
          className="text-3xl md:text-5xl font-bold mb-4"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#f5efe0",
          }}
        >
          Ready for a Great Night Out<br />in Downtown Greer?
        </h2>
        <p className="text-base md:text-lg mb-10 max-w-xl mx-auto" style={{ color: "#8a7a6a" }}>
          Great food, cold drinks, and a good time are waiting at 202 Trade St. Open daily starting at 11 AM — no reservations needed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE_CONFIG.phone.href}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-colors w-full sm:w-auto"
            style={{ backgroundColor: "#c17f24", color: "#1a1208" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {SITE_CONFIG.phone.display}
          </a>
          <a
            href={SITE_CONFIG.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border-2 transition-colors w-full sm:w-auto"
            style={{ borderColor: "rgba(193,127,36,0.5)", color: "#f5efe0" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Get Directions
          </a>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border-2 transition-colors w-full sm:w-auto"
            style={{ borderColor: "rgba(193,127,36,0.5)", color: "#f5efe0" }}
          >
            View Menu
          </Link>
        </div>

        {/* Address reminder */}
        <p className="mt-8 text-sm" style={{ color: "#5c3d2e" }}>
          📍 202 Trade St, Greer, SC 29651 · Open Daily 11 AM
        </p>
      </div>
    </section>
  );
}
