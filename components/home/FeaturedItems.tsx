import Link from "next/link";

const FEATURED = [
  {
    category: "Fan Favorite",
    name: "The Mason Burger",
    description:
      "Half-pound hand-pressed patty, cheddar, lettuce, tomato, red onion, and our signature Mason Jar sauce on a toasted brioche bun. Served with seasoned fries.",
    price: "$13",
    // Placeholder: swap with real food photo
    // Recommended: public/images/food/mason-burger.jpg
    imagePlaceholder: "🍔",
    color: "#c17f24",
  },
  {
    category: "House Cocktail",
    name: "Mason Jar Mule",
    description:
      "House vodka, ginger beer, and fresh-squeezed lime juice. Served cold in a copper mug. This one goes down easy — and comes back around for seconds.",
    price: "$9",
    // Placeholder: public/images/drinks/mason-jar-mule.jpg
    imagePlaceholder: "🍹",
    color: "#e8a842",
  },
  {
    category: "Friday Favorite",
    name: "Half-Rack Baby Back Ribs",
    description:
      "Slow-smoked, fall-off-the-bone pork ribs served with your choice of two sides and cornbread. The kind of plate you plan your Friday around.",
    price: "$22",
    // Placeholder: public/images/food/ribs.jpg
    imagePlaceholder: "🍖",
    color: "#9a6219",
  },
];

export function FeaturedItems() {
  return (
    <section
      className="section-pad"
      style={{ backgroundColor: "#3d2b1f" }}
      aria-labelledby="featured-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#c17f24" }}
          >
            On the Menu
          </p>
          <h2
            id="featured-heading"
            className="text-4xl md:text-5xl font-bold"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#f5efe0",
            }}
          >
            Food &amp; Drinks Worth Coming Back For
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "#8a7a6a" }}>
            From hand-pressed burgers to slow-smoked ribs and craft cocktails — the Mason Jar menu is built for people who actually love to eat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {FEATURED.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                backgroundColor: "rgba(26,18,8,0.6)",
                border: "1px solid rgba(193,127,36,0.15)",
              }}
            >
              {/* Image Placeholder */}
              <div
                className="h-48 flex items-center justify-center text-6xl"
                style={{
                  backgroundColor: "rgba(193,127,36,0.08)",
                  borderBottom: "1px solid rgba(193,127,36,0.1)",
                }}
                aria-hidden="true"
              >
                {item.imagePlaceholder}
                {/* Swap above with:
                <Image
                  src="/images/food/mason-burger.jpg"
                  alt="The Mason Burger — signature half-pound burger at The Mason Jar in Greer SC"
                  fill
                  className="object-cover"
                />
                */}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <span
                  className="text-xs font-semibold tracking-widest uppercase mb-2 block"
                  style={{ color: item.color }}
                >
                  {item.category}
                </span>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "#f5efe0",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1 mb-4"
                  style={{ color: "#8a7a6a" }}
                >
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "#c17f24" }}
                  >
                    {item.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-colors"
            style={{ backgroundColor: "#c17f24", color: "#1a1208" }}
          >
            View Full Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
