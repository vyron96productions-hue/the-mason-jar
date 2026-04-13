import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Gallery — Food, Drinks & Nightlife Photos",
  description:
    "See the atmosphere at The Mason Jar in Greer, SC. Food, drinks, karaoke nights, and the crowd that makes downtown Greer come alive every week.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/gallery`,
  },
  openGraph: {
    title: "Gallery | The Mason Jar Bar & Grill – Greer, SC",
    description:
      "Photos of the food, drinks, and nightlife at The Mason Jar — your downtown Greer bar and grill on Trade Street.",
  },
};

// Photo data — replace src paths with real images in public/images/gallery/
// Recommended image sizes: 800×800 for square, 1600×800 for wide
const FOOD_IMAGES = [
  { src: "/images/food/mason-burger.jpg", alt: "The Mason Burger — signature half-pound burger at The Mason Jar Greer SC", span: "wide" as const },
  { src: "/images/food/ribs.jpg", alt: "Slow-smoked baby back ribs at The Mason Jar bar and grill" },
  { src: "/images/food/wings.jpg", alt: "Crispy chicken wings at The Mason Jar in downtown Greer SC" },
  { src: "/images/food/chicken-sandwich.jpg", alt: "Mason Jar crispy chicken sandwich" },
  { src: "/images/food/nachos.jpg", alt: "Loaded nachos at The Mason Jar bar and grill in Greer SC" },
  { src: "/images/food/fries.jpg", alt: "Seasoned fries at The Mason Jar" },
];

const DRINK_IMAGES = [
  { src: "/images/drinks/mason-jar-mule.jpg", alt: "Mason Jar Mule cocktail in a copper mug", span: "normal" as const },
  { src: "/images/drinks/draft-beer.jpg", alt: "Cold draft beer at The Mason Jar in Greer SC" },
  { src: "/images/drinks/cocktails.jpg", alt: "Craft cocktails at The Mason Jar bar in downtown Greer", span: "wide" as const },
  { src: "/images/drinks/peach-lemonade.jpg", alt: "Southern Peach Lemonade cocktail at The Mason Jar" },
];

const ATMOSPHERE_IMAGES = [
  { src: "/images/gallery/karaoke-night.jpg", alt: "Karaoke night at The Mason Jar in downtown Greer SC", span: "wide" as const },
  { src: "/images/gallery/crowd.jpg", alt: "Friday night crowd at The Mason Jar bar and grill Greer SC" },
  { src: "/images/gallery/interior.jpg", alt: "Interior of The Mason Jar bar and grill on Trade Street Greer" },
  { src: "/images/gallery/bar.jpg", alt: "The bar at The Mason Jar — beer taps and cocktails in downtown Greer" },
  { src: "/images/gallery/exterior.jpg", alt: "Exterior of The Mason Jar at 202 Trade St, Greer SC", span: "normal" as const },
  { src: "/images/gallery/nightlife.jpg", alt: "Nightlife and entertainment at The Mason Jar Greer South Carolina" },
];

export default function GalleryPage() {
  return (
    <div style={{ backgroundColor: "#1a1208", minHeight: "100vh" }}>
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
            style={{ color: "#c17f24" }}
          >
            See It for Yourself
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#f5efe0",
            }}
          >
            The Mason Jar<br />
            <span style={{ color: "#c17f24" }}>Gallery</span>
          </h1>
          <p className="text-base md:text-lg" style={{ color: "#8a7a6a" }}>
            Food, drinks, and the kind of energy you have to see to believe. This is what downtown Greer looks like on a Friday night.
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Note about placeholder images */}
        <div
          className="mb-12 p-4 rounded-xl text-center text-sm"
          style={{
            backgroundColor: "rgba(193,127,36,0.08)",
            border: "1px solid rgba(193,127,36,0.2)",
            color: "#8a7a6a",
          }}
        >
          Photo gallery coming soon. Add real photos to{" "}
          <code className="text-xs px-1 py-0.5 rounded" style={{ backgroundColor: "rgba(193,127,36,0.15)", color: "#c17f24" }}>
            public/images/
          </code>{" "}
          and update the src paths in{" "}
          <code className="text-xs px-1 py-0.5 rounded" style={{ backgroundColor: "rgba(193,127,36,0.15)", color: "#c17f24" }}>
            app/gallery/page.tsx
          </code>
        </div>

        <GalleryGrid images={FOOD_IMAGES} label="Food" />
        <GalleryGrid images={DRINK_IMAGES} label="Drinks" />
        <GalleryGrid images={ATMOSPHERE_IMAGES} label="Atmosphere & Nightlife" />

        {/* Social CTA */}
        <div
          className="mt-8 p-8 rounded-2xl text-center"
          style={{
            backgroundColor: "rgba(61,43,31,0.3)",
            border: "1px solid rgba(193,127,36,0.12)",
          }}
        >
          <h3
            className="text-2xl font-bold mb-3"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#f5efe0",
            }}
          >
            Follow for the Latest
          </h3>
          <p className="text-sm mb-6" style={{ color: "#8a7a6a" }}>
            We post photos, event updates, and daily specials on Facebook and Instagram. Follow us to stay in the loop.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              style={{ backgroundColor: "#c17f24", color: "#1a1208" }}
            >
              Facebook — @themasonjargreer
            </a>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-colors"
              style={{ borderColor: "rgba(193,127,36,0.4)", color: "#f5efe0" }}
            >
              Instagram — @tmjgreer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
