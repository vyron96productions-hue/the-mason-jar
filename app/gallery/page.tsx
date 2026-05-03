import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Greer SC Food & Nightlife Photos",
  description:
    "See the atmosphere at The Mason Jar in Greer, SC. Food, drinks, karaoke nights, and the crowd that makes downtown Greer come alive every week.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/gallery`,
  },
  openGraph: {
    title: "Greer SC Food & Nightlife Photos | The Mason Jar",
    description:
      "Photos of the food, drinks, and nightlife at The Mason Jar — your downtown Greer bar and grill on Trade Street.",
    images: [
      {
        url: "/images/food/burger-and-beer.jpg",
        width: 1200,
        height: 800,
        alt: "Food and drinks at The Mason Jar — downtown Greer SC",
      },
    ],
  },
};

// Real food photos
const FOOD_IMAGES = [
  { src: "/images/food/Burger.jpg", alt: "Burger at The Mason Jar bar and grill in Greer SC", span: "normal" as const },
  { src: "/images/food/burger-and-beer.jpg", alt: "Burger and beer combo at The Mason Jar in downtown Greer SC", span: "wide" as const },
  { src: "/images/food/Sliders.jpg", alt: "Smash bite sliders at The Mason Jar Greer SC" },
  { src: "/images/food/Tacos.jpg", alt: "Tacos at The Mason Jar — Taco Tuesday special in Greer SC" },
  { src: "/images/food/quesadillas.jpg", alt: "Quesadillas at The Mason Jar bar and grill" },
  { src: "/images/food/grilled-cheese.jpg", alt: "Grilled cheese at The Mason Jar in downtown Greer" },
  { src: "/images/food/Salad.jpg", alt: "Fresh salad at The Mason Jar restaurant Greer SC" },
  { src: "/images/food/salad2.jpg", alt: "House salad at The Mason Jar bar and grill" },
  { src: "/images/food/Fries.jpg", alt: "Seasoned fries at The Mason Jar in Greer SC" },
  { src: "/images/food/Tatertots.jpg", alt: "Tater tots at The Mason Jar bar and grill downtown Greer" },
];

// Events / atmosphere photos
const ATMOSPHERE_IMAGES = [
  { src: "/images/events/karaoke.jpg", alt: "Karaoke night at The Mason Jar in downtown Greer SC", span: "wide" as const },
  { src: "/images/events/taco-tuesday.png", alt: "Taco Tuesday at The Mason Jar bar and grill Greer SC" },
];

// Placeholder for drinks — swap when photos are available
const DRINK_IMAGES: { src: string; alt: string; span?: "normal" | "wide" | "tall" }[] = [];

export default function GalleryPage() {
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
            See It for Yourself
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#F6EFE0",
            }}
          >
            Food &amp; Nightlife<br />
            <span style={{ color: "#D89B3C" }}>Photos in Greer, SC</span>
          </h1>
          <p className="text-base md:text-lg" style={{ color: "#8A7A6A" }}>
            Food, drinks, and the kind of energy you have to see to believe. This is what downtown Greer looks like on a Friday night.
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
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
              color: "#F6EFE0",
            }}
          >
            Follow for the Latest
          </h3>
          <p className="text-sm mb-6" style={{ color: "#8A7A6A" }}>
            We post photos, event updates, and daily specials on Facebook and Instagram. Follow us to stay in the loop.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <TrackedLink
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              style={{ backgroundColor: "#D89B3C", color: "#0E0905" }}
              gtmEvent={{ event: "social_click", platform: "facebook", click_source: "gallery" }}
            >
              Facebook — @themasonjargreer
            </TrackedLink>
            <TrackedLink
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-colors"
              style={{ borderColor: "rgba(193,127,36,0.4)", color: "#F6EFE0" }}
              gtmEvent={{ event: "social_click", platform: "instagram", click_source: "gallery" }}
            >
              Instagram — @tmjgreer
            </TrackedLink>
          </div>
        </div>
      </div>
    </div>
  );
}
