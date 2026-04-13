import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain"
      aria-label="Welcome to The Mason Jar"
    >
      {/* ── Hero photo ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero.png"
          alt="The Mason Jar bar and grill interior — downtown Greer, SC"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay so text stays legible over any photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(8,5,2,0.82) 0%, rgba(14,8,3,0.78) 40%, rgba(20,10,4,0.72) 70%, rgba(8,5,2,0.88) 100%)",
          }}
        />
        {/* Extra center darkening — kills bright midground (buildings, signage) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 45%, rgba(6,3,1,0.35) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Large ambient amber glow — center ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none animate-glow-pulse"
        style={{
          background:
            "radial-gradient(ellipse 1000px 650px at 50% 42%, rgba(216,155,60,0.18) 0%, transparent 70%)",
        }}
      />

      {/* ── Secondary warm glow — lower left ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 600px 400px at 15% 70%, rgba(180,80,20,0.10) 0%, transparent 60%)",
        }}
      />

      {/* ── Vignette overlay ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(5,3,1,0.65) 100%)",
        }}
      />

      {/* ── Bottom fade to next section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #0E0905 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up">
          <div className="divider-gold w-12" />
          <p className="eyebrow">Downtown Greer, South Carolina</p>
          <div className="divider-gold w-12" />
        </div>

        {/* Main Heading */}
        <h1
          className="font-bold leading-none mb-5 animate-fade-in-up animate-delay-100"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(3.5rem, 12vw, 7.5rem)",
            color: "#F6EFE0",
            textShadow: "0 2px 40px rgba(0,0,0,0.6)",
          }}
        >
          The{" "}
          <span className="text-gold-gradient">Mason Jar</span>
        </h1>

        {/* Sub-heading */}
        <p
          className="text-lg md:text-2xl font-light tracking-[0.22em] uppercase mb-5 animate-fade-in-up animate-delay-200"
          style={{ color: "rgba(216,155,60,0.7)", letterSpacing: "0.2em" }}
        >
          Bar &amp; Grill
        </p>

        {/* Divider */}
        <div className="separator max-w-xs mx-auto mb-7 animate-fade-in-up animate-delay-200">
          <span style={{ color: "rgba(216,155,60,0.4)", fontSize: "0.5rem" }}>◆</span>
        </div>

        <p
          className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up animate-delay-300"
          style={{ color: "#C8BAA8", textShadow: "0 1px 12px rgba(0,0,0,0.8)" }}
        >
          Great food. Cold drinks. Live events. Greer's neighborhood bar for a
          good time — every night of the week.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animate-delay-400">
          <Link
            href="/menu"
            className="btn-gold inline-flex items-center justify-center gap-2 px-9 py-4 text-base rounded-xl w-full sm:w-auto"
          >
            View Our Menu
          </Link>
          <a
            href={SITE_CONFIG.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center justify-center gap-2 px-9 py-4 text-base font-semibold rounded-xl w-full sm:w-auto"
          >
            Get Directions
          </a>
        </div>

        {/* NAP strip */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up animate-delay-500"
          style={{ color: "#8A7A6A" }}
        >
          <a
            href={SITE_CONFIG.phone.href}
            className="nap-link"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {SITE_CONFIG.phone.display}
          </a>
          <span style={{ color: "#5A4A3A" }}>·</span>
          <span className="nap-link" style={{ cursor: "default" }}>
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            202 Trade St, Greer, SC
          </span>
          <span style={{ color: "#5A4A3A" }}>·</span>
          <span className="nap-link" style={{ cursor: "default" }}>
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Open Daily 11 AM
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          style={{ color: "rgba(216,155,60,0.45)" }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
