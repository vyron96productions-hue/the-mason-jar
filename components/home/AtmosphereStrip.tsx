export function AtmosphereStrip() {
  const stats = [
    { value: "7", label: "Nights a Week" },
    { value: "40+", label: "Menu Items" },
    { value: "2 AM", label: "Fri & Sat Close" },
    { value: "#1", label: "Spot in Downtown Greer" },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #2A1608 0%, #1A0D06 30%, #120A04 60%, #1A0D06 100%)",
      }}
      aria-label="The Mason Jar at a glance"
    >
      {/* Large center glow */}
      <div
        className="absolute inset-0 pointer-events-none animate-glow-pulse"
        style={{
          background:
            "radial-gradient(ellipse 900px 600px at 50% 50%, rgba(216,155,60,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center relative"
            >
              {/* Subtle card backdrop */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: "rgba(216,155,60,0.03)",
                  border: "1px solid rgba(216,155,60,0.08)",
                }}
              />
              <div className="relative py-6 px-3">
                <div className="stat-number mb-1">{stat.value}</div>
                <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#5A4A3A" }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic callout block */}
        <div
          className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(145deg, rgba(216,155,60,0.10) 0%, rgba(20,12,5,0.9) 50%, rgba(216,155,60,0.06) 100%)",
            border: "1px solid rgba(216,155,60,0.25)",
            boxShadow:
              "0 0 0 1px rgba(216,155,60,0.06), 0 24px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(216,155,60,0.12)",
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 500px 200px at 50% 0%, rgba(216,155,60,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <div className="text-5xl mb-5" aria-hidden="true">🎤</div>
            <p className="eyebrow mb-4">Friday &amp; Saturday Nights</p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 max-w-2xl mx-auto leading-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#F6EFE0",
              }}
            >
              Where Downtown Greer{" "}
              <span className="text-gold-gradient">Comes Alive</span>
            </h2>

            <div className="divider-gold max-w-xs mx-auto mb-6" />

            <p
              className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "#8A7A6A" }}
            >
              Karaoke nights that pack the house. A bar scene that brings out the
              neighborhood. Great music, cold drinks, and a crowd that knows how
              to have a good time. The Mason Jar isn't just a restaurant — it's
              the place you end up when the night is just getting started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
