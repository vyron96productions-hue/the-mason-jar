export function AtmosphereStrip() {
  const stats = [
    { value: "7", label: "Nights a Week" },
    { value: "20+", label: "Menu Items" },
    { value: "2 AM", label: "Fri & Sat Close" },
    { value: "1", label: "Location in Downtown Greer" },
  ];

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: "#1a1208" }}
      aria-label="The Mason Jar at a glance"
    >
      {/* Amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(193,127,36,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  color: "#c17f24",
                }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "#8a7a6a" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Atmosphere quote / copy block */}
        <div
          className="rounded-3xl p-8 md:p-12 text-center"
          style={{
            backgroundColor: "rgba(61,43,31,0.3)",
            border: "1px solid rgba(193,127,36,0.15)",
          }}
        >
          {/* Image placeholder — nightlife/crowd shot */}
          {/* Replace with: public/images/events/karaoke-night.jpg */}
          <div className="text-5xl mb-6" aria-hidden="true">🎤</div>
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#c17f24" }}
          >
            Friday & Saturday Nights
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto leading-tight"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#f5efe0",
            }}
          >
            Where Downtown Greer Comes Alive
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#8a7a6a" }}
          >
            Karaoke nights that pack the house. A bar scene that brings out the
            neighborhood. Great music, cold drinks, and a crowd that knows how
            to have a good time. The Mason Jar isn't just a restaurant — it's
            the place you end up when the night is just getting started.
          </p>
        </div>
      </div>
    </section>
  );
}
