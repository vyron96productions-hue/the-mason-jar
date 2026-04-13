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
      className="section-pad"
      style={{ backgroundColor: "#1a1208" }}
      aria-labelledby="why-locals-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#c17f24" }}
          >
            Why Greer Comes Back
          </p>
          <h2
            id="why-locals-heading"
            className="text-4xl md:text-5xl font-bold"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#f5efe0",
            }}
          >
            The Mason Jar Difference
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "#8a7a6a" }}>
            There are places to eat and drink in Greer. Then there's The Mason Jar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "rgba(61,43,31,0.3)",
                border: "1px solid rgba(193,127,36,0.1)",
              }}
            >
              <div className="text-3xl mb-4" aria-hidden="true">{reason.icon}</div>
              <h3
                className="text-lg font-bold mb-3"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "#f5efe0",
                }}
              >
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#8a7a6a" }}>
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
