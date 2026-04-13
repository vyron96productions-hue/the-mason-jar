const REASONS = [
  {
    icon: "🏙️",
    title: "Downtown Location",
    body: "Right in the heart of Trade Street — walkable, easy to find, and perfectly positioned for a night out in Greer's growing downtown.",
  },
  {
    icon: "🍽️",
    title: "Real Food, Real Fast",
    body: "No frozen shortcuts. Our kitchen cooks from scratch — burgers, ribs, wraps, wings, and more. You taste the difference.",
  },
  {
    icon: "🍻",
    title: "Cold Beer & Great Cocktails",
    body: "Draft taps, bottled and canned options, and house cocktails that actually hit. Plus daily drink specials that make any night worth it.",
  },
  {
    icon: "🎶",
    title: "The Energy Is Different Here",
    body: "Karaoke Fridays and Saturdays. Live music. Game day watch parties. Ladies night. There's always something going on.",
  },
  {
    icon: "🤝",
    title: "A Local Favorite for a Reason",
    body: "We're not a chain. We're a neighborhood bar and grill — the kind of place where the staff knows your name and your order.",
  },
  {
    icon: "🎯",
    title: "Something for Everyone",
    body: "Whether you're grabbing a quick dinner, celebrating something, or just looking for a place to land — The Mason Jar fits the night.",
  },
];

export function WhyLocals() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #221208 0%, #180D06 35%, #1E1107 70%, #150B05 100%)",
      }}
      aria-labelledby="why-locals-heading"
    >
      {/* Center ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 50% 50%, rgba(216,155,60,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Why Greer Comes Back</p>
          <h2
            id="why-locals-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#F6EFE0",
            }}
          >
            The Mason Jar{" "}
            <span className="text-gold-gradient">Difference</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#7A6A5A" }}>
            There are places to eat and drink in Greer. Then there's The Mason Jar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="card-lift p-7 rounded-2xl"
              style={{
                background:
                  "linear-gradient(145deg, rgba(216,155,60,0.05) 0%, rgba(26,14,6,0.75) 100%)",
                border: "1px solid rgba(216,155,60,0.14)",
                boxShadow:
                  "0 6px 24px rgba(0,0,0,0.38), inset 0 1px 0 rgba(216,155,60,0.06)",
              }}
            >
              <div className="text-3xl mb-4" aria-hidden="true">{reason.icon}</div>
              <h3
                className="text-lg font-bold mb-3"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "#F6EFE0",
                }}
              >
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#7A6A5A" }}>
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
