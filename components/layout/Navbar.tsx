"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/site-config";

const NAV_LINKS = [
  { label: "Menu", href: "/menu" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navBg = scrolled || menuOpen
    ? "bg-brown-deep/98 backdrop-blur-sm shadow-lg shadow-black/30"
    : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      style={scrolled || menuOpen ? { backgroundColor: "rgba(26,18,8,0.98)" } : {}}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-amber-light transition-colors"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#c17f24",
              }}
            >
              The Mason Jar
            </span>
            <span className="text-xs tracking-widest uppercase" style={{ color: "#8a7a6a" }}>
              Bar &amp; Grill · Greer, SC
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    active
                      ? "text-amber-light bg-white/5"
                      : "text-cream hover:text-amber-light hover:bg-white/5"
                  }`}
                  style={{
                    color: active ? "#e8a842" : "#f5efe0",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SITE_CONFIG.phone.href}
              className="text-sm font-semibold px-4 py-2 rounded-lg border-2 transition-colors"
              style={{
                borderColor: "#c17f24",
                color: "#c17f24",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#c17f24";
                (e.currentTarget as HTMLAnchorElement).style.color = "#1a1208";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#c17f24";
              }}
            >
              {SITE_CONFIG.phone.display}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#f5efe0" }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: "rgba(193,127,36,0.2)" }}
          >
            <div className="flex flex-col gap-1 mb-4">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-base font-medium rounded-lg transition-colors"
                    style={{
                      color: active ? "#e8a842" : "#f5efe0",
                      backgroundColor: active ? "rgba(255,255,255,0.05)" : "transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <a
              href={SITE_CONFIG.phone.href}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-base"
              style={{
                backgroundColor: "#c17f24",
                color: "#1a1208",
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us — {SITE_CONFIG.phone.display}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
