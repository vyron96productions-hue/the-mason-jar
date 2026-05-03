import type { Metadata } from "next";
import { MENU_CATEGORIES } from "@/lib/menu-data";
import { MenuSection } from "@/components/menu/MenuSection";
import { BarGuardBadge } from "@/components/ui/BarGuardBadge";
import { SITE_CONFIG } from "@/lib/site-config";
import { TrackedLink } from "@/components/ui/TrackedLink";

export const metadata: Metadata = {
  title: "Greer SC Bar & Grill Menu",
  description:
    "View the full menu at The Mason Jar in Greer, SC. Hand-pressed burgers, slow-smoked ribs, chicken sandwiches, wraps, craft cocktails, and daily specials.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/menu`,
  },
  openGraph: {
    title: "Greer SC Bar & Grill Menu | The Mason Jar",
    description:
      "Burgers, wings, ribs, wraps, salads, cocktails, and daily specials at The Mason Jar on Trade Street in downtown Greer, South Carolina.",
    images: [
      {
        url: "/images/food/burger-and-beer.jpg",
        width: 1200,
        height: 800,
        alt: "Burger and beer at The Mason Jar — Greer SC bar and grill menu",
      },
    ],
  },
};

const CATEGORY_IDS = MENU_CATEGORIES.map((c) => ({ id: c.id, label: c.label }));

export default function MenuPage() {
  return (
    <div style={{ backgroundColor: "#0E0905", minHeight: "100vh" }}>
      {/* Page Header */}
      <div
        className="pt-32 pb-12 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #0f0b06 0%, #1a1208 100%)",
        }}
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
            The Mason Jar
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#F6EFE0",
            }}
          >
            Greer SC Bar &amp; Grill Menu
          </h1>
          <p className="text-base md:text-lg" style={{ color: "#8A7A6A" }}>
            Hand-pressed burgers, slow-smoked ribs, craft cocktails, and more. Made fresh, every order.
          </p>
          <p className="mt-2 text-sm" style={{ color: "#3A2210" }}>
            Prices subject to change. Ask your server about daily specials.
          </p>
          <div className="mt-4 flex justify-center">
            <BarGuardBadge label="Updated with real-time inventory insights by BarGuard" />
          </div>
        </div>
      </div>

      {/* Jump Nav */}
      <nav
        className="sticky top-16 md:top-20 z-40 py-3 overflow-x-auto"
        style={{
          backgroundColor: "rgba(26,18,8,0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(193,127,36,0.15)",
        }}
        aria-label="Menu categories"
      >
        <div className="max-w-7xl mx-auto px-4 flex gap-2 min-w-max">
          {CATEGORY_IDS.map((cat) => (
            <TrackedLink
              key={cat.id}
              href={`#${cat.id}`}
              className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors"
              style={{ color: "#8A7A6A" }}
              gtmEvent={{ event: "menu_category_click", category: cat.label }}
            >
              {cat.label}
            </TrackedLink>
          ))}
        </div>
      </nav>

      {/* Menu Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {MENU_CATEGORIES.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}

        {/* Footer note */}
        <div
          className="mt-8 p-6 rounded-2xl text-center"
          style={{
            backgroundColor: "rgba(61,43,31,0.3)",
            border: "1px solid rgba(193,127,36,0.1)",
          }}
        >
          <p className="text-sm mb-2" style={{ color: "#8A7A6A" }}>
            Menu items and prices subject to change. Please inform your server of any allergies.
          </p>
          <a
            href={SITE_CONFIG.phone.href}
            className="text-sm font-semibold"
            style={{ color: "#D89B3C" }}
          >
            Questions? Call us at {SITE_CONFIG.phone.display}
          </a>
          <div className="mt-4 pt-4 flex justify-center" style={{ borderTop: "1px solid rgba(216,155,60,0.08)" }}>
            <BarGuardBadge label="Inventory & performance powered by BarGuard" />
          </div>
        </div>
      </div>
    </div>
  );
}
