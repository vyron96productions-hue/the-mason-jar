import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";
import { TrackedLink } from "@/components/ui/TrackedLink";

export const metadata: Metadata = {
  title: "Downtown Greer Neighborhood Bar",
  description:
    "Your neighborhood bar and grill on Trade Street in downtown Greer, SC — great food, cold drinks, and live entertainment every night of the week.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    title: "Downtown Greer Neighborhood Bar | The Mason Jar",
    description:
      "Learn the story of The Mason Jar — Greer's neighborhood bar and grill on Trade Street. Great food, cold drinks, and a community that keeps coming back.",
  },
};

const VALUES = [
  {
    icon: "🤝",
    title: "Community First",
    body: "We're a Greer business, through and through. We support local, we celebrate local, and we love seeing familiar faces walk through our door.",
  },
  {
    icon: "🍔",
    title: "Real Food",
    body: "No shortcuts. We cook from scratch — because you deserve a meal that actually tastes like someone made it with care.",
  },
  {
    icon: "🎶",
    title: "Good Vibes Only",
    body: "Whether it's karaoke night or a quiet Wednesday dinner, The Mason Jar always feels like the right place to be.",
  },
  {
    icon: "📍",
    title: "Proudly Downtown",
    body: "Trade Street is home. We love this block, this city, and the people who make Greer what it is.",
  },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#0E0905", minHeight: "100vh" }}>
      {/* Header */}
      <div
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0f0b06 0%, #1a1208 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(193,127,36,0.1) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#D89B3C" }}
          >
            Our Story
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#F6EFE0",
            }}
          >
            Downtown Greer<br />
            <span style={{ color: "#D89B3C" }}>Neighborhood Bar &amp; Grill</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#8A7A6A" }}>
            The Mason Jar isn't just a place to eat and drink. It's a place to belong. Right here on Trade Street in the heart of downtown Greer, South Carolina.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Image Placeholder */}
          {/* Replace with: public/images/gallery/interior.jpg */}
          <div
            className="aspect-square md:aspect-[4/3] rounded-3xl flex items-center justify-center"
            style={{
              backgroundColor: "rgba(61,43,31,0.4)",
              border: "1px solid rgba(193,127,36,0.15)",
            }}
            role="img"
            aria-label="The interior of The Mason Jar bar and grill in downtown Greer, SC"
          >
            <div className="text-center p-8">
              <div className="text-5xl mb-4" aria-hidden="true">🍺</div>
              <p className="text-sm" style={{ color: "#3A2210" }}>
                Interior photo coming soon
              </p>
              <p className="text-xs mt-1" style={{ color: "#2C1808" }}>
                Replace: public/images/gallery/interior.jpg
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#F6EFE0",
              }}
            >
              Born in Downtown Greer
            </h2>
            <div className="space-y-4" style={{ color: "#8A7A6A" }}>
              <p className="text-base leading-relaxed">
                The Mason Jar was built for Greer — and built on Trade Street for good reason. We sit in the middle of one of Upstate South Carolina's most exciting and growing downtowns, and we like to think we've been part of making it that way.
              </p>
              <p className="text-base leading-relaxed">
                From the beginning, the vision was simple: a bar and grill that feels like home. A place where the food is real, the drinks are cold, and the energy makes you want to stay a little longer than you planned.
              </p>
              <p className="text-base leading-relaxed">
                We've built our reputation one plate at a time — hand-pressed burgers, slow-smoked ribs, crispy tenders, and craft cocktails made the right way. And when the kitchen closes and the karaoke mic turns on? That's when The Mason Jar really comes alive.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#F6EFE0",
              }}
            >
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: "rgba(61,43,31,0.3)",
                  border: "1px solid rgba(193,127,36,0.1)",
                }}
              >
                <div className="text-3xl mb-4" aria-hidden="true">{val.icon}</div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "#F6EFE0",
                  }}
                >
                  {val.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8A7A6A" }}>
                  {val.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div
          className="p-8 md:p-12 rounded-3xl text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(193,127,36,0.12) 0%, rgba(193,127,36,0.04) 100%)",
            border: "1px solid rgba(193,127,36,0.25)",
          }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#F6EFE0",
            }}
          >
            Come Find Us
          </h2>
          <p className="text-base mb-2" style={{ color: "#8A7A6A" }}>
            202 Trade St, Greer, SC 29651
          </p>
          <p className="text-base mb-3" style={{ color: "#8A7A6A" }}>
            Open daily starting at 11 AM · Friday & Saturday until 2 AM
          </p>
          <p className="text-sm mb-8" style={{ color: "#8A7A6A" }}>
            Looking for a great{" "}
            <TrackedLink
              href="/downtown-greer-bar-and-grill"
              style={{ color: "#D89B3C" }}
              gtmEvent={{ event: "internal_link_click", destination: "/downtown-greer-bar-and-grill" }}
            >
              downtown Greer bar and grill
            </TrackedLink>
            ? You found it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <TrackedLink
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base transition-colors"
              style={{ backgroundColor: "#D89B3C", color: "#0E0905" }}
              gtmEvent={{ event: "cta_click", cta_label: "Get Directions & Hours", destination: "/contact" }}
            >
              Get Directions & Hours
            </TrackedLink>
            <a
              href={SITE_CONFIG.phone.href}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base border-2 transition-colors"
              style={{ borderColor: "rgba(193,127,36,0.5)", color: "#F6EFE0" }}
            >
              {SITE_CONFIG.phone.display}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
