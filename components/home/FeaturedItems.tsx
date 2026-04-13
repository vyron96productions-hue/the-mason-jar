import Link from "next/link";

const FEATURED = [
  {
    category: "Fan Favorite",
    name: "The Mason Burger",
    description:
      "Half-pound hand-pressed patty, cheddar, lettuce, tomato, red onion, and our signature Mason Jar sauce on a toasted brioche bun. Served with seasoned fries.",
    price: "$13",
    imagePlaceholder: "🍔",
    accentColor: "#D89B3C",
    glowColor: "rgba(216,155,60,0.12)",
  },
  {
    category: "House Cocktail",
    name: "Mason Jar Mule",
    description:
      "House vodka, ginger beer, and fresh-squeezed lime juice. Served cold in a copper mug. This one goes down easy — and comes back around for seconds.",
    price: "$9",
    imagePlaceholder: "🍹",
    accentColor: "#F2B857",
    glowColor: "rgba(242,184,87,0.10)",
  },
  {
    category: "Friday Favorite",
    name: "Half-Rack Baby Back Ribs",
    description:
      "Slow-smoked, fall-off-the-bone pork ribs served with your choice of two sides and cornbread. The kind of plate you plan your Friday around.",
    price: "$22",
    imagePlaceholder: "🍖",
    accentColor: "#D89B3C",
    glowColor: "rgba(180,80,20,0.12)",
  },
];

export function FeaturedItems() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #180D06 0%, #2A1608 35%, #341C0A 65%, #2A1608 100%)",
      }}
      aria-labelledby="featured-heading"
    >
      {/* Top ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
        style={{
          height: "300px",
          background:
            "radial-gradient(ellipse 800px 300px at 50% 0%, rgba(216,155,60,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">On the Menu</p>
          <h2
            id="featured-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#F6EFE0",
            }}
          >
            Food &amp; Drinks Worth
            <br />
            <span className="text-gold-gradient">Coming Back For</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#7A6A5A" }}>
            From hand-pressed burgers to slow-smoked ribs and craft cocktails —
            the Mason Jar menu is built for people who actually love to eat.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-14">
          {FEATURED.map((item) => (
            <article
              key={item.name}
              className="card-lift rounded-2xl overflow-hidden flex flex-col"
              style={{
                background:
                  "linear-gradient(160deg, rgba(216,155,60,0.05) 0%, rgba(14,9,5,0.85) 60%)",
                border: "1px solid rgba(216,155,60,0.18)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(216,155,60,0.08)",
              }}
            >
              {/* Image area */}
              <div
                className="h-52 flex items-center justify-center text-6xl relative overflow-hidden"
                style={{
                  background: `radial-gradient(ellipse at center, ${item.glowColor} 0%, rgba(30,15,5,0.8) 70%)`,
                  borderBottom: "1px solid rgba(216,155,60,0.12)",
                }}
                aria-hidden="true"
              >
                {item.imagePlaceholder}
                {/* swap with <Image> when photos available */}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <span
                  className="text-xs font-bold tracking-widest uppercase mb-2 block"
                  style={{ color: item.accentColor }}
                >
                  {item.category}
                </span>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "#F6EFE0",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1 mb-5"
                  style={{ color: "#7A6A5A" }}
                >
                  {item.description}
                </p>
                <div
                  className="pt-4"
                  style={{ borderTop: "1px solid rgba(216,155,60,0.1)" }}
                >
                  <span className="text-2xl font-bold text-gold-gradient">
                    {item.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/menu"
            className="btn-gold inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-semibold text-base"
          >
            View Full Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
