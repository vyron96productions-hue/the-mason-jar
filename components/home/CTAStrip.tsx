import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export function CTAStrip() {
  return (
    <section
      className="py-24 relative overflow-hidden grain"
      style={{
        background:
          "linear-gradient(160deg, #150B05 0%, #201008 30%, #2C1508 55%, #1A0D06 80%, #0E0905 100%)",
      }}
      aria-labelledby="cta-heading"
    >
      {/* Large burst glow from bottom center */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none animate-glow-pulse"
        style={{
          width: "900px",
          height: "500px",
          background:
            "radial-gradient(ellipse at bottom, rgba(216,155,60,0.18) 0%, transparent 65%)",
        }}
      />
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-48 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 200px at 50% 0%, rgba(216,155,60,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Decorative top line */}
        <div className="divider-gold max-w-xs mx-auto mb-8" />

        <p className="eyebrow mb-5">Come On In</p>

        <h2
          id="cta-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#F6EFE0",
            textShadow: "0 2px 30px rgba(0,0,0,0.5)",
          }}
        >
          Ready for a Great Night Out<br />
          <span className="text-gold-gradient">in Downtown Greer?</span>
        </h2>

        <p
          className="text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed"
          style={{ color: "#7A6A5A" }}
        >
          Great food, cold drinks, and a good time are waiting at 202 Trade St.
          Open daily starting at 11 AM — no reservation needed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={SITE_CONFIG.phone.href}
            className="btn-gold inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-semibold text-base w-full sm:w-auto"
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
            className="btn-outline-gold inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-semibold text-base w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Get Directions
          </a>
          <Link
            href="/menu"
            className="btn-outline-gold inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl font-semibold text-base w-full sm:w-auto"
          >
            View Menu
          </Link>
        </div>

        {/* Address strip */}
        <div className="divider-gold max-w-xs mx-auto mb-6" />
        <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#4A3828" }}>
          202 Trade St · Greer, SC 29651 · Open Daily 11 AM
        </p>
      </div>
    </section>
  );
}
