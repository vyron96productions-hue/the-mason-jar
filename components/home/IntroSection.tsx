import Link from "next/link";

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
    <section
      className="section-pad relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0E0905 0%, #180D06 40%, #221208 80%, #180D06 100%)",
      }}
    >
      {/* Ambient glow — right side */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(216,155,60,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <p className="eyebrow mb-4">Who We Are</p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#F6EFE0",
              }}
            >
              Greer's Favorite<br />
              <span className="text-gold-gradient">Bar &amp; Grill</span>
            </h2>

            {/* Left accent bar */}
            <div
              className="w-12 h-0.5 mb-6 rounded-full"
              style={{ background: "linear-gradient(90deg, #D89B3C, transparent)" }}
            />

            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: "#D9CCBA" }}
            >
              Tucked into the heart of downtown Greer, The Mason Jar has been
              a gathering place for locals who know where to find a great meal,
              a cold drink, and a good time. We're the kind of place you come
              to unwind, catch up with friends, and stay longer than you planned.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#7A6A5A" }}
            >
              Whether you're here for a weeknight bite, a Friday night out, or
              our legendary karaoke sessions — The Mason Jar is your spot.
              Come as you are. Stay as long as you like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="btn-gold inline-flex items-center justify-center px-7 py-3 rounded-xl text-base"
              >
                Our Story
              </Link>
              <Link
                href="/menu"
                className="btn-outline-gold inline-flex items-center justify-center px-7 py-3 rounded-xl font-semibold text-base"
              >
                See the Menu
              </Link>
            </div>
          </div>

          {/* Right — Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="card-lift p-6 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(216,155,60,0.06) 0%, rgba(30,18,8,0.7) 100%)",
                  border: "1px solid rgba(216,155,60,0.18)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(216,155,60,0.08)",
                }}
              >
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "#F6EFE0" }}
                >
                  {item.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7A6A5A" }}>
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
