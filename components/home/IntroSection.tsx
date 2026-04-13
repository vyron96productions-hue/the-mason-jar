import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";

const HIGHLIGHTS = [
  {
    icon: "🍔",
    label: "Built-From-Scratch Food",
    description: "Burgers, wings, ribs, and more — made fresh, every order.",
  },
  {
    icon: "🍺",
    label: "Cold Drinks All Night",
    description: "Draft beer, craft cocktails, and daily drink specials.",
  },
  {
    icon: "🎤",
    label: "Live Events & Karaoke",
    description: "Friday and Saturday karaoke, live music, and themed nights.",
  },
  {
    icon: "📍",
    label: "Heart of Downtown Greer",
    description: "Right on Trade St — easy to find, impossible to forget.",
  },
];

export function IntroSection() {
  return (
    <section className="section-pad" style={{ backgroundColor: "#1a1208" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#c17f24" }}
            >
              Who We Are
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#f5efe0",
              }}
            >
              Greer's Favorite<br />
              <span style={{ color: "#c17f24" }}>Bar & Grill</span>
            </h2>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: "#e8dcc8" }}
            >
              Tucked into the heart of downtown Greer, The Mason Jar has been
              a gathering place for locals who know where to find a great meal,
              a cold drink, and a good time. We're the kind of place you come
              to unwind, catch up with friends, and stay longer than you planned.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#8a7a6a" }}
            >
              Whether you're here for a weeknight bite, a Friday night out, or
              our legendary karaoke sessions — The Mason Jar is your spot. Come
              as you are. Stay as long as you like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-base transition-colors"
                style={{ backgroundColor: "#c17f24", color: "#1a1208" }}
              >
                Our Story
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-base border-2 transition-colors"
                style={{
                  borderColor: "rgba(193,127,36,0.4)",
                  color: "#f5efe0",
                }}
              >
                See the Menu
              </Link>
            </div>
          </div>

          {/* Right — Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: "rgba(61,43,31,0.4)",
                  border: "1px solid rgba(193,127,36,0.15)",
                }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "#f5efe0" }}
                >
                  {item.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8a7a6a" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
